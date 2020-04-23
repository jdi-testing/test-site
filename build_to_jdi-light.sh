#!/bin/bash -v

# VARIABLES
# Feel free to edit if your directory names or branches differ
TEST_SITE_DIR=$(pwd)
ANGULAR_SITE_DIR="angular-site"
JDI_LIGHT_DIR="jdi-light"
JDI_LIGHT_BRANCH="gh-pages"
JDI_LIGHT_ANGULAR_DIR="angular"
FILES_TO_EXCLUDE=( "3rdpartylicenses.txt" "index.html" )
SERVER_PORT=8001

# Help
if [[ ($1 == "-h") || ("$1" == "--help") ]]
then
    echo "
    This bash script displays the angular-site in browser for visual verification
    If you are satisfied with result, the job proceeds and places the built site into '${JDI_LIGHT_DIR}/angular' folder
    The server is then started at localhost:${SERVER_PORT}

    Prerequisites (please read carefully):
       - Node.JS and npm are installed
       - Angular CLI is installed(npm install -g @angular/cli)
       - Python3 is installed
       - This sh script is executed in bash (zsh, git-bash and other shells should work)
       - This script is executed from test-site directory (${TEST_SITE_DIR})
       - jdi-light project is checked out into '../${JDI_LIGHT_DIR}', active branch is ${JDI_LIGHT_BRANCH}
       - One can modify some variables of this script if needed, see VARIABLES section

    The performed actions are following:
    0. Check that active branch of ${JDI_LIGHT_DIR} is ${JDI_LIGHT_BRANCH}
    1. Perform npm install in ${ANGULAR_SITE_DIR} if needed (if node_modules is not found)
    2. Start the contents of ${ANGULAR_SITE_DIR} by running ng serve
       - This results in opening of ${ANGULAR_SITE_DIR} in default browser
       - User is then prompted to confirm if result is acceptable,
         any input except Y would terminate the job at this point
    3. If user selects to proceed, the scripts performs ng build and places the built result into
    4. Server is started at specified port (python3 -m http.server ${SERVER_PORT})
    "
    exit 0
fi

# Start
# 0. Check the active branch of jdi-light
BRANCH=$(cd ../${JDI_LIGHT_DIR} && git symbolic-ref --short HEAD)
if [[ ${BRANCH} != ${JDI_LIGHT_BRANCH} ]]
then
    echo "Please change active branch of jdi-light to ${JDI_LIGHT_BRANCH}."
    echo "You can also specify different value for JDI_LIGHT_BRANCH variable if needed"
    exit 1
fi

# 1. Move to ./angular-site directory and perform npm install if needed
[ ! -d "${ANGULAR_SITE_DIR}" ] && echo "${ANGULAR_SITE_DIR} dir is not found" && exit 1
cd ${ANGULAR_SITE_DIR}

[ ! -d "node_modules" ] && echo "node_modules dir is not found - performing npm install" && npm install

# 2. Verify the result visually (output is muted in order not to cover the following echo output)
ng serve --open > /dev/null &
echo "Test site is going to be built and displayed in your browser in approximately 20 seconds"
echo "Press Y if you are satisfied with the result and would like to proceed with building the js files and placing them to ${JDI_LIGHT_DIR}/${JDI_LIGHT_ANGULAR_DIR}/"
echo "This action cannot be undone."

# 3. Build and place the files in required folder
#reads the y/n
read -n 1 -r keypressed

# We don't need running ng serve --open any more
pkill "ng serve --open"

if [[ $keypressed =~ ^[Yy]$ ]]
then
    # 3.1. Build to 'dist' folder
    echo "\nStarting the build job"
    ng build --prod

    # Now let's move to angular-light dir and make sure that we are in gh-pages branch
    echo "Changing working directory to ${JDI_LIGHT_DIR}, branch ${BRANCH}"
    cd ${TEST_SITE_DIR}
    cd ../${JDI_LIGHT_DIR}

    # we already know that we are in correct branch, so let's proceed:
    # 3.3. Copy the built app to ./angular directory of test-site
    echo "Copying the built angular site to ${JDI_LIGHT_DIR}/${JDI_LIGHT_ANGULAR_DIR}/"
    rm -r ./${JDI_LIGHT_ANGULAR_DIR}/*
    cp -R ${TEST_SITE_DIR}/angular-site/dist/my-app/. ./${JDI_LIGHT_ANGULAR_DIR}/

    # Removing files that are not needed in jd-light
    for f in ${FILES_TO_EXCLUDE[@]}
    do
        rm ./${JDI_LIGHT_ANGULAR_DIR}/$f
    done

    # 4. We can now run the site with python if needed
    echo "\nStarting server at port ${SERVER_PORT}"
    python3 -m http.server ${SERVER_PORT}
fi
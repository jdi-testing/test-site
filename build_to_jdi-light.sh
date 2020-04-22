#!/bin/bash -v

# VARIABLES
# Feel free to edit if your directory names or branches differ
TEST_SITE_DIR=$(pwd)
JDI_LIGHT_DIR="jdi-light"
JDI_LIGHT_BRANCH="gh-pages"
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
  "
  exit 0
fi

# Start
# 0. Check the active branch of jdi-light
BRANCH=$(cd ../${JDI_LIGHT_DIR} && git symbolic-ref --short HEAD)
if [[ ${BRANCH} != ${JDI_LIGHT_BRANCH} ]]
then
  echo "Please change active branch of jdi-light to ${JDI_LIGHT_BRANCH}."
  exit 1
fi

# 1. Move to ./angular-site directory and perform npm install if needed
[ ! -d "angular-site" ] && echo "angular-site dir is not found" && exit 1
cd angular-site

[ ! -d "node_modules" ] && echo "node_modules dir is not found - performing npm install" && npm install

# 2. Verify the result visually (output is muted in order not to cover the following echo output)
ng serve --open > /dev/null &
echo "Test site is going to be built and displayed in your browser in approximately 20 seconds"
echo "Press Y if you are satisfied with the result and would like to proceed with building the js files and placing them to ${JDI_LIGHT_DIR}."
echo "This action cannot be undone."

# 3. Build and place the files in required folder
#reads the y/n
read -n 1 -r keypressed

# We don't need running ng serve --open any mode
NG_SERVE_PID=$(ps aux | grep '[n]g serve --open' | awk '{print $2}')
echo "\nKilling previously started ng-serve at pid#${NG_SERVE_PID}"
(kill ${NG_SERVE_PID}) > /dev/null

if [[ $keypressed =~ ^[Yy]$ ]]
then
    # 3.1. Build to 'dist' folder
    echo "Starting the build job"
    ng build --prod

    # Now let's move to angular-light dir and make sure that we are in gh-pages branch
    echo "Changing working directory to ${TEST_SITE_DIR}, branch ${BRANCH}"
    cd ${TEST_SITE_DIR}
    cd ../${JDI_LIGHT_DIR}

    # we already know that we are in correct branch, so let's proceed:
    # 3.3. Copy the built app to ./angular directory of test-site
    echo "Copying the built angular site to ${JDI_LIGHT_DIR}/angular/"
    rm -r ./angular/*
    cp -R ${TEST_SITE_DIR}/angular-site/dist/my-app/. ./angular/

    rm ./angular/3rdpartylicenses.txt
    rm ./angular/index.html

    # 4. We can now run the site with python if needed
    echo "Starting server at port ${SERVER_PORT}"
    python3 -m http.server ${SERVER_PORT}
fi
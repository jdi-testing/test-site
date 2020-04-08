#!/bin/bash -v

# VARIABLES
# Feel free to edit if your directory names or branches differ
JDI_LIGHT_DIR="jdi-light"
TEST_SITE_DIR=$(pwd)
JDI_LIGHT_BRANCH="gh-pages"
SERVER_PORT=8001

echo "
# This bash script displays the angular-site in browser for visual verification
# If you are satisfied with result, the job proceeds and places the built site into '${JDI_LIGHT_DIR}/angular' folder
# The server is then started at localhost:${SERVER_PORT}
#
# Prerequisites (please read carefully):
#    - Node.JS and npm are installed
#    - Angular CLI is installed(npm install -g @angular/cli)
#    - Python3 is installed
#    - This sh script is executed in bash (zsh, git-bash and other shells should work)
#    - This script is executed from test-site directory (${TEST_SITE_DIR})
#    - jdi-light project is checked out into '../${JDI_LIGHT_DIR}', active branch is ${JDI_LIGHT_BRANCH}
#    - One can modify some variables of this script if needed, see VARIABLES section
"

echo "Do you wish to proceed (Y/N)?"
read REPLY
if [[ !(${REPLY} =~ ^[Yy]$) ]]
then
    echo "The script will now terminate with exit code 1"
    exit 0
fi


# Start
# 1. Move to ./angular-site directory and perform npm install
echo "Performing npm install"
cd angular-site
npm install

# 2. Verify the result visually
echo "Test site is going to be built and displayed in your browser in approximately 20 seconds"
echo "Once it happens please verify it visually, then return to this terminal and specify whether script should proceed"
ng serve --open &

# 3. Build and place the files in required folder
sleep 30
echo "Shall the script proceed with building the js files and placing them to ${JDI_LIGHT_DIR}/angular (Y/N)?"
echo "Pressing Y will overwrite the files in ${JDI_LIGHT_DIR}/angular. This action can't be undone.\n>"
read REPLY

if [[ ${REPLY} =~ ^[Yy]$ ]]
then
    # 3.1. Build to 'dist' folder
    echo "Starting the build job"
    ng build --prod
    # rename index.html so it does not conflict with target
    mv dist/my-app/index.html dist/my-app/index-backup.html

    # Now let's move to angular-light dir and make sure that we are in gh-pages branch
    echo "Changing working directory to ${TEST_SITE_DIR} and checking the active branch"
    cd ${TEST_SITE_DIR}
    cd ../${JDI_LIGHT_DIR}
    BRANCH=$(git symbolic-ref --short HEAD)
    echo "Branch is ${BRANCH}"
    # 3.2. Make sure that active branch of jdi-light is gh-pages (defined in JDI_LIGHT_BRANCH variable)
    if [[ ${BRANCH} -eq ${JDI_LIGHT_BRANCH} ]]
    then
        # great, we are in correct branch, let's proceed:
        # 3.3. Copy the built app to ./angular directory of test-site
        echo "Proceeding with branch ${BRANCH}"
        echo "Copying the built angular site to ${JDI_LIGHT_DIR}/angular/" 
        rm -r ./angular/*
        cp -R ${TEST_SITE_DIR}/angular-site/dist/my-app/. ./angular/

        # 4. We can now run the site with python if needed
        echo "Starting server at port ${SERVER_PORT}"
        python3 -m http.server ${SERVER_PORT} 
    else
        # We are in different branch, so script will terminate
        echo "Current branch of ${TEST_SITE_DIR} is ${BRANCH}. This script expects branch to be executed in ${JDI_LIGHT_BRANCH} only.
        echo "This script will terminate now.
    fi
else
    NG_SERVE_PID=$(ps aux | grep '[n]g serve --open' | awk '{print $2}')
    echo "Killing 'ng serve --open' process at PID ${NG_SERVE_PID}"
    kill ${NG_SERVE_PID}
    sleep 1
fi

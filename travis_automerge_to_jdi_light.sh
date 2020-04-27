#!/bin/bash -v
echo $SHELL

# VARIABLES
# Feel free to edit if your directory names or branches differ
TEST_SITE_DIR=$(pwd)
ANGULAR_SITE_DIR="angular-site"
JDI_LIGHT_GITHUB_REPO="jdi-testing/jdi-light"
JDI_LIGHT_BRANCH="gh-pages"
JDI_LIGHT_DIR="jdi-light"
JDI_LIGHT_ANGULAR_DIR="angular"
# FILES_TO_EXCLUDE=( "3rdpartylicenses.txt" "index.html" ) #todo this declaration fails
SERVER_PORT=8001

export GIT_COMMITTER_EMAIL='travis@travis'
export GIT_COMMITTER_NAME='Travis CI'

# Start
# Clone jdi-light and checkout the required branch
REPO_TEMP=$(mktemp -d)
git clone "https://github.com/${JDI_LIGHT_GITHUB_REPO}" "${REPO_TEMP}"
cd "${REPO_TEMP}"
echo "git checkout gh-pages_____________"
git checkout "$JDI_LIGHT_BRANCH"

# Perform npm install in angular-site if not done yet
cd ${TEST_SITE_DIR}/${ANGULAR_SITE_DIR}
([ ! -d "node_modules" ] && printf "node_modules dir is not found - performing npm install" && npm install)
pwd
ls -alh

#Build angular-site
echo "Performing ng-build"
ng build --prod
pwd
ls -alh

# Copy the required files
rm -rf ${REPO_TEMP}/${JDI_LIGHT_ANGULAR_DIR}/*
cp -R ${TEST_SITE_DIR}/${ANGULAR_SITE_DIR}/dist/my-app/. ${REPO_TEMP}/${JDI_LIGHT_ANGULAR_DIR}/

rm ${REPO_TEMP}/${JDI_LIGHT_ANGULAR_DIR}/3rdpartylicenses.txt index.html
rm ${REPO_TEMP}/${JDI_LIGHT_ANGULAR_DIR}/index.html

# Add new files to git (or use git commit -a -m "commit_message")
cd ${REPO_TEMP}/${JDI_LIGHT_ANGULAR_DIR}
git add --all
# Print changes that are about to be committed
git status

# todo commit-push-merge-etc
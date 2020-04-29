#!/bin/bash -v
echo $SHELL

export GIT_COMMITTER_EMAIL='travis@travis'
export GIT_COMMITTER_NAME='Travis CI'

# VARIABLES
# Feel free to edit if your directory names or branches differ
TEST_SITE_DIR=$(pwd)
ANGULAR_SITE_DIR="angular-site"
JDI_LIGHT_GITHUB_REPO="jdi-testing/jdi-light"
PUSH_URI="https://${GIT_COMMITTER_EMAIL}@github.com/${JDI_LIGHT_GITHUB_REPO}"
JDI_LIGHT_BRANCH="gh-pages"
JDI_LIGHT_DIR="jdi-light"
JDI_LIGHT_ANGULAR_DIR="angular"
# FILES_TO_EXCLUDE=( "3rdpartylicenses.txt" "index.html" ) #todo this declaration fails
SERVER_PORT=8001


# Start
GIT_COMMIT_MSG="[Travis-automerge] $(git show -s --format='%h %s')"

# Clone jdi-light and checkout the required branch
echo "\nChecking out ${JDI_LIGHT_GITHUB_REPO}"
REPO_TEMP=$(mktemp -d)
git clone "https://github.com/${JDI_LIGHT_GITHUB_REPO}" "${REPO_TEMP}"

echo "\nSwitching to ${JDI_LIGHT_BRANCH}"
cd "${REPO_TEMP}"
git checkout "${JDI_LIGHT_BRANCH}"

# Perform npm install in angular-site if not done yet
cd ${TEST_SITE_DIR}/${ANGULAR_SITE_DIR}
([ ! -d "node_modules" ] && echo "\nPerforming npm install" && npm install)

#Build angular-site
echo "\nPerforming ng-build"
ng build --prod

# Copy the required files
echo "\nCopying the built files from ${ANGULAR_SITE_DIR}/dist/my-app/ to jdi-light/${JDI_LIGHT_ANGULAR_DIR}"
rm -rf ${REPO_TEMP}/${JDI_LIGHT_ANGULAR_DIR}/*
cp -R ${TEST_SITE_DIR}/${ANGULAR_SITE_DIR}/dist/my-app/. ${REPO_TEMP}/${JDI_LIGHT_ANGULAR_DIR}/

#These files are not needed. See beginning of script to find out why we don't iterate through an array here
rm -rf ${REPO_TEMP}/${JDI_LIGHT_ANGULAR_DIR}/3rdpartylicenses.txt index.html
rm -rf ${REPO_TEMP}/${JDI_LIGHT_ANGULAR_DIR}/index.html

# Add new files to git (or use git commit -a -m "commit_message")
echo "\nAdding changes to git and checking the status:"
cd ${REPO_TEMP}/${JDI_LIGHT_ANGULAR_DIR}
git add --all
# echo changes that are about to be committed
git status

# todo commit-push-merge-etc
echo "\nCommitting changes to ${JDI_LIGHT_BRANCH} branch of ${JDI_LIGHT_GITHUB_REPO}:"
git commit -a -m "${GIT_COMMIT_MSG}"
git status

#Adding ssh key
printf '%s\n' "${A_SECRET_KEY}"
ssh-add - <<< "${GITHUB_PRIVATE_KEY}" 2>&1

echo "\nPushing to ${JDI_LIGHT_BRANCH} of ${JDI_LIGHT_GITHUB_REPO}:"
git push "${PUSH_URI}" ${JDI_LIGHT_BRANCH} >/dev/null 2>&1

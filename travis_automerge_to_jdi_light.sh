#!/bin/bash -v
export GIT_COMMITTER_EMAIL='travis@travis'
export GIT_COMMITTER_NAME='Travis CI'

# VARIABLES
# Feel free to edit if your directory names or branches differ
TEST_SITE_DIR=$(pwd)
ANGULAR_SITE_DIR="angular-site"
JDI_LIGHT_GITHUB_REPO="jdi-testing/jdi-light"
PUSH_URI="https://${GITHUB_TOKEN}@github.com/${JDI_LIGHT_GITHUB_REPO}"
JDI_LIGHT_BRANCH="gh-pages"
JDI_LIGHT_ANGULAR_DIR="angular"
# FILES_TO_EXCLUDE=( "3rdpartylicenses.txt" "index.html" ) #todo this declaration fails


# Start
GIT_COMMIT_MSG="[Travis automerge from test-site] $(git show -s --format='%h %s')"

# Clone jdi-light and checkout the required branch
printf "\nChecking out ${JDI_LIGHT_GITHUB_REPO}\n"
REPO_TEMP=$(mktemp -d)
git clone "https://github.com/${JDI_LIGHT_GITHUB_REPO}" "${REPO_TEMP}"

printf "\nSwitching to ${JDI_LIGHT_BRANCH}\n"
cd "${REPO_TEMP}"
git checkout "${JDI_LIGHT_BRANCH}"

# Perform npm install in angular-site if not done yet
cd "${TEST_SITE_DIR}/${ANGULAR_SITE_DIR}"
([ ! -d "node_modules" ] && printf "\nPerforming npm install\n" && npm install)

#Build angular-site
printf "\nPerforming ng-build\n"
ng build --prod

# Copy the required files
printf "\nCopying the built files from ${ANGULAR_SITE_DIR}/dist/my-app/ to jdi-light/${JDI_LIGHT_ANGULAR_DIR}\n"
rm -rf "${REPO_TEMP}/${JDI_LIGHT_ANGULAR_DIR}/*"
cp -R "{TEST_SITE_DIR}/${ANGULAR_SITE_DIR}/dist/my-app/." "${REPO_TEMP}/${JDI_LIGHT_ANGULAR_DIR}/"

#These files are not needed. See beginning of script to find out why we don't iterate through an array here
rm -rf "${REPO_TEMP}/${JDI_LIGHT_ANGULAR_DIR}/3rdpartylicenses.txt"
rm -rf "${REPO_TEMP}/${JDI_LIGHT_ANGULAR_DIR}/index.html"

# Add new files to git
printf "\nAdding changes to git and checking the status:\n"
cd "${REPO_TEMP}/${JDI_LIGHT_ANGULAR_DIR}"
git add --all
# Log changes that are about to be committed
git status

# Commit
printf "\nCommitting changes to ${JDI_LIGHT_BRANCH} branch of ${JDI_LIGHT_GITHUB_REPO}:\n"
git commit -a -m "${GIT_COMMIT_MSG}"
git status

# Push to jdi-light
#todo: sort out how to use token or private key and perform push
printf "\nPushing to ${JDI_LIGHT_BRANCH} of ${JDI_LIGHT_GITHUB_REPO}:\n"
git push "${PUSH_URI}" "${JDI_LIGHT_BRANCH}" >/dev/null 2>&1
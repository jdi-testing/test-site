#!/bin/bash -v
export GIT_COMMITTER_EMAIL='travis%40travis'
export GIT_COMMITTER_NAME='Travis CI'

# VARIABLES
# Feel free to edit if your directory names or branches differ
TEST_SITE_DIR="$(pwd)"
ANGULAR_SITE_DIR="angular-site"
JDI_LIGHT_GITHUB_REPO="jdi-testing/jdi-light"
PUSH_URI="https://${GIT_COMMITTER_EMAIL}:${GITHUB_TOKEN}@github.com/${JDI_LIGHT_GITHUB_REPO}"
JDI_LIGHT_BRANCH=${TARGET_JDI_LIGHT_BRANCH}
JDI_LIGHT_ANGULAR_DIR="angular"
# FILES_TO_EXCLUDE=( "3rdpartylicenses.txt" "index.html" ) #todo this declaration fails


# Start
LAST_MERGED_PR="[Travis automerge from test-site] $(hub pr list -s merged -L 1 | xargs)"
GIT_COMMIT_MSG="$(git show -s --format='[test-site#%h] %s')"
BRANCH_TO_MERGE="$(git show -s --format='test-site#%h')"

# Clone jdi-light and checkout the required branch
printf "\nChecking out ${JDI_LIGHT_GITHUB_REPO}\n"
REPO_TEMP="$(mktemp -d)"
git clone "https://github.com/${JDI_LIGHT_GITHUB_REPO}" "${REPO_TEMP}"
cd "${REPO_TEMP}"
git remote set-url origin "${PUSH_URI}"

printf "\nSwitching to ${JDI_LIGHT_BRANCH}\n"
git checkout "${JDI_LIGHT_BRANCH}"
git branch "${BRANCH_TO_MERGE}"
git checkout "${BRANCH_TO_MERGE}"


# Perform npm install in angular-site if not done yet
cd "${TEST_SITE_DIR}/${ANGULAR_SITE_DIR}"
([ ! -d "node_modules" ] && printf "\nPerforming npm install\n" && npm install)

# Build angular-site
printf "\nPerforming ng-build\n"
ng build --prod

# Copy the required files
printf "\nCopying the built files from ${ANGULAR_SITE_DIR}/dist/my-app/ to jdi-light/${JDI_LIGHT_ANGULAR_DIR}\n"
rm -rf "${REPO_TEMP}/${JDI_LIGHT_ANGULAR_DIR}/*"
cp -R "${TEST_SITE_DIR}/${ANGULAR_SITE_DIR}/dist/my-app/." "${REPO_TEMP}/${JDI_LIGHT_ANGULAR_DIR}/"

# These files are not needed. See beginning of script to find out why we don't iterate through an array here
rm -rf "${REPO_TEMP}/${JDI_LIGHT_ANGULAR_DIR}/3rdpartylicenses.txt"
rm -rf "${REPO_TEMP}/${JDI_LIGHT_ANGULAR_DIR}/index.html"

# Exclude paths
([ ! -f .codacy.yaml ] && printf "\nCreating .codacy.yaml file\n" && printf "exclude_paths:\n  - '${JDI_LIGHT_ANGULAR_DIR}/**'\n" > ${REPO_TEMP}\.codacy.yaml)

# Debug to see what happens on travis
cat .codacy.yaml

# Add new files to git
printf "\nAdding changes to git and checking the status.\n"
cd "${REPO_TEMP}/${JDI_LIGHT_ANGULAR_DIR}"
git add --all

# Detect if there are any changes
printf "\nChanges made since ${JDI_LIGHT_BRANCH} was checked out:\n"
git update-index --refresh
git diff-index --name-status HEAD
printf "End of list\n"

# This would stop the execution in case there is nothing to commit
git diff-index --quiet HEAD && exit 0 || printf "There are changes to be committed\n"

# Commit
printf "\nCommitting changes to ${BRANCH_TO_MERGE} branch of ${JDI_LIGHT_GITHUB_REPO}:\n"
git commit -a -m "${GIT_COMMIT_MSG}"
git status

# Push to a new branch of jdi-light
printf "\nPushing to ${BRANCH_TO_MERGE} of ${JDI_LIGHT_GITHUB_REPO}:\n"
git push origin "${BRANCH_TO_MERGE}"

# Create a pull request using hub
printf "\nCreating a pull request from ${BRANCH_TO_MERGE} to ${JDI_LIGHT_BRANCH}:\n"
PR_URL=$(hub pull-request --base "${JDI_LIGHT_BRANCH}" --head "${BRANCH_TO_MERGE}" --message "${LAST_MERGED_PR}")

printf "Following pull request has been created: ${PR_URL}\n"
PR_NUMBER=$(echo "${PR_URL}" | sed 's/[^0-9]*//g')

# Attempts to merge the request.
# GITHUB_TOKEN must belong to user that has permission to push into BRANCH_TO_MERGE
printf "\nMerging pull request #${PR_NUMBER}:\n"
hub api -XPUT "repos/jdi-testing/jdi-light/pulls/${PR_NUMBER}/merge"

printf "\n\nEnd of script\n"

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
FILES_TO_EXCLUDE=(3rdpartylicenses.txt index.html)
SERVER_PORT=8001

export GIT_COMMITTER_EMAIL='travis@travis'
export GIT_COMMITTER_NAME='Travis CI'

# Start
# Clone jdi-light and checkout the required branch
repo_temp=$(mktemp -d)
git clone "https://github.com/${JDI_LIGHT_GITHUB_REPO}" "$repo_temp"
cd "$repo_temp"
echo "git checkout gh-pages_____________"
git checkout "$JDI_LIGHT_BRANCH"

# Perform npm install in angular-site if not done yet
cd ${TEST_SITE_DIR}/${ANGULAR_SITE_DIR}
([ ! -d "node_modules" ] && printf "node_modules dir is not found - performing npm install" && npm install)

# Copy the required files
rm -rf $repo_temp/${JDI_LIGHT_ANGULAR_DIR}/*
cp -R ${TEST_SITE_DIR}/${ANGULAR_SITE_DIR}/dist/my-app/. $repo_temp/${JDI_LIGHT_ANGULAR_DIR}/

# remove FILES_TO_EXCLUDE
for f in ${FILES_TO_EXCLUDE[@]}
do
  rm ./${JDI_LIGHT_ANGULAR_DIR}/$f
done

# Add new files to git (or use git commit -a -m "commit_message")
cd $repo_temp/${JDI_LIGHT_ANGULAR_DIR}
git add --all
# Print changes that are about to be committed
git status

# todo commit-push-merge-etc
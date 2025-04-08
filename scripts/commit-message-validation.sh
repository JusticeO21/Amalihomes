#!/bin/bash

# Get the commit message file
COMMIT_MSG_FILE=$1

# Read commit message, remove \r for Windows users, and trim spaces
COMMIT_MSG=$(cat "$COMMIT_MSG_FILE" | tr -d '\r' | sed -e 's/^[ \t]*//' -e 's/[ \t]*$//')

# Debugging: Print commit message
echo "Commit message: '$COMMIT_MSG'"

if [[ -z "$COMMIT_MSG" ]]; then
  echo -e "\033[31m🚨 Commit message cannot be empty!\033[0m"
  exit 1
fi

# Define commit message pattern (Fixed regex)
ALLOWED_PATTERN='^(chore|feat|fix|refactor|test|docs|style|perf|ci|build|merge)(\([a-z0-9_-]+\))?: [a-zA-Z0-9][a-zA-Z0-9 _-]+$'

# Validate commit message using grep (more reliable than [[ ... =~ ... ]])
if ! echo "$COMMIT_MSG" | grep -Eiq "$ALLOWED_PATTERN"; then
  echo -e "\033[31m🚨❤️‼️ Invalid commit message: '$COMMIT_MSG'\033[0m"
  echo "Commit messages must follow the pattern:"
  echo "  <type>(<scope>): <description>"
  echo "Example (with scope): chore(setup): setup application using the mono repo approach"
  echo "Example (without scope): chore: update dependencies"
  echo "Allowed types: chore, feat, fix, refactor, test, docs, style, perf, ci, build"
  exit 1
fi

echo -e "\033[32m✅ Commit message format is valid.\033[0m"
exit 0

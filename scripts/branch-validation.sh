#!/bin/bash

# Get the current branch name
BRANCH_NAME=$(git rev-parse --abbrev-ref HEAD)

# Define allowed branch patterns (Fixed)
ALLOWED_PATTERNS='^(feature|bugfix|hotfix)/[0-9]+-[a-z0-9_-]+$|^(release|setup)/[a-z0-9._-]+$'

if ! echo "$BRANCH_NAME" | grep -Eiq "$ALLOWED_PATTERNS"; then
  echo -e "\033[31m🚨 Invalid branch name: '$BRANCH_NAME'\033[0m"
  echo "Branch names must follow the pattern:"
  echo "  - feature/{issue-number}-{description} (e.g., feature/123-add-login)"
  echo "  - bugfix/{issue-number}-{description} (e.g., bugfix/456-fix-navbar)"
  echo "  - hotfix/{issue-number}-{description} (e.g., hotfix/789-critical-fix)"
  echo "  - release/{version} (e.g., release/1.0.0)"
  echo "  - setup/{description} (e.g., setup/initial-config)"
  exit 1
fi

echo -e "\033[32m✅ Branch name '$BRANCH_NAME' is valid.\033[0m"
exit 0

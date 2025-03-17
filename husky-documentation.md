# Husky Configuration Documentation

## 1. Overview of Husky Configuration

Husky is a tool that enables the use of Git hooks within a project. These hooks are scripts that run automatically when specific events occur in a Git repository. This project uses Husky to enforce code quality and consistency through the following hooks:

- **Pre-commit Hook**: Validates branch naming conventions and runs linting before allowing commits
- **Commit Message Hook**: Ensures commit messages follow a standardized format (Conventional Commits)
- **Pre-push Hook**: Runs tests before allowing code to be pushed to the remote repository

The configuration for these hooks is stored in the `.husky` directory at the project root, with supporting scripts in the `scripts` folder.

## 2. Pre-commit Hook - Branch Validation and Linting

The pre-commit hook performs two key functions:

1. **Branch Name Validation**: Ensures that developers are working on correctly named branches
2. **Code Linting**: Runs the project's linting tools to ensure code quality before commit

### Implementation

The pre-commit hook is implemented in `.husky/pre-commit`:

```bash
./scripts/branch-validation.sh
pnpm lint
```

This script:
1. Executes the branch validation script from the scripts directory
2. Runs the project's linting command using pnpm

### Branch Validation Process

The branch validation is handled by `scripts/branch-validation.sh`, which:

1. Gets the current branch name
2. Checks it against allowed patterns
3. Provides clear error messages if the branch name doesn't conform to conventions
4. Blocks the commit if validation fails

## 3. Commit Message Hook - Commit Message Format and Validation

The commit-msg hook ensures that all commit messages follow the Conventional Commits specification, which makes the commit history more readable and enables automated versioning and changelog generation.

### Implementation

The commit-msg hook is implemented in `.husky/commit-msg`:

```bash
# Debug information
echo "Current directory: $(pwd)"
echo "Script location: $0"
echo "Commit message file: $1"

# Ensure we're in the project root (where .git directory is)
cd "$(git rev-parse --show-toplevel)"

# Check if validation script exists
if [ ! -f "./scripts/commit-message-validation.sh" ]; then
  echo "❌ Error: commit-message-validation.sh script not found!"
  echo "Expected location: $(pwd)/scripts/commit-message-validation.sh"
  exit 1
fi

# Make sure the script is executable
chmod +x ./scripts/commit-message-validation.sh

# Run the commit message validation script
./scripts/commit-message-validation.sh "$1"
```

This script:
1. Displays debug information about its execution environment
2. Navigates to the project root
3. Verifies that the validation script exists
4. Makes the validation script executable
5. Passes the commit message file to the validation script

### Commit Message Validation Process

The `scripts/commit-message-validation.sh` script:

1. Reads the commit message from the file provided by Git
2. Removes carriage returns and trims spaces for consistent processing
3. Validates the message against the defined pattern
4. Blocks the commit if validation fails, providing a helpful error message

### Commit Message Format

Commit messages must follow this format:

```
<type>(<scope>): <description>
```

Where:
- **Type**: Indicates the kind of change (required)
- **Scope**: Indicates which part of the codebase is affected (optional)
- **Description**: A short description of the change (required)

#### Allowed Types:
- `chore`: Changes to the build process or auxiliary tools
- `feat`: A new feature
- `fix`: A bug fix
- `refactor`: A code change that neither fixes a bug nor adds a feature
- `test`: Adding or modifying tests
- `docs`: Documentation only changes
- `style`: Changes that do not affect the meaning of the code (white-space, formatting, etc)
- `perf`: A code change that improves performance
- `ci`: Changes to CI configuration files and scripts
- `build`: Changes that affect the build system or external dependencies

#### Examples:
- `feat(auth): add login functionality`
- `fix: resolve issue with navbar responsive design`
- `docs(api): update API documentation`

## 4. Branch Naming Conventions

The project enforces specific naming conventions for branches to maintain clarity about the purpose of each branch and its relationship to issues or features.

### Allowed Branch Patterns:

1. **Feature Branches**:
   - Pattern: `feature/{issue-number}-{description}`
   - Example: `feature/123-add-login`
   - Purpose: For developing new features

2. **Bugfix Branches**:
   - Pattern: `bugfix/{issue-number}-{description}`
   - Example: `bugfix/456-fix-navbar`
   - Purpose: For fixing non-critical bugs

3. **Hotfix Branches**:
   - Pattern: `hotfix/{issue-number}-{description}`
   - Example: `hotfix/789-critical-fix`
   - Purpose: For urgent fixes to production code

4. **Release Branches**:
   - Pattern: `release/{version}`
   - Example: `release/1.0.0`
   - Purpose: For preparing releases

5. **Setup Branches**:
   - Pattern: `setup/{description}`
   - Example: `setup/initial-config`
   - Purpose: For configuration and setup tasks

These conventions help in:
- Tracking which issue a branch is related to
- Understanding the purpose of a branch at a glance
- Automating processes based on branch types
- Maintaining a clean and organized repository

The validation is enforced by the pre-commit hook, which prevents commits to improperly named branches.

The validation pattern used is:
```
^(feature|bugfix|hotfix)/[0-9]+-[a-z0-9_-]+$|^(release|setup)/[a-z0-9._-]+$
```

This pattern ensures:
- Feature, bugfix, and hotfix branches include an issue number and description
- Release branches include a version number
- Setup branches include a description
- All descriptions use lowercase letters, numbers, underscores, and hyphens only

## 5. Pre-push Hook

The pre-push hook runs tests before allowing code to be pushed to the remote repository. This ensures that only code that passes tests is shared with the team.

### Implementation

The pre-push hook is implemented in `.husky/pre-push`:

```bash
pnpm test
```

This simple command runs the project's test suite using pnpm. If tests fail, the push is aborted.

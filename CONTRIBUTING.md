# Contributing to Melend

## Getting Started
1. Fork the repository
2. Clone your fork
3. Install dependencies: `yarn install`
4. Create a branch: `git checkout -b feature/your-feature-name`

## Development Workflow
1. Make your changes
2. Run linter: `yarn lint`
3. Format code: `yarn format`
4. Commit with conventional commit messages
5. Push and create a pull request

## Commit Message Convention
We follow the Conventional Commits specification:
- `feat:` New feature
- `fix:` Bug fix
- `docs:` Documentation changes
- `style:` Code style changes (formatting)
- `refactor:` Code refactoring
- `perf:` Performance improvements
- `test:` Adding or updating tests
- `chore:` Maintenance tasks

Example: `feat: add user filtering functionality`

## Code Quality
- All code must pass ESLint checks
- All code must be formatted with Prettier
- TypeScript strict mode is enforced
- No `any` types allowed without explicit justification

## Pre-commit Hooks
This project uses Husky to run automated checks before commits:
- Code formatting with Prettier
- Linting with ESLint
- Commit message validation with Commitlint

## Questions?
Feel free to open an issue for any questions or concerns.

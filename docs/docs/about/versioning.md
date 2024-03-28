
# Versioning

This website adheres to the principles of [Semantic Versioning (SemVer)](https://semver.org), a widely adopted versioning scheme in the software development industry. The current version of this site can be found on the top right corner of any page.

## What is Semantic Versioning?

Semantic Versioning is a versioning system that conveys meaningful information about the nature of version changes and compatibility between versions. A version number consists of three parts: MAJOR, MINOR, and PATCH, formatted as `MAJOR.MINOR.PATCH`.

- **MAJOR version**: Incremented when incompatible API changes are introduced.
- **MINOR version**: Incremented when new backward-compatible functionality is added.
- **PATCH version**: Incremented when backward-compatible bug fixes are made.

## Why Semantic Versioning?

Semantic Versioning provides a clear and consistent way to communicate changes in software versions, ensuring that users and developers can understand the implications of updating to a new version. It promotes better collaboration, easier maintenance, and improved compatibility across different components and systems.

## Versioning on This Website

The versioning of this website is managed through a Git workflow involving the `main` and `dev` branches. New features and improvements are developed and tested on the `dev` branch. Once a set of changes is thoroughly reviewed and deemed stable, they are merged into the `main` branch, and a new version is released following the SemVer guidelines.

This approach ensures that the `main` branch always represents the latest stable release, while the `dev` branch serves as a staging area for upcoming changes. By adhering to this process, I can maintain a robust and reliable website while continuously improving and adding new functionality.
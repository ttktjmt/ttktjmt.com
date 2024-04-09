
# Versioning

This website adheres to the principles of [Semantic Versioning (SemVer)](https://semver.org){:target="_blank"}, a widely adopted versioning scheme in the software development industry. The current version of this site can be found on the top right corner of any page.

## What is Semantic Versioning?

Semantic Versioning is a versioning system that conveys meaningful information about the nature of version changes and compatibility between versions. A version number consists of three parts: MAJOR, MINOR, and PATCH, formatted as `MAJOR.MINOR.PATCH`.

| Version Type | Description |
|--------------|-------------|
| `MAJOR`      | Incompatible API changes |
| `MINOR`      | New backward-compatible functionality |
| `PATCH`      | Backward-compatible bug fixes |

## Why Semantic Versioning?

Semantic Versioning provides a clear and consistent way to communicate changes in software versions, ensuring that users and developers can understand the implications of updating to a new version. It promotes better collaboration, easier maintenance, and improved compatibility across different components and systems.

## Versioning of This Website

The versioning of this website is managed through a Git workflow involving the `main` and `dev` branches. New features and improvements are developed and tested under the `dev` branch. Once a set of changes is thoroughly reviewed and deemed stable, they are merged into the `main` branch, and a new version will be released by following the specific guidelines below (based on the SemVer scheme).

=== "**MAJOR**"

    * Structural changes (e.g. changing the framework, migrating to a new static site generator)
    * Significant design changes
    * Changes that break compatibility with existing themes or plugins
    * Substantial reorganization of the website's content structure or navigation

=== "**MINOR**"

    * Page changes (e.g. adding/deleting new pages)
    * New features or sections to the website
    * New plugins or themes
    * Upgrading dependencies (e.g. MkDocs, Python, etc.)
    * Improving accessibility or performance

=== "**PATCH**"

    * Content changes (e.g. updating existing content, fixing broken links)
    * Typo fixes
    * Fixing bugs or issues
    * Updating dependencies for security or bug fixes
    * Minor styling or CSS adjustments


This approach ensures that the `main` branch always represents the latest stable release, while the `dev` branch serves as a staging area for upcoming changes. By adhering to this process, I can maintain a robust and reliable website while continuously improving and adding new functionality.<br>

!!! note
    
    The version tag `v0.0.0` is used for general purpose of testing (such as checking if the GitHub Actions workflow works properly)

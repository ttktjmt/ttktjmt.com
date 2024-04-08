# CI/CD with GitHub Actions

This project leverages GitHub Actions to automate the deployment of the documentation site and the Docker image.

## Deployment to GitHub Pages

The `gh-pages.yml` workflow is responsible for building and deploying the project's documentation to GitHub Pages. This workflow is triggered on `push` events to the `dev` and `main` branches, ensuring that any changes pushed to these branches are automatically reflected in the live documentation site.

The key aspects of this workflow are:

1. **Checkout**: The first step is to retrieve the latest code from the repository.
2. **Setup Environment**: The workflow sets up the necessary dependencies, such as the Python runtime and the MkDocs-Material library, to build the documentation.
3. **Caching**: To optimize the build process, the workflow caches the dependencies, reducing the time required for subsequent runs.
4. **Documentation Build and Deployment**: Finally, the workflow uses the `mkdocs gh-deploy` command to build the documentation and push the generated files to the `gh-pages` branch, which is then served by GitHub Pages.

## Docker Image Deployment

The `docker.yml` workflow is responsible for building and deploying the project's Docker image to Docker Hub. This workflow is triggered on `published` events for GitHub releases, ensuring that each new release of the project is accompanied by an updated Docker image.

The key aspects of this workflow are:

1. **Checkout**: The first step is to retrieve the latest code from the repository.
2. **Docker Buildx Setup**: The workflow sets up the Docker Buildx environment, which enables building and pushing Docker images for multiple platforms.
3. **Docker Hub Authentication**: The workflow authenticates with Docker Hub using the provided secrets, allowing it to push the Docker image.
4. **Image Tagging**: The workflow extracts the version tag from the Git tag that triggered the release event and uses it to tag the Docker image.
5. **Docker Image Build and Push**: Finally, the workflow builds the Docker image and pushes it to Docker Hub, using the extracted version tag and the `latest` tag.

By implementing these two workflows, the project benefits from a fully automated CI/CD pipeline, ensuring that the documentation site and the Docker image are always up-to-date and easily accessible to users and developers.

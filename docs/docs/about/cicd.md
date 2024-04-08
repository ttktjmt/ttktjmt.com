
This project leverages GitHub Actions to automate the deployment to GitHub Pages and the Docker image.

## Deployment to GitHub Pages

<!-- ```mermaid
graph LR
    push["push to dev/main branch"]
    workflow["gh-pages.yml workflow"]
    deploy["mkdocs gh-deploy command"]
    publish["Live documentation site is updated"]

    push -> workflow # fix '->' to '--' + '>' when commenting these out
    workflow -> deploy
    deploy -> publish
-->

The deployment of MkDocs to GitHub Pages is automated through the `gh-pages.yml` workflow, which is triggered by `push` events to the `dev` and `main` branches. This ensures that any changes, aimed at testing design, functionality, and more, are automatically reflected on the live documentation site. The documentation will be updated whenever commits are made even if still under development. It utilizes the `mkdocs gh-deploy` command for immediate publication.

???+ info

    The website you see from `ttktjmt.com` address can differ from the one with `ttktjmt.github.io/ttktjmt.com` address.<br>
    The `ttktjmt.com` site represents the public version of the documentation, aiming to be shown to other people. On the other hand, the `ttktjmt.github.io/ttktjmt.com` site represents the 

## Docker Image Deployment

The `docker.yml` workflow is responsible for building and deploying the project's Docker image to Docker Hub. This workflow is triggered on `published` events for GitHub releases, ensuring that each new release of the project is accompanied by an updated Docker image.

The key aspects of this workflow are:

1. **Checkout**: The first step is to retrieve the latest code from the repository.
2. **Docker Buildx Setup**: The workflow sets up the Docker Buildx environment, which enables building and pushing Docker images for multiple platforms.
3. **Docker Hub Authentication**: The workflow authenticates with Docker Hub using the provided secrets, allowing it to push the Docker image.
4. **Image Tagging**: The workflow extracts the version tag from the Git tag that triggered the release event and uses it to tag the Docker image.
5. **Docker Image Build and Push**: Finally, the workflow builds the Docker image and pushes it to Docker Hub, using the extracted version tag and the `latest` tag.

By implementing these two workflows, the project benefits from a fully automated CI/CD pipeline, ensuring that the documentation site and the Docker image are always up-to-date and easily accessible to users and developers.

[https://www.youtube.com/watch?v=7bA0gTroJjw](https://www.youtube.com/watch?v=7bA0gTroJjw)

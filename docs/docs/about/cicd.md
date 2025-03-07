
# CI/CD

This project leverages GitHub Actions to automate the deployment to GitHub Pages and the Docker image. By implementing the following two workflows, this project benefits from a fully automated CI/CD pipeline, ensuring that the documentation site and the Docker image are always up-to-date and accessible to users.

## Deployment to GitHub Pages

``` mermaid
graph TB
    A[Push to dev/main branch] -->|Triggers| B

    subgraph B[GitHub Actions: gh-pages.yml]
        direction LR
        C[Prepare Build<br>Environment] --> D[Build Documentation]
        D --> F[Update GitHub Pages<br>ttktjmt.github.io/ttktjmt.com]
    end
```

The deployment of MkDocs to GitHub Pages is automated through the `gh-pages.yml` workflow, which is triggered by `push` events to the `dev` and `main` branches. This ensures that any changes aimed at testing design, functionality, and more are automatically reflected on the live documentation site. [The documentation on GitHub Pages](https://ttktjmt.github.io/ttktjmt.com/){:target="_blank"} will be updated whenever commits are made, even if it's still under development. It utilizes the `mkdocs gh-deploy` command for immediate publication.

???+ info

    The website you see from the `ttktjmt.com` address can differ from the one at the `ttktjmt.github.io/ttktjmt.com` address.<br>
    The `ttktjmt.com` site represents the public version of the documentation, aiming to be shown to other people. On the other hand, the `ttktjmt.github.io/ttktjmt.com` site represents the site under development.

## Docker Image Deployment

``` mermaid
graph TB
    A[Publish Release] -->|Triggers| B
    A -->|Version Tag| I
    
    subgraph S[GitHub Secrets]
        S1[Docker Hub Username]
        S2[Docker Hub Password]
    end

    subgraph B[GitHub Actions: docker.yml]
        direction LR
        C[Prepare Build Environment] --> D[Login to Docker Hub]
        S --> D
        D --> I[Build and Push Docker Image]

    end

    subgraph E[Docker Hub]
        subgraph J[Docker Image]
            direction LR
            F[Version-specific Tag: v0.1.2]
            G[Tag: latest]
        end
    end

    I -->|Pushes| J

    H[k3s Cluster] -->|Pulls| G
```

The process of building and pushing a Docker image to Docker Hub is automated through the `docker.yml` workflow, which is triggered by `published` events for GitHub Releases. This ensures that each new [release on the repo](https://github.com/ttktjmt/ttktjmt.com/releases){:target="_blank"} creates the latest version of the Docker image on [Docker Hub](https://hub.docker.com/u/ttktjmt){:target="_blank"}.

This workflow extracts the version tag from the Git tag that triggered the release event and uses it to tag the Docker image. Also, it updates the image with the `latest` tag simultaneously so that the deployment on the k3s cluster can use the latest image easily, also ensuring that the site runs on the latest version.

???+ info

    Credential info (username and password) for Docker Hub is stored as a secret in the GitHub repo. The workflow uses this data to run the `docker login` command.

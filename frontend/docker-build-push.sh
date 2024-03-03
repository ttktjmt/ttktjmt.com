#!/bin/bash
# Run `docker login` beforehand when you're not logged in to the docker service

DOCKERHUB_USERNAME="ttktjmt"
IMAGE_NAME="ttktjmt-frontend"

docker build -t $DOCKERHUB_USERNAME/$IMAGE_NAME .
docker push $DOCKERHUB_USERNAME/$IMAGE_NAME

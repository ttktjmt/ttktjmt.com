#!/bin/bash
# You need to execute `docker login` before running this script
# Target platform: linux/arm64
# e.g. ./docker_build_push.sh v0.1.2

# Check if a version tag is provided
if [ $# -eq 0 ]; then
  echo "You need to specify the version tag as an argument."
  exit 1
fi

TAG=$1

# docker build and push
docker buildx build --platform linux/arm64 -t ttktjmt/ttktjmt-mkdocs:$TAG . --push

echo "Image abcd/abcd-mkdocs:$TAG has been successfully built and pushed."

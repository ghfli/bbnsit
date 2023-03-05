#!/bin/bash

tag=$1

if [[ ! "$tag" ]]; then
	echo "No tag present. You must pass a tag to this script"
	exit 1
fi

echo "Tagging images with tag: $tag"

docker tag proxy-service hyinsit/proxy:$tag
docker tag app-service hyinsit/apps:$tag
docker tag worker-service hyinsit/worker:$tag

# docker login
docker push hyinsit/apps:$tag
docker push hyinsit/worker:$tag
docker push hyinsit/proxy:$tag
# docker logout

IMG_NAME=josefdigital/joestechblog:web-v0.0.1

.PHONY: docker_build docker_build_mac docker_run docker_push docker_remove

docker_build:
	export DOCKER_DEFAULT_PLATFORM=linux/amd64 && docker build --no-cache --tag $(IMG_NAME) .

docker_build_mac:
	docker build --no-cache --tag $(IMG_NAME) .

docker_run:
	docker run --env-file ../.env --rm -p 8888:8888 $(IMG_NAME)

docker_push:
	docker push $(IMG_NAME)

docker_remove:
	docker rmi $(IMG_NAME)

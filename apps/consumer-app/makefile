# This makefile allows you to login to harbor and pull built consumer app images for testing.
# We cannot specify exact build ID's because it uses github run numbers which we cannot access from here in a meaninful way.

container-registry := harbor.infra.updatron.com
# See FORMATTED_BUILD_REF environment variable in .github/workflows/ci.yaml
formatted_build_ref := $(shell git rev-parse --abbrev-ref HEAD | sed 's/[^a-zA-Z0-9]/-/g')

# Run consumer-app with the specified build reference
# $(call compose,build_ref)
compose = echo CONSUMER_APP_IMAGE_ID=$(container-registry)/updater/consumer-app:$(1) > .env & docker compose up -d

login:
	open https://harbor.infra.updatron.com/account/sign-in?redirect_url=%2Fharbor%2Fprojects

login_docker:
	docker login $(container-registry)

main:
	docker pull $(container-registry)/updater/consumer-app:main
	$(call compose,main)

# Takes the current branch and pulls its tag, this will always get the latest version. 
current: 
	formatted_build_ref=$(shell git rev-parse --abbrev-ref HEAD | sed 's/[^a-zA-Z0-9]/-/g')
	docker pull $(container-registry)/updater/consumer-app:${formatted_build_ref}
	$(call compose,${formatted_build_ref})

pull:
	docker pull harbor.infra.updatron.com/updater/consumer-app:main-20220325-3727-84781ca
# Must pass in build_ref, the formatted branch name that tags the image
# usage: make up build_ref=run-the-final-build-artifact-and-test-it-sc-85445
# see https://stackoverflow.com/questions/2214575/passing-arguments-to-make-run
# and before you ask, yes, we have to docker pull before we docker compose
# because docker compose doesn't know how to handle credentials on the CLI (no wonder k8s beat swarm lmao)
# see https://github.com/docker/compose-cli/issues/1545
up: 
	docker pull $(container-registry)/updater/consumer-app:$(build_ref)
	$(call compose,$(build_ref))

down:
	docker compose down
	
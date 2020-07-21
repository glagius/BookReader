.PHONY: install test

install:
	npm run install

develop:
	npm run start

build: lint
	npm run build

lint:
	npm run lint

test: lint
	npm run test

test-e2e: lint
	npm run e2e
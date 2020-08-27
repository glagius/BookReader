.PHONY: install test

install:
	npm install

develop:
	npm run start

build: lint
	npm run build

lint:
	npm run lint

test:
	npm run test

test-e2e:
	npm run e2e
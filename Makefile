.PHONY: install publish run lint

install:
	npm ci

publish:
	npm publish --dry-run

run:
	node bin/brain-games.js

lint:
	npx eslint .

install:
	npm install

start:
	npx babel-node -- src/bin/brain-games.js

publish:
	npm publish

lint:
	npx eslint src/bin/brain-games.js
	npx eslint src/index.js
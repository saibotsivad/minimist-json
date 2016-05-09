# minimist-json

Whatever args you pass in are streamed out as JSON. That's it.

It's a literal pass-through for [minimist](https://www.npmjs.com/package/minimist).

For example:

	minimist-json --hello=world

Outputs:

	{"_":[],"hello":"world"}

## cli install

Global install:

	npm install -g minimist-json

## install for module

If you add a script in your `package.json` like:

	"scripts": {
		"generate": "minimist-json --hello=world > file.json"
	}

Than you don't need the global install, just the normal one:

	npm install --save minimist-json

## api

You'll notice that the [bin.js](./bin.js) is quite small.

All that it does is pass `process.argv` over to minimist and
pipes the `JSON.stringify` output back to `stdout`.

In other words, look at minimist for how to use it.

## license

Published under the [Very Open License](http://veryopenlicense.com/).

<3

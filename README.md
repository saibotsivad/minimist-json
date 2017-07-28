# minimist-json

[![Greenkeeper badge](https://badges.greenkeeper.io/saibotsivad/minimist-json.svg)](https://greenkeeper.io/)

You pass in args, and it comes out as JSON. That's it.

For example:

```sh
minimist-json --hello=world
```

Outputs:

```txt
{"_":[],"hello":"world"}
```

## cli install

Global install:

```sh
npm install -g minimist-json
```

## install for module

If you add a script in your `package.json` like:

```json
"scripts": {
	"generate": "minimist-json --hello=world > file.json"
}
```

Than you don't need the global install, just the normal one:

```sh
npm install --save minimist-json
```

## how to use

This uses [minimist](https://www.npmjs.com/package/minimist) to
parse inputs, but with this difference:

```sh
minimist-json [[transform options] --] [input args]
```

### transform options

For example, you might want to use the input arg `--thing=[1,2]`
and have it be output as `{"thing":[1,2]}` but you'll notice that
what actually comes out is `{"thing":"[1,2]"}`.

This is because the input args are treated as strings. But with
the transform you can do this:

```sh
minimist-json --json=thing -- --thing=[1,2]
```

And the output will be `{ "thing": [ 1, 2 ] }`

#### `--json`

Use `.` notation for property reference, aka `{ a: { b: [3] } }`
would be `--json=a.b`

### input args

The arg parsing is passed through [minimist](https://www.npmjs.com/package/minimist),
so look there for how to write args correctly.

## license

[VOL](http://veryopenlicense.com/)

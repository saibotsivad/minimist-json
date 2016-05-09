const test = require('tape')
const exec = require('child_process').exec

test('that it works', t => {
	t.plan(4)
	exec('node ./bin.js --hello=world', (err, output) => {
		t.notOk(err, 'error free')
		const obj = JSON.parse(output)
		t.equal(obj.hello, 'world', 'param is correct')
		t.ok(Array.isArray(obj._), 'contains minimist array')
		t.equal(obj._.length, 0, 'but it should be empty')
		t.end()
	})
})

test('array-like strings just get parsed as strings', t => {
	t.plan(1)
	exec('node ./bin.js --thing=[1,2]', (err, output) => {
		const obj = JSON.parse(output)
		t.equal(obj.thing, '[1,2]', 'it is a string not an array')
		t.end()
	})
})

test('but when you specify a json ref it gets parsed', t => {
	t.plan(2)
	exec('node ./bin.js --json=thing -- --thing=[1,2]', (err, output) => {
		const obj = JSON.parse(output)
		t.ok(Array.isArray(obj.thing), 'here it is an array not a string')
		t.equal(obj.thing[0], 1, 'with ordered properties as expected')
		t.end()
	})
})

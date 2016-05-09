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

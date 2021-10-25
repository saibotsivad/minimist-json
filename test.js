const { test } = require('uvu')
const assert = require('uvu/assert')
const exec = require('child_process').exec

const parse = async string => new Promise((resolve, reject) => {
	exec(string, (error, output) => {
		if (error) reject(error)
		else resolve(JSON.parse(output))
	})
})

test('that it works', async () => {
	const obj = await parse('node ./bin.js --hello=world')
	assert.equal(obj.hello, 'world', 'param is correct')
	assert.ok(Array.isArray(obj._), 'contains minimist array')
	assert.equal(obj._.length, 0, 'but it should be empty')
})

test('array-like strings just get parsed as strings', async () => {
	const obj = await parse('node ./bin.js --thing=[1,2]')
	assert.equal(obj.thing, '[1,2]', 'it is a string not an array')
})

test('but when you specify a json ref it gets parsed', async () => {
	const obj = await parse('node ./bin.js --json=thing -- --thing=[1,2]')
	assert.ok(Array.isArray(obj.thing), 'here it is an array not a string')
	assert.equal(obj.thing[0], 1, 'with ordered properties as expected')
})

test('deep dot-notation properties are set', async () => {
	const obj = await parse('node ./bin.js --car.wheel.size=big --car.color=red')
	assert.equal(obj.car, { wheel: { size: 'big' }, color: 'red' }, 'it is a constructed object')
})

test('to be clear, array structures are not inferred', async () => {
	const obj = await parse('node ./bin.js --car.0.size=big --car.1.size=small')
	assert.not.equal(Array.isArray(obj.car), 'it is just a normal object')
	assert.equal(obj.car, { 0: { size: 'big' }, 1: { size: 'small' } }, 'it looks iterable though')
})

test.run()

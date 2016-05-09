#!/usr/bin/env node

const minimist = require('minimist')

const splitter = process.argv.slice(2).indexOf('--')

const beforeArray = process.argv.slice(2, splitter >= 0 ? (2 + splitter) : undefined)
const afterArray = process.argv.slice(splitter >= 0 ? (3 + splitter) : 2)

const beforeArgv = splitter >= 0 ? minimist(beforeArray) : undefined
const afterArgv = minimist(afterArray)

if (beforeArgv && beforeArgv.json) {
	const toJsonParse = Array.isArray(beforeArgv.json) ? beforeArgv.json : [ beforeArgv.json ]
	toJsonParse.forEach(propertyName => {
		var reference = find(afterArgv, propertyName)
		if (reference) {
			set(afterArgv, propertyName, JSON.parse(reference))
		}
	})
}

process.stdout.write(JSON.stringify(afterArgv))

function find(obj, ref) {
	if (typeof ref === 'string') {
		return find(obj, ref.split('.'))
	} else if (!obj) {
		return undefined
	} else if (ref.length === 0) {
		return obj
	} else {
		return find(obj[ref[0]], ref.slice(1))
	}
}

function set(obj, ref, value) {
	if (typeof ref === 'string') {
		return set(obj, ref.split('.'), value)
	} else if (ref.length === 1 && value) {
		return obj[ref[0]] = value
	} else if (ref.length === 0) {
		return obj
	} else {
		return set(obj[ref[0]], ref.slice(1), value)
	}
}

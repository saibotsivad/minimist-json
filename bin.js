#!/usr/bin/env node

const minimist = require('minimist')
const find = require('dlv')
const set = require('dset')

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

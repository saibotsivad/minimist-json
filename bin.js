#!/usr/bin/env node

process.stdout.write(JSON.stringify(require('minimist')(process.argv.slice(2))))

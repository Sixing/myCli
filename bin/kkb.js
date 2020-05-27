#!/usr/bin/env node
const program = require('commander')
program.version(require('../package-lock.json')).version

program
  .command('init <name>')
  .description('init project')
  .action(require('../lib/init'))

program
  .command('refresh')
  .description('refresh routers & menu')
  .action(require('../lib/refresh'))

program.parse(process.argv)
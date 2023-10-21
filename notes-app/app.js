const chalk = require('./node_modules/chalk')
const yargs = require('yargs')
const getNotes = require('./notes')

//Customize yargs version
yargs.version('1.1.0')

console.log(yargs.argv)

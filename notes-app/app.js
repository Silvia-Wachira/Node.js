const { require } = require('yargs')
const chalk = require('./node_modules/chalk')
const yargs = require('yargs')
const getNotes = require('./notes')

const command = process.argv[2]

console.log(process.argv)

if (command === 'add') {
    console.log('Adding note!')
} else if (command === 'remove') {
    console.log('Remove note!')
}
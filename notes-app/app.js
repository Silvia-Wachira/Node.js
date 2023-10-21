const chalk = require('./node_modules/chalk')
const getNotes = require('./notes')

const command = process.argv[2]

if (command === 'add') {
    console.log('Adding note!')
} else if (command === 'remove') {
    console.log('Remove note!')
}
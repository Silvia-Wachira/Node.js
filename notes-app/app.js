const chalk = require('./node_modules/chalk')
const yargs = require('yargs')
const getNotes = require('./notes')

//Customize yargs version
yargs.version('1.1.0')

//create add command
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    handler: function () {
        console.log('Adding a new note!')
    }
})
//add , remove , read, list

//Create remove command
yargs.command({
    command:'remove',
    describe: 'Remove a note',
    handler: function () {
        console.log('Removing the note')
    }
})
console.log(yargs.argv)

// Create list command
yargs.command({
    command: 'list',
    describe: 'List a note',
    handler () {
        console.log('Listing the note')
    }
})

//Create read command
yargs.command({
    command: 'read',
    describe: 'Read a note',
    handler: () {
        console.log('Reading the note')
    }
})
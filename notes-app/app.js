const validator = require('./node_modules/validator')
const getNotes = require('./notes')
const printNotes = getNotes()

console.log(printNotes)

console.log(validator.('example.com'))
const validator = require('./')
const getNotes = require('./notes')
const printNotes = getNotes()

console.log(printNotes)

console.log(validator.isEmail('example.com'))
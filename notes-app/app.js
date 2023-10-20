const chalk = require('./node_modules/chalk')
const getNotes = require('./notes')
const printNotes = getNotes()

console.log(printNotes)

console.log(chalk.blue.inverse.bold('Success!'))
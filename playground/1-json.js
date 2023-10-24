const fs = require('fs')
const { join } = require('path')



const dataBuffer = fs.readFileSync('1-json.json')
const dataJSON = dataBuffer.toString()
const user = JSON.parse(dataJSON)

user.name = "Gunther"
user.age = "26"

const userJSON = JSON.stringify(user)
fs.writeFileSync('1-json.json', userJSON)
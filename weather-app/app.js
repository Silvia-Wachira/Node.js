const request = require('request')

const url = 'urlcontents'

request({url: url}, (error, response) => {
    console.log(response)
})
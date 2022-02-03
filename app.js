const request = require('postman-request');

const url = 'http://api.weatherstack.com/current?access_key=dde5a18e7933428cdfbb9fa9338272f7&query=New%20York'

request({ url: url }, (error, response) => {
    const data = JSON.parse(response.body);
    console.log(data.current);
})
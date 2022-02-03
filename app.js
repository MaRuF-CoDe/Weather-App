const request = require('postman-request');

const url = 'http://api.weatherstack.com/current?access_key=dde5a18e7933428cdfbb9fa9338272f7&query=New%20York&units=f'

request({ url: url, json : true }, (error, response) => {
    console.log(response.body.current.weather_descriptions[0] + ' .It is currently ' + response.body.current.temperature +' fahrenheit.' + 'But feels like ' + response.body.current.feelslike + ' fahrenheit');
})
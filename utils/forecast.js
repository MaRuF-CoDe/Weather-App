const request = require('postman-request')

const forecast = (latitude,longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=dde5a18e7933428cdfbb9fa9338272f7&query='+ latitude +','+ longitude 
    request({ url: url, json: true }, (error, response) => {
        if (error) {
            callback('Unable to connect to weather service',undefined)
        } else if (response.body.error) {
            callback('Error Code ' + response.body.error.code + '.' + response.body.error.info,undefined);
        } else {
            callback(undefined,response.body.current.weather_descriptions[0] + ' .It is currently ' + response.body.current.temperature + ' degree.' + 'But feels like ' + response.body.current.feelslike + ' degree');
                
        }
    })
}

module.exports = forecast;
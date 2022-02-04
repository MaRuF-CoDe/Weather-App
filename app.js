const request = require('postman-request');

const url = 'http://api.weatherstack.com/current?access_key=dde5a18e7933428cdfbb9fa9338272f7&query=New%20York&units=f'

request({ url: url, json : true }, (error, response) => {
    console.log(response.body.current.weather_descriptions[0] + ' .It is currently ' + response.body.current.temperature +' fahrenheit.' + 'But feels like ' + response.body.current.feelslike + ' fahrenheit');
})

const gecodeUrl = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoiYmFuZ2FiYXNoaS1tYXJ1ZiIsImEiOiJja3o4YXBwYjAwbDluMm9waTZrM3ZvZjFlIn0.Y_lJ2l-VCauVLkn2L1WZ0g&limit=1'

request({url : gecodeUrl , json : true},(error,response)=>{
   const longitude = response.body.features[0].center[0];
   const latitude = response.body.features[0].center[1];
   console.log(latitude , longitude);
})
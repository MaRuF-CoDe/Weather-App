const request = require('postman-request');

const url = 'http://api.weatherstack.com/current?access_key=dde5a18e7933428cdfbb9fa9338272f7&query=New%20York&units=f'

request({ url: url, json : true }, (error, response) => {
    if (error) {
        console.log('Unable to connect to weather service')
    }else if(response.body.error){
console.log('Error Code '+ response.body.error.code + '.' + response.body.error.info);
    }else{
        console.log(response.body.current.weather_descriptions[0] + ' .It is currently ' + response.body.current.temperature +' fahrenheit.' + 'But feels like ' + response.body.current.feelslike + ' fahrenheit');
    }
})

const gecodeUrl = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoiYmFuZ2FiYXNoaS1tYXJ1ZiIsImEiOiJja3o4YXBwYjAwbDluMm9waTZrM3ZvZjFlIn0.Y_lJ2l-VCauVLkn2L1WZ0g&limit=1'

request({url : gecodeUrl , json : true},(error,response)=>{
    if(error){
console.log('Unable to connect to location services!');
    }else if(response.body.features.length === 0){
console.log('Unable to find location , try another search');
    }else{
        const longitude = response.body.features[0].center[0];
        const latitude = response.body.features[0].center[1];
        console.log(latitude , longitude);
    }
   
})
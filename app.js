const geocode = require('./utils/geocode.js');
const forecast = require('./utils/forecast.js');



geocode('Los Angles', (error, data) => {
    console.log('Error : ',error);
    console.log('Data :',data);
})

forecast(32.6733,-114.139515, (error, data) => {
    console.log('Error : ',error);
    console.log('Data :',data);
})
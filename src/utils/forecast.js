const request = require('request');

const forecast = (latitude, longitude, callback) => {
    const url = `http://api.weatherstack.com/current?access_key=0ed4c440dff1e9d7b14751e880130b91&query=${latitude},${longitude}&units=m`

    request({ url: url, json: true }, (error, response) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (response.body.error) {
            callback('Unable to find location', undefined)
        } else {
            const { weather_descriptions, temperature } = response.body.current;

            callback(undefined, weather_descriptions[0] + ". It is currently " + temperature + " degress out.")
        }
    })
}

module.exports = forecast
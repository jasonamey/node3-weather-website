const request = require('request')

const forecast = (longitude, latitude, callback) => {
    const key = 'bf2e1df62494076b7645ca6e1496ec72'
    const url = `https://api.darksky.net/forecast/${key}/${longitude},${latitude}`
    request({url, json : true}, (error, { body }) => {
        
        if(error){
            callback("No connection made", undefined)
        }
        else if(body.error){
            callback("Location not found", undefined)
        }else {
            console.log(body.daily)
            // callback(undefined, body.daily.summary + " " + body.daily.data[0].summary + ' It is currently ' + body.currently.temperature + ' degress out. There is a ' + body.currently.precipProbability + '% chance of rain.')
            callback(undefined, `${body.daily.summary} ${body.daily.data[0].summary} It is currently ${body.currently.temperature} degress out. There is a ${body.currently.precipProbability}% chance of rain.`)

        }
    })

}

module.exports = forecast
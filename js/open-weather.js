"use strict"
const URL= "http://api.openweathermap.org/data/2.5/onecall"

    $.get(URL,{
        APPID: OPEN_WEATHER_KEY,
        lat: 40.7485452,
        lon:73.9879522,
        units: "imperial"
    }).done(function(result){console.log(result)})

geocode("San antonio,US", MAPBOX_API_KEY).then(function(data) {
    $.get(URL, {
        APPID: OPEN_WEATHER_KEY,
        lat: data[1],
        lon: data[0],
        units: "imperial"
    }).done(function (result) {
        console.log(result)
    })
})
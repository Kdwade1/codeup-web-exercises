$.get("http://api.openweathermap.org/data/2.5/weather", {
    APPID: OPEN_WEATHER_KEY,
    q: "San Antonio, US",
    units: "imperial"
}).done(function (data) {
    console.log(data);
});

$.get("http://api.openweathermap.org/data/2.5/onecall", {
    APPID: OPEN_WEATHER_KEY,
    lat: 29.423017,
    lon: -98.48527,
    units: "imperial"
}).done(function (data) {

    // "http://openweathermap.org/img/w/" + day.weather[0].icon + ".png"
    data.daily.forEach(function (day, i) {
        if (i < 5) {
            let section = "<section class='cardbody'>"
            let section2 = "</section>"
            let timestamp = day.dt

            let divvy = "<div>"
            let divn = "</div>"
            let date = new Date(timestamp * 1000)
            let img = "<img src=http://openweathermap.org/img/w/" + day.weather[0].icon + ".png>"
            let div = "<div>" + "Temperature:  " +day.temp.min+"°F /"+day.temp.max +"°F"+ "</div>"
            let div1 = "<div >"+"Humidity:  " + day.humidity + "</div>"
            let div2 = "<div>" + "Description: "+day.weather[0].description + "</div>"
            let div3 = "<div>" +"Pressure: "+ day.pressure + "</div>"
            let div4 = "<div>" + "Wind: "+day.wind_speed + "</div>"
            $(".container").append(section +img+   div2+divvy + date + divn   + div + div1 + div3 + div4 + section2);

        }
    })
    $("section").addClass("card")

// $.get("http://api.openweathermap.org/data/2.5/onecall").done(function(data){
//     // $(".container").html()
//     console.log(data)
//     // data.daily.forEach(day)

})

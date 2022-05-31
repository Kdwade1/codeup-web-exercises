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
    console.log('The entire response:', data);
    console.log('Diving in - here is current information: ', data.current);
    console.log('A step further - information for tomorrow: ', data.daily[1]);
    console.log("One step even further: ", data.daily[2]);
    data.daily.forEach(function (day, i) {
        if (i < 5) {
            let section= "<section>"
            let section2= "</section>"
            let hr="<hr>"
            let div = "<div>" + day.temp.max + "</div>"
            let div1 = "<div>" + day.humidity + "</div>"
            let div2 = "<div>" + day.weather[0].description + "</div>"
            let div3 = "<div>" + day.pressure + "</div>"
            let div4 = "<div>" + day.wind_speed + "</div>"
            $(".container").append(section+div2 +hr+ div +hr+ div1 +hr+ div3 +hr+ div4+section2);
            console.log(day)
        }
    })
    $("section").addClass("card")
// $.get("http://api.openweathermap.org/data/2.5/onecall").done(function(data){
//     // $(".container").html()
//     console.log(data)
//     // data.daily.forEach(day)

})
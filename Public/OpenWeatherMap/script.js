$.getJSON(
  "http://api.openweathermap.org/data/2.5/weather?q=Dublin,ie&APPID=957c713419b6f9e53e7abd7a9a874f29",
  function (data) {
    console.log(data);

    var icon =
      "http://openweathermap.org/img/w/" + data.weather[0].icon + ".png";
    var temp = data.main.temp;
    var weather = data.weather[0].main;

    $(".icon").attr("src", icon);
    $(".weather").append(weather);
    $(".temp").append(temp);
  }
);

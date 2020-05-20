// Setup API and Key
var openweathermap = "http://api.openweathermap.org/data/2.5/weather?";
var appid = "957c713419b6f9e53e7abd7a9a874f29";

$.getJSON(openweathermap + "q=Dublin,ie&APPID=" + appid, function (data) {
  console.log(data);

  var city = data.name;
  var country = data.sys.country;
  var weather = data.weather[0].main;
  var temp = data.main.temp;
  var icon = "http://openweathermap.org/img/w/" + data.weather[0].icon + ".png";

  $(".city").append(city);
  $(".country").append(country);
  $(".icon").attr("src", icon);
  $(".weather").append(weather);
  $(".temp").append(temp);

  console.log(data.coord.lon);
  console.log(data.coord.lat);
});

$(document).ready(function () {
  $("#table_id").DataTable();
});

$.getJSON(openweathermap + "q=New York&APPID=" + appid, function (data) {
  console.log(data);

  var city = data.name;
  var country = data.sys.country;
  var weather = data.weather[0].main;
  var temp = data.main.temp;
  var icon = "http://openweathermap.org/img/w/" + data.weather[0].icon + ".png";

  $(".NYcity").append(city);
  $(".UScountry").append(country);
  $(".NYweather").append(weather);
  $(".NYtemp").append(temp);
  $(".NYicon").attr("src", icon);
});

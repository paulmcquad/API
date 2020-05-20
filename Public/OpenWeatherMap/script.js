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

$(document).ready(function () {
  $("#getWeatherForcast").click(function () {
    var iecity = $("#iecity").val();
    var key = "957c713419b6f9e53e7abd7a9a874f29";

    $.ajax({
      url: "http://api.openweathermap.org/data/2.5/weather",
      dataType: "json",
      type: "GET",
      data: { q: iecity, appid: key, units: "metric" },

      success: function (data) {
        var wf = "";
        $.each(data.weather, function (index, val) {
          wf +=
            "<p><b>" +
            data.name +
            "</b><img src=http://openweathermap.org/img/w/" +
            data.weather[0].icon +
            ".png></p>" +
            data.main.temp +
            "&deg;C " +
            " | " +
            val.main +
            ", " +
            val.description;
        });
        $("#showWeatherForcast").html(wf);
      },
    });
  });
});

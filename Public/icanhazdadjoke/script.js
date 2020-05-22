// Setup API and Key

$.getJSON("https://icanhazdadjoke.com/", function (data) {
  console.log(data);

  /*   var id = data.id; */
  /*   var joke = data.joke; */
  /*  */
  /*   $(".id").append(id); */
  /*   $(".joke").append(joke); */
});

// Get Joke

$(document).ready(function () {
  $("#getjoke").click(function () {
    // var id = data.id;
    // var joke = data.joke;
    /*  */
    /*     $(".id").append(id); */
    /*     $(".joke").append(joke); */

    $.ajax({
      url: "https://icanhazdadjoke.com/",
      dataType: "json",
      type: "GET",
      data: {},

      success: function (data) {
        var wf = "";
        wf += "<p><b>" + data.id + "</p></b>" + data.joke;
        $("#showjoke").html(wf);
      },
    });
  });
});

// Search Joke

$(document).ready(function () {
  $("#searchjoke").click(function () {
    var jokes = $("#jokes").val();

    $.ajax({
      url: "https://icanhazdadjoke.com/search?term=" + jokes,
      dataType: "json",
      type: "GET",
      data: {},

      success: function (data) {
        var wf = "";
        wf += "<p><b>" + data.results[0].id + "</p></b>" + data.results[0].joke;
        $("#showsearchjoke").html(wf);
        console.log(data);
      },
    });
  });
});

//  ID Joke

$(document).ready(function () {
  $("#searchjokeid").click(function () {
    var jokes = $("#jokesid").val();

    $.getJSON("https://icanhazdadjoke.com/j/" + jokes, function (data) {
      wf += "<p><b>" + data.id;

      var wf = "";
      wf += "<p><b>" + data.id + "</p></b>" + data.joke;
      $("#pjoke").html(wf);

      console.log(data.id);
      console.log(data.joke);
    });
  });
});

// Debugging Info

/* var jokesid = "R7UfaahVfFd"; */
/* $.getJSON("https://icanhazdadjoke.com/j/" + jokesid, function (data) { */
/*   console.log(data); */
/* }); */

// Setup API and Key

$.getJSON("https://icanhazdadjoke.com/", function (data) {
  console.log(data);

  /*   var id = data.id; */
  /*   var joke = data.joke; */
  /*  */
  /*   $(".id").append(id); */
  /*   $(".joke").append(joke); */
});

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

/* $(document).ready(function () { */
/*   $("#searchjokeid").click(function () { */
/*     var jokes = $("#jokesid").val(); */
/*  */
/*     $.ajax({ */
/*       url: "https://icanhazdadjoke.com/j/" + jokesid, */
/*       dataType: "json", */
/*       type: "GET", */
/*       data: {}, */
/*  */
/*       success: function (data) { */
/*         var wf = ""; */
/*         wf += "<p><b>" + data.results[0].id + "</p></b>"; */
/*         $("#searchjokeid").html(wf); */
/*         console.log(data); */
/*       }, */
/*     }); */
/*   }); */
/* }); */
/*  */

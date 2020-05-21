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

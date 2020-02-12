$(document).ready(function() {
  //load
  // $("#datos").load("https://reqres.in/");

  //GET Y POST

  $.get("https://reqres.in/api/users", { page: 1 }, function(response) {
    response.data.forEach((element, index) => {
      $("#datos").append(
        "<p>" + element.first_name + " " + element.last_name + "</p>"
      );
    });
  });

  $("#formulario").submit(function(e) {
    e.preventDefault();
    var usuario = {
      name: $('input[name="name"]').val(),
      web: $('input[name="web"]').val()
    };

    //NORMAL POST
    /*$.post($(this).attr("action"), usuario, function(response) {
      console.log(response);
    }).done(function() {
      alert("Usuarioa añadido correctamenete");
    });*/

    // BEST REQUEST METHOD

    $.ajax({
        type:'POST',
        url:$(this).attr("action"),
        data:usuario,
        beforeSend: function(){
            console.log("Enviando usuario...");
        },
        success:function(response){
            console.log(response);
        },
        error:function(){
            console.log("Ha currido un error");
        },
        timeout:1000
        //dataType:'json',
        //contentType:'application/json'
    })

    return false;
  });
});

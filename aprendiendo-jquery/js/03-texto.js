$(document).ready(function() {
  realoadLinks();

  $("#add_button")
    .removeAttr("disabled")
    .click(function() {
      $("#menu").append('<li><a href="' + $("#add_link").val()+ '"></a></li>');
      $("#add_link").val("");
      realoadLinks();
    });

  function realoadLinks() {
    $("a").each(function(index) {
      var that = $(this);
      var enlace = that.attr("href");

      that.attr("target", "_blank");

      that.text(`${index + 1} - ${enlace}`);
    });
  }

  /*
  html - añadir elementos html a la web desde JQuery
  append - anexar elementos html depues de una lista
  prepend - anexar elementos html antes de una lista
  before - anexa elementos html antes de una etiqueta (tomando enncuenta desde donde se anexa)
  after - anexa elementos html despues de una etiqueta (tomando en cuenta desde donde se anexa)
  
  */
});

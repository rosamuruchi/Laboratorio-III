$(function(){
  var boton =$("<input>").val("Nuevo boton").attr("type","button").addClass("azul").css("margin","100px");


  $('#btnCambiar').click(function(){

    $("body").append(boton);
    $("#btnEnviar").toggleClass("azul");

    console.log($("input:last").css("margin"));

  });



});

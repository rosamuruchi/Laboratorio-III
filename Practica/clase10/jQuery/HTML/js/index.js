$(function(){

  $("#btnEnviar").click(function(){
    console.log($("p.rojo").text());
    console.log($("p.rojo").html());
    console.log($("#btnEnviar").val());
    console.log($("#btnEnviar").attr("id"));
  })

  $("#btnCambiar").click(function(){

    $("p.rojo").text("Este es el nuevo parrafo del rojo");
    $("p.last").html("<strong>Este texto va en negrita</strong>");
    $("p.last").html(function(i,prevHTML){
      return prevHTML + "agrego mas HTML";
    })
    $("#btnCambiar").val("Nuevo cambiar");

    $("#btnCambiar").attr("class","azul");

    $("#btnCambiar").attr({
      "class":"azul",
      "miAtributo": "miValor"
    });

    $("#btnEnviar").attr("class",function(i,prevValue){
      console.log("Clase anterior: " + prevValue);
      return "rojo";
    });

    var boton= $("<input>").value("nuevo Boton").attr("type", "button");

    $("#btnCambiar").after(boton);

    $("body").prepend  (boton);



  })

})

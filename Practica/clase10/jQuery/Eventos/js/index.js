$(function(){

  /*$("#btnEnviar").click(function(){
    alert("hiciste click en el boton");
  })
  $("p.rojo").hover(function(){
    console.log("hola");
  },
  function(){
    console.log("chau");
  })*/

  $("p.rojo").on("click",function(){

  })

  $("p.rojo").on({
    "click": function(){
      console.log("has dado click");
    },
    "mouseCenter":function(){
      console.log("hola");
    },
    "mouseleave":function(){
      console.log("chau");
    }
  })

})

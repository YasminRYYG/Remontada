var botonsesion = document.getElementById("botonSesion");
botonsesion.addEventListener("click", function(){
    botonsesion.innerText = "Cerrar Sesion";
})

var megusta=document.getElementById("gato");
var contador=0;
megusta.addEventListener("click",function(){
    contador++;
    this.innerText=contador+" me gusta";
    alert("Has dado me gusta a ¨Gato Atigrado!! :)¨");
})

var megusta=document.getElementById("perro");
var contador=0;
megusta.addEventListener("click",function(){
    contador++;
    this.innerText=contador+" me gusta";
    alert("Has dado me gusta a ¨Golden Retriver!! :)¨")
})

var botonadd = document.querySelectorAll("#botonAdd");
console.log(botonadd);
botonadd.forEach(function(boton) {
    boton.addEventListener("click",function(){
        this.remove();
    })
})
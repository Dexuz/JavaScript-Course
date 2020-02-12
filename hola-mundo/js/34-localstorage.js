"use strict"

//LocalStorage

//Comprobar si el Local Starage existe en el navegador
if(typeof Storage !== "undefined"){
    console.log("Localstorage disponiblel");
}else{
    console.log("incimpatible Con localstorage");
}

//Guardar datos

localStorage.setItem("titulo","Curso de Symfony de Victor Robels");

//recuperar elemento

document.querySelector("#peliculas").innerHTML=localStorage.getItem("titulo");

//Guardar objectos

var usuario={
    nombre:"Jordaly Castillo",
    email:"jordalycastillo@gmail.com",
    web:"victorroblesweb.com"
}

localStorage.setItem("usuario",JSON.stringify(usuario));

//Recuperar objeto

var userJs = JSON.parse(localStorage.getItem("usuario"));

console.log(userJs);

document.querySelector("#datos").append(userJs.web+" - "+userJs.nombre);

//Borrar el elemento "usuario" de LocalStorage

localStorage.removeItem("usuario");

// Borrar todos los elementos de LocalStorage

localStorage.clear();


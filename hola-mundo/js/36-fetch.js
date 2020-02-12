"use strict";

// Fetch (ajax) y peticiones a servicios / apis rest

var div_usuarios = document.querySelector("#usuarios");
var div_profesor = document.querySelector("#profesor");
var div_janet = document.querySelector("#janet");

getUsuarios()
  .then(data => data.json())
  .then(users => {
    listadoUsuarios(users.data);

    return getInfo();
  })
  .then(data => {
    div_profesor.innerHTML = data;

    return getJanet();
  })
  .then(data => data.json())
  .then(janet => {
    mostrarJnet(janet.data);
  })
  .catch(error => {
    alert("Error en las peticiones");
  });

  
//1ST PROMISE

function getUsuarios() {
  return fetch("https://reqres.in/api/users");
}

function listadoUsuarios(usuarios) {
  usuarios.map((user, i) => {
    let img=document.createElement("img");
    let nombre = document.createElement("h3");
    nombre.innerHTML = i + "-" + user.first_name + " " + user.last_name;
    img.src=user.avatar;
    div_usuarios.appendChild(nombre);
    div_usuarios.appendChild(img);
    document.querySelector(".loading").style.display = "none";
  });
}

//2ND PROMISE

function getInfo() {
  var profesor = {
    nombre: "Victor",
    apellidos: "Robrles",
    url: "victorroblesweb.es"
  };

  return new Promise((resolve, reject) => {
    var profesor_string = "";
    setTimeout(function() {
      profesor_string = JSON.stringify(profesor);
      if (typeof profesor_string != "string" || profesor_string == "")
        return reject("error");
      return resolve(profesor_string);
    }, 3000);
  });
}

//3RD Promise

function getJanet() {
  return fetch("https://reqres.in/api/users/2");
}

function mostrarJnet(user) {
  
  let nombre = document.createElement("h4");
  let avatar = document.createElement("img");
  nombre.innerHTML = user.first_name + " " + user.last_name;
  avatar.src = user.avatar;
  avatar.width = "100";
  avatar.alt="Janet";
  div_janet.appendChild(nombre);
  div_janet.appendChild(avatar);
  document.querySelector("#janet .loading").style.display = "none";
}



/* 
  
  
  "use strict";

// Fetch (ajax) y peticiones a servicios / apis rest
var usuarios = [];

var div_usuarios = document.querySelector("#usuarios");

fetch("https://reqres.in/api/users")
  .then(data => data.json())
  .then(users => {
    usuarios = users.data;
    console.log(usuarios);

    usuarios.map((user, i) => {
      let nombre = document.createElement("h3");
      nombre.innerHTML = i + "-" + user.first_name + " " + user.last_name;
      div_usuarios.appendChild(nombre);
      document.querySelector(".loading").style.display = "none";
    });
  });

  */

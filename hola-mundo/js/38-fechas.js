
"use strict"

var fecha=new Date();

var year=fecha.getFullYear();
var mes=fecha.getMonth();
var dia=fecha.getDate();
var hora=fecha.getHours();
var minute=fecha.getMinutes();

var textHora=`
    El año es: ${year}
    El mes es : ${mes}
    El día es : ${dia}
    La hora es : ${hora}:${minute}
`;

console.log(textHora);
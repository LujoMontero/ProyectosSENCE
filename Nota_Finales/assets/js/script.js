var nombre = document.getElementById("nombre");
var carrera = document.getElementById("carrera");
var Nota1 = document.getElementById("Nota1");
var Nota2 = document.getElementById("Nota2");
var Nota3 = document.getElementById("Nota3");

nombre.innerHTML = prompt("Ingrese el nombre");
carrera.innerHTML = prompt("Ingrese la carrera");

let NotaHtml1 = parseFloat(prompt("Ingrese la Nota 1 de HTML"));
let NotaHtml2 = parseFloat(prompt("Ingrese la Nota 2 de HTML"));
let NotaHtml3 = parseFloat(prompt("Ingrese la Nota 3 de HTML"));

let promedio =  (NotaHtml1 + NotaHtml2 + NotaHtml3) / 3;

Nota1.innerHTML = NotaHtml1;
Nota2.innerHTML = NotaHtml2;
Nota3.innerHTML = NotaHtml3;
Promedio1.innerHTML = promedio;

let NotaCss1 = parseFloat(prompt("Ingrese la Nota 1 de CSS"));
let NotaCss2 = parseFloat(prompt("Ingrese la Nota 2 de CSS"));
let NotaCss3 = parseFloat(prompt("Ingrese la Nota 3 de CSS"));

let promedioC2 =  (NotaCss1 + NotaCss2 + NotaCss3) / 3;

Nota4.innerHTML = NotaCss1;
Nota5.innerHTML = NotaCss2;
Nota6.innerHTML = NotaCss3;
Promedio2.innerHTML = promedioC2;

let NotaJs1 = parseFloat(prompt("Ingrese la Nota 1 de JavaScript"));
let NotaJs2 = parseFloat(prompt("Ingrese la Nota 2 de JavaScript"));
let NotaJs3 = parseFloat(prompt("Ingrese la Nota 3 de JavaScript"));

let promedioJs3 =  (NotaJs1 + NotaJs2 + NotaJs3) / 3;

Nota7.innerHTML = NotaJs1;
Nota8.innerHTML = NotaJs2;
Nota9.innerHTML = NotaJs3;
Promedio3.innerHTML = promedioJs3;
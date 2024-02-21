function asignarTextoElemento(elemento, texto) {
  let elementoHTML = document.querySelector(elemento);
  elementoHTML.innerHTML = texto;
  return;
}
var imc = 0;
function calcularIMC() {
  let peso = parseFloat(document.getElementById("peso").value);
  let altura = parseFloat(document.getElementById("altura").value);
  let mayoraltura = 2.7;

  while ( isNaN(peso) || isNaN(altura) || peso < 0 || altura < 0 || altura > mayoraltura) {
    alert("Ingresa valores válidos!");
    return;
  }

  imc = peso / (altura * altura);

  //alert("tu imc es: " + imc);

  // resultadoIMC.innerHTML = "Tu IMC es: <b>" + imc.toFixed(2) + "</b>";

  asignarTextoElemento("h3", "Resultado");

  if (imc < 18.5) {
    asignarTextoElemento(
      "h6",
      "Tu IMC es de " + imc.toFixed(1) + "<br> Tienes un peso Bajo"
    );

    //alert('Bajo peso');
  } else if (imc >= 18.5 && imc < 25) {
    //clasificacionPeso.innerHTML = "Tu clasificación de peso es: <b>Normal</b>";
    asignarTextoElemento(
      "h6",
      "Tu IMC es de " + imc.toFixed(1) + "<br> Tienes un peso Normal"
    );
    //alert('peso Normal');
  } else if (imc >= 25 && imc < 30) {
    //clasificacionPeso.innerHTML = "Tu clasificación de peso es: <b>Sobrepeso</b>";
    asignarTextoElemento(
      "h6",
      "Tu IMC es de " +
        imc.toFixed(1) +
        "<br> Tienes una clasificación de Sobrepeso"
    );
    //alert('Sobrepeso');
  } else if (imc >= 30) {
    //clasificacionPeso.innerHTML = "Tu clasificación de peso es: <b>Obeso</b>";
    asignarTextoElemento(
      "h6",
      "Tu IMC es de " +
        imc.toFixed(1) +
        "<br> Tienes una clasificación de Obesidad"
    );
  }
}

document.getElementById("peso").addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    calcularIMC();
  }
});

document.getElementById("altura").addEventListener("keypress", function (event){
  if (event.key === "Enter") {
    calcularIMC();
  }
  });

var arreglo = [];
var datos = {};

function guardarimc() {
  
  let nombre = document.getElementById("nombre").value; //No se como ponerlo
  let id = document.getElementById("ID").value;
  if (!datos[id]){
    datos[id] = [];
  }
  datos[id].push(imc)
  console.log(datos);
}

function verhistorial() {
  let id = document.getElementById("ID").value;
  var arreglo = datos[id];
  console.log("ID: ",id);
  console.log("Valores: ",arreglo);
}




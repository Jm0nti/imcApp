function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function calcularIMC() {
    let peso = parseFloat(document.getElementById("peso").value);
    let altura = parseFloat(document.getElementById("altura").value);


    while (isNaN(peso) || isNaN(altura)) {
        alert("Ingresa valores válidos!");
        return;
    }

    //alert("tu peso es: " + peso + " y tu altura es: " + altura);
  
    var imc = peso / (altura * altura);

    //alert("tu imc es: " + imc);
  
    // resultadoIMC.innerHTML = "Tu IMC es: <b>" + imc.toFixed(2) + "</b>";

    asignarTextoElemento('h3',"Resultado");
  
    if (imc < 18.5) {
        asignarTextoElemento('h6','Tu IMC es de ' + imc.toFixed(1) +'<br> Tienes un peso Bajo');

      //alert('Bajo peso');


    } else if (imc >= 18.5 && imc < 25) {
      //clasificacionPeso.innerHTML = "Tu clasificación de peso es: <b>Normal</b>";
      asignarTextoElemento('h6','Tu IMC es de ' + imc.toFixed(1) +'<br> Tienes un peso Normal');
      //alert('peso Normal');
    } else if (imc >= 25 && imc < 30) {
      //clasificacionPeso.innerHTML = "Tu clasificación de peso es: <b>Sobrepeso</b>";
      asignarTextoElemento('h6','Tu IMC es de ' + imc.toFixed(1) +'<br> Tienes una clasificación de Sobrepeso');
      //alert('Sobrepeso');
    } else if (imc >= 30) {
      //clasificacionPeso.innerHTML = "Tu clasificación de peso es: <b>Obeso</b>";
      asignarTextoElemento('h6','Tu IMC es de ' + imc.toFixed(1) +'<br> Tienes una clasificación de Obesidad');
    }
  }


  document.getElementById('peso').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        calcularIMC();
    }
});

document.getElementById('altura').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        calcularIMC();
    }
});

function redirigir() {
    // Redirigir al usuario a la página local llamada "otra_pagina.html"
    window.location.href = "Calculadora.html";
}

// Codigo para que cuando se presione enter, cuente como si le dieras a calcular
document.addEventListener("DOMContentLoaded", function () {
  document
    .getElementById("input_peso")
    .addEventListener("keypress", function (event) {
      if (event.key === "Enter") {
        calcularIMC();
      }
    });

  document
    .getElementById("input_altura")
    .addEventListener("keypress", function (event) {
      if (event.key === "Enter") {
        calcularIMC();
      }
    });
});

var imc = 0;
function calcularIMC() {
  let peso = parseFloat(document.getElementById("input_peso").value);
  let altura = parseFloat(document.getElementById("input_altura").value);

  // Alerta en caso de que se ingresen valores incorrectos
  if (
    isNaN(peso) ||
    isNaN(altura) ||
    peso > 700 ||
    altura > 3 ||
    peso <= 0 ||
    altura <= 0
  ) {
    alert("Ingresa valores válidos!");
    return;
  } else {
    // Se calcula IMC
    imc = peso / (altura * altura);
    let resultado = "";

    // Interpretacion de resultados
    if (imc < 18.5) {
      // Bajo
      resultado = "Bajo peso";
    } else if (imc >= 18.5 && imc < 25) {
      // Normal
      resultado = "Peso normal";
    } else if (imc >= 25 && imc < 30) {
      // Sobrepeso
      resultado = "Sobrepeso";
    } else if (imc >= 30) {
      // Obsesidad
      resultado = "Obesidad";
    }

    document.getElementById("resultado").innerHTML =
      "Resultado: <br>Tu IMC es de " + imc.toFixed(2) + ". <br>" + resultado;
      var tabla2 = document.getElementById("historial_table");
      if (tabla2.style.display != "none"){
        
        tabla2.style.display = "none"
      }
  }
}

var datos = [];

function guardarIMC() {
  let peso = parseFloat(document.getElementById("input_peso").value);
  let altura = parseFloat(document.getElementById("input_altura").value);

  // Alerta en caso de que se ingresen valores incorrectos
  if (isNaN(peso) || isNaN(altura) || peso > 700 || altura > 3 || peso <= 0 || altura <= 0) {
    alert("Ingresa valores válidos!");
    return;
  }

  datos.push({altura: altura.toFixed(2), peso: peso.toFixed(2), IMC: imc.toFixed(2)})

  document.getElementById("input_altura").value = "";
  document.getElementById("input_peso").value = "";
  document.getElementById("resultado").innerHTML = "";

  var tabla2 = document.getElementById("historial_table");
  if (tabla2.style.display != "none"){
    tabla2.style.display = "none"
    verHistorial()
  }

}


function verHistorial() {
  // Obtener la referencia de la tabla
  var tabla = document
    .getElementById("historial_table")
    .getElementsByTagName("tbody")[0];

    
  // Limpiar cualquier contenido existente en la tabla
  tabla.innerHTML = "";

  // Recorrer el array de datos y agregar filas a la tabla
  for (var i = 0; i < datos.length; i++) {
    var fila = tabla.insertRow();
    var celdaAltura = fila.insertCell(0);
    var celdaPeso = fila.insertCell(1);
    var celdaIMC = fila.insertCell(2);

    // Asignar los valores del array a las celdas
    celdaAltura.textContent = datos[i].altura;
    celdaPeso.textContent = datos[i].peso;
    celdaIMC.textContent = datos[i].IMC;
  }


  var tabla2 = document.getElementById("historial_table");
  if (tabla2.style.display === "none"){
  
    tabla2.style.display = "table";
  }
  else {
    tabla2.style.display = "none"; // Si está visible, ocultarla
  }
  
}

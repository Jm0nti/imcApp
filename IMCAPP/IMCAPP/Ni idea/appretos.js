let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 120;

//Al presionar tecla enter ejecutar accion de adivinar

document.addEventListener("keydown",enter);

function enter(event){

    const tecla = event.key;
    if (tecla === "Enter"){
        verificarIntento();
    }
}

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);

    //No ingreso nada
    if (numeroDeUsuario === "" ||isNaN(numeroDeUsuario)){
        alert("No ingresaste ninguna edad");
        return false;
    }

    if (numeroDeUsuario > numeroMaximo){
        alert("Ingresaste un numero mayor a 120");
        limpiarCaja();
        return false;
    }

    if (numeroDeUsuario < 1){
        alert("Ingresaste un numero menor a 1");
        limpiarCaja();
        return false;
    }

    if (numeroDeUsuario === numeroSecreto) {
        asignarTextoElemento('p',`Adivinaste mi edad en ${intentos} ${(intentos === 1) ? 'vez' : 'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        //El usuario no acertó.
        //console.log(numeroDeUsuario); //innecesario
        if (numeroDeUsuario > numeroSecreto) {
            asignarTextoElemento('p','Mi edad es menor');
        } else {
            asignarTextoElemento('p','Mi edad es mayor');
        }
        intentos++;
        limpiarCaja();
    }
    return;
}

function limpiarCaja() {
    document.querySelector('#valorUsuario').value = '';
}

function generarNumeroSecreto() {
    let numeroGenerado =  Math.floor(Math.random()*numeroMaximo)+1;

    //console.log(numeroGenerado); //innecesario
    //console.log(listaNumerosSorteados); //innecesario

    

    //Si ya sorteamos todos los números
    if (listaNumerosSorteados.length == numeroMaximo) {
        asignarTextoElemento('p','Ya probaste todas las posibilidades');
    } else {
        //Si el numero generado está incluido en la lista 
        if (listaNumerosSorteados.includes(numeroGenerado)) {
            return generarNumeroSecreto();
        } else {
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}

function condicionesIniciales() {
    asignarTextoElemento('h1','¡Soy de otro planeta, adivina mi edad en años terrestres!');
    asignarTextoElemento('p',`Indica un número del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
    //console.log(numeroSecreto); //innecesario
}

function reiniciarJuego() {
    //limpiar caja
    limpiarCaja();
    //Indicar mensaje de intervalo de números 
    //Generar el número aleatorio
    //Inicializar el número intentos
    condicionesIniciales();
    //Deshabilitar el botón de nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled','true');
    
}

condicionesIniciales();
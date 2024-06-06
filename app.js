let puntosUsuario = 0;
let puntosPC = 0;

let instrucciones = document.querySelector("#instrucciones");
let contenedorPuntosUsuario = document.querySelector("#puntos-usuario");
let contenedorPuntosPC = document.querySelector("#puntos-computadora");
let mensaje = document.querySelector("#mensaje");
let contenedorGanaPunto = document.querySelector("#gana-punto");
let eligeTuAtaque = document.querySelector("#elige-tu-ataque");

let contenedorEleccionUsuario = document.querySelector("#eleccion-usuario");
let contenedorEleccionPC = document.querySelector("#eleccion-computadora");

let botonesAtaques = document.querySelectorAll(".ataque");
botonesAtaques.forEach(boton => {
    boton.addEventListener("click", iniciarTurno);
});

function iniciarTurno(e) {
    
    let eleccionPC = Math.floor(Math.random() * 3);
    let eleccionUsuario = e.currentTarget.id;

    // piedra => 0
    // papel => 1
    // tijera => 2

    if (eleccionPC === 0) {
        eleccionPC = "piedra";
    } else if (eleccionPC === 1) {
        eleccionPC = "papel"
    } else if (eleccionPC === 2) {
        eleccionPC = "tijera"
    }

    // piedra vence a tijera
    // tijera vence a papel
    // papel vence a piedra
    // si son iguales es empate

    if (
        (eleccionUsuario === "piedra" && eleccionPC === "tijera") ||
        (eleccionUsuario === "tijera" && eleccionPC === "papel") ||
        (eleccionUsuario === "papel" && eleccionPC === "piedra")
    ) {
        ganaUsuario();
    } else if (
        (eleccionPC === "piedra" && eleccionUsuario === "tijera") ||
        (eleccionPC === "tijera" && eleccionUsuario === "papel") ||
        (eleccionPC === "papel" && eleccionUsuario === "piedra")
    ) {
        ganaPC();
    } else {
        empate();
    }

    mensaje.classList.remove("disabled");
    contenedorEleccionUsuario.innerText = eleccionUsuario;
    contenedorEleccionPC.innerText = eleccionPC;

    if (puntosUsuario === 3 || puntosPC === 3) {

        if (puntosUsuario === 3) {
            instrucciones.innerText = "¡Ganaste el juego!"
        }

        if (puntosPC === 3) {
            instrucciones.innerText = "¡La computadora ganó el juego!"
        }

        eligeTuAtaque.classList.add("disabled");
        reiniciar.classList.remove("disabled");
        reiniciar.addEventListener("click", reiniciarJuego);
    }


}

function ganaUsuario() {
    puntosUsuario++;
    contenedorPuntosUsuario.innerText = puntosUsuario;
    contenedorGanaPunto.innerText = "¡Ganaste un punto!"
}

function ganaPC() {
    puntosPC++;
    contenedorPuntosPC.innerText = puntosPC;
    contenedorGanaPunto.innerText = "¡La computadora ganó un punto!"
}

function empate() {
    contenedorGanaPunto.innerText = "¡Empate!"
}

function reiniciarJuego() {
    reiniciar.classList.add("disabled");
    eligeTuAtaque.classList.remove("disabled");
    mensaje.classList.add("disabled");

    puntosUsuario = 0;
    puntosPC = 0;
    
    contenedorPuntosUsuario.innerText = puntosUsuario;
    contenedorPuntosPC.innerText = puntosPC;

    instrucciones.innerText = "El primero en llegar a 3 puntos gana."
}




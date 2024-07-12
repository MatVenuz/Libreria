let miBoton = document.getElementById("miBoton");
let miBotonP = document.getElementById("miBotonP");
let miBotonS = document.getElementById("miBotonS");
let miBotonR = document.getElementById("miBotonR");
let volumenControl = document.getElementById("volumen");


let canciones = [
    "audio/Venezuela.mp3",
    "audio/Si Yo Vuelvo a Encontrarla.mp3",
    "audio/Manana.mp3",
    "audio/MI AMANTE NINA MI COMPANERA.mp3",
    "audio/Cuerpo a Cuerpo.mp3"
];
    
let indiceCancion = 0;
let audio = new Audio(canciones[indiceCancion]);

function playMusic() {
    audio.play();
}

function pauseMusic() {
    audio.pause();
}

function siguienteCancion() {
    audio.pause();
    indiceCancion = (indiceCancion + 1) % canciones.length;
    audio = new Audio(canciones[indiceCancion]);
    audio.volume = volumenControl.value;
    audio.play();
}

function cancionAnterior() {
    audio.pause();
    indiceCancion = (indiceCancion - 1 + canciones.length) % canciones.length;
    audio = new Audio(canciones[indiceCancion]);
    audio.volume = volumenControl.value;
    audio.play();
}

function cambiarVolumen() {
    audio.volume = volumenControl.value;
}

miBoton.addEventListener("click", playMusic);
miBotonP.addEventListener("click", pauseMusic);
miBotonS.addEventListener("click", siguienteCancion);
miBotonR.addEventListener("click", cancionAnterior);
volumenControl.addEventListener("input", cambiarVolumen);
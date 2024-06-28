let miBoton = document.getElementById("miBoton");
let miBotonP = document.getElementById("miBotonP");
let audio = new Audio("audio/Venezuela.mp3");

function playMusic() {
    audio.play();
}

function pauseMusic() {
    audio.pause();
}

miBoton.addEventListener("click", playMusic);
miBotonP.addEventListener("click", pauseMusic);

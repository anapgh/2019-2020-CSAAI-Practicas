console.log("Ejecutando JS...");

//-- Obtener los Botones
const click = document.getElementById("click");
const what = document.getElementById("what");

//-- Crear los elementos de sonido
const click_sound = new Audio('click.mp3');
const what_sound = new Audio("what.mp3");

//-- Hago las funciones de retrollamada
click.onclick = () => {
  click_sound.currentTime = 0; // Inicializa el tiempo a 0
  click_sound.play(); // Sonar
}

what.onclick = () => {
  what_sound.currentTime = 0;
  what_sound.play();
}

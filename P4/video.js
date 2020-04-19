console.log("Ejecutando JS...");

//----- Obtener elemento de video y configurarlo
const video1 = document.getElementById("video01");
const video2 = document.getElementById("video02");
const video3 = document.getElementById("video03");
const display = document.getElementById("display");

//-- Tamaño de la pantalla de video
video1.width = 200;
video1.height = 100;
video2.width = 200;
video2.height = 100;
video3.width = 200;
video3.height = 100;
display.width = 400;
display.height = 200;

//-- Obtener el boton de ver
const play1 = document.getElementById("boton1");
const play2 = document.getElementById("boton2");
const play3 = document.getElementById("boton3");

//-- Fuentes de video
video1.src = "https://gsyc.urjc.es/jmplaza/csaai/realizador-fuente1.mp4"
video2.src = "https://gsyc.urjc.es/jmplaza/csaai/realizador-fuente2.mp4"
video3.src = "https://gsyc.urjc.es/jmplaza/csaai/realizador-fuente3.mp4"

//-- Funciones de retrollamada al display
play1.onclick = () => {
  console.log("Click Video 1!");
  display.src = video1.src;
  display.currentTime = video1.currentTime; // Sincronizamos los videos
};

play2.onclick = () => {
  console.log("Click Video 2!");
  display.src = video2.src;
  display.currentTime = video2.currentTime; // Sincronizamos los videos
};

play3.onclick = () => {
  console.log("Click Video 3!");
  display.src = video3.src;
  display.currentTime = video3.currentTime; // Sincronizamos los videos
};

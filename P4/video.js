console.log("Ejecutando JS...");

//-- Obtener elemento de video y configurarlo
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
display.width = 620;
display.height = 200;

//-- Fuentes de video
video1.src = "https://gsyc.urjc.es/jmplaza/csaai/realizador-fuente1.mp4"
video2.src = "https://gsyc.urjc.es/jmplaza/csaai/realizador-fuente2.mp4"
video3.src = "https://gsyc.urjc.es/jmplaza/csaai/realizador-fuente3.mp4"
display.src = 'test.mp4'

//-- Obtener el boton de ver
const play1 = document.getElementById("boton1");
const play2 = document.getElementById("boton2");
const play3 = document.getElementById("boton3");
const loop = document.getElementById("loop");
const noloop = document.getElementById("noloop");

//-- Variables del bucle
var sloop = false;
const init = 10;
const finish = init + 2;

function startLoop(){
  if(sloop == true){
    video4.currentTime = 10;

  }
}



loop.onclick = () => {
  console.log('Modo bucle');
  loop.style.border = '5px solid blue';
  noloop.style.border = '0px';
  loop.style.border = '5px solid gray';
  display.currentTime = init;
  sloop = true;
}

setInterval(()=>{
  if(sloop){
    if (display.currentTime > finish){
        display.currentTime = init;
    }
  }
},20); //-- timer

noloop.onclick = () => {
  console.log('Modo NO bucle');
  sloop = false;
  noloop.style.border = '5px solid blue';
  loop.style.border = '0px';
  // Volvemos a sincronizar con las miniaturas
  if (video1.style.border == '5px solid orange'){
    display.currentTime = video1.currentTime;
  }
  if (video2.style.border == '5px solid orange'){
    display.currentTime = video2.currentTime;
  }
  if (video3.style.border == '5px solid orange'){
    display.currentTime = video3.currentTime;
  }
}

//-- Funciones de retrollamada al display
play1.onclick = () => {
  console.log("Click Video 1!");
  display.src = video1.src;
  display.currentTime = video1.currentTime; // Sincronizamos los videos
  video1.style.border = '5px solid orange';
  video2.style.border = '0px';
  video3.style.border = '0px';
};

video1.onmouseover = () => {
    video1.muted = false;
}

video1.onmouseout = () => {
  video1.muted = true;
}

play2.onclick = () => {
  console.log("Click Video 2!");
  display.src = video2.src;
  display.currentTime = video2.currentTime; // Sincronizamos los videos
  video1.style.border = '0px';
  video2.style.border = '5px solid orange';
  video3.style.border = '0px';
};

video2.onmouseover = () => {
    video2.muted = false;
}

video2.onmouseout = () => {
  video2.muted = true;
}

play3.onclick = () => {
  console.log("Click Video 3!");
  display.src = video3.src;
  display.currentTime = video3.currentTime; // Sincronizamos los videos
  video1.style.border = '0px';
  video2.style.border = '0px';
  video3.style.border = '5px solid orange';
};

video3.onmouseover = () => {
  video3.muted = false;
}

video3.onmouseout = () => {
  video3.muted = true;
}

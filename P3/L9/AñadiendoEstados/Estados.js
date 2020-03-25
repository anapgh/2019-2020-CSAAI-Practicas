//-- Inicializamos en JS
console.log('Empezando el JS...');

//-- Obtener el objeto canvas
var canvas = document.getElementById('canvas');

// Las imprimimos en la consola
console.log(`canvas: Anchura: ${canvas.width}, Altura: ${canvas.height}`);

//-- Sacamos el contexto para poder dibujar en el canvas
var ctx = canvas.getContext('2d');

//-- Obtener sonidos
const sonido_raqueta = new Audio("pong-raqueta.mp3");
const sonido_rebote = new Audio("pong-rebote.mp3");

//-- Estados del juego
const ESTADO = {
  INIT: 0,
  SAQUE: 1,
  JUGANDO: 2,
}

//-- Variable de ESTADO
// Arrancamos desde el estado inicial
let estado = ESTADO.INIT;

//-- Pintar todo los objetos del canvas
function draw(){

  //-- Dibujar texto de comenzar
  if(estado == ESTADO.INIT){
    ctx.font = "40px Arial";
    ctx.fillStyle = "green";
    ctx.fillText("Pulsa Start!", 30, 350);
  }

  //-- Dibujar el texto de sacar
  if (estado == ESTADO.SAQUE) {
    ctx.font = "40px Arial";
    ctx.fillStyle = "yellow";
    ctx.fillText("Saca!", 30, 350);
  }

  //-- Solo en el estado de jugando
  if (estado == ESTADO.JUGANDO) {
    //-- Dibujar la Bola
    bola.draw();
  }

  //--Dibujo raquetas
  // Raqueta izquierda
  raqI.draw();

  // Raqueta derecha
  raqD.draw();

  //--Dibujo la red
  console.log('dibujando red');
  ctx.beginPath();
  incr = 0
  while(incr <= canvas.height){
    ctx.moveTo(300,incr);
    incr += 10;
    ctx.lineTo(300,incr);
    incr += 10;
    ctx.strokeStyle = 'white';
    ctx.lineWidth = 2;
    ctx.stroke();
  }

   //-- Dibujar tanteo
   ctx.font = '100px Arial'
   ctx.fillStyle = "white";
   ctx.fillText('0', 220,80);
   ctx.fillText('2', 350,80);
}

//-- Bucle principal de la animación
// Se repetira con una frecuencia de 60Hz
function animacion(){

  //-- Actualizar las posiciones de los objetos móviles

  //-- -- Actualizar coordenada x e y de las raquetas, en funcion de la velocidad
  // Raqueta izquierda
  raqI.update();
  // Raqueta derecha
  raqD.update();

  //-- Comprobar si la bola ha alcanzado el límite derecho o izquierdo
  //-- Si es asi, se cambia el signo de la velocidad, para que 'rebote'
  //-- Y vaya en sentido opuesto
  if((bola.x >= canvas.width)||(bola.x <= 0.0)){
    //-- Hay colision. Cambiar el signo de la bola
    bola.vx = bola.vx * -1;
    //-- Reproducir sonido
    sonido_rebote.currentTime = 0;
    sonido_rebote.play();
  }else if ((bola.y >= canvas.height)||(bola.y <= 0.0)) {
    //-- Hay colision. Cambiar el signo de la bola
    bola.vy = bola.vy * -1;
    //-- Reproducir sonido
    sonido_rebote.currentTime = 0;
    sonido_rebote.play();
  }

  //-- Comprobacion se ha habido colision entre la bola y las raquetas
  // Raqueta izquierda
  // Comprobamos en el eje horizontal si la componente x de la bola esta dentro
  // de la raqueta (siendo la anchura de esta 10 en este caso)
  // Y el eje vertical igual pero con la componente y, y con altura 40 de la raqueta
  if (bola.x >= raqI.x && bola.x <= (raqI.x + raqI.width) &&
      bola.y >= raqI.y && bola.y <= (raqI.y + raqI.height)){
    bola.vx = bola.vx * -1;
    //-- Reproducir sonido
    sonido_raqueta.currentTime = 0;
    sonido_raqueta.play();

  }

  // Raqueta derecha
  //-- Comprobar si hay colisión con la raqueta derecha
  if (bola.x >= raqD.x && bola.x <=(raqD.x + raqD.width) &&
      bola.y >= raqD.y && bola.y <=(raqD.y + raqD.height)) {
    bola.vx = bola.vx * -1;
    //-- Reproducir sonido
    sonido_raqueta.currentTime = 0;
    sonido_raqueta.play();
  }

  //-- Actualizar coordenada x e y de la bola, en funcion de la velocidad
  bola.update();


  //-- Borrar el canvas
  // Esquina superior izquierda del canvas (0,0), y anchura y altura
  ctx.clearRect(0,0, canvas.width, canvas.height);

  //-- Dibujar el nuevo frame
  draw();

}

//-- Inicializa la bola a su posición inicializa
const bola = new Bola(ctx);
bola.init();

//-- Crear las raquetas.
const raqI = new Raqueta(ctx);
const raqD = new Raqueta(ctx);

//-- Inicializar la raqueta izquierda a su posición inicial.
raqI.init();


//-- Cambiar las coordenadas de la raqueta derecha.
raqD.x_ini = 540;
raqD.y_ini = 300;
raqD.init();


//-- Arrancar la animacion
// Con una frecuencia de 60HZ, 17ms
setInterval(() => {
  animacion();
},16);

//-- Retrollamada de las Teclas
window.onkeydown = (e) => {
  //-- En el estado inicial no se
  //-- hace caso de las teclas
  if (estado == ESTADO.INIT)
    return;

  switch (e.key) {
    case 'a':
      //-- Tecla a: baja la raqueta izquierda.
      raqI.v = raqI.v_ini;
      break;
    case 'q':
      //-- Tecla q: sube la raqueta izquierda.
      raqI.v = raqI.v_ini * -1;
      break;
    case "l":
      //-- Tecla l: baja la raqueta derecha.
      raqD.v = raqD.v_ini;
      break;
    case "p":
      //-- Tecla p: sube la raqueta derecha.
      raqD.v = raqD.v_ini * -1;
      break;
    case 's':
      //-- Establecer posicion incial de la bola
      //-- Tecla s: Saque
      //-- El saque solo funciona en el estado de SAQUE
      if (estado == ESTADO.SAQUE) {
        //-- Reproducir sonido
        sonido_raqueta.currentTime = 0;
        sonido_raqueta.play();
        //-- Levar la bola a su posicion inicial
        bola.init();
        //-- Darle velocidad
        bola.vx = bola.vx_ini;
        bola.vy = bola.vy_ini;
        //-- Cambiar al estado de JUGANDO
        estado = ESTADO.JUGANDO;

        return false;
      }
    default:
  }
}

//-- Retrollamada de liberación de las Teclas
window.onkeyup = (e) => {
  if (e.key == 'a' || e.key == 'q'){
    // Quitar la velocidad de la raqueta
    raqI.v = 0;
  }

  if (e.key == "l" || e.key == "p") {
    // Quitar la velocidad de la raqueta
    raqD.v = 0;
  }
}

//-- Boto de arranque
const start = document.getElementById("start");

start.onclick = () => {
  estado = ESTADO.SAQUE;
  console.log("SAQUE!");
  canvas.focus();
}

//-- Boton de stop
const stop = document.getElementById("stop");

stop.onclick = () => {
  //-- Volver al estado inicial
  estado = ESTADO.INIT;
  bola.init();
  start.disabled = false;
}

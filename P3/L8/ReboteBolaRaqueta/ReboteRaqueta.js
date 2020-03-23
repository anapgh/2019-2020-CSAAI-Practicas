//-- Inicializamos en JS
console.log('Empezando el JS...');

//-- Obtener el objeto canvas
var canvas = document.getElementById('canvas');

// Las imprimimos en la consola
console.log(`canvas: Anchura: ${canvas.width}, Altura: ${canvas.height}`);

//-- Sacamos el contexto para poder dibujar en el canvas
var ctx = canvas.getContext('2d');

//-- Variables para la bola
// Modificaremos la coordenada x para que mueva horizontalmente hacia la derecha
// La Inicializamos
let bola_x = 50;
let bola_vx = 0; // Velocidad eje horizontal(x)
// Modificaremos la coordenada x para que mueva horizontalmente hacia la derecha
// La Inicializamos
let bola_y = 200;
let bola_vy = 0;

//-- Variables para la raqueta izquierda
let raqI_x = 50; // coordenada x
let raqI_y = 100; // coordenada y
let raqI_v = 0; // Velocidad

//-- Pintar todo los objetos del canvas
function draw(){
  //--Dibujo la bola
  ctx.beginPath();
  ctx.fillStyle ='white';
  ctx.rect(bola_x,200,10,10);
  ctx.fill();

  //--Dibujo raquetas
  ctx.beginPath();
  ctx.fillStyle = 'red'; // color relleno
  // Raqueta izquierda
  ctx.fillRect(raqI_x,raqI_y,10,40); //rellenar rectangulo - x,y,anchura, Altura
  // Raqueta derecha
  ctx.fillRect(550,300,10,40);

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

  //-- Comprobar si la bola ha alcanzado el límite derecho o izquierdo
  //-- Si es asi, se cambia el signo de la velocidad, para que 'rebote'
  //-- Y vaya en sentido opuesto
  if((bola_x >= canvas.width)||(bola_x <= 0.0)){
    //-- Hay colision. Cambiar el signo de la bola
    bola_vx = bola_vx * -1;
    sonido.play();
  }else if ((bola_y >= canvas.height)||(bola_y <= 0.0)) {
    //-- Hay colision. Cambiar el signo de la bola
    bola_vy = bola_vy * -1;
    sonido.play();
  }

  //-- Comprobacion se ha habido colision entre la bola y las raquetas
  // Raqueta izquierda
  // Comprobamos en el eje horizontal si la componente x de la bola esta dentro
  // de la raqueta (siendo la anchura de esta 10 en este caso)
  // Y el eje vertical igual pero con la componente y, y con altura 40 de la raqueta
  if (bola_x >= raqI_x && bola_x <= (raqI_x + 10) &&
      bola_y >= raqI_y && bola_y <= (raqI_y + 40)){
    bola_vx = bola_vx * -1;
    console.log('Colision');
  }

  //-- Actualizar coordenada x e y de la bola, en funcion de la velocidad
  bola_x += bola_vx;
  bola_y += bola_vy;

  //-- -- Actualizar coordenada x e y de las raquetas, en funcion de la velocidad
  // Raqueta izquierda
  raqI_y += raqI_v;

  //-- Borrar el canvas
  // Esquina superior izquierda del canvas (0,0), y anchura y altura
  ctx.clearRect(0,0, canvas.width, canvas.height);

  //-- Dibujar el nuevo frame
  draw();

}
  //-- Arrancar la animacion
  // Con una frecuencia de 60HZ, 17ms
setInterval(() => {
  animacion();
},16);

//-- Retrollamada de las Teclas
window.onkeydown = (e) => {
  switch (e.key) {
    case 'a':
      //-- Tecla a: baja la raqueta izquierda.
      raqI_v = 3;
      break;
    case 'q':
      //-- Tecla q: sube la raqueta izquierda.
      raqI_v = -3;
      break;
    case ' ':
      //-- Establecer posicion incial de la bola
      //-- Tecla ESPACIO: Saque
      bola_x = 50;
      bola_vx = 6;
      bola_y = 200;
      bola_vy = 6;
    default:

  }
}

//-- Retrollamada de liberación de las Teclas
window.onkeyup = (e) => {
  if (e.key == 'a' || e.key == 'q'){
    // Quitar la velocidad de la raqueta
    raqI_v = 0;
  }
}

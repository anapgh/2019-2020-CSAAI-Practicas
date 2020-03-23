//-- Inicializamos en JS
console.log('Empezando el JS...');

//-- Obtener el objeto canvas
var canvas = document.getElementById('canvas');

// Las imprimimos en la consola
console.log(`canvas: Anchura: ${canvas.width}, Altura: ${canvas.height}`);

//-- Sacamos el contexto para poder dibujar en el canvas
var ctx = canvas.getContext('2d');

//-- CONSTANTES DE LOS OBJETOS Y SUS PROPIEDADES
//-- Objeto: bola
const bola = {
  //Constante: tamaño de la bola
  size: 5,

  //  Constante: posicion incial de la bola
  x_ini : 100,
  y_ini : 200,

  // Posicion generica de la bola
  x : 0,
  y : 0,

  // Velocidad inicial de la bola
  vx_ini : 6,
  vy_ini : 2,

  // Velocidad generica de la bola
  // Inicialmente a cero
  vx : 0,
  vy : 0,
}

//-- Objeto raqueta
const raqI = {
  // Costante: tamaño de la raqueta
  width : 10,
  height : 40,

  // Constante: Posicion inicial
  x_ini : 50,
  y_ini : 100,

  // Posicion generica de la raqueta.
   x : 0,
   y : 0,

  // Constante: velocidad
  v_ini : 3,

  // Velocidad(variable)
  v : 0,
}

//-- Pintar todo los objetos del canvas
function draw(){
  //--Dibujo la bola
  ctx.beginPath();
  ctx.fillStyle ='white';
  //x,y,anchura y altura
  ctx.rect(bola.x,bola.y,bola.size,bola.size);
  ctx.fill();

  //--Dibujo raquetas
  ctx.beginPath();
  ctx.fillStyle = 'red'; // color relleno
  // Raqueta izquierda
  //rellenar rectangulo - x,y,anchura, Altura
  ctx.fillRect(raqI.x,raqI.y,raqI.width,raqI.height);
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

  //-- -- Actualizar coordenada x e y de las raquetas, en funcion de la velocidad
  // Raqueta izquierda
  raqI.y += raqI.v;

  //-- Comprobar si la bola ha alcanzado el límite derecho o izquierdo
  //-- Si es asi, se cambia el signo de la velocidad, para que 'rebote'
  //-- Y vaya en sentido opuesto
  if((bola.x >= canvas.width)||(bola.x <= 0.0)){
    //-- Hay colision. Cambiar el signo de la bola
    bola.vx = bola.vx * -1;
    sonido.play();
  }else if ((bola.y >= canvas.height)||(bola.y <= 0.0)) {
    //-- Hay colision. Cambiar el signo de la bola
    bola.vy = bola.vy * -1;
    sonido.play();
  }

  //-- Comprobacion se ha habido colision entre la bola y las raquetas
  // Raqueta izquierda
  // Comprobamos en el eje horizontal si la componente x de la bola esta dentro
  // de la raqueta (siendo la anchura de esta 10 en este caso)
  // Y el eje vertical igual pero con la componente y, y con altura 40 de la raqueta
  if (bola.x >= raqI.x && bola.x <= (raqI.x + 10) &&
      bola.y >= raqI.y && bola.y <= (raqI.y + 40)){
    bola.vx = bola.vx * -1;
    console.log('Colision');
  }

  //-- Actualizar coordenada x e y de la bola, en funcion de la velocidad
  bola.x += bola.vx;
  bola.y += bola.vy;


  //-- Borrar el canvas
  // Esquina superior izquierda del canvas (0,0), y anchura y altura
  ctx.clearRect(0,0, canvas.width, canvas.height);

  //-- Dibujar el nuevo frame
  draw();

}

//-- Inicializa la bola a su posición inicializa
bola.x = bola.x_ini;
bola.y = bola.y_ini;

//-- Inicializar la raqueta izquierda a su posición inicial.
raqI.x = raqI.x_ini;
raqI.y = raqI.y_ini;


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
      raqI.v = raqI.v_ini;
      break;
    case 'q':
      //-- Tecla q: sube la raqueta izquierda.
      raqI.v = raqI.v_ini * -1;
      break;
    case ' ':
      //-- Establecer posicion incial de la bola
      //-- Tecla ESPACIO: Saque
      bola.x = bola.x_ini;
      bola.vx = bola.vx_ini;
      bola.y = bola.y_ini;
      bola.vy = bola.vy_ini;
    default:

  }
}

//-- Retrollamada de liberación de las Teclas
window.onkeyup = (e) => {
  if (e.key == 'a' || e.key == 'q'){
    // Quitar la velocidad de la raqueta
    raqI.v = 0;
  }
}

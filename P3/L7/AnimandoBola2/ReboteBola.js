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
let bola_y = 100;
let bola_vy = 0;

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
  ctx.fillRect(50,100,10,40); //rellenar rectangulo - x,y,anchura, Altura
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

  //-- Actualizar coordenada x e y de la bola, en funcion de la velocidad
  bola_x += bola_vx;
  bola_y += bola_vy;

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

//-- Obtener el boton de sacar
const sacar = document.getElementById("sacar");

//-- Boton de Sacar:
//-- Dar a la bola una velocidad incial
//-- Tambien restablecemos la posicion incial
sacar.onclick = () => {
  //-- Establecer posicion incial de la bola
  bola_x = 50;
  bola_vx = 6;
  bola_y = 100;
  bola_vy = 6;
  console.log("sacar!");
}

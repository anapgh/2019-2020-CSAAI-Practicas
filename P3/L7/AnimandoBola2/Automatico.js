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
  //-- Actualizar coordenada x de la bola
  bola_x += 1;
  
  //-- Borrar el canvas
  // Esquina superior izquierda del canvas (0,0), y anchura y altura
  ctx.clearRect(0,0, canvas.width, canvas.height);

  //-- Dibujar el nuevo frame
  draw();

  //-- Mostrar actividad en la consola
  console.log('Frame!');
}
  //-- Arrancar la animacion
  // Con una frecuencia de 60HZ, 17ms
setInterval(() => {
  animacion();
},16);

//-- Obtener el boton
const reset = document.getElementById("reset");

//-- Boton de Reset:
//-- la bola vuelve a su posicion incial
reset.onclick = () => {
  //-- Establecer posicion incial de la bola
  bola_x = 50;
  console.log("Reset!");
}

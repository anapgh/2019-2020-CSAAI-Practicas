//-- Inicializamos en JS
console.log('Empezando el JS...');

function main(){
  console.log('Pong: Main: Start!');

  //-- Obtener el objeto canvas y asignar sus dimensiones
  var canvas = document.getElementById('canvas');
  canvas.width = 600;
  canvas.height = 400;

  //-- Sacamos el contexto para poder dibujar en el canvas
  var ctx = canvas.getContext('2d');

  //--Dibujo raqueta1
  ctx.fillStyle = 'white'; // color relleno
  ctx.fillRect(50,100,10,40); //rellenar recta - x,y,anchura, Altura

  //--Dibujo raqueta2
  ctx.fillStyle = 'white';
  ctx.fillRect(550,300,10,40);
}

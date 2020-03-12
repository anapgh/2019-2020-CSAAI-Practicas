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
  ctx.fillRect(50,100,10,40); //rellenar rectangulo - x,y,anchura, Altura

  //--Dibujo raqueta2
  ctx.fillStyle = 'white';
  ctx.fillRect(550,300,10,40);

  //--Dibujo la bola
  ctx.fillStyle ='white';
  ctx.rect(370,200,10,10);
  ctx.fill();

  //--Dibujo la red
  console.log('dibujando red');
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



}

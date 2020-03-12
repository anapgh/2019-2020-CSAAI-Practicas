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
  /*ctx.moveTo(300,1);
  ctx.lineTo(300,20);
  ctx.moveTo(300,40);
  ctx.lineTo(300,60);
  ctx.moveTo(300,80);
  ctx.lineTo(300,100);
  ctx.moveTo(300,120);
  ctx.lineTo(300,140);
  ctx.moveTo(300,160);
  ctx.lineTo(300,180);
  ctx.moveTo(300,200);
  ctx.lineTo(300,220);
  ctx.moveTo(300,240);
  ctx.lineTo(300,260);
  ctx.moveTo(300,280);
  ctx.lineTo(300,300);
  ctx.moveTo(300,320);
  ctx.lineTo(300,340);
  ctx.moveTo(300,360);
  ctx.lineTo(300,380);*/
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

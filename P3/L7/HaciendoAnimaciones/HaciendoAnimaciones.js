//-- Inicializamos en JS
console.log('Empezando el JS...');


  //-- Obtener el objeto canvas y asignar sus dimensiones
  var canvas = document.getElementById('canvas');
  canvas.width = 600;
  canvas.height = 400;

  // Las imprimimos en la consola
  console.log(`canvas: Anchura: ${canvas.width}, Altura: ${canvas.height}`);

  //-- Sacamos el contexto para poder dibujar en el canvas
  var ctx = canvas.getContext('2d');

  //--Dibujo la bola
  ctx.beginPath();
  ctx.fillStyle ='white';
  ctx.rect(370,200,10,10);
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

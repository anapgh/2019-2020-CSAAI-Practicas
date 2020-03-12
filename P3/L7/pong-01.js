console.log('Ejecutando JS...');

//-- Obtener el objeto canvas
const canvas = document.getElementById('canvas');

//-- Sus dimensiones las hemos fijado en el fichero HTML
//-- Las imprimimos en la consola
console.log(`canvas: Anchura: ${canvas.width}, Altura: ${canvas.height}`);

//-- Para poder dibujar en el canvas hay que obtener su contexto
const ctx = canvas.getContext('2d');

//-- Dibujar bola
ctx.beginPath(); // metodo que se llama para el estilo de cada elemento
ctx.fillStyle = 'white';

//-- x,y,anchura, Altura
ctx.rect(100,200,10,10);
ctx.fill();

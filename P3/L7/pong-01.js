console.log('Ejecutando JS...');

//-- Obtener el objeto canvas
const canvas = document.getElementById('canvas');

//-- Sus dimensiones las hemos fijado en el fichero HTML
//-- Las imprimimos en la consola
console.log(`canvas: Anchura: ${canvas.width}, Altura: ${canvas.height}`);

//-- Para poder dibujar en el canvas hay que obtener su contexto
const ctx = canvas.getContext('2D');

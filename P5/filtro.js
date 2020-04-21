console.log('Ejecutando JS...');

//-- Obtener elementos del DOM
const canvas = document.getElementById('canvas');
const img = document.getElementById('imagesrc')
const ctx = canvas.getContext('2d');

//-- Acceso a los deslizadores
const des_rojo = document.getElementById('rojo');
const des_verde = document.getElementById('verde')
const des_azul = document.getElementById('azul')

//-- Valor de los deslizadores
const value_rojo = document.getElementById('value_r');
const value_verde = document.getElementById('value_g');
const value_azul = document.getElementById('value_b');

//-- Obtener el boton de GRISES
const grises = document.getElementById('grises')

//-- Obtener boton de COLORES
const colores = document.getElementById('colores')

//-- Funcion de retrollamada de la imagen cargada
//-- la imagen no se carga instantaneamete, sino que lleva tiempo.
//-- Solo podemos acceder a ella una vez que este cargada totalmente.
img.onload = function(){

  console.log("Imagen cargada");

  //-- Se establece como tamaño del canvas el mismo que la imagen Original
  canvas.width = img.width;
  canvas.height = img.height;

  //-- Situar la imagen original en el canvas.
  //-- No se han hecho manipulaciones aun.
  ctx.drawImage(img, 0,0);

  console.log("Imagen lista...");
};

//-- Funcion de retrollamada al boton de colores
colores.onclick = () => {
  //-- Funcion de retrollamada del deslizador
  des_rojo.oninput = () => {
    //-- Mostrar el nuevo valor del deslizador
    value_rojo.innerHTML = des_rojo.value;

    //-- Situar la imagen original en el canvas
    //-- No se han hecho manipulaciones todavia
    ctx.drawImage(img, 0,0);

    //-- Obtener la imagen del canvas en pixeles
    let imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);

    //-- Obtener el array con todos los píxeles
    let data = imgData.data

    //-- Obtener el umbral de la COMPONENTE ROJA del deslizador
    umbral = des_rojo.value

    //-- Filtrar la imagen según el nuevo umbral
    //-- Cambiandole el valor de la componente roja
    for (let i = 0; i < data.length; i+=4) {
      if (data[i] > umbral) //-- Si es mayor que el umbralm le asignamos el valor umbral
        data[i] = umbral;
    }

    //-- Poner la imagen modificada en el canvas
    ctx.putImageData(imgData, 0, 0);
  }
}



//-- Función de retrollamada al boton de GRISES
grises.onclick = () => {
  var brillo = 0;
  //-- Obtenemos la imagen del canvas en pixeles
  let imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);

  //-- Array de todos los pixeles
  let data = imgData.data; // Cada 4 posiciones corresponden a un punto de pixel

  //-- Calcular el brillo para CADA PIXEL y ponerselo por igual a cada componente
  for (var i = 0; i < data.length; i+=4) {
    brillo = (3 * data[i] + 4 * data[i+1] + data[i+2])/8
    data[i] = brillo;
    data[i+1] = brillo;
    data[i+2] = brillo;
  }

  //-- Actualizamos  la imagen del canvas con los nuevos datos
  ctx.putImageData(imgData, 0, 0);
}

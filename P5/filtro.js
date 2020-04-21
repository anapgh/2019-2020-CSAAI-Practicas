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

function filtroColores(data){
  var umbralR = des_rojo.value;
  var umbralG = des_verde.value;
  var umbralB = des_azul.value;
  //-- Filtrar la imagen según el nuevo umbral
  for (var i = 0; i < data.length; i+=4) {
      if (data[i] > umbralR){
        data[i] = umbralR;
      }
      if (data[i+1] > umbralG){
        data[i+1] = umbralG;
      }
      if (data[i+2] > umbralB){
        data[i+2] = umbralB;
      }
    }
}

function deslizadores(){
  ctx.drawImage(img, 0,0);
  //-- Funcion de retrollamada de los deslizadores
  des_rojo.oninput = () => {
    //-- Mostrar el nuevo valor del deslizador
    value_rojo.innerHTML = des_rojo.value;
    //-- Situar la imagen original en el canvas
    ctx.drawImage(img, 0,0);
    //-- Obtener la imagen del canvas en pixeles
    let imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    //-- Obtener el array con todos los píxeles
    let data = imgData.data
    //-- Obtener el umbral de la COMPONENTE ROJA del deslizador
    filtroColores(data);
    //-- Poner la imagen modificada en el canvas
    ctx.putImageData(imgData, 0, 0);
  }

  des_verde.oninput = () => {
    value_verde.innerHTML = des_verde.value;
    ctx.drawImage(img, 0,0);
    let imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    let data = imgData.data
    //-- Obtener el umbral de la COMPONENTE VERDE del deslizador
    filtroColores(data);
    ctx.putImageData(imgData, 0, 0);
  }

  des_azul.oninput = () => {
    value_azul.innerHTML = des_azul.value;
    ctx.drawImage(img, 0,0);
    let imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    let data = imgData.data
    //-- Obtener el umbral de la COMPONENTE AZUL del deslizador
    filtroColores(data);
    ctx.putImageData(imgData, 0, 0);
  }
}

function filtroGrises(){
  ctx.drawImage(img, 0,0);
  let imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
  let data = imgData.data;
  //-- Calcular el brillo para CADA PIXEL y ponerselo por igual a cada componente
  for (var i = 0; i < data.length; i+=4) {
    r = data[i];
    g = data[i+1];
    b = data[i+2];
    brillo = (3 * r + 4 * g + b)/8
    data[i] = brillo;
    data[i+1] = brillo;
    data[i+2] = brillo;
  }
  ctx.putImageData(imgData, 0, 0);
}

//-- Función de retrollamada al boton de GRISES
grises.onclick = () => {
  console.log('Boton grises');
  filtroGrises();
  document.getElementById('deslizadores').style.display = 'none';
}

//-- Funcion de retrollamada al boton COLORES
colores.onclick = () => {
  console.log('Boton colores');
  des_rojo.value = 255;
  des_verde.value = 255;
  des_azul.value = 255;
  deslizadores();
  document.getElementById('deslizadores').style.display = 'block';
}

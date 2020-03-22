console.log('Ejecutando JS...');

//--Acceder al cuerpo del documento html
//-- Es el primer elemento, porque solo hay un cuerpo
body = document.getElementsByTagName('body')[0];

//-- Funcion de retrollamada de tecla pulsada
window.onkeydown = (e) =>{

  //-- Comprobar si la tecla es un ESPACIO
  if (e.key == ' '){
    //-- Cambiar la activacion de la clase de color
    body.classList.toggle("color");
  }
}

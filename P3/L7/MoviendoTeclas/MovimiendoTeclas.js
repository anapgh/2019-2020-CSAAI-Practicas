console.log('Inicializamos el JS...');

function main(){
  console.log('Teclas: Main: Start!');

  //Obtener el párrafo
  texto = document.getElementById('texto');

  //-- Funcion de retrollamada de la pulsacion de una tecla
  window.onkeydown = (e) => {

    //-- Eliminar el comportamiento por defecto de la tecla
    e.preventDefault();

    //-- Detectar si es la tecla ESPACIO
    if(e.key == ' '){

      //-- cambiar el fondo del texto.
      //-- Si no tenia, se pone rojo
      if(texto.style.background == ""){
        texto.style.background = "red";
      //-- Si ya era rojo, se quita
      }else{
        texto.style.background = "";
      }
    }
  }
}

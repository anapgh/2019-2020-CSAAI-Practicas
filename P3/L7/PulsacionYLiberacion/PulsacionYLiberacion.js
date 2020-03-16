console.log('Inicializamos el JS...');

function main(){

  console.log('Teclas: Main: Start!');

  //Obtener el parrafo donde muestra la informacion
  texto = document.getElementById('texto');

  //-- Evento: Tecla pulsada
  window.onkeydown = (e) => {

    //-- Eliminar comportamiento predeterminado de la tecla
    e.preventDefault();

    //--Mostrar la info de la tecla: Nombre y Codigo
    texto.innerHTML = 'Tecla apretada: ' + e.key + ' ' + 'Codigo: ' + e.keyCode

  }

  //-- Evento: tecla liberada
  window.onkeyup = (e) => {

    //-- Eliminar la informacion
    texto.innerHTML = '';
  }
}

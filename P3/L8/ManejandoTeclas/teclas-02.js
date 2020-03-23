console.log('Ejecutando JS...');

const display = document.getElementById("display");

//-- tecla pulsada: Mostrar su informacion
window.onkeydown = (e) => {
  display.innerHTML = `Tecla: ${e.key} .  Codigo: ${e.keyCode}`
}

//-- tecla liberada: borrar el parrafo
window.onkeyup = (e) => {
  display.innerHTML = ''
}

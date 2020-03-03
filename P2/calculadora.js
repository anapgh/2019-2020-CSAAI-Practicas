console.log("Ejecutando JS...");
const gui = {
  display = document.getElementById("display");
  igual = document.getElementById("igual");
  reset = document.getElementById("reset");
  borrar = document.getElementById("borrar");
  //me crea un array con todos los digitos
  let digitos = document.getElementsByClassName("valor");
  //me crea un array con todos los operadores
  let operacion = document.getElementsByClassName("operacion");
}





//--hace un bucle que va leyendo cada digito que se pulsa
for(i=0; i<digitos.length; i++){
  gui.digitos[i].onclick=(ev)=>{
    digito(ev.target);
  }
}

//--hace un bucle que va leyendo cada operacion que se pulsa
for(i=0; i<operacion.length; i++){
  gui.operacion[i].onclick=(ev)=>{
    digito(ev.target);
  }
}

function digito(boton){
  if(display.innerHTML=="0"){
    gui.display.innerHTML = boton.value;

  }else{
    gui.display.innerHTML += boton.value;
  }
  sonido.play();
}

//-- Evaluar la expresion
igual.onclick = () => {
  gui.display.innerHTML = eval(gui.display.innerHTML);
  sonido.play();
}

//-- Poner a cero la expresion
reset.onclick = () => {
  gui.display.innerHTML = "0";
  sonido.play();
}

borrar.onclick = () => {
  if((display.innerHTML == '0')||(gui.display.innerHTML == '')){
    gui.display.innerHTML = '0';
  }else {
    gui.display.innerHTML = gui.display.innerHTML.slice(0,-1);
  }
  sonido.play();
}

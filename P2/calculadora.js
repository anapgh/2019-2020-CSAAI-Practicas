console.log("Ejecutando JS...");

display = document.getElementById("display");
let digitos = document.getElementsByClassName("valor");//me crea un array con todos los digitos
let operacion = document.getElementsByClassName("operacion");

for(i=0; i<digitos.length; i++){
  digitos[i].onclick=(ev)=>{
    digito(ev.target);
  }
}

for(i=0; i<operacion.length; i++){
  operacion[i].onclick=(ev)=>{
    digito(ev.target);
  }
}


function digito(boton){
  if(display.innerHTML=="0"){
    display.innerHTML = boton.value;
  }else{
    display.innerHTML += boton.value;
  }
}

console.log("Ejecutando JS...");

display = document.getElementById("display")
boton1 = document.getElementById("boton1")
boton2 = document.getElementById("boton2")
suma = document.getElementById("suma")
igual = document.getElementById("igual")
clear = document.getElementById("clear")


function digito(boton){
  if(display.innerHTML=="0"){
    display.innerHTML = boton1.value;
  }else{
    display.innerHTML += boton1.value;
  }
}

// -- Insertar digito 1
boton1.onclick = () => {
  digito(boton1)
  }

//-- Insertar digito 2
boton2.onclick = () => {
  digito(boton2)
}

//-- Insertar simbolo de sumar
suma.onclick = () => {
  display.innerHTML += "+";
}

//-- Evaluar la expresion
igual.onclick = () => {
  display.innerHTML = eval(display.innerHTML);
}

//-- Poner a cero la expresion
clear.onclick = () => {
  display.innerHTML = "0";
}

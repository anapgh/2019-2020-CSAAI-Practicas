//-- Creamos la clase 'bola'

class Bola {
  constructor(ctx){
    //-- Guardar el contexto de Dibujo
    this.ctx = ctx;

    //Constante: tamaño de la bola
    this.size = 10;

    //  Constante: posicion incial de la bola
    this.x_ini = 100;
    this.y_ini = 200;

    // Posicion generica de la bola
    this.x = 0;
    this.y = 0;

    // Velocidad inicial de la bola
    this.vx_ini = 6;
    this.vy_ini = 2;

    // Velocidad generica de la bola
    // Inicialmente a cero
    this.vx = 0;
    this.vy = 0;

    //Inicializar
    this.init();
  }

  //-- FUNCIONES PARA LA BOLA
  draw(){
    //-- Dibujar la bola
    this.ctx.beginPath();
    this.ctx.fillStyle = this.imagen;

    //-- x,y,anchura y altura
    this.ctx.rect(this.x, this.y, this.size, this.size);
    this.ctx.fill();
  }

  init(){
    //--Inializa la bola: A su posicion inicial
    this.x = this.x_ini;
    this.y = this.y_ini;
    this.vx = 0;
    this.vy = 0;
  }

  update(){
    //-- Actualizacion de las coordenadas de la posicion de la bola(x,y)
    this.x += this.vx;
    this.y += this.vy;
  }
}

//-- Inicializamosel JS...
function main(){

  //-- Objeto canvas
  var canvas = document.getElementById('canvas');
  canvas.width = 600;
  canvas.height = 400;

  //Obtenerel contexto del canvas para poder dibujar en él
  var ctx = canvas.getContext('2d');

  //--Definir el objeto bola
  var bola = {
    //--Posición inicial de la pelota
    x_ini: 50,
    y_ini:50,

    //--Dimensiones de la pelota
    width: 5,
    height: 5,

    //--Coordenadas
    x : 0,
    y : 0,

    //-- Velocidad
    vx : 4,
    vy : 1,

    //-- Contexto
    ctx : null,

    //-- Incializar la pelota, pasandole como argumento el ctx del canvas
    init: function(ctx){
      this.ctx = ctx;
      this.reset();
    },

    //-- Dibujar la bola
    draw: function(){
      this.ctx.fillStyle = 'white';
      this.ctx.fillRect(this.x, this.y, this.width, this.height);
    },

    //-- Update: Actualizar el estado de la bola
    update: function(){
      this.x += this.vx;
      this.y += this.vy;
    },

    //-- Reset: LLevar a la bola a su Posición inicial
    reset: function(){
      this.x = this.x_ini;
      this.y = this.y_ini;
    }
  }

  //-- Inicializar y pintar la AnimandoBola
  bola.init(ctx); //le paso el contexto del canvas
  bola.draw();

  //-- Crear timer para la animación
  //-- Incialmente a null
  var timer = null;

  //-- Boton Sacar
  var sacar = document.getElementById('sacar');

  //-- Función de retrollamada del boton de Sacar
  //-- Que comience la animación!
  sacar.onclick = () => {

    //-- Si la bola ya se esta animando, no hacer nada
    if(!timer){

      //-- Lanzar el timer.
      //-- Su función de retrollamada la definimos en su primer parametro
      timer = setInterval(() => {

        //-- Esto se ejecuta cada 20ms

        //-- Actualizar la bola
        bola.update();

        //-- Borrar el canvas
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        //-- Dibujar la bola
        bola.draw();

        //-- Si la bola llega a la parte derecha del canvas:
        //-- terminar
        if(bola.x > canvas.width){

          //-- Eliminar el timer
          clearInterval(timer)
          timer = null;

          //-- Bola vuelve a su poisicion Inicializar
          bola.reset();

          //-- Dibujar la bola en posicion inicial
          bola.draw();
        }
      },20); //-- Se hace esa funcion cada 20ms- Timer
    } //-- Fin del !Timer
  } //-- Fin del sacar.onclick
}

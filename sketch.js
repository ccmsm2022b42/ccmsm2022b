function setup() {
  createCanvas(400, 400);
}
let xbol=200
let ybol=200;
let diametro=50 ; 
let velocidadex=1
function draw() {
  background(0);
  circle(xbol,ybol,diametro);
  xbol+= velocidadex
  if(xbol+diametro/2>=400){
    velocidadex *=-1;
  }
}
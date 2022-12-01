 function setup() {
  createCanvas(400, 400);
}
//variaveis da bolinha
let xbol=200
let ybol=200;
let diametro=50 ; 
let velocidadex=1
let velocidadey=-1;
//variaveis da raquete

let eux=2;
let euy=150;
let eul=10;
let eua=50;
function draw() {
  background(000);
  //desenha a bolinha
  circle(xbol,ybol,diametro);
  //movimenta a bolinha
  xbol+= velocidadex
  ybol+=velocidadey;
  //faz a bolinha voltar quando bate na direita
  if(xbol+diametro/2>=400){
    velocidadex *=-1;
  }
  rect(eux,euy,eul,eua)
}
const sprites = new Image();
sprites.src = "img/sprites.png";
const canvas = document.getElementById('games');
const ctx = canvas.getContext('2d');

//rever parte de colisão depois;

function colisão(){
    const IzidioY = Izidio.y + Izidio.altura;
    const bgY = bg.y;

    if(IzidioY >= bgY){
        return true
    }
   
}




//Protagonista
const Izidio = { 
    spriteX: 0,
    largura: 66,
    altura: 66,
    x: 10,
    y: 50,
    velocidade: 0,
    gravidade: .3,
    pulo: 5,


atualiza(){
    if(colisão(Izidio, bg)){
        
        Izidio.y = 50;
        Izidio.velocidade=0;
        mudaDeTela(telas.INICIO);
    }
        Izidio.velocidade = Izidio.velocidade+Izidio.gravidade;
        Izidio.y = Izidio.y + Izidio.velocidade;
},

desenha(){ 
       ctx.drawImage(
        sprites,
        Izidio.spriteX, Izidio.spriteX,
        Izidio.largura, Izidio.altura, 
        Izidio.x ,Izidio.y,
        Izidio.largura, Izidio.altura, 
        );
}
}

//Bg;
const bg = {
spriteX: 0,
spriteY: 609,
largura: 223,
altura: 113,
x: 0,
y: canvas.height - 113,
desenha(){
    ctx.drawImage(
        sprites,
        bg.spriteX, bg.spriteY,
        bg.largura, bg.altura, 
        bg.x ,bg.y,
        bg.largura, bg.altura, 
        );

     ctx.drawImage(
            sprites,
            bg.spriteX, bg.spriteY,
            bg.largura, bg.altura, 
            (bg.x + bg.largura) ,bg.y,
            bg.largura, bg.altura, 
         );
}
}

//Fundo
const back ={
spriteX: 390,
spriteY: 2,
largura: 275,
altura: 204,
x: 0,
y: canvas.height - 204,
desenha(){

    ctx.fillStyle = "#0ed3d3";
    ctx.fillRect(0, 0, canvas.width, canvas.height)

    ctx.drawImage(
        sprites,
        back.spriteX, back.spriteY,
        back.largura, back.altura, 
        back.x ,back.y,
        back.largura, back.altura, 
    );
    
    ctx.drawImage(
        sprites,
        back.spriteX, back.spriteY,
        back.largura, back.altura, 
       ( back.x+ back.largura),back.y,
        back.largura, back.altura, 
    );

    
}

}

//Inicio 

const Inicio = {
spriteX: 327,
spriteY: 461,
largura: 221,
altura: 221,
x: 40,
y: 70,

desenha(){  sprites,
    ctx.drawImage(
    sprites,
    Inicio.spriteX, Inicio.spriteY,
    Inicio.largura, Inicio.altura, 
    Inicio.x ,Inicio.y,
    Inicio.largura, Inicio.altura, 

    )
}
}

//Pontuação

//Telas:

var telaAtived = {};

function mudaDeTela(TelaAtual){

    telaAtived = TelaAtual;
}

const telas = {
    INICIO:{
        desenha(){
            back.desenha();
            bg.desenha();
            Inicio.desenha();
        },
        click(){
            mudaDeTela(telas.Jogo);

        },
        atualiza(){
        }
    }

}

telas.Jogo = {
desenha(){
    back.desenha();
    bg.desenha();
    Izidio.desenha();
    
},
click(){

Izidio.velocidade = -Izidio.pulo;
},
atualiza(){
    Izidio.atualiza();
}
}

function loop(){

telaAtived.desenha();
telaAtived.atualiza();



requestAnimationFrame(loop);
}

window.document.addEventListener('click', function(){
if(telaAtived.click){
    telaAtived.click();
}

});

window.document.addEventListener('keypress', function(e){
    if(e.which == 13){
    if(telaAtived.click){
        telaAtived.click();
    }
}
});


mudaDeTela(telas.INICIO);
loop();


const sprites = new Image();
sprites.src = "img/sprites.png";
const canvas = document.getElementById('games');
const ctx = canvas.getContext('2d');
const som = new Audio();
som.src = "Som.mp3";

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
        pipe = [];
        pipe[0] = {
            x: canvas.width,
            y: 0,
        }
        mudaDeTela(telas.Over);
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

},
atualiza(){
    bg.x = bg.x - 1;
        if(bg.x ==-130){
            bg.x = bg.spriteX;
        }
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

    
},
atualiza(){
    back.x = back.x - 2;
    if(back.x ==-220){
        back.x = 0;
    }
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

const pont = {
spriteX: 318,
spriteY: 248,
largura: 237,
altura: 210,
x: 40,
y: 70,



desenha(){
    ctx.drawImage(
    sprites,
    pont.spriteX, pont.spriteY,
    pont.largura, pont.altura, 
    pont.x ,pont.y,
    pont.largura, pont.altura,
    );

}
}

const pont2 = {
    spriteX: 318,
    spriteY: 293,
    largura: 237,
    altura: 172,
    x: 40,
    y: 70+45,
    
     
    desenha(){
        ctx.drawImage(
        sprites,
        pont2.spriteX, pont2.spriteY,
        pont2.largura, pont2.altura, 
        pont2.x ,pont2.y,
        pont2.largura, pont2.altura,
        );
    
    }
    }


var CanN = {
    spriteX: 14,
    spriteY: 268,
    largura: 43,
    altura: 215,
    gap: 87, 
    }

    var CanS = {
        spriteX: 75,
        spriteY: 224,
        largura: 41,
        altura: 217,
    }

    var pipe = [];

    pipe[0] = {
        x: canvas.width,
        y: 0,
    }

    function draw(){
    for(var pos = 0; pos < pipe.length;pos++){     
            ctx.drawImage(
                sprites,
                CanN.spriteX, CanN.spriteY,
                CanN.largura, CanN.altura, 
                pipe[pos].x ,pipe[pos].y,
                CanN.largura, CanN.altura,
            );
            ctx.drawImage(
                sprites,
                CanS.spriteX, CanS.spriteY,
                CanS.largura, CanS.altura, 
                pipe[pos].x ,pipe[pos].y + CanN.altura +CanN.gap,
                CanS.largura, CanS.altura,

            );

            pipe[pos].x = pipe[pos].x - 2; 
        
         if(pipe[pos].x==170){
             pipe.push(
                 {x: canvas.width,
                 y: Math.floor(Math.random()* -130)}
             )  
                 }
         if(pipe[pos].x>Izidio.x&&Izidio.x -20+Izidio.largura >= pipe[pos].x && Izidio.y + Izidio.altura <= pipe[pos].y + CanN.altura +15 
            || pipe[pos].x>Izidio.x&&Izidio.x -20+Izidio.largura>= pipe[pos].x && Izidio.y + Izidio.altura >= pipe[pos].y + CanS.altura + CanN.gap+15 ){
          mudaDeTela(telas.Over);
        
         }
         if(score==100){
             CanN.gap = 77;
         }
         if(score==129){
            CanN.gap = 70;
        }
        if(score==149){
            CanN.gap = 63;
        }


         if(score == 150){
             mudaDeTela(telas.FIM);
         }
            
         if(pipe[pos].x == 6){
            score++
            som.play();

        }

    }

    }

    //medalhas

    const Ouro= {
        spriteX: 0,
        spriteY: 125,
        largura: 44,
        altura: 44,
        x: 72,
        y: 70+90,

        desenha(){
            ctx.drawImage(
                sprites,
                Ouro.spriteX,Ouro.spriteY,
                Ouro.largura,Ouro.altura,
                Ouro.x,Ouro.y,
                Ouro.largura,Ouro.altura,

            )
        }
    }

    const Bronze= {
        spriteX: 48,
        spriteY: 124,
        largura: 44,
        altura: 44,
        x: 72,
        y: 70+90,

        desenha(){
            ctx.drawImage(
                sprites,
                Bronze.spriteX,Bronze.spriteY,
                Bronze.largura,Bronze.altura,
                Bronze.x,Bronze.y,
                Bronze.largura,Bronze.altura,

            )
        }
    }

    const Prata= {
        spriteX: 48,
        spriteY: 78,
        largura: 44,
        altura: 44,
        x: 72,
        y: 70+90,

        desenha(){
            ctx.drawImage(
                sprites,
                Prata.spriteX,Prata.spriteY,
                Prata.largura,Prata.altura,
                Prata.x,Prata.y,
                Prata.largura,Prata.altura,

            )
        }
    }

//score

    var score = 0;

    var scor = {
        desenha(){

            ctx.fillStyle = "white";
            ctx.strokeStyle = "black";
            ctx.font = "70px Calibri";
            if(score<=9){ 
            ctx.fillText(score,(canvas.width/2-10),90);
            ctx.strokeText(score,(canvas.width/2-10),90);
            }
            else if(score>9){
            ctx.fillText(score,(canvas.width/2-35),90);
            ctx.strokeText(score,(canvas.width/2-35),90);
            }
            else if(score>99){
            ctx.fillText(score,(canvas.width/2-70),90);
            ctx.strokeText(score,(canvas.width/2-70),90);
            }

        }


    }
 

    //balões

    var balon = {
        spriteX: 77,
        spriteY: 9,
        largura: 50,
        altura: 44,
        x: (canvas.width/2) - 24,
        y: (canvas.height/2) - 60,

        desenha(){
            ctx.drawImage(
                sprites,
                balon.spriteX,balon.spriteY,
                balon.largura,balon.altura,
                balon.x,balon.y,
                balon.largura,balon.altura,

            )
        }

    }

    
    


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
    draw();
    bg.desenha();
    Izidio.desenha();
    scor.desenha();
    
    
},
click(){
    Izidio.velocidade = -Izidio.pulo;


},
atualiza(){
    Izidio.atualiza();
    bg.atualiza();
    if(Izidio.y<-70){
        mudaDeTela(telas.Over)
    }
    back.atualiza();
}
}

telas.Over = {

    desenha(){
        back.desenha();
        bg.desenha();
        pont.desenha();
        if(score <=90 ){
            Bronze.desenha()

        }
        else if(score <= 149){
            Prata.desenha();
        }
        else if(score == 150 ){
            Ouro.desenha()

        }
    },
    click(){
        mudaDeTela(telas.INICIO);
        score = 0;
        Izidio.y = 50;
        Izidio.x = 10;
        Izidio.velocidade=0;
        pipe = [];
        pipe[0] = {
            x: canvas.width,
            y: 0,
        }
        CanN.gap = 87;
    },
    atualiza(){
        

    }

}

telas.FIM = {
    desenha(){
        back.desenha();
        bg.desenha();
        scor.desenha();
        balon.desenha();
        Izidio.desenha();
    },
    atualiza(){
        if(score ==150&& Izidio.x<(canvas.width/2)-Izidio.largura/2){
            Izidio.x++
        }
        while(score ==150&& Izidio.y<=(canvas.height/2)-Izidio.altura/2){
            Izidio.y++
        }
        while(score ==150&& Izidio.y>=(canvas.height/2)-Izidio.altura/2){
            Izidio.y--
        }
        if(score ==150&&Izidio.x==(canvas.width/2)-Izidio.largura/2){
            mudaDeTela(telas.final)
         }
       
    }

}

telas.TelaFim = {

    desenha(){
    back.desenha();
    bg.desenha();
    pont2.desenha();
    if(score <= 90 ){
        Bronze.desenha()

    }
    else if(score <= 149){
        Prata.desenha();
    }
    else if(score == 150 ){
        Ouro.desenha()

    }
    balon.x=(canvas.width/2) - 24,
    balon.y= (canvas.height/2) - 60,
    Izidio.y = 50;
    Izidio.x = 10;
    Izidio.velocidade=0;
    pipe = [];
        pipe[0] = {
            x: canvas.width,
            y: 0,
        }
},
click(){
    mudaDeTela(telas.INICIO);
    score = 0;
},
atualiza(){

}
}

telas.final= {

    desenha(){
        back.desenha();
        bg.desenha();
        scor.desenha();
        balon.desenha();
        Izidio.desenha();

    },

    atualiza(){
        if(score ==150&&Izidio.y<480){
            Izidio.y--
            balon.y--
         }
         if(score ==150&&Izidio.y<-100){
             mudaDeTela(telas.TelaFim)
         }
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



function add_pantallaLose(Q)
{
	/////////////////////////////////////////////////
	// FONDO PANTALLA LOSE
	/////////////////////////////////////////////////
	Q.Sprite.extend("pantallalose", {
        init: function(p) {
            this._super(p, {                
                gravity:0,
                opacity: 1
            });
        },
        step: function (dt){
            var a = 0;
        }
    });

     Q.scene('derrota',function(stage) 
     {
        Q.audio.stop();
        Q.audio.play('48 Game Over.mp3',{loop: true});
        stage.insert(new Q.pantallacontroles({
        	asset: "pantallawinlose/fondonegro.png",
        	x: 160,
        	y: 160,
        	scale: 1
        }));

        stage.insert(new Q.pantallacontroles({
            asset: "pantallawinlose/youlose.png",
            x: 170,
            y: 50,
            scale: 1
        }));

        stage.insert(new Q.pantallacontroles({
            asset: "pantallawinlose/score.png",
            x: 90,
            y: 160,
            scale: 0.6
        }));       

        stage.insert(new Q.pantallacontroles({
            asset: "pantallawinlose/pressentertocontinue.png",
            x: 165,
            y: 275,
            scale: 0.2
        }));

        let cara1 = stage.insert(new Q.CabezaWinLose({
        	x: 75, 
        	y: 275
        }));

        let cara2 = stage.insert(new Q.CabezaWinLose({
        	x: 255, 
        	y: 275
        }));
        
        Q.input.on("confirm",stage,function() 
        {
            Q.clearStages();
            Q.stageScene('pantallaMenu');
        });

        //Q.state.set("score",9999999999);
        let puntuacion = Q.state.get("score").toString();
        let coordenadaX = 140;
        let coordenadaY = 160;
        let scaleNumber = 0.5;
        for(let i = 0; i < 9; i++)
        {          
            coordenadaX = coordenadaX + 18;
            switch(puntuacion[i])
            {
                case '0':
                    stage.insert(new Q.pantallacontroles({
                        asset: "numeros/0.png",
                        x: coordenadaX,
                        y: coordenadaY,
                        scale: scaleNumber
                    }));   
                    break;
                case '1':
                    stage.insert(new Q.pantallacontroles({
                        asset: "numeros/1.png",
                        x: coordenadaX,
                        y: coordenadaY,
                        scale: scaleNumber
                    })); 
                    break;
                case '2':
                    stage.insert(new Q.pantallacontroles({
                        asset: "numeros/2.png",
                        x: coordenadaX,
                        y: coordenadaY,
                        scale: scaleNumber
                    })); 
                    break;
                case '3':
                    stage.insert(new Q.pantallacontroles({
                        asset: "numeros/3.png",
                        x: coordenadaX,
                        y: coordenadaY,
                        scale: scaleNumber
                    })); 
                    break;
                case '4':
                    stage.insert(new Q.pantallacontroles({
                        asset: "numeros/4.png",
                        x: coordenadaX,
                        y: coordenadaY,
                        scale: scaleNumber
                    })); 
                    break;
                case '5':
                    stage.insert(new Q.pantallacontroles({
                        asset: "numeros/5.png",
                        x: coordenadaX,
                        y: coordenadaY,
                        scale: scaleNumber
                    })); 
                    break;
                case '6':
                    stage.insert(new Q.pantallacontroles({
                        asset: "numeros/6.png",
                        x: coordenadaX,
                        y: coordenadaY,
                        scale: scaleNumber
                    })); 
                    break;
                case '7':
                    stage.insert(new Q.pantallacontroles({
                        asset: "numeros/7.png",
                        x: coordenadaX,
                        y: coordenadaY,
                        scale: scaleNumber
                    })); 
                    break;
                case '8':
                    stage.insert(new Q.pantallacontroles({
                        asset: "numeros/8.png",
                        x: coordenadaX,
                        y: coordenadaY,
                        scale: scaleNumber
                    })); 
                    break;
                case '9':
                    stage.insert(new Q.pantallacontroles({
                        asset: "numeros/9.png",
                        x: coordenadaX,
                        y: coordenadaY,
                        scale: scaleNumber
                    })); 
                    break;
                default:
            }
        }
    });

    /////////////////////////////////////////////////
    // CABEZA WARIO - PANTALLA WIN / LOSE
    /////////////////////////////////////////////////
    Q.Sprite.extend("CabezaWinLose", {
        init: function(p) {
            this._super(p, {
                sprite: "cabezawario",
                sheet: "cabezawario",
                x:60,
                y:150,
                gravity:0,
                scale: 1.5,
                opacity: 1
            });
            this.add('animation', 'platformerControl');
        },
        step: function (dt)
        {
            this.play("cabeza_wario");
        }
    });
}
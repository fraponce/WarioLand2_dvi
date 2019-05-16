function add_boss(Q){
    Q.Sprite.extend('boss',{
        init: function(p){
            this._super(p,{
                sprite: 'anim_boss',
                sheet: 'boss',
                vx: -50,
                vy: -50, 
                lado: 1,
                vidas: 3,
                points: [[-6,-15],[6,-15],[6,24],[-5,24]],
                bola: false,
                hamuerto:false,
                vaAmorir:false,
                sellamoADie:false
            });
            this.add('2d, aiBounce, animation, defaultEnemy');
            this.on('dieT',this,'die');

            this.on("bump.top", function(collision) {
                this.p.warioNotifies = collision.obj;
                if (collision.obj.isA("Wario") && !this.p.vaAmorir)
                  if(collision.obj.p.culetazo){
                    this.p.vx=0;
                    this.p.vy=0;
                    this.p.bola = true;
                    this.p.points = [[-6,-12],[6,-12],[6,15],[-5,15]];
                    this.play("ball");
                }
          	});
          	this.on("bump.left", function(collision) {
                if (collision.obj.isA("Wario") && !this.p.vaAmorir && !this.p.bola){
                  if(this.p.lado == 0){
                    //collision.obj.play("die");
                    collision.obj.die();
                  }
                }else if (collision.obj.p.placando && this.p.bola){
                    this.p.bola = false;
                    this.p.vx = 50;
                    this.p.vy = -300;
                    this.p.points = [[-6,-15],[6,-15],[6,24],[-5,24]];
                    if(this.p.vidas == 1){
                        this.p.vaAmorir = true;
                        collision.obj.play("winW");
                        this.play("die");
                        this.p.vidas--;
                    }else if(this.p.vidas>1){
                        this.p.vidas--;
                        Q.audio.play('WL3_EnemyHit.mp3',{loop: false})
                        this.play("ballhitR");
                    }
                    
                } 
          	});
          	this.on("bump.right", function(collision) {
                if (collision.obj.isA("Wario") && !this.p.vaAmorir && !this.p.bola){
                  if(this.p.lado == 1){
                    //collision.obj.play("die");
                    collision.obj.die();
                  }               
                }else if (collision.obj.p.placando && this.p.bola){
                    this.p.bola = false;
                    this.p.vx = -50;
                    this.p.vy = -300;
                    this.p.points = [[-6,-15],[6,-15],[6,24],[-5,24]];
                    if(this.p.vidas == 1){
                        this.p.vaAmorir = true;
                        collision.obj.play("winW");
                        this.play("die");
                        this.p.vidas--;
                    }else if(this.p.vidas>1){
                        this.p.vidas--;
                        Q.audio.play('WL3_EnemyHit.mp3',{loop: false});
                        
                        this.play("ballhitL");
                    }
                } 
          	});
        },


        die: function()
        {
            if(this.p.vidas == 0 && !this.p.hamuerto) {
                this.p.hamuerto = true;
                this.p.vidas--;
                Q.audio.stop();
                Q.audio.play('WL3_EnemyDestroyed.mp3',{loop: false});
                this.p.warioNotifies.p.win=true;
                this.p.warioNotifies.play("winW");
                Q.audio.play('WL3_Throw.mp3',{loop: false});
                this.destroy();

            }
        },

        step: function(dt) 
        {
            var posWario = Q.state.get("warioX");

            var dondeVoy = posWario-this.p.x;
            //Si es menor que -25, estoy a su derecha, si es mayor que 25, estoy a su izquierda. (PONGO ESE RANGO PA Q NO SE RAYE CUANDO WARIO ESTE SOBRE EL)

            if(dondeVoy>80 && !this.p.bola && !this.p.vaAmorir){
                this.p.vx = 50;

            }else if(dondeVoy<-80 && !this.p.bola && !this.p.vaAmorir){
                this.p.vx = -50;
            } else if(this.p.vaAmorir){
                this.p.vx = 0;
            } /*else if (dondeVoy>25 && this.p.bola){
                this.p.vx = -50;
            }  else if (dondeVoy<-25 && this.p.bola){
                this.p.vx = 50;
            } */

            if(this.p.vx > 0 ) 
                this.p.lado=1; //Derecha
            else if(this.p.vx<0) 
                this.p.lado = 0; //Izquierda


            if(!this.p.vaAmorir){
                if(this.p.vy == 0 && !this.p.bola)
                    this.p.vy = -200;
                if(this.p.vx > 0 ){
                    this.play('jumpL'); //Izquierda
                }else if(this.p.vx<0){
                    this.play('jumpR'); //Derecha
                }
            }
            else{
                if(!this.p.sellamoADie){
                    this.play('die');
                    this.p.sellamoADie=true;
                }           
            }
        },

    });
   
    Q.animations('anim_boss',{
        jumpL:{frames:[0,1,2,3,4], rate: 1/5, flip: "x", loop: true},
        jumpR:{frames:[0,1,2,3,4], rate: 1/5, flip: false, loop: true},
        ball:{frames:[5], rate: 1/6, flip: false, loop: true},
        ballhitL:{frames:[6], rate: 1/6, flip: "x", loop: true},
        ballhitR:{frames:[6], rate: 1/6, flip: false, loop: true},
        die:{frames:[7,8,9], rate: 1/3, loop: false,  trigger: "dieT"}
    });
       
}
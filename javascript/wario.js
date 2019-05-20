/*
    TODO: ESCALERAS + PLACAJE ARREGLAR
    TODO: AGACHADO + ENTRAR PUERTA ARREGLAR
    TODO: ANIMACION WARIO AL SALTAR PLACANDO SE PARA (DEBE HABER UN PLAY X AHI Q COMPITA)



*/


function add_wario(Q) {
    /*===========================================================================================
=======================================Animaciones de Wario===========================================
=============================================================================================*/


    Q.animations("wario", {
        run_right:  { frames: [1,2,3,4], rate: 1/6, loop:false,  flip: false,  next: "stand_right" }, 
        run_left:   { frames: [1,2,3,4], rate:1/6, loop:false, flip:"x",     next: "stand_left" },
        stand_right: { frames: [0],flip: false },
        stand_left: { frames: [0],flip:"x"   },
        culetazo_right: {frames: [8,9,10], rate: 1/6, loop:false,  flip: false,  next: "stand_right" },
        culetazo_left: {frames: [8,9,10], rate: 1/6, loop:false,  flip: "x",  next: "stand_left" },
        agachado_stand_right: { frames: [6], flip: false,next: "stand_right"},
        agachado_stand_left: { frames: [6], flip: "x",next: "stand_left" },
        agachado_right: { frames: [5,6,7], rate: 1/6, flip: false,next: "agachado_stand_right" },
        agachado_left: { frames: [5,6,7], rate: 1/6, flip: "x",next: "agachado_stand_left" },
        placa_right: { frames: [11,12], rate: 1/12, flip: false,next: "stand_right" },
        placa_left: { frames: [11,12], rate: 1/12, flip: "x",next: "stand_left" },
        jump_right: { frames: [1], loop: false, rate:1, flip: false,next: "stand_right" },
        jump_left:  { frames: [1], loop: false, rate:1, flip:"x",   next: "stand_left" },

        up_stairs:  { frames: [13,14,15], rate: 1/4, flip: false,next: "stand_stairs" },
        stand_stairs: {frames: [16], rate: 1, flip:false, next: "stand_right"},
        enter_door: {frames: [16,17,18], rate: 1/5,loop: false, flip:false, trigger: "onDoor"},
        winW: { frames: [26,27,28,29,30,31,32,33,34,35,36,37], rate:1/6, loop: false, flip:false, trigger: "winW"},
        sleepW: {frames: [39,40,41,42,43,44,45,46,47,48], rate:1/3, loop: false, flip:false, trigger: "winW"},

        dieW: { frames: [49,47,48], rate:1/3, loop: false, trigger: "deadW"},
        oneLifeLess: { frames: [49], rate:1/3, loop: false, trigger: "dolorT"}
    });


/*===========================================================================================
=====================================Lógica de Wario=========================================
=============================================================================================*/
Q.Sprite.extend("Wario", {
        init: function(p){
            this._super(p, {
                sheet: "wario",
                sprite: "wario",
                frame: 0,
                x: 150,
                y: 480,
                inix: 150,
                iniy: 480,
                type: CTE_WARIO,
                collisionMask: 1,
                gravity: 0.7,
                salto: false,   
                culetazo: false,
                placando: false,
                muerto: false,
                quieto: false,
                audioJump: false,   //Para controlar el sonido del salto
                audioWalk: false,   //Para controlar el sonido del caminar
                audioCrouch: false, //Para controlar el sonido del caminar agachado
                audioClimb: false,  //Para controlar el sonido del subir/bajar escaleras
                audioStomp: false,  //Para controlar el sonido del culetazo
                audioCharge: false,  //Para controlar el sonido del cargar
                agachado: false,
                norepe: false,
                entrando: false,
                dolor: false,
                enStair: false,
                win: false,
                lado: 1, //Representa a donde mira (Izquierda/derecha)
                points: [[-6,-15],[6,-15],[6,15],[-5,15]]//Representa la colision (X defecto lo pone en 20 ya que el centro es "20")
                //points: izq-arr|der-arr|der-abj|izq-abj
            });
            this.add('2d, platformerControls, animation');

            this.on("winW","victoria");
            this.on("onDoor",this,"atravesar");
            this.on("killWario", "die");
            this.on("dolorT","yaPasoEldolor");
            this.on("deadW","deadWf");
            this.on("onStair", function(collision){
                collision;
                if(Q.inputs["down"] || Q.inputs["up"]){
                    this.p.speed=60;
                    this.p.points = [[-1,-8],[1,-8],[1,8],[-1,8]];
                    this.p.enStair = true;
                    if(!this.p.audioClimb) {
                        Q.audio.play('WL3_Climb.mp3',{loop:true});
                        this.p.audioClimb = true;
                    }
                    this.play("up_stairs");
                    this.p.quieto = true;
                    if(Q.inputs["down"]){
                        this.p.vy = this.p.speed;
                    }else{
                        this.p.vy = -this.p.speed;
                    }
                } else {
                    Q.audio.stop('WL3_Climb.mp3');
                    this.p.audioClimb = false;
                    this.p.quieto = true;
                    this.p.speed = -12;
                    this.p.vy = this.p.speed;
                    this.play("stand_stairs");
                }
            })
           
        },
        yaPasoEldolor: function() {
            this.p.dolor = false;
        },

        victoria: function() {
                //Q.state.set("lifes", 8);
                //this.p.vidas  = 8;
                //this.p.vidasC = 9;
                //this.play("dieW");
                Q.stageScene("victoria");
                this.del("platformerControls");
                // Q.stageScene("endGame", 1, {label: "You Died!"});
                this.destroy();
        },

        deadWf: function() {

                //Q.state.set("lifes", 8);
                //this.p.vidas  = 8;
                //this.p.vidasC = 9;
                //this.play("dieW");
                Q.stageScene("derrota");
                this.del("platformerControls");
                // Q.stageScene("endGame", 1, {label: "You Died!"});
                this.destroy();
        },
        step: function(dt) {
            Q.state.set("warioX", this.p.x);
            if(this.p.win){
                this.p.vx=0;
                this.p.vy=0;
            }
            if(this.p.muerto){
                this.p.vx=0;
                this.p.jumpSeed=0;

            }


            if(!this.p.muerto && !this.p.win){
                if(this.p.entrando){
                    this.p.jumpSpeed = 0; 
                    this.p.vy = 1;
                    this.p.entrando = true;
                    this.p.vx = 0;
                }

                // Cargar las coordenadas de Wario cuando vuelve a un nivel ya visitado
                if(Q.state.get('cargadoOK' + Q.state.get('levelactual')) 
                        && (Q.state.get('levelactual') == Q.state.get('siguiente' + Q.state.get('levelactual'))))
                {
                    //console.log('levelActual -> ' + Q.state.get('levelactual'));
                    //console.log("##### Q.state.get('siguiente' + Q.state.get('levelactual')) -> " + Q.state.get('siguiente' + Q.state.get('levelactual')));    
                    Q.state.set('cargadoOK' + Q.state.get('levelactual'), false); 
                    this.p.x = Q.state.get('x' + Q.state.get('siguiente' + Q.state.get('levelactual'))); 
                    this.p.y = Q.state.get('y' + Q.state.get('siguiente' + Q.state.get('levelactual')));                
                }

                if(this.p.agachado){
                    this.p.dolor = false;
                    this.p.speed = 100;
                    this.p.points = [[-4,-1],[4,-1],[4,16],[-3,16]]; //Cambiamos la colisión. (Representa un poligono formado respecto al centro del sprite)
                }else if(this.p.placando){
                    this.p.dolor = false;
                    this.p.speed = 200;
                    this.p.vx= this.p.speed;
                    if(this.p.lado == 0) this.p.vx = -this.p.vx;
                    this.p.points = [[-13,-15],[13,-15],[13,16],[-13,16]];
                } else if(this.p.enStair){
                    this.p.dolor = false;
                    this.p.speed=0;
                    this.p.points = [[-1,-8],[1,-8],[1,8],[-1,8]];
                }
                else {
                    Q.audio.stop('WL3_Climb.mp3');
                    this.p.audioClimb = false;
                    this.p.gravity = 0.7;
                    this.p.speed = 180;
                    this.p.points = [[-6,-15],[6,-15],[6,16],[-5,16]];
                    //this.p.points = [[-2,-15],[2,-15],[2,16],[-2,16]]
                }


                if(this.p.vx > 0 ) 
                    this.p.lado=1; //Derecha
                else if(this.p.vx<0) 
                    this.p.lado = 0; //Izquierda


                //Control de sus animaciones/ataques:
                if(this.p.vy != 0){ //Está saltando
                    this.p.dolor = false;
                    if(!this.p.norepe && this.p.y - this.p.esta.viewport.y < 240)
                        this.p.esta.viewport.directions = {x: true, y: false};
                    else {
                        //this.p.esta.viewport.y = this.p.y+20
                        this.p.norepe=true;
                        this.p.esta.viewport.directions = {x: true, y: true};
                    }
                    this.p.esta.viewport.offsetY = 0;
                    Q.audio.stop('WL3_Dash_Normal');
                    this.p.audioCharge = false;
                    this.p.placando = false;
                    if(this.p.vy>0 && !this.p.enStair) { //Cae... puede pegar culetazo
                        Q.audio.stop('WL3_Climb.mp3');
                        this.p.audioClimb = false;
                        if(Q.inputs["down"]  ){ //&& !this.p.placando
                            this.p.vy = 230;
                            this.p.culetazo = true;
                            if(!this.p.audioStomp){
                                this.p.audioStomp = true;
                                Q.audio.play('WL3_Stomp.mp3',{loop: false});
                            }
                            if(this.p.lado == 1) {
                                this.play("culetazo_right");
                            } else {
                                this.play("culetazo_left");
                            }
                        } else {
                            this.p.culetazo = false;
                        }
                    } else {
                        this.p.culetazo = false;
                    }
                    if(!this.p.salto) {
                        //Q.audio.play("jump_small.mp3");
                        this.p.salto=true;
                    }
                    if(!this.p.placando){
                        if(!this.p.audioJump && this.p.vy<0 && !this.p.quieto){
                            Q.audio.play('WL3_Jump.mp3',{loop: false});
                            this.p.audioJump = true;
                        }
                        if(this.p.vx > 0) {
                            this.play("jump_right");
                        } else if(this.p.vx < 0) {
                            this.play("jump_left");
                        }
                    }
                } else {
                    this.p.salto = false;
                    this.p.culetazo = false;
                    this.p.esta.viewport.directions = {x: true, y: true};
                    this.p.esta.viewport.offsetY = 60;
                    this.p.norepe=false;

                }
                
                
                //  || (this.p.agachado==true && !colision || colision.normalY!=0)
                if ((Q.inputs["down"] && !this.p.vy!=0) || (this.p.agachado && this.stage.collide(this).normalY==1) && !this.p.dolor){ //Está agachado
                    Q.audio.stop('WL3_Dash_Normal.mp3');
                    this.p.audioCharge = false;
                    Q.audio.stop('WL3_Steps.mp3');
                    this.p.audioWalk = false;
                    this.p.agachado = true;
                    if(this.p.vx !=0){
                        if(!this.p.audioCrouch){
                            Q.audio.play('WL3_CrouchWalk.mp3',{loop: true});
                            this.p.audioCrouch = true;
                        }
                        if(this.p.lado==1){
                            this.play("agachado_right");
                        }else{                
                            this.play("agachado_left");
                            this.p.dolor = false;
                        }
                    } else {
                        Q.audio.stop('WL3_CrouchWalk.mp3');
                        this.p.audioCrouch = false;
                        if(this.p.lado==1){
                            this.play("agachado_stand_right");
                            this.p.dolor = false;
                        }else{                
                            this.play("agachado_stand_left");
                            this.p.dolor = false;
                        } 
                    }
                } else {
                    colision = this.stage.collide(this)
                    if(!colision || colision.normalY!=1) //Si hay colision arriba seguira agachado. 
                        this.p.agachado = false;
                        Q.audio.stop('WL3_CrouchWalk.mp3');
                        this.p.audioCrouch = false;
                        //break;
                    //if(colision && !colision.normalY==1)
                    
                }

                if(!this.p.culetazo && !this.p.agachado && !this.p.entrando){
                    
                //if(this.p.salto==false && this.p.agachado == false && !this.p.entrando){
                    if(Q.inputs["fire"]){
                        Q.audio.stop('WL3_Steps');
                        if(this.p.vy != 0){
                            Q.audio.stop('WL3_Dash_Normal.mp3');
                            this.p.audioCharge = false;
                        }
                        if(!this.p.audioCharge && this.p.vy == 0){
                            Q.audio.play('WL3_Dash_Normal.mp3',{loop: true});
                            this.p.audioCharge = true;
                        }
                        this.p.placando = true;
                        if(this.p.lado == 1) {
                            this.play("placa_right");
                            this.p.dolor = false;
                        } else if(this.p.lado == 0) {
                            this.play("placa_left");
                            this.p.dolor = false;
                        }
                    }else {
                        Q.audio.stop('WL3_Dash_Normal.mp3');
                        if(this.p.vy != 0){
                            Q.audio.stop('WL3_Steps.mp3');
                            this.p.audioWalk = false;
                        }
                        this.p.audioCharge = false;
                        this.p.placando = false;                  
                        if(this.p.vx > 0) {
                            if(!this.p.audioWalk && this.p.vy == 0){
                                Q.audio.play('WL3_Steps.mp3',{loop: true});
                                this.p.audioWalk = true;
                            }
                            if(!this.p.entrando){
                                this.play("run_right");
                                this.p.dolor = false;
                            }else{
                                Q.audio.stop('WL3_Steps.mp3');
                                this.p.audioWalk = false;
                                this.p.vx=0;
                            }
                        }else if(this.p.vx < 0) {
                            if(!this.p.entrando){
                                if(!this.p.audioWalk && this.p.vy == 0){
                                    Q.audio.play('WL3_Steps.mp3',{loop: true});
                                    this.p.audioWalk = true;
                                }
                                if(!this.p.dolor){
                                    this.play("run_left");
                                    this.p.dolor = false;
                                }
                            } else {
                                Q.audio.stop('WL3_Steps.mp3');
                                this.p.audioWalk = false;
                                this.p.vx=0;
                            }
                        } else {
                            if(!this.p.entrando && this.p.salto==false && !this.p.dolor){
                                Q.audio.stop('WL3_Steps.mp3');
                                this.p.audioWalk = false;
                                this.play("stand_" + this.p.direction);
                                this.p.dolor = false;
                            }
                            if(this.p.quieto) {
                                Q.audio.stop('WL3_Steps.mp3');
                                this.p.audioWalk = false;
                            }
                        }   
                    }
                }
                if(this.p.y > 700) {
                   this.die();
                }
                if(this.p.vy==0){
                    this.p.audioJump = false;
                    this.p.audioStomp = false;
                }
                this.p.enStair = false;
                this.p.quieto = false;
            }
        }, 

        die: function() {
            if(!this.p.entrando){
                //Si nos quedan vidas perdemos una, si no perdemos definitivamente.
                var lifes = Q.state.get("lifes");
                if(lifes == 1 && !this.p.muerto) {
                    this.p.muerto = true;
                    Q.state.set("lifes",lifes-1);
                    this.p.vx=0;
                    this.p.jumpSpeed=0;
                    this.p.vy=0;
                    if(this.p.muerto){
                        Q.audio.play('WL3_IntoThePipe.mp3',{loop: false});

                    } 
                    this.p.points= [[-7,-5],[7,-5],[7,5],[-7,5]];
                    this.p.y = this.p.y-30;
                    this.play("dieW");

                }
                else if(lifes>0){
                    Q.state.set("lifes",lifes-1);
                    this.p.dolor=true;
                    this.play("oneLifeLess");
                    if(!this.p.muerto) Q.audio.play('WL3_WarioHit.mp3',{loop: false});
                    //play.dolor
                }
                    /*
                    if (Q.state.get("lifes") === 1) {
                        Q.state.dec("lifes", 1);
                        this.del("platformerControls");
                        //Q.audio.stop();
                        //Q.audio.play("music_die.mp3"); 
                        Q.stageScene("endGame", 1, {label: "You Died!"});
                        this.destroy();
                    }
                    else {
                        Q.state.dec("lifes", 1);
                        Q.stageScene("level1");
                    }*/
            }
            
        },
        atravesar: function()
        {
                        //Guardar estado de la pos de Wario => Nombre/Valor
            Q.state.set('cargadoOK' + Q.state.get('levelactual'), true);
            //Guardar como ejemplo: siguientelevel1 xlevel1 ylevel1  
            Q.state.set('siguiente' + Q.state.get('levelactual'), Q.state.get('levelactual'));  
            //Guardar las coordenadas        
            Q.state.set('x' + Q.state.get('levelactual'), this.p.x); 
            Q.state.set('y' + Q.state.get('levelactual'), this.p.y);

            Q.stageScene(Q.state.get('nombrePuerta'));     
            //console.log("##### escenario -> " + Q.state.get('levelactual'));         
            //console.log("##### guarda X -> " + Q.state.get('x' + Q.state.get('levelactual')));
            //console.log("##### guarda Y -> " + Q.state.get('y' + Q.state.get('levelactual')));  
            
            this.p.jumpSpeed = -300;
            this.p.vx = 180;
            this.p.entrando = false;                   
        }
    });
}
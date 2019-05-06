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
        enter_door: {frames: [16,17,18], rate: 1/3,loop: false, flip:false, next: "stand_right"},
        winW: { frames: [26,27,28,29,30,31,32,33,34,35,36,37], rate:1/6, loop: false, flip:false, trigger: "winW"},
        sleepW: {frames: [39,40,41,42,43,44,45,46,47,48], rate:1/3, loop: false, flip:false, trigger: "winW"},

        dieW:       { frames: [49,50], rate:1/3, loop: false, trigger: "deadW"} //TODO, AÑADIR
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
                y: 380,
                inix: 150,
                iniy: 380,
                gravity: 0.7,
                salto: false, //Para controlar el sonido del salto
                agachado: false,
                callendo: false, //AUN NO USADA
                placando: false,
                muerto: false,
                lado: 1, //Representa a donde mira (Izquierda/derecha)
                points: [[-9,-15],[9,-15],[9,16],[-8,16]] //Representa la colision (X defecto lo pone en 20 ya que el centro es "20")
                //points: izq-arr|der-arr|der-abj|izq-abj
            });
            this.add('2d, platformerControls, animation');
            this.on("killWario", "die");
           
        },
        step: function(dt) {
            console.log("X: " + this.p.x + " /// Y: " + this.p.y);
            if(this.p.agachado){
                this.p.speed = 100;
                this.p.points = [[-4,-1],[4,-1],[4,16],[-3,16]]; //Cambiamos la colisión. (Representa un poligono formado respecto al centro del sprite)
            }else if(this.p.placando){
                this.p.speed = 200;
                this.p.vx= this.p.speed;
                if(this.p.lado == 0) this.p.vx = -this.p.vx;
                this.p.points = [[-13,-15],[13,-15],[13,16],[-12,16]];
            } else {
                this.p.speed = 180;
                this.p.points = [[-9,-15],[9,-15],[9,16],[-8,16]];
            }

            if(this.p.vx > 0 ) 
                this.p.lado=1; //Derecha
            else if(this.p.vx<0) 
                this.p.lado = 0; //Izquierda


            //Control de sus animaciones/ataques:
            if(this.p.vy != 0){ //Está saltando
                this.p.placando = false;
                if(this.p.vy>0) { //Cae... puede pegar culetazo
                    if(Q.inputs["fire"] || Q.inputs["down"]){
                        this.p.culetazo = true;
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
                if(this.p.vx > 0) {
                    this.play("jump_right");
                } else if(this.p.vx < 0) {
                    this.play("jump_left");
                }
            } else {
                this.p.salto = false;
                this.p.culetazo = false;
            }
            
            
            //  || (this.p.agachado==true && !colision || colision.normalY!=0)
            if ((Q.inputs["down"] && !this.p.vy!=0) || (this.p.agachado && this.stage.collide(this).normalY==1)){ //Está agachado
                this.p.agachado = true;
                if(this.p.vx !=0){
                    if(this.p.lado==1){
                        this.play("agachado_right");
                    }else{                
                        this.play("agachado_left");
                    }
                } else {
                   if(this.p.lado==1){
                        this.play("agachado_stand_right");
                    }else{                
                        this.play("agachado_stand_left");
                    } 
                }
            } else {
                colision = this.stage.collide(this)
                if(!colision || colision.normalY!=1) //Si hay colision arriba seguira agachado. 
                    this.p.agachado = false;
                    //break;
                //if(colision && !colision.normalY==1)
                
            }


            if(this.p.salto==false && this.p.agachado == false){
                if(Q.inputs["fire"]){
                    this.p.placando = true;
                    if(this.p.lado == 1) {
                        this.play("placa_right");
                    } else if(this.p.lado == 0) {
                        this.play("placa_left");
                    }
                }else {
                    this.p.placando = false;                    
                    if(this.p.vx > 0) {
                        this.play("run_right");
                    } else if(this.p.vx < 0) {
                        this.play("run_left");
                    } else {
                        this.play("stand_" + this.p.direction);
                    }   
                }
            }
            if(this.p.y > 700) {
               this.die();
            }
        }, 

        die: function() {
            //Si nos quedan vidas perdemos una, si no perdemos definitivamente.
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
            }
            
        }
    });
}
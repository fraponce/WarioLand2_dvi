function add_boss(Q){
    Q.Sprite.extend('boss',{
        init: function(p){
            this._super(p,{
                sprite: 'anim_boss',
                sheet: 'boss',
                vx: -50,
                vy: -400,
                lado: 1,
                points: [[-6,-15],[6,-15],[6,24],[-5,24]],
                hamuerto:false,
                vaAmorir:false
            });
            this.add('2d, aiBounce, animation, defaultEnemy');
            this.on('dieT',this,'die');



            this.on("bump.top", function(collision) {
                if (collision.obj.isA("Wario") && !this.p.vaAmorir)
                  if(collision.obj.p.culetazo){
                    this.p.vx=0;
                    this.p.vaAmorir = true;
                    this.p.vy = -300;
                    this.play("die");

                }
          	});
          	this.on("bump.left", function(collision) {
                if (collision.obj.isA("Wario") && !this.p.vaAmorir)
                  if(this.p.lado == 0){
                    //collision.obj.play("die");
                    collision.obj.die();
                  }else if (collision.obj.p.placando){
                    this.p.vaAmorir = true;
                    this.p.vy = -300;
                    this.p.sensor=true;
                    this.play("die");

            	  }
          	});
          	this.on("bump.right", function(collision) {
                if (collision.obj.isA("Wario") && !this.p.vaAmorir)
                  if(this.p.lado == 1){
                    //collision.obj.play("die");
                    collision.obj.die();
                  }else if (collision.obj.p.placando){
                    this.p.vaAmorir = true;
                    this.p.vy = -300;
                    this.p.sensor=true;
                    this.play("die");

                    }
          	});
        },
          
        die: function()
        {
            var probCrear = Math.floor(Math.random() * 100);
            if(probCrear<5){
                this.stage.insert(new Q.lifeObj({x: this.p.x, y: this.p.y}));
            }
            this.p.hamuerto = true;             
            this.destroy();
        },

        step: function(dt) 
        {
            if(this.p.vx > 0 ) 
                this.p.lado=1; //Derecha
            else if(this.p.vx<0) 
                this.p.lado = 0; //Izquierda


            if(!this.p.vaAmorir){
                if(this.p.vx > 0 ) 
                    this.play('jumpL'); //Izquierda
                else if(this.p.vx<0) 
                    this.play('jumpR'); //Derecha
            }
            else{
                this.play('die');           
            }
        },

    });
   
    Q.animations('anim_boss',{
        jumpL:{frames:[0,1,2,3,4], rate: 1/6, flip: "x", loop: true},
        jumpR:{frames:[0,1,2], rate: 1/6, flip: false, loop: true,},
        ball:{frames:[5], rate: 1/6, flip: false, loop: true,},
        ballhitL:{frames:[6], rate: 1/6, flip: "x", loop: true,},
        ballhitR:{frames:[6], rate: 1/6, flip: false, loop: true,},
        die:{frames:[7,8,9], rate: 1/3, loop: false,  trigger: "dieT"}
    });
       
}
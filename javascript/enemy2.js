function add_enemy2(Q){
     Q.Sprite.extend('enemy2',{
        init: function(p){
            this._super(p,{
                sprite: 'anim_enemy2',
                sheet: 'enemy2',
                vx: 0,
                lado: 1,
                points: [[-6,-6],[6,-6],[6,6],[-6,6]],
                cargando: false,
                disparado: false,
                hamuerto:false,
                vaAmorir:false
            });
            this.add('2d, aiBounce, animation, defaultEnemy');
            this.on('dieT',this,'die');
            this.on('Shoot',this,'shoot');

            this.on("bump.top", function(collision) {
                if (collision.obj.isA("Wario"))
                  if(collision.obj.p.culetazo && !this.p.vaAmorir){
                  	this.p.vaAmorir = true;
                    this.p.vy = -300;
                    this.play("die");
                }
            });
            this.on("bump.left", function(collision) {
                if (collision.obj.isA("Wario"))
                    if (collision.obj.p.placando && !this.p.vaAmorir){
                    this.p.vaAmorir = true;
                    this.p.vx = -50;
                    this.p.vy = -300;
                    this.play("die");
                }
            });
            this.on("bump.right", function(collision) {
                if (collision.obj.isA("Wario"))
                    if (collision.obj.p.placando && !this.p.vaAmorir){
                    	this.p.vaAmorir = true;
                    	this.p.vx = -50;
                        this.p.vy = -300;
                        this.play("die");
                    }
            });
        },
        step: function(dt) 
        {
            if(!this.p.vaAmorir){
	            if(!this.p.cargando){
	                if(this.p.lado == 0 ) 
	                    this.play('chargeL'); //Izquierda
	                else if(this.p.lado == 1) 
	                    this.play('chargeR'); //Derecha
	            }else{
	            	if(this.p.lado == 0 ) 
	                    this.play('shootL'); //Izquierda
	                else if(this.p.lado == 1) 
	                    this.play('shootR');
	            }
            }

            else
                this.play('die');           
        },

        shoot: function(dt)
        {
        	this.cargando = !this.cargando;
        },


        die: function(dt)
        {
            this.p.hamuerto = true;             
            this.destroy();
        }
    });
    Q.animations('anim_enemy2',{
        chargeR:{frames:[0,1,2], rate: 1/3, flip: false, loop: true, trigger: 'Shoot'},
        shootR:{frames:[3], rate: 1/3, flip: "x", loop: true, trigger: 'Shoot' },
        chargeL:{frames:[0,1,2], rate: 1/3, flip: "x", loop: true, trigger: 'Shoot'},
        shootL:{frames:[3], rate: 1/3, flip: false, loop: true, trigger: 'Shoot'},
        die:{frames:[4], rate: 1/3, loop: false,  trigger: "dieT"}
    });
}
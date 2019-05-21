function add_fireball(Q){
	Q.Sprite.extend('fireball',{

		init: function(p,l){

			this._super(p, {
				sensor: true,
				sprite: 'anim_fireball',
				sheet: 'fireball',
				disparado: false,
				points: [[-2,-1],[2,-1],[2,1],[-2,1]],
				gravity:0,
				time: 0,
				explota: false,
				lado: l
			});

			this.add('animation');

		    this.on("hit", function(collision){

		    	if(!this.p.explota){
		    		if(collision.obj.isA("Wario")){
		    			if(!this.p.explota){
		    				collision.obj.die();
		    				this.p.explota = true;
		    				this.play("explosion");					
		    			}
		    		}
		    	}
		    });

		    this.on('autodestruccion', "explota");

		},

		explota: function(){
			this.p.explota = false;
			this.destroy();
		},

		step: function(dt){
			this.p.sensor=true;
			if(this.p.lado==1){
				this.p.vx = 60;
			} else {
				this.p.vx = -60;
			}
			if(!this.p.explota && this.p.lado == 1){
				this.play("fireR");
			} else if (!this.p.explota) {
				this.play("fireL");
			}


			if(!this.p.explota)
			this.p.x += this.p.vx*dt;

			var separacion = this.p.x - this.p.iniX;
			var distancia = separacion;
			if(separacion < 0) distancia = -separacion;

			if(distancia > 200 && !this.p.explota) {
				this.p.vx = 0;
				this.p.explota =true;
				this.play("explosion");
			}

		}

	});

	Q.animations('anim_fireball',{
    	fireR:{frames:[0,1], rate: 1/2, flip: false, loop: true},
    	explosion:{frames:[2,3,4], rate: 1/3, flip: false, loop: false, trigger: 'autodestruccion'},
    	fireL:{frames:[0,1], rate: 1/2, flip: "x", loop: true},
    });
}
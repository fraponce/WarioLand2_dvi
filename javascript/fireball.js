function add_fireball(Q){
	Q.Sprite.extend('add_fireball',{

		init: function(p){

			this._super(p, {
				sensor: true,
				sprite: 'anim_fireball',
				sheet: 'fireball',
				points: [[-6,-6],[6,-6],[6,6],[-6,6]],
				gravity:0,
				time: 0,
				vx: 50,
			});

			this.add('2d, animation');
		    this.on("hit", function(collision){
		    		if(collision.obj.isA("Wario")){
						collision.obj.die();
						this.destroy();
					}
					else if(collision.obj.isA("Wario"))
						this.destroy();
		    });

		},

		step: function(dt){
			this.p.time += dt;
			this.play("fireR");
			if(this.p.time > 10)
				this.destroy();
		}

	});

	Q.animations('anim_fireball',{
    	fireR:{frames:[0,1], rate: 1/3, flip: false, loop: true},
    	explosionR:{frames:[2,3,4], rate: 1/3, flip: false, loop: false},
    	fireL:{frames:[0,1], rate: 1/3, flip: "x", loop: true},
    	explosionL:{frames:[2,3,4], rate: 1/3, flip: "x", loop: false}
    });
}
function add_fireball(Q){
	Q.Sprite.extend('add_fireball',{

		init: function(p){

			this._super(p, {
				sensor: true,
				sprite: 'anim_bigcoin',
				sheet: 'monedaGold',
				points: [[-6,-6],[6,-6],[6,6],[-6,6]],
				gravity:0,
				time: 0,
				vx: 50,
			});

			this.add('2d, animation, Stats');
		    this.setStats(100, 2, true);
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
			if(this.p.time > 10)
				this.destroy();
		}

	});

	Q.animations('anim_bigcoin',{
    	bigcoin:{frames:[0,1,2,3,4], rate: 1/10, flip: false, loop: true}
    });
}
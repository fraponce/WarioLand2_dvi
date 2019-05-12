function add_goldCoin(Q){
	Q.Sprite.extend('goldCoin',{
		init: function(p){
			this._super(p,{
				sprite: 'anim_bigcoin',
				sheet: 'monedaGold',
				id: 'ab',
				/*
		        SENSOR:
		        Set sensor to true so that it gets notified when it's hit,
		        but doesn't trigger collisions itself that cause the player 
		        to stop or change direction
		        */
				sensor:true,
				points: [[-5,-5],[5,-5],[5,5],[-5,5]],
				onSensor:false,
				get:false,
				getOnlyFirst:false,
				col: false
				
	        });
	        this.add('tween,animation,2d');
	        this.on("hit",this,"collision");

		},
		collision: function(col)
		{	
			this.p.col = true;
			//Guardar estado de la moneda
			if(col.obj.isA("Wario")){
				this.p.onSensor = true;

				var get = function(){
					if(!this.p.getOnlyFirst){
						this.p.getOnlyFirst = true;
						Q.state.set("score",Q.state.get("score")+2); 
			        	this.destroy();
			        }
		        }		
		        this.animate({ x: 100, y: 150 }, 0.65, { callback: get });
				if(!this.p.get)
				{
					this.p.get = true;
					//Q.state.inc('coins',1);	
					//Q.audio.play('coin.mp3');	
				}
			}					
		},
		step: function(dt)
		{
			this.stage.collide(this);
			if(!this.p.col)
				this.play('bigcoin');					
		}
	});

	Q.animations('anim_bigcoin',{
    	bigcoin:{frames:[0,1,2,3,4], rate: 1/10, flip: false, loop: true}
    });
}
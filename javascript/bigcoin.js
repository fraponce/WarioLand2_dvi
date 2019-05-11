function add_BigCoin(Q){
	Q.Sprite.extend('bigcoin',{
		init: function(p){
			this._super(p,{
				sprite: 'anim_bigcoin',
				sheet: 'bigcoin',
				id: 'ab',
				/*
		        SENSOR:
		        Set sensor to true so that it gets notified when it's hit,
		        but doesn't trigger collisions itself that cause the player 
		        to stop or change direction
		        */
				sensor:true,
				onSensor:false,
				get:false,
				getOnlyFirst:false
				
	        });
	        this.add('tween,animation');
	        this.on("hit",this,"collision");

		},
		collision: function(col)
		{	
			//Guardar estado de la moneda
			if(col.obj.isA("Wario")){
				this.p.onSensor = true;
				Q.state.set(this.p.id, true);	

				var get = function(){
					if(!this.p.getOnlyFirst){
						this.p.getOnlyFirst = true;
						Q.state.set("score",Q.state.get("score")+10); 
			        	this.destroy();
			        }
		        }		
		        this.animate({ y: this.p.y - 50 }, 0.2, { callback: get });
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
			if(Q.state.get(this.p.id) && !this.p.onSensor){	
				this.destroy();
			}
			else{
				this.play('bigcoin');	
			}					
		}
	});

	Q.animations('anim_bigcoin',{
    	bigcoin:{frames:[0,1,2,3,4,5], rate: 1/10, flip: 'x', loop: true}
    });
}
function add_BigCoin(Q){
	Q.Sprite.extend('bigcoin',{
		init: function(p){
			this._super(p,{
				sprite: 'anim_bigcoin',
				sheet: 'bigcoin',
				/*
		        SENSOR:
		        Set sensor to true so that it gets notified when it's hit,
		        but doesn't trigger collisions itself that cause the player 
		        to stop or change direction
		        */
				sensor:true,
				get:false
				
	        });
	        this.add('tween,animation');
	        this.on('sensor');

		},
		sensor: function()
		{	
			//console.log("##### big coin");
			var get = function(){
	        	this.destroy();
	        }		
	        this.animate({ y: this.p.y - 50 }, 0.2, { callback: get });
			if(!this.p.get){
				this.p.get = true;

				//Q.state.inc('coins',1);	
				//Q.audio.play('coin.mp3');	
			}			
		},
		step: function(dt)
		{
			this.play('bigcoin');			
		}
	});

	Q.animations('anim_bigcoin',{
    	bigcoin:{frames:[0,1,2,3,4,5], rate: 1/10, flip: 'x', loop: true}
    });
}
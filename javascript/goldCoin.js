function add_goldCoin(Q){
	Q.Sprite.extend('goldCoin',{
		init: function(p){
			this._super(p,{
				sprite: 'anim_goldcoin',
				sheet: 'monedaGold',
				sensor: false,
				points: [[-5,-5],[5,-5],[5,5],[-5,5]],
				onSensor:false,
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
				this.p.sensor = true;
				var get = function(){
					if(!this.p.getOnlyFirst){
						this.p.getOnlyFirst = true;
						Q.state.set("score",Q.state.get("score")+3); 
			        	this.destroy();
			        }
		        }
		        var xDesp = 0;		
		        if(col.obj.p.vx>0 && col.obj.p.placando){
		        	xDesp = 200;
		        }
		        else if(col.obj.p.vx>0) {
		        	xDesp = 180;
		        } else if(col.obj.p.vx<0 && col.obj.p.placando){
		        	xDesp = -200;
		        } else if( col.obj.p.vx<0){
		        	xDesp = -180;
		        }

		        this.animate({ x: this.p.x-120+xDesp, y: this.p.y-170 }, 0.70, { callback: get });
			}					
		},
		step: function(dt)
		{
			this.stage.collide(this);
			this.play('bigcoin');					
		}
	});

	Q.animations('anim_goldcoin',{
    	bigcoin: {frames:[0,1,2,3,4], rate: 1/10, flip: false, loop: true}
    });
}

function add_silverCoin(Q){
	Q.Sprite.extend('silverCoin',{
		init: function(p){
			this._super(p,{
				sprite: 'anim_Silvercoin',
				sheet: 'monedaSilver',
				sensor: false,
				points: [[-5,-5],[5,-5],[5,5],[-5,5]],
				onSensor:false,
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
				this.p.sensor = true;
				var get = function(){
					if(!this.p.getOnlyFirst){
						this.p.getOnlyFirst = true;
						Q.state.set("score",Q.state.get("score")+1); 
			        	this.destroy();
			        }
		        }		
		        this.animate({ x: this.p.x-120, y: this.p.y-170  }, 0.70, { callback: get });
			}					
		},
		step: function(dt)
		{
			this.stage.collide(this);
			this.play('bigcoin');					
		}
	});

	Q.animations('anim_Silvercoin',{
    	bigcoin: {frames:[0,1,2,3,4,5,6], rate: 1/10, flip: false, loop: true}
    });
}
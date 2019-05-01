function add_Mario(Q){

	Q.Sprite.extend('Mario', {
        init: function(p) {
            this._super(p, {
            	sprite: 'anim_mario',
                sheet: 'marioR',
                x: 120,
                y: 5,
                die: false,
                hafinalizado: false
            });
            this.add('2d, platformerControls, animation, tween');
            this.on('muere');
            this.on('victoria');
        },
        step: function(dt) 
        {
        	if(this.p.die)
        	{
        		this.play('die');
        	}
        	else if(!this.p.hafinalizado)
        	{
	        	// Si Mario supera la distancia del borde inferior
	        	// vuelve al origen
		        if(this.p.y > 650)
		        { 
		        	this.p.vy = 0;
	       		}
	       		console.log("X: " + this.p.x + " /// Y: " + this.p.y);
	       		//si mario salta
	       		if(this.p.vy != 0)
	       			this.play('jump_' + this.p.direction);
	       		//si mario mira a la izquierda
	       		else if(this.p.vx < 0)
	       			this.play('walk_left');
	       		//si mario mira a la derecha
	       		else if(this.p.vx > 0)
	       			this.play('walk_right');	       		
	       		//si mario está estático + lado de la dirección
	       		else
	       			this.play('stand_' + this.p.direction);
        	}  
        	else{
        		this.play('stand_right');
        		this.del('2d');
        	}      	
       	},

       	victoria: function()
       	{
       		if(!this.p.hafinalizado){
       			this.p.hafinalizado = true;     
       			Q.state.reset({ coins: 0 });  			
       			Q.audio.stop('music_main.mp3');
	       		Q.audio.play('music_level_complete.mp3');	
	       		Q.stageScene('endGame',1,{
	       			label:'YOU WIN'
	       		});
       		}       		
       	},

       	muere: function() 
       	{
       		if(!this.p.hafinalizado){

       			console.log("##### ha muerto mario");	
       			this.p.hafinalizado = true;
       			Q.state.reset({ coins: 0 });
	       		Q.audio.stop('music_main.mp3');
	       		Q.audio.play('music_die.mp3');
	       		this.p.die = true;
			    this.p.vx = 0;
	  
	       		var perder = function() {
	                this.destroy();
	                Q.stageScene('endGame',1,{
	       				label:'GAME OVER'
	       			});
	            }
	            var muertemario = function() {
	                this.animate({ 
	                	x: this.p.x, 
	                	y: 680, 
	                	angle: 0 
	                }, 0.5, { callback: perder });
	            }
	            this.animate({ 
	            	y: this.p.y - 100, 
	            	angle: 0 
	            }, 0.3, { callback: muertemario });
        	}
       	}
    });

    Q.animations('anim_mario',{
    	walk_right:{frames:[1,2,3], rate: 1/8},
    	walk_left:{frames:[15,16,17], rate: 1/8},
    	jump_right:{frames:[4],loop: false},
    	jump_left:{frames:[18],loop: false},
    	stand_right:{frames:[0],loop: false},
    	stand_left:{frames:[14],loop: false},
    	die:{frames:[12],loop: false}
    });
}
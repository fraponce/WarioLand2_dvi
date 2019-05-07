// SETAS
function add_Goomba(Q){
	Q.Sprite.extend('Goomba',{
		init: function(p){
			this._super(p,{
				sprite: 'anim_goomba',
				sheet: 'goomba', 		
                vx: 100,
                hamuerto:false
	        });
	        // aiBounce: cambia direccion cuando los enemigos dan con algo
	        this.add('2d, aiBounce, animation, defaultEnemy');
	        this.on('die');
		},
        step: function(dt) 
        {
        	if(!this.p.hamuerto)
        		this.play('walk');   
			else
			    this.play('die');	       	
       	},
       	die: function(dt)
       	{
       		//console.log('##### muerteeeee de la seta');	
       		this.p.hamuerto = true;       		
       		setTimeout(function() {
                Q('Goomba').destroy();
			}, 200);
       	}
	});

	Q.animations('anim_goomba',{
    	walk:{frames:[0,1], rate: 1/6, flip: false, loop: true},
    	die:{frames:[2],loop: false}
    });
}
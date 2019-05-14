function add_door(Q) {
	Q.Sprite.extend("Puerta", {
	    init: function(p) {
	        this._super(p, {
	        	escenario: 'levelX',
	        	entrar: true,
	            gravity: 0,
	            type: 0,
	            cx:8,
	            cy:8,
	            entrando: false,
	            w: 16,
	            h: 16,
	            sensor: true,
	            //color: "yellow", //Para ver donde las coloco primero
	            points: [[3,6],[3,-6],[-3,6],[-3,-6]]
	        });
	        this.on("hit", function(col)
	        {
	        	col.distance = 0;
				this.vx = col.separate[0]=0;
				this.vy = col.separate[1]=0;
			
				if(Q.inputs["up"] && col.obj.isA("Wario") && col.obj.p.vx==0 && !col.obj.p.placando && !col.obj.p.culetazo && !col.obj.p.agachado)
				{
					if(!this.p.entrando) {
						this.p.entrando =true;
						col.obj.p.jumpSpeed = 0; 
                		col.obj.p.vy = 1;
                		col.obj.p.entrando = true;
                		col.obj.p.vx = 0;
                		Q.state.set('nombrePuerta', this.p.escenario);     		
						col.obj.play('enter_door');
					}

				}		
	        });
	    },
	    step: function(dt) 
	    {
		    this.stage.collide(this);
		}
    });
}
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
			
				if(Q.inputs["up"] && col.obj.isA("Wario") && this.p.entrar)
				{		
					this.p.entrar = false;			
		            //Guardar estado de la pos de Wario => Nombre/Valor
					Q.state.set('cargadoOK' + Q.state.get('levelactual'), true);
					//Guardar como ejemplo: siguientelevel1 xlevel1 ylevel1  
					Q.state.set('siguiente' + Q.state.get('levelactual'), Q.state.get('levelactual'));  
					//Guardar las coordenadas        
			        Q.state.set('x' + Q.state.get('levelactual'), col.obj.p.x + 10); 
			        Q.state.set('y' + Q.state.get('levelactual'), col.obj.p.y - 5);		
			        //console.log("##### escenario -> " + Q.state.get('levelactual'));         
	          		//console.log("##### guarda X -> " + Q.state.get('x' + Q.state.get('levelactual')));
                	//console.log("##### guarda Y -> " + Q.state.get('y' + Q.state.get('levelactual')));  

					col.obj.trigger('onDoor');
					if(this.p.escenario != -1)
					{				
						Q.stageScene(this.p.escenario);
						this.p.escenario = -1;
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
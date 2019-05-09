function add_door(Q) {
	Q.Sprite.extend("Puerta", {
	    init: function(p) {
	        this._super(p, {
	        	escenario: -1,
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
				if(Q.inputs["up"] && col.obj.isA("Wario"))
				{
					//console.log("XXXXXXXXXXX this.p.escenario -> " + this.p.escenario);
					//console.log("##### 3"); 
					//col.obj.trigger('onDoor');
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
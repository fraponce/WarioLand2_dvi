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
	            color: "yellow", //Para ver donde las coloco primero
	            points: [[3,6],[3,-6],[-3,6],[-3,-6]]
	        });
	        this.on("hit",this,"collision");
	    },

		collision: function(col) 
		{
			col.distance = 0;

			this.vx = col.separate[0]=0;
			this.vy = col.separate[1]=0;
			if(Q.inputs["up"] 
				&& col.obj.isA("Wario"))
			{
				//console.log("XXXXXXXXXXX this.p.escenario -> " + this.p.escenario);
				col.obj.trigger("enter_door",col);
				if(this.p.escenario == 1)
				{
					//console.log("XXXXXXXXXXX escenario 1");
					this.p.escenario = -1;
					Q.stageScene('level1');
				}
				else if(this.p.escenario == 2)
				{
					//console.log("XXXXXXXXXXX escenario 2");
					this.p.escenario = -1;
					Q.stageScene('level2');
				}
			}		    
		},
	    step: function(dt) 
	    {
		    this.stage.collide(this);
		}
    });
}
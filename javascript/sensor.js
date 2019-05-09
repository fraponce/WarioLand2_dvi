function add_sensor(Q) {
	Q.Sprite.extend("Sensor", {
	    init: function(p) {
	        this._super(p, {
	            gravity: 0,
	            type: 0,
	            cx:8,
	            cy:8,
	            w: 16,
	            h: 16,
	            sensor: true,
	            //color: "green", //Para ver donde las coloco primero
	            points: [[3,6],[3,-6],[-3,6],[-3,-6]]
	        });

	        //this.add('2d, tween');
	        this.on("hit",this,"collision");
	    },

		collision: function(col) {
			col.distance = 0;

			this.vx = col.separate[0]=0;
			this.vy = col.separate[1]=0;
			if(col.obj.isA("enemy1")){
				col.obj.p.vx = -col.obj.p.vx;
				col.obj.trigger("step",col);
			}else{

			}		    
		},


	    step: function(dt) {
		    this.stage.collide(this);
		},
	    /*draw: function(ctx) {
		    ctx.fillStyle = this.p.color;
		     //Draw a filled rectangle centered
		   ctx.fillRect(-this.p.cx,
		                 -this.p.cy,
		                 this.p.w,
		                 this.p.h);
  		}*/

    });
    /*new Q.TileLayer(
    	tileW: 16,
    	tileH: 16,
    	blockTileW: 16,
    	blockTileH: 16,
    	type: CTE_STAIRS
    );*/
}
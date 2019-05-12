function add_stair(Q) {
	Q.Sprite.extend("Escalera", {
	    init: function(p) {
	        this._super(p, {
	            gravity: 0,
	            type: 0,
	            cx:8,
	            cy:8,
	            w: 16,
	            h: 16,
	            sensor: true,
	            color: "red", //Para ver donde las coloco primero
	            points: [[3,6],[3,-6],[-3,6],[-3,-6]]
	        });

	        //this.add('2d, tween');
	        this.on("hit",this,"collision");
	    },

		collision: function(col) {
			col.distance = 0;

			this.vx = col.separate[0]=0;
			this.vy = col.separate[1]=0;
			if(col.obj.isA("Wario") && col.obj.p.vx==0){
				col.obj.trigger("onStair",col);
			}else{

			}		    
		},


	    step: function(dt) {
		    this.stage.collide(this);
		},
	    draw: function(ctx) {
		    //ctx.fillStyle = this.p.color;
		    // Draw a filled rectangle centered at
		    // 0,0 (i.e. from -w/2,-h2 to w/2, h/2)
		   /*ctx.fillRect(-this.p.cx,
		                 -this.p.cy,
		                 this.p.w,
		                 this.p.h);*/
  		}

    });
    /*new Q.TileLayer(
    	tileW: 16,
    	tileH: 16,
    	blockTileW: 16,
    	blockTileH: 16,
    	type: CTE_STAIRS
    );*/
}
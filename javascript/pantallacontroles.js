function add_ControlesWario(Q)
{
	/////////////////////////////////////////////////
	// FONDO PANTALLA CONTROLES
	/////////////////////////////////////////////////
	Q.Sprite.extend("pantallacontroles", {
        init: function(p) {
            this._super(p, {                
                gravity:0,
                opacity: 1
            });
        },
        step: function (dt){}
    });

     Q.scene('controles',function(stage) 
     {
        stage.insert(new Q.pantallacontroles({
        	asset: "pantalla_inicial/pantallacontroles.png",
        	x: 160,
        	y: 160,
        	scale: 0.45
        }));

        let cara1 = stage.insert(new Q.CabezaWinLose({
        	x: 95, 
        	y: 275
        }));

        let cara2 = stage.insert(new Q.CabezaWinLose({
        	x: 237, 
        	y: 275
        }));
        
        Q.input.on("confirm",stage,function() 
        {
            Q.clearStages();
            Q.stageScene('pantallaMenu');
        });
    });
}
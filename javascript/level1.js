// inicialización
function add_Level(Q){
	//crea una nueva scene llamada level1
	Q.scene('level1', function(stage)
	{
		Q.stageTMX('level0000pruebas.tmx',stage); 
		var player = stage.insert(new Q.Wario({ x: 150, y: 80 }));
		//var escalera = stage.insert(new Q.Escalera({x: 57, y: 250}));
		//var escalera2 = stage.insert(new Q.Escalera({x: 57, y: 234}));
		//var enemy001 = stage.insert(new Q.Enemy1({x: 200,y: 80}));
		var goomba001 = stage.insert(new Q.Goomba({x:200,y:80}))

		stage.add('viewport')
			.follow(player, 
				{
					x: true, 
					y: true
				},
				{

				});
		stage.viewport.offsetY = 60;
		stage.viewport.scale = 1.3;
	});
};

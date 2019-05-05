// inicialización
function add_Level(Q){
	//crea una nueva scene llamada level1
	Q.scene('level1', function(stage)
	{
		Q.stageTMX('level0001.tmx',stage); 
		var player = stage.insert(new Q.Wario({ x: 150, y: 380 }));

		stage.add('viewport')
			.follow(player, 
				{
					x: true, 
					y: true
				},
				{
					minY: 125, 
					maxY: 500
				});
	});
};

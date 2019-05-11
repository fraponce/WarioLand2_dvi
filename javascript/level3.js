// inicialización
function add_Level3(Q){
	//crea una nueva scene llamada level1
	Q.scene('level3', function(stage)
	{
		// Guardo el nivel en el que estoy
		Q.state.set('levelactual', 'level3');

		Q.stageTMX('level003.tmx',stage); 
		var player = stage.insert(new Q.Wario({ x: 170, y: 558, esta: stage }));	

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

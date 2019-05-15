// inicialización
function add_Level3(Q){
	//crea una nueva scene llamada level1
	Q.scene('level3', function(stage)
	{
		// Guardo el nivel en el que estoy
		Q.state.set('levelactual', 'level3');
		Q.audio.stop();
		Q.audio.play('39 Boss Fight.mp3',{loop: true});
		Q.stageTMX('level003.tmx',stage); 
		var player = stage.insert(new Q.Wario({ x: 170, y: 558, esta: stage }));	
		var boss = stage.insert(new Q.boss({x: 588, y: 624}));
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

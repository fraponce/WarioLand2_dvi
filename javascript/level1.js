// inicialización
function add_Level(Q){
	//crea una nueva scene llamada level1
	Q.scene('level1', function(stage)
	{
		Q.stageTMX('level.tmx',stage);	
		//var player = stage.insert(new Q.Mario());

		/*stage.add('viewport')
			.follow(player, 
				{
					x: true, 
					y: true
				},
				{
					minY: 125, 
					maxY: 500
				});
				*/
	});
}

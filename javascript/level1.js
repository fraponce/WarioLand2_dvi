// inicialización
function add_Level(Q){
	//crea una nueva scene llamada level1
	Q.scene('level1', function(stage)
	{
		Q.stageTMX('level001.tmx',stage); 
		var player = stage.insert(new Q.Wario({ x: 245, y: 275 }));

			//Escaleras a pelo
		
		var escalera1a = stage.insert(new Q.Escalera({x: 214, y: 420}));
		var escalera1b = stage.insert(new Q.Escalera({x: 214, y: 404}));
		var escalera1c = stage.insert(new Q.Escalera({x: 214, y: 388}));
		var escalera1d = stage.insert(new Q.Escalera({x: 214, y: 372}));
		var escalera1e = stage.insert(new Q.Escalera({x: 214, y: 356}));
		var escalera1f = stage.insert(new Q.Escalera({x: 214, y: 340}));
		var escalera1g = stage.insert(new Q.Escalera({x: 214, y: 324}));
		var escalera1h = stage.insert(new Q.Escalera({x: 214, y: 308}));
		//var escalera1i = stage.insert(new Q.Escalera({x: 214, y: 292}));
		var escalera1j = stage.insert(new Q.Escalera({x: 214, y: 276}));

		var escalera2a = stage.insert(new Q.Escalera({x: 1306, y: 416}));
		var escalera2b = stage.insert(new Q.Escalera({x: 1306, y: 400}));
		var escalera2c = stage.insert(new Q.Escalera({x: 1306, y: 384}));
		var escalera2d = stage.insert(new Q.Escalera({x: 1306, y: 368}));
		var escalera2e = stage.insert(new Q.Escalera({x: 1306, y: 352}));
		var escalera2f = stage.insert(new Q.Escalera({x: 1306, y: 336}));

		var escalera3a = stage.insert(new Q.Escalera({x: 1338, y: 320}));
		var escalera3b = stage.insert(new Q.Escalera({x: 1338, y: 306}));
		var escalera3c = stage.insert(new Q.Escalera({x: 1338, y: 290}));
		var escalera3d = stage.insert(new Q.Escalera({x: 1338, y: 274}));
		var escalera3e = stage.insert(new Q.Escalera({x: 1338, y: 258}));
		//======================




		var enemy001 = stage.insert(new Q.enemy1({x: 560,y: 450}));
		var enemy002 = stage.insert(new Q.enemy1({x:400 , y:352}));
		var enemy003 = stage.insert(new Q.enemy1({x:1110 , y:448}));
		//var goomba001 = stage.insert(new Q.Goomba({x:200,y:80}))

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

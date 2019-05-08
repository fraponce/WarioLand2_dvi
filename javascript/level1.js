// inicialización
function add_Level(Q){
	//crea una nueva scene llamada level1
	Q.scene('level1', function(stage)
	{
		Q.stageTMX('level001.tmx',stage); 
		var player = stage.insert(new Q.Wario({ x: 245, y: 480 }));

			//Escaleras a pelo
		
		var escalera1a = stage.insert(new Q.Escalera({x: 214, y: 592}));
		var escalera1b = stage.insert(new Q.Escalera({x: 214, y: 576}));
		var escalera1c = stage.insert(new Q.Escalera({x: 214, y: 560}));
		var escalera1d = stage.insert(new Q.Escalera({x: 214, y: 544}));
		var escalera1e = stage.insert(new Q.Escalera({x: 214, y: 528}));
		var escalera1f = stage.insert(new Q.Escalera({x: 214, y: 512}));
		var escalera1g = stage.insert(new Q.Escalera({x: 214, y: 496}));
		var escalera1h = stage.insert(new Q.Escalera({x: 214, y: 480}));
		//var escalera1i = stage.insert(new Q.Escalera({x: 214, y: 292}));
		//var escalera1j = stage.insert(new Q.Escalera({x: 214, y: 276}));

		var escalera2a = stage.insert(new Q.Escalera({x: 1306, y: 576}));
		var escalera2b = stage.insert(new Q.Escalera({x: 1306, y: 560}));
		var escalera2c = stage.insert(new Q.Escalera({x: 1306, y: 544}));
		var escalera2d = stage.insert(new Q.Escalera({x: 1306, y: 528}));
		var escalera2e = stage.insert(new Q.Escalera({x: 1306, y: 512}));
		var escalera2f = stage.insert(new Q.Escalera({x: 1306, y: 496}));

		var escalera3a = stage.insert(new Q.Escalera({x: 1338, y: 480}));
		var escalera3b = stage.insert(new Q.Escalera({x: 1338, y: 464}));
		var escalera3c = stage.insert(new Q.Escalera({x: 1338, y: 448}));
		var escalera3d = stage.insert(new Q.Escalera({x: 1338, y: 432}));
		var escalera3e = stage.insert(new Q.Escalera({x: 1338, y: 416}));
		//======================




		var enemy001 = stage.insert(new Q.enemy1({x: 560,y: 608}));
		var enemy002 = stage.insert(new Q.enemy1({x:400 , y:512}));
		var enemy003 = stage.insert(new Q.enemy1({x:1110 , y:604}));
		//var goomba001 = stage.insert(new Q.Goomba({x:200,y:80}))

		//Monedas
		var bigcoin001 = stage.insert(new Q.bigcoin({x: 330,y: 380}));
		var bigcoin002 = stage.insert(new Q.bigcoin({x: 400,y: 348}));
		var bigcoin003 = stage.insert(new Q.bigcoin({x: 490,y: 364}));
		var bigcoin004 = stage.insert(new Q.bigcoin({x: 672,y: 332}));
		var bigcoin005 = stage.insert(new Q.bigcoin({x: 830,y: 364}));
		var bigcoin006 = stage.insert(new Q.bigcoin({x: 1135,y: 396}));

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

// inicialización
function add_Level2(Q){
	//crea una nueva scene llamada level1
	Q.scene('level2', function(stage)
	{
		Q.stageTMX('level002.tmx',stage); 

		// level 2
		var player = stage.insert(new Q.Wario({ x: 190, y: 432, esta: stage  }));	

		//Escaleras
		var escalera4a = stage.insert(new Q.Escalera({x: 214, y: 576}));
		var escalera4b = stage.insert(new Q.Escalera({x: 214, y: 560}));
		var escalera4c = stage.insert(new Q.Escalera({x: 214, y: 544}));
		var escalera4d = stage.insert(new Q.Escalera({x: 214, y: 528}));
		var escalera4e = stage.insert(new Q.Escalera({x: 214, y: 512}));
		var escalera4f = stage.insert(new Q.Escalera({x: 214, y: 496}));
		var escalera4g = stage.insert(new Q.Escalera({x: 214, y: 480}));
		var escalera4h = stage.insert(new Q.Escalera({x: 214, y: 464}));
		var escalera4i = stage.insert(new Q.Escalera({x: 214, y: 448}));

		//Monedas
		var bigcoin001b = stage.insert(new Q.bigcoin({x: 305,y: 380}));
		var bigcoin002b = stage.insert(new Q.bigcoin({x: 400,y: 332}));
		var bigcoin003b = stage.insert(new Q.bigcoin({x: 470,y: 284}));
		var bigcoin004b = stage.insert(new Q.bigcoin({x: 645,y: 316}));
		var bigcoin005b = stage.insert(new Q.bigcoin({x: 725,y: 316}));
		var bigcoin006b = stage.insert(new Q.bigcoin({x: 945,y: 268}));
		var bigcoin007b = stage.insert(new Q.bigcoin({x: 1075,y: 220}));
		var bigcoin008b = stage.insert(new Q.bigcoin({x: 1200,y: 252}));
		var bigcoin009b = stage.insert(new Q.bigcoin({x: 1310,y: 316}));

		//Puertas
		//Puerta verde
		var puerta001b = stage.insert(new Q.Puerta({x: 120, y: 428, escenario: 1}));
		var puerta002b = stage.insert(new Q.Puerta({x: 120, y: 444, escenario: 1}));	

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

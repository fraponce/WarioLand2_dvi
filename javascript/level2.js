// inicialización
function add_Level2(Q){
	//crea una nueva scene llamada level1
	Q.scene('level2', function(stage)
	{
		// Guardo el nivel en el que estoy
		Q.state.set('levelactual', 'level2');

		Q.stageTMX('level002.tmx',stage); 

		// level 2
		var player = stage.insert(new Q.Wario({ x: 190, y: 432, esta: stage  }));	

		//Escaleras
		var escalera4a = stage.insert(new Q.Escalera({x: 214, y: 576}));
		var escalera4b = stage.insert(new Q.Escalera({x: 214, y: 560}));
		var escalera4c = stage.insert(new Q.Escalera({x: 214, y: 544}));
		var escalera4d = stage.insert(new Q.Escalera({x: 214, y: 528}));
		var escalera4e = stage.insert(new Q.Escalera({x: 214, y: 512}));
		var escalera4f = stage.insert(new Q.Escalera({x: 214, y: 493}));
		var escalera4g = stage.insert(new Q.Escalera({x: 214, y: 476}));
		var escalera4h = stage.insert(new Q.Escalera({x: 214, y: 458}));
		//var escalera4i = stage.insert(new Q.Escalera({x: 214, y: 448}));

		//Monedas
		var bigcoin001b = stage.insert(new Q.bigcoin({x: 305,y: 380, id:'1b'}));
		var bigcoin002b = stage.insert(new Q.bigcoin({x: 400,y: 332, id:'2b'}));
		var bigcoin003b = stage.insert(new Q.bigcoin({x: 470,y: 284, id:'3b'}));
		var bigcoin004b = stage.insert(new Q.bigcoin({x: 645,y: 316, id:'4b'}));
		var bigcoin005b = stage.insert(new Q.bigcoin({x: 725,y: 316, id:'5b'}));
		var bigcoin006b = stage.insert(new Q.bigcoin({x: 945,y: 268, id:'6b'}));
		var bigcoin007b = stage.insert(new Q.bigcoin({x: 1075,y: 220, id:'7b'}));
		var bigcoin008b = stage.insert(new Q.bigcoin({x: 1200,y: 252, id:'8b'}));
		var bigcoin009b = stage.insert(new Q.bigcoin({x: 1310,y: 316, id:'9b'}));

		var enemy001 =  stage.insert(new Q.enemy2({x: 1310,y: 316}));

		//Puertas
		//Puerta verde
		var puerta001b = stage.insert(new Q.Puerta({x: 120, y: 428, escenario: 'level1'}));
		//var puerta002b = stage.insert(new Q.Puerta({x: 120, y: 444, escenario: 'level1'}));	

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

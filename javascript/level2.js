// inicialización
function add_Level2(Q){
	//crea una nueva scene llamada level1
	Q.scene('level2', function(stage)
	{
		// Guardo el nivel en el que estoy
		Q.state.set('levelactual', 'level2');

		Q.stageTMX('level002.tmx',stage); 

		// level 2
		var player = stage.insert(new Q.Wario({ x: 120, y: 432, esta: stage  }));	

		//Escaleras
		var escalera4a = stage.insert(new Q.Escalera({x: 214, y: 576}));
		var escalera4b = stage.insert(new Q.Escalera({x: 214, y: 560}));
		var escalera4c = stage.insert(new Q.Escalera({x: 214, y: 544}));
		var escalera4d = stage.insert(new Q.Escalera({x: 214, y: 528}));
		var escalera4e = stage.insert(new Q.Escalera({x: 214, y: 512}));
		var escalera4f = stage.insert(new Q.Escalera({x: 214, y: 492}));
		var escalera4g = stage.insert(new Q.Escalera({x: 214, y: 474}));
		var escalera4h = stage.insert(new Q.Escalera({x: 214, y: 453}));
		//var escalera4i = stage.insert(new Q.Escalera({x: 214, y: 448}));

		//Monedas
		//var bigcoin001b = stage.insert(new Q.bigcoin({x: 305,y: 380, id:'1b'}));
		var bigcoin002b = stage.insert(new Q.bigcoin({x: 400,y: 332, id:'2b'}));
		var bigcoin003b = stage.insert(new Q.bigcoin({x: 470,y: 284, id:'3b'}));
		var bigcoin004b = stage.insert(new Q.bigcoin({x: 645,y: 316, id:'4b'}));
		var bigcoin005b = stage.insert(new Q.bigcoin({x: 725,y: 316, id:'5b'}));
		var bigcoin006b = stage.insert(new Q.bigcoin({x: 945,y: 268, id:'6b'}));
		var bigcoin007b = stage.insert(new Q.bigcoin({x: 1075,y: 220, id:'7b'}));
		var bigcoin008b = stage.insert(new Q.bigcoin({x: 1200,y: 252, id:'8b'}));
		var bigcoin009b = stage.insert(new Q.bigcoin({x: 1310,y: 316, id:'9b'}));

		var i;
		for (i = 0; i < 30; i++) {
		  var bloquei = stage.insert(new Q.Bloque({x: 250+i*32, y: 532, id: 'bloquelvl2a' + i}));
		  var bloquei = stage.insert(new Q.Bloque({x: 250+i*32, y: 500, id: 'bloquelvl2b' + i}));
		};

		//Enemigos
		var enemy001 =  stage.insert(new Q.enemy2({x: 400,y: 332}));
		var enemy002 =  stage.insert(new Q.enemy2({x: 470,y: 284}));
		var enemy003 =  stage.insert(new Q.enemy2({x: 945,y: 268}));
		var enemy004 =  stage.insert(new Q.enemy2({x: 1075,y: 220}));
		var enemy005 =  stage.insert(new Q.enemy2({x: 1200,y: 252}));
		var enemy006 =  stage.insert(new Q.enemy2({x: 320,y: 316}));
		var enemy007 =  stage.insert(new Q.enemy1({x: 444,y: 576}));
		var enemy008 =  stage.insert(new Q.enemy1({x: 568,y: 576}));
		var enemy009 =  stage.insert(new Q.enemy1({x: 692,y: 576}));
		var enemy010 =  stage.insert(new Q.enemy1({x: 816,y: 576}));
		var enemy011 =  stage.insert(new Q.enemy1({x: 939,y: 576}));
		var enemy012 =  stage.insert(new Q.enemy1({x: 1064,y: 576}));

		//sensores.
		var sensorenemy007 = stage.insert(new Q.Sensor({x:305, y: 576}));
		var sensorenemy008 = stage.insert(new Q.Sensor({x:429, y: 576}));
		var sensorenemy009 = stage.insert(new Q.Sensor({x:553, y: 576}));		
		var sensorenemy010 = stage.insert(new Q.Sensor({x:677, y: 576}));
		var sensorenemy011 = stage.insert(new Q.Sensor({x:801, y: 576}));
		var sensorenemy012 = stage.insert(new Q.Sensor({x:925, y: 576}));
		var sensorenemy012 = stage.insert(new Q.Sensor({x:1049, y: 576}));

		//Puertas
		//Puerta verde
		var puerta001b = stage.insert(new Q.Puerta({x: 120, y: 428, escenario: 'level1'}));
		//Puerta BOSS
		var puerta002b = stage.insert(new Q.Puerta({x: 1365, y: 316, escenario: 'level3'}));

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

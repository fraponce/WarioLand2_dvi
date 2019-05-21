// inicialización
function add_Level4(Q){
	//crea una nueva scene llamada level1
	Q.scene('level4', function(stage)
	{
		// Guardo el nivel en el que estoy
		Q.state.set('levelactual', 'level4');

		Q.stageTMX('level004.tmx',stage); 
		var player = stage.insert(new Q.Wario({ x: 392, y: 624, esta: stage }));

		var bigcoin001c = stage.insert(new Q.bigcoin({x: 186,y: 600, id:'1c'}));
		var bigcoin002c = stage.insert(new Q.bigcoin({x: 233,y: 550, id:'2c'}));
		var bigcoin003c = stage.insert(new Q.bigcoin({x: 282,y: 550, id:'3c'}));
		var bigcoin004c = stage.insert(new Q.bigcoin({x: 331,y: 510, id:'4c'}));
		var bigcoin005c = stage.insert(new Q.bigcoin({x: 373,y: 490, id:'5c'}));
		var bigcoin006c = stage.insert(new Q.bigcoin({x: 425,y: 475, id:'6c'}));
		var bigcoin007c = stage.insert(new Q.bigcoin({x: 472,y: 490, id:'7c'}));
		var bigcoin008c = stage.insert(new Q.bigcoin({x: 521,y: 555, id:'8c'}));
		var bigcoin009c = stage.insert(new Q.bigcoin({x: 570,y: 545, id:'9c'}));
		var bigcoin010c = stage.insert(new Q.bigcoin({x: 618,y: 565, id:'10c'}));

		var puerta001c = stage.insert(new Q.Puerta({x: 392, y: 624, escenario: 'level1'}));

		//Enemigos
		var enemy001 = stage.insert(new Q.enemy1({x:244 , y:624}));
		var enemy002 = stage.insert(new Q.enemy1({x:562 , y:624}));

		//Sensor
		var sensorenemy001 = stage.insert(new Q.Sensor({x:333, y: 624}));
		var sensorenemy002 = stage.insert(new Q.Sensor({x:449, y: 624}));	

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

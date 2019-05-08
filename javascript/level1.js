// inicialización
function add_Level(Q){
	//crea una nueva scene llamada level1
	Q.scene('level1', function(stage)
	{
		Q.stageTMX('level001.tmx',stage); 
		var player = stage.insert(new Q.Wario({ x: 150, y: 230 }));

		//Escaleras a pelo
		var escalera1a = stage.insert(new Q.Escalera({x: 57, y: 250}));
		var escalera1b = stage.insert(new Q.Escalera({x: 57, y: 234}));
		var escalera1c = stage.insert(new Q.Escalera({x: 57, y: 218}));
		var escalera1d = stage.insert(new Q.Escalera({x: 57, y: 202}));
		var escalera1e = stage.insert(new Q.Escalera({x: 57, y: 186}));
		var escalera1f = stage.insert(new Q.Escalera({x: 57, y: 170}));
		var escalera1g = stage.insert(new Q.Escalera({x: 57, y: 154}));
		var escalera1h = stage.insert(new Q.Escalera({x: 57, y: 138}));
		var escalera1i = stage.insert(new Q.Escalera({x: 57, y: 266}));

		var escalera2a = stage.insert(new Q.Escalera({x: 1143, y: 266}));
		var escalera2b = stage.insert(new Q.Escalera({x: 1143, y: 250}));
		var escalera2c = stage.insert(new Q.Escalera({x: 1143, y: 234}));
		var escalera2d = stage.insert(new Q.Escalera({x: 1143, y: 218}));
		var escalera2e = stage.insert(new Q.Escalera({x: 1143, y: 202}));
		var escalera2f = stage.insert(new Q.Escalera({x: 1143, y: 186}));

		var escalera3a = stage.insert(new Q.Escalera({x: 1175, y: 170}));
		var escalera3b = stage.insert(new Q.Escalera({x: 1175, y: 154}));
		var escalera3c = stage.insert(new Q.Escalera({x: 1175, y: 138}));
		var escalera3d = stage.insert(new Q.Escalera({x: 1175, y: 122}));
		var escalera3e = stage.insert(new Q.Escalera({x: 1175, y: 106}));
		//======================



		var enemy001 = stage.insert(new Q.enemy1({x: 200,y: 80}));
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

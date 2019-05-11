CTE_WARIO = 1;
CTE_STAIRS = 4;
CTE_DOOR = 8;
CTE_NORMAL_BLOCK = 16;
CTE_COIN = 32;

window.addEventListener('load',function()
{
	var Q = Quintus({audioSupported:['mp3','ogg']})
			.include('Sprites, Scenes, Input, 2D, Anim, Touch, UI, TMX, Audio')		
		    .setup({ 
		    	width: 320, 
		    	height: 320 
		    })
		    .controls()
		    .touch()
		    .enableSound();	
	
	add_Level1(Q);
	add_Level2(Q);
	add_wario(Q);
	add_stair(Q);
	add_enemy1(Q);
	add_enemy2(Q);
	add_BigCoin(Q);
	add_sensor(Q);
	add_door(Q);
	add_bloque(Q);
	add_hud(Q);
	add_MenuWario(Q);
	add_ControlesWario(Q);
	//add_Goomba(Q);
	
	Q.loadTMX('level001.tmx, level002.tmx, vidas.png, vidas.json, wario.png, wario.json, enemy1.png, enemy1.json,enemy2.png,enemy2.json, bigcoin.png, bigcoin.json, block.png, bloque.json, pantalla_inicial/titulowario.png, pantalla_inicial/fondopantallaprincipal.png,pantalla_inicial/pantallacontroles.png, pantalla_inicial/controls.png, pantalla_inicial/newgame.png, pantalla_inicial/pressenter.png, cabezawario.png, cabezawario.json', function()
	{		
		Q.compileSheets('wario.png', 'wario.json');
		Q.compileSheets('enemy1.png', 'enemy1.json');
		Q.compileSheets('enemy2.png', 'enemy2.json')
		Q.compileSheets('bigcoin.png', 'bigcoin.json');
		Q.compileSheets('block.png', 'bloque.json');
		Q.compileSheets('vidas.png', 'vidas.json');		
		Q.compileSheets('cabezawario.png', 'cabezawario.json');
		//Q.compileSheets('goomba.png', 'goomba.json');
		//Q.stageScene('level1');
		Q.stageScene('pantallaMenu');
		//Q.state.set("score",0);
	});
});

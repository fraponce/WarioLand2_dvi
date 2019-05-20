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
    
	Q.load(["Intro.mp3","02 Out of the Woods (Night).mp3","WL3_Steps.mp3",
		"WL3_Climb.mp3","WL3_Fire.mp3","WL3_WarioHit.mp3","WL3_Collect.mp3","WL3_Break.mp3",
		"WL3_EnemyDestroyed.mp3","51 Title.mp3","39 Boss Fight.mp3","48 Game Over.mp3",
		"54 Perfect!.mp3","WL3_EnemyHit.mp3","WL3_Jump.mp3", "WL3_PauseSound2.mp3", "WL3_PauseSound.mp3", "WL3_IntoThePipe.mp3",
		"WL3_CrouchWalk.mp3","WL3_Dash_Normal.mp3","WL3_Stomp.mp3"], function(){});
	add_Level1(Q);
	add_Level2(Q);
	add_Level3(Q);
	add_Level4(Q);
	add_wario(Q);
	add_stair(Q);
	add_enemy1(Q);
	add_enemy2(Q);
	add_fireball(Q);
	add_BigCoin(Q);
	add_sensor(Q);
	add_door(Q);
	add_bloque(Q);
	add_hud(Q);
	add_hud_Boss(Q);	

	add_MenuWario(Q);
	add_ControlesWario(Q);
	add_pantallaWin(Q);
	add_pantallaLose(Q);
	add_goldCoin(Q);
	add_silverCoin(Q);
	add_lifeObj(Q);
	add_boss(Q);
	add_IntroWario(Q);
	add_PantallaIntro(Q);
	//add_Goomba(Q);
	

	Q.loadTMX('level001.tmx, level002.tmx, level003.tmx,level004.tmx,'+
		' numeros/0.png, numeros/1.png, numeros/2.png,'+
		' numeros/3.png, numeros/4.png, numeros/5.png,'+
		' numeros/6.png, numeros/7.png, numeros/8.png,'+
		' numeros/9.png, vidas.png, vidas.json, wario.png,'+
		' wario.json, enemy1.png, enemy1.json,'+
		' boss.json, boss.png,'+
		' enemy2.png,enemy2.json, bigcoin.png, bigcoin.json,'+
		' miniSilverCoin.png, monedaSilver.json, miniGoldCoin.png,'+
		' monedaGold.json, block.png, bloque.json,'+
		' pantalla_inicial/titulowario.png,'+
		' pantalla_inicial/fondopantallaprincipal.png,'+
		' pantalla_inicial/pantallacontroles.png, '+
		' pantalla_inicial/controls.png, '+
		' pantalla_inicial/newgame.png,'+
		' pantalla_inicial/pressenter.png, cabezawario.png,'+
		' cabezawario.json, pantallawinlose/fondonegro.png,'+
		' pantallawinlose/pressentertocontinue.png,'+
		' pantallawinlose/score.png, pantallawinlose/youlose.png,'+
		' pantallawinlose/youwin.png, obj_life.png, lifes.json,' +
		' intro.jpg, intro.json,' +
		' vidas_boss.png, vidasBoss.json',
		 function()
	{		
		Q.compileSheets('wario.png', 'wario.json');
		Q.compileSheets('fireball.png', 'fireball.json');
		Q.compileSheets('enemy1.png', 'enemy1.json');
		Q.compileSheets('enemy2.png', 'enemy2.json');
		Q.compileSheets('boss.png', 'boss.json');
		Q.compileSheets('bigcoin.png', 'bigcoin.json');
		Q.compileSheets('block.png', 'bloque.json');
		Q.compileSheets('vidas.png', 'vidas.json');
		Q.compileSheets('obj_life.png','lifes.json');		
		Q.compileSheets('cabezawario.png', 'cabezawario.json');
		Q.compileSheets('miniGoldCoin.png', 	'monedaGold.json');
		Q.compileSheets('miniSilverCoin.png', 	'monedaSilver.json');
		Q.compileSheets('intro.jpg', 'intro.json');
		Q.compileSheets('vidas_boss.png','vidasBoss.json');
		//Q.compileSheets('goomba.png', 'goomba.json');
		Q.stageScene('pantallaIntro');
		//Q.stageScene('level3');
		//Q.stageScene('derrota');
		//Q.stageScene('victoria');
		//Q.state.set("score",0);
	});
});

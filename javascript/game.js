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
	
	add_Level(Q);
	add_wario(Q);
	
	Q.loadTMX('level0001puerta01.tmx, wario.png, wario.json', function()
	{		
		Q.compileSheets('wario.png', 'wario.json');	
		Q.stageScene('level1');
	});
});

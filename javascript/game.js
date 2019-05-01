window.addEventListener('load',function()
{
	var Q = Quintus({audioSupported:['mp3','ogg']})
			.include('Sprites, Scenes, Input, 2D, Anim, Touch, UI, TMX, Audio')		
		    .setup({ 
		    	width: 320, 
		    	height: 480 
		    })
		    .controls()
		    .touch()
		    .enableSound();	
	
	add_Level(Q);
	add_Mario(Q);
	
	Q.loadTMX('level0001.tmx, mario_small.png, mario_small.json', function()
	{		
		Q.compileSheets('mario_small.png', 'mario_small.json');	
		Q.stageScene('level1');
	});
});

function add_PantallaIntro(Q)
{
    Q.load('Intro.mp3');
    
	Q.scene('pantallaIntro',function(stage) 
	{
		var intro = stage.insert(new Q.Intro30sec());
		var confirm = true;
        Q.audio.stop();
        Q.audio.play('Intro.mp3');

		Q.input.on('confirm', this, function() 
		{
            if (confirm) 
            { 
                Q.audio.stop();           
                Q.clearStages();
                Q.stageScene('pantallaMenu');
                confirm = false;
            }
        });
        stage.add('viewport').follow(intro);
	});
}
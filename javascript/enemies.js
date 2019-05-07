function add_enemy1(Q){
    Q.Sprite.extend('enemy1',{
        init: function(p){
            this._super(p,{
                sprite: 'anim_enemy1',
                sheet: 'enemy1',
                vx: 100,
                hamuerto:false
            });
            this.add('2d, aiBounce, animation, defaultEnemy');
            this.on('die');
        },
        step: function(dt) 
        {
            if(!this.p.hamuerto)
                 if(this.p.vx > 0 ) 
                this.play('walkL'); //Izquierda
            else if(this.p.vx<0) 
                this.play('walkR'); //Derecha
            else
                this.play('die');           
        },
        die: function(dt)
        {
            this.p.hamuerto = true;             
            setTimeout(function() {
                Q('enemy1').destroy();
            }, 200);
        }
    });

    Q.animations('anim_enemy1',{
        walkL:{frames:[0,1,2], rate: 1/6, flip: false, loop: true},
        walkR:{frames:[0,1,2], rate: 1/6, flip: false, loop: true},
        die:{frames:[3],loop: false}
    });
}
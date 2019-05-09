
function add_enemy1(Q){
    Q.Sprite.extend('enemy1',{
        init: function(p){
            this._super(p,{
                sprite: 'anim_enemy1',
                sheet: 'enemy1',
                vx: 50,
                lado: 1,
                points: [[-6,-6],[6,-6],[6,6],[-6,6]],
                hamuerto:false
            });
            this.add('2d, aiBounce, animation, defaultEnemy');
            this.on('die');



            this.on("bump.top", function(collision) {
                if (collision.obj.isA("Wario"))
                  if(collision.obj.p.culetazo){
                    this.play("die");
                    this.p.vy = -300;
                    this.die();
                }
          	});
          	this.on("bump.left", function(collision) {
                if (collision.obj.isA("Wario"))
                  if(this.p.lado == 0){
                    collision.obj.play("die");
                    collision.obj.die();
                  }else if (collision.obj.p.placando){
                    this.play("die");
                    this.p.vy = -300;
                    this.die();
            	  }
          	});
          	this.on("bump.right", function(collision) {
                if (collision.obj.isA("Wario"))
                  if(this.p.lado == 1){
                    collision.obj.play("die");
                    collision.obj.die();
                  }else if (collision.obj.p.placando){
                    this.play("die");
                    this.p.vy = -300;
                    this.die();
            }
          	});
        },
        step: function(dt) 
        {
            if(this.p.vx > 0 ) 
                this.p.lado=1; //Derecha
            else if(this.p.vx<0) 
                this.p.lado = 0; //Izquierda


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
            this.destroy();
        }
    });
   
    Q.animations('anim_enemy1',{
        walkL:{frames:[0,1,2], rate: 1/6, flip: "x", loop: true},
        walkR:{frames:[0,1,2], rate: 1/6, flip: false, loop: true},
        die:{frames:[3],loop: false}
    });
       
}
function add_enemy2(Q){
     Q.Sprite.extend('enemy2',{
        init: function(p){
            this._super(p,{
                sprite: 'anim_enemy2',
                sheet: 'enemy2',
                vx: 0,
                lado: 1,
                points: [[-6,-6],[6,-6],[6,6],[-6,6]],
                hamuerto:false
            });
            this.add('2d, aiBounce, animation, defaultEnemy');
            this.on('die');



            this.on("bump.top", function(collision) {
                if (collision.obj.isA("Wario"))
                  if(collision.obj.p.culetazo){
                    this.play("die");
                    this.p.vy = -300;
                    this.die();
                }
            });
            this.on("bump.left", function(collision) {
                if (collision.obj.isA("Wario"))
                    this.play("die");
                    this.p.vy = -300;
                    this.die();
            });
            this.on("bump.right", function(collision) {
                if (collision.obj.isA("Wario"))
                    this.play("die");
                    this.p.vy = -300;
                    this.die();
            });
        },
        shoot: function(dt) 
        {
            if(this.p.vx > 0 ) 
                this.p.lado=1; //Derecha
            else if(this.p.vx<0) 
                this.p.lado = 0; //Izquierda


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
            this.destroy();
        }

        Q.animations('anim_enemy2',{
        walkL:{frames:[0,1,2], rate: 1/6, flip: false, loop: true},
        walkR:{frames:[3], rate: 1/6, flip: "x", loop: true},
        die:{frames:[4],loop: false}
    });

}
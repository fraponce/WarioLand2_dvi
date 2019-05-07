// SETAS
function add_Goomba(Q){
  Q.Sprite.extend('Goomba',{
    init: function(p){
      this._super(p,{
        sprite: 'anim_goomba',
        sheet: 'goomba',    
                vx: 100,
                hamuerto:false,
                lado: 1
          });
          // aiBounce: cambia direccion cuando los enemigos dan con algo
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
        if(this.p.lado == 1)
          this.play('walkR');
        else this.play('walkL');
      else
        this.play('die');         
    },
    die: function(dt)
    {
          //console.log('##### muerteeeee de la seta'); 
          this.p.hamuerto = true;           
          setTimeout(function() {
                Q('Goomba').destroy();
      }, 200);
        }
  });

  Q.animations('anim_goomba',{
      walkL:{frames:[0,1], rate: 1/6, flip: false, loop: true},
      walkR:{frames:[0,1], rate: 1/6, flip: "x", loop: true},
      die:{frames:[2],loop: false}
    });
}
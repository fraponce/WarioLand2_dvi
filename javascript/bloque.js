
function add_bloque(Q){

    Q.animations('anim_bloque',{
        normal:{frames:[1], rate: 1, loop: true},
        roto:{frames:[1,2], rate: 1/25, loop: false, trigger: "deadBlock"}
    });

    Q.Sprite.extend('Bloque',{
        init: function(p){
            this._super(p,{
                sprite: 'anim_bloque',
                sheet: 'bloque',
                gravity: 0,
                roto: false,
                points: [[14,14],[14,-14],[-14,14],[-14,-14]]
            });
            
            this.add("animation")
            this.on("hit",this,"collision");
            this.on("deadBlock",this,"deadB");

        },
        collision: function(col) {

            if(col.obj.p.placando){
                var a = 1;
            }

            
            if(col.obj.isA("Wario") && ( (col.obj.p.culetazo && col.normalY>0) || (col.obj.p.placando && col.normalX==1 && col.obj.p.lado==1) || (col.obj.p.placando && col.normalX==-1 && col.obj.p.lado==0) || (col.normalY==-1 && !(col.obj.p.placando || col.obj.p.culetazo) ) ) && !this.p.roto){

                this.p.roto=true;
                this.p.sensor=true;
                this.play("roto");

            }else{

            }             
        },

        deadB: function() {
            this.destroy();
        },

        step: function(dt) {
            this.stage.collide(this);
        }
    });
       
}
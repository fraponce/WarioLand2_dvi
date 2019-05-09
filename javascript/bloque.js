
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
            if(col.obj.isA("Wario") && (col.obj.p.culetazo || col.obj.p.placando || col.normalY==-1) && !this.p.roto){
                this.p.roto=true;
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
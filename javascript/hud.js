/*===========================================================================================
=======================================HUD del juego=========================================
=============================================================================================*/
function add_hud(Q){

    Q.scene("HUD",function(stage) {
        //Contador de monedas
		Q.UI.Text.extend("Monedas",{ 
	        init: function(p) {
	            this._super({
	                label: "0💰",
	                color: "#F2C108",
	                border: 1,
	                x: Q.width * 0.25 + 20,
	                y: 5,
	                sensor: true,
	                align: 'right',
	                font:"800 24px 'Press Start 2P'"
	            });
	        },
            
            step: function (dt) {
            	this.fontString="800 20px 'Press Start 2P'";
                this.p.label = Q.state.get("score")+"💰";
            }
        });
        /*

        //Contador de vidas
        Q.UI.Text.extend("Vidas",{ 
	        init: function(p) {
	            this._super({
	                label: "Vidas: 0",
	                color: "white",
	                x: Q.width * 0.25 - 2,
	                y: 30
	            });
	        },
            
            step: function (dt) {
                this.p.label = "Vidas: " + Q.state.get("lifes");
            }
		});
		
		*/
		var container = stage.insert(new Q.UI.Container({
	        x: 20, y: 15, fill: "rgba(0,0,0,1)", scale:0.5
	    }));
		
		    
		    Q.animations('anim_vidas',{
		    	normal:{frames: [9], rate: 1, loop: true},
		        normal8:{frames: [9], rate: 1, loop: true},
		        normal7:{frames: [8], rate: 1, loop: true},
		        normal6:{frames: [7], rate: 1, loop: true},
		        normal5:{frames: [6], rate: 1, loop: true},
		        normal4:{frames: [5], rate: 1, loop: true},
		        normal3:{frames: [4], rate: 1, loop: true},
		        normal2:{frames: [3], rate: 1, loop: true},
		        normal1:{frames: [2,1], rate: 1/2, loop: true},
		        normal0:{frames: [0], rate: 1, loop: true}
	    	});

	    Q.Sprite.extend('Vidas',{
	        init: function(p){
	            this._super(p,{
	                sprite: 'anim_vidas',
	                sheet: 'vidas',
	                x: 40,
	                y: 12,
	                vidas:8,
	                vidasC:9,
	                gravity: 0,
	                sensor: true,
	                points: [[1,1],[1,-1],[-1,1],[-1,-1]]
	            });
	            
	            this.add("animation");

	        },

	        step: function(dt) {
	            this.p.vidas = Q.state.get("lifes");


	            if(this.p.vidas!=this.p.vidasC){
	            	this.p.vidasC = this.p.vidas; //Para no hacer todo el rato el .play, solo cuando cambian las vidas.
	            	
		            if(this.p.vidas >= 0){
		            	this.play("normal"+this.p.vidas)
		            } else {
		            	var a = 0;
		            }
	            }


	        },

	        resetLifes: function(){
	        	Q.state.set("lifes", 8);
	        	this.p.vidas  = 8;
	        	this.p.vidasC = 9;
	        }
	    });
	    stage.insert(new Q.Vidas());
        container.insert(new Q.Monedas());

        //container.insert(new Q.Vidas());
	});

}

function add_hud_Boss(Q){

    Q.scene("HUDBOSS",function(stage) {

		var container = stage.insert(new Q.UI.Container({
	        x: 20, y: 15, fill: "rgba(0,0,0,1)", scale:0.5
	    }));
		
		    
		    Q.animations('anim_vidas_boss',{
		    		normal:{frames: [0], rate: 1, loop: true},
			    	normal3:{frames: [0], rate: 1, loop: true},
			        normal2:{frames: [1], rate: 1, loop: true},
			        normal1:{frames: [2], rate: 1, loop: true},
			        normal0:{frames: [3], rate: 1, loop: true}
	    	});

	    Q.Sprite.extend('VidasBoss',{
	        init: function(p){
	            this._super(p,{
	                sprite: 'anim_vidas_boss',
	                sheet: 'vidasBoss',
	                x: Q.width-50,
	                y: 12,
	                vidas:3,
	                vidasC:4,
	                gravity: 0,
	                sensor: true,
	                points: [[1,1],[1,-1],[-1,1],[-1,-1]]
	            });
	            
	            this.add("animation");

	        },

	        step: function(dt) {
	            this.p.vidas = Q.state.get("lifesBoss");


	            if(this.p.vidas!=this.p.vidasC){
	            	this.p.vidasC = this.p.vidas; //Para no hacer todo el rato el .play, solo cuando cambian las vidas.
	            	
		            if(this.p.vidas >= 0){
		            	this.play("normal"+this.p.vidas)
		            } else {
		            	var a = 0;
		            }
	            }


	        },

	        resetLifes: function(){
	        	Q.state.set("lifesBoss", 3);
	        	this.p.vidas  = 3;
	        	this.p.vidasC = 4;
	        }
	    });
	    stage.insert(new Q.VidasBoss());
        //container.insert(new Q.Vidas());
	});

}
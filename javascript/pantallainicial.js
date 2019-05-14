function add_MenuWario(Q)
{	
	/////////////////////////////////////////////////
	// FONDO MENU PRINCIPAL
	/////////////////////////////////////////////////
	Q.Sprite.extend("pantallaprincipal", {
        init: function(p) {
            this._super(p, {
                asset: "pantalla_inicial/fondopantallaprincipal.png",
                x:160,
                y:160,
                scale:2.3,
                gravity:0,
                opacity: 1
            });
        },
        step: function (dt){}
    });

	/////////////////////////////////////////////////
	// OPCIONES MENU
	/////////////////////////////////////////////////
    Q.Sprite.extend("opcionMenu", {
        init: function(p) {
            this._super(p, {
                asset: "",
                x:-1,
                y:-1,
                gravity:0,
                scale: 0.5,
                opacity: 1,
                elegida: false
            });

        },
        step: function (dt)
        {
            if(this.p.elegida)
            {
                if(this.p.opacity > 0) {                    
                    this.p.opacity = this.p.opacity - 0.05;
                }
                else{
                    this.p.opacity = 1;
                }

                let horaActual = new Date().getTime();

                if(horaActual-this.p.horaElegida >= 2000)
                {
                    Q.clearStages();
                    //console.log("this.p.asset -> " + this.p.asset);
                    if(this.p.asset === "pantalla_inicial/newgame.png")
                    {
                        //console.log("xxxxx level1 entra");
                        Q.state.set("reset",false);                        
                        Q.state.set("lifes",8);
                        Q.state.set("score",0);  
                        Q.stageScene("HUD", 1);
                      	Q.stageScene("level1");
                      	Q.audio.stop();
						Q.audio.play('02 Out of the Woods (Night).mp3',{ loop: true });
                    } 
                    else if(this.p.asset === "pantalla_inicial/controls.png") 
                    {
                        //console.log("xxxxx controles entra");
                    	Q.stageScene("controles"); 
                    }                   
                }
            }
        }
    });
    /////////////////////////////////////////////////
    // CABEZA WARIO - SELECTOR DEL MENU
    /////////////////////////////////////////////////
    Q.Sprite.extend("SelectorMenu", {
        init: function(p) {
            this._super(p, {
                sprite: "cabezawario",
                sheet: "cabezawario",
                x:60,
                y:150,
                gravity:0,
                scale: 1.5,
                opacity: 1,
                animacion_activada: false,
                opcion_apuntada: 0,
                coordenadas_opciones_s1: [{x:60,y:150}, {x:60,y:190}],
                num_selector: 0,
                puede_usarse: true,
                momento_yapuede: 0,
                inhabilitado: false
            });
            this.add('animation', 'platformerControl');
        },

        actualizaCoordenadas: function()
        {            
            this.p.x = this.p.coordenadas_opciones_s1[this.p.opcion_apuntada].x;
            this.p.y = this.p.coordenadas_opciones_s1[this.p.opcion_apuntada].y;           
        },

        step: function (dt)
        {
            this.play("cabeza_wario");

            if(!this.p.inhabilitado){
                if(Q.inputs['down'] && this.p.puede_usarse){

                    this.p.puede_usarse = false;
                    this.p.momento_yapuede = new Date().getTime() + 200; 

                    if(this.p.opcion_apuntada === 1) 
                        this.p.opcion_apuntada = 0;
                    else 
                        this.p.opcion_apuntada++;

                    this.actualizaCoordenadas();
                }
                else if(Q.inputs['up'] && this.p.puede_usarse){

                    this.p.puede_usarse = false;
                    this.p.momento_yapuede = new Date().getTime() + 200; 

                    if(this.p.opcion_apuntada === 0) 
                        this.p.opcion_apuntada = 1;
                    else 
                        this.p.opcion_apuntada--;

                    this.actualizaCoordenadas();
                }

                if(!this.p.puede_usarse){
                    let horaActual = new Date().getTime();
                    if(horaActual >= this.p.momento_yapuede) 
                        this.p.puede_usarse = true;
                }
            }
        }
    });

    Q.scene('pantallaMenu',function(stage) {

        let fondo = stage.insert(new Q.pantallaprincipal());
        let logo = stage.insert(new Q.opcionMenu({
            asset: "pantalla_inicial/titulowario.png", 
            x: 160, 
            y: 70,
            scale: 1.6 
        }));
        let opcion0 = stage.insert(new Q.opcionMenu({
            asset: "pantalla_inicial/newgame.png", 
            x: 160, 
            y: 150 
        }));
        let opcion1 = stage.insert(new Q.opcionMenu({
            asset: "pantalla_inicial/controls.png", 
            x: 160, 
            y: 190 
        }));
        let press_enter = stage.insert(new Q.opcionMenu({
            asset: "pantalla_inicial/pressenter.png", 
            x: 160, 
            y: 305, 
            scale: 0.35
        }));

        let selector = stage.insert(new Q.SelectorMenu({x:60, y:150, num_selector:1}));
        
        Q.input.on("confirm",stage,function()
        {    
            if(!selector.p.inhabilitado)
            {
                selector.p.inhabilitado = true;
                // Opcion NEW GAME
                if(selector.p.opcion_apuntada == 0){
                    opcion0.p.elegida = true;
                    opcion0.p.horaElegida = new Date().getTime();
                }
                // Opcion CONTROLS
                else{
                    opcion1.p.elegida = true;
                    opcion1.p.horaElegida = new Date().getTime();
                }
            }

        });
    });

    /////////////////////////////////////////////////
    // Animaciones
    /////////////////////////////////////////////////

	Q.animations("cabezawario", {
        cabeza_wario: { frames: [0,1,2,3,4,5], rate: 1/10}
    });
}
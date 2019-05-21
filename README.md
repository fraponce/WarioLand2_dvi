# Wario Land 3 - Proyecto DVI
```
Proyecto final de la asignatura Desarrollo de videojuegos mediante tecnologías web.
```

![Wario](https://www.ssbwiki.com/images/thumb/1/15/Wario_SSB4.png/250px-Wario_SSB4.png)


## Comenzando :running:

Wario es un personaje ficticio del universo de Nintendo. Desde su aparición por primera vez como el archienemigo de Mario y jefe final del mismo juego en 1992, Wario ha sido protagonista de su propio catálogo de juegos. 

:heavy_exclamation_mark: Nosotros hemos creado una versión del juego Wario Land 3 lanzado para la game boy color en el año 2000. Aunque hemos querido mantener algunas cosas fieles al juego original, el menú y el mapa inicial no corresponden a los originales.

### Objetivo :checkered_flag:

El objetivo final del juego es intentar ganar la partida, llegando hasta el boss y derrotándolo, de manera que durante el camino tendrá que sortear diferentes enemigos y escenarios, a la vez que intentará hacerse con el máximo de monedas posibles.

## Enlace al juego y al vídeo :bomb:

- link para jugar: <https://fraponce.github.io/WarioLand2_dvi>
- link al vídeo: <https://youtu.be/7DgB3CoOZsg>

## Mecanicas implementadas :pencil:

En esta sección explicaremos las mecánicas implementadas siguiendo un orden lógico desde que se ejecuta el juego.

### :one: Intro

Cuando se accede al juego se inicia una intro de una duracción de unos 30 segundos aproximadamente, la cual, es fiel a la intro original del juego y tiene el sonido original. El jugador puede dar a la tecla de intro en cualquier momento para pasar la intro.

### :two: Menu de inicio

Una vez que el jugador ha pulsado en la tecla de intro, avanza a la pantalla del menú de inicio.

En el menú de inicio puede seleccionar dos opciones con la tecla de intro, acceder a un nuevo juego o entrar en el panel de controles.

### :three: Panel de controles

Una escena donde se muestra de una forma clara todos los botones de acción que tiene el jugador una vez inicio una partida para controlar a Wario.

* :arrow_up: Flecha hacia arriba - saltar/cabezazo para romper bloques
* :arrow_right: :arrow_left: Flecha hacia la derecha/izquierda - movimiento del personaje
* :arrow_down: Flecha hacia abajo - agacharse/culetazo cuando Wario está en el aire
* :arrow_forward: Tecla espacio - el personaje realiza un placaje

### :four: Nueva partida

Se empieza una partida nueva, reseteando todos los valores anteriores para el caso de que se volviera de una partida previa.

### :five: Wario

Wario es el personaje principal de esta aventura. Tiene muchas mecánicas implementadas, el objetivo principal de Wario es recoger todas las monedas posibles que encuentre por los distintos escenarios y sobrevivir a los enemigos con los que se enfrente, para que al final, tenga que superar un desafío contra el jefe del escenario.

Las mecánicas que tiene Wario son las siguientes:

* Movimiento derecha / izquierda.
* Salto / Cabezazo para el caso de encontrarse con un bloque arriba, lo destruiría.
* Agacharse para poder atravesar túneles de poca altura.
* Placaje, pulsando espacio, Wario es capaz de moverse placando para así destruir bloques o golpear enemigos. Además es capaz de combinar el placaje con el salto para placar mientras salta.
* Culetazo, mientras se salta, si se pulsa hacia abajo, Wario hace un culetazo hacía abajo capaz de matar enemigos o destruir bloques.
* Subir escaleras - capacidad de subir escaleras para alcanzar partes altas.
* Atravesar puertas - capacidad de pasar por puertas para pasar a otro escenario. Pulsando la tecla de saltar una vez estás en la puerta.

~~~
Se ha intentado dar especial interés a la jugabilidad, cuidando con detalle los puntos de colisión así como la fluided de movimiento y control sobre Wario respecto a las interacciones que tiene con el resto de componentes del juego.
~~~

### :six: Escenarios

El juego se divide en 4 escenarios distintos.

* El primer escenario es un mapa largo donde hay dos puertas ( puerta A y B ), con zonas altas para que Wario las atraviese saltando y zonas bajas, todo mezclado con enemigos y bloques. La puerta A conecta con el escenario 2 y la puerta B conecta con el escenario 3.

* El segundo escenario es una zona pequeña especialmente diseñada para que Wario recoja monedas, un guiño a los mapas y zonas ocultas del juego original donde se escondían gran cantidad de monedas.

* El tercer escenario es otro mapa largo donde la única manera de llegar al otro lado es mediante saltos por plataformas, si el personaje llega al final podrá encontrar otra puerta que conecta al escenario cuarto, pero si se cae, tendrá que volver al principio y subir unas escaleras para volver a intentarlo.

* El cuarto escenario pertenece al mapa del jefe, una vez dentro, el personaje no podrá regresar a los mapas anteriores y se tendrá que enfrentar al jefe final para obtener una victoria, en caso contrario obtendrá una derrota. La derrota podrá ser obtenida si Wario muere por los anteriores mapas a manos de los enemigos.

### :seven: Objetos del escenario

En el escenario podemos encontrar una multitud de objetos diferentes, entre ellos están:

* _Cámara del juego_: la cámara del juego dispone de una configuración personalizada a la hora de seguir al personaje principal. De esta manera, la cámara deja libertad de movimiento en el eje ''y'' para los saltos de Wario, pero recupera su posición cuando este toca el suelo. Además, si la cámara detecta que en una de sus caidas Wario se va a salir del límite de lo que esta muestra de la escena, automáticamente Wario pierde la libertad en el eje ''y'' y esta le centra en pantalla.

* _Bloques_: de color rosa, Wario podrá destruirlos y al destruirse podrán soltar monedas de oro y/o plata con una determinada probabilidad. Esta probabilidad será de 25% para las de oro y 75% para las de plata. Los bloques pueden ser destruidos por Wario mediante cabezazo si éste los golpea desde abajo, placando, si los golpea lateralmente, y mediante culetazo si los golpea desde arriba. En otros casos Wario podrá moverse sobre los bloques y colisionar contra ellos como un solido.

  Para hacer fluido romper varios bloques pegados sin que funcione el sólido de la colisión, una vez pasan a su animación de destrucción, estos modifican su atributo sensor a true para que Wario pueda atravesarlos mientras tienen la animación de destrucción.
  
  ![Elemento bloque](https://raw.githubusercontent.com/fraponce/WarioLand2_dvi/master/images/block.png)

* _Corazones_: de color rojo, aparecerán con una probabilidad del 5% al destruir enemigos y cada corazón recuperará un punto de vida de Wario.

  Para que los enemigos no reboten contra el corazón cuando este está sobre el suelo, se ha hecho que cuando un enemigo suelte un corazón, este pase a dejar de ser sólido en cuanto detecta colisión contra el suelo, y se le asigna una gravedad y y velocidad de 0, para así fijarlo en el punto donde se ha quedado.
  
  ![Elemento vida](https://raw.githubusercontent.com/fraponce/WarioLand2_dvi/master/images/obj_life.png)
  

* _Monedas grandes_: se encuentran repartidas por todos los escenarios sin necesidad de destruir bloques y valdrán 10 monedas de las normales.

  ![Moneda grande](https://raw.githubusercontent.com/fraponce/WarioLand2_dvi/master/images/bigcoin.png)

* _Monedas pequeñas_: se dividen en monedas doradas y monedas plateadas. Son más pequeñas que las monedas grandes y aparecen bajo una probabilidad al destruir bloques. Las monedas plateadas valen 1 punto, y las doradas valen 2 puntos.
  
  ![Moneda dorada](https://raw.githubusercontent.com/fraponce/WarioLand2_dvi/master/images/miniGoldCoin.png)

  ![Moneda plateada](https://raw.githubusercontent.com/fraponce/WarioLand2_dvi/master/images/miniSilverCoin.png)

* _Escaleras_: las escaleras se encuentrán en el fondo del juego dentro del tmx, sin embargo, para que Wario pueda interactuar con estas, se ha creado un objeto invisible que representan las escaleras y se superpone sobre los puntos donde estén estas en el fondo. De esta manera, Wario cambia su estado y pasa a poder subir y bajar siempre que detecte que está superpuesto sobre el objeto de las escaleras.

  Si antes de subir sobre las escaleras pegas un culetazo, se prioriza el ataque. De esta forma se puede da el caso de poder      ocultar escaleras sobre bloques y acceder a escenarios ocultos. De todas formas en este juego no se ha dado el caso de crear escenarios ocultos, por facilitar al usuario que vaya a usarlo comprobar todas las mecánicas sin necesidad de mirar con lupa tantos detalles.

* _Puertas_: de manera similar que las escaleras, las puertas se encuentran en el fondo del juego, creadas en el tmx, pero se ha creado un objeto invisible que se superpone sobre estas, para así poder interactuar con ellas. Las puertas permiten a Wario cambiar entre escenarios, superponiendose sobre estas y pulsando la tecla de saltar.

  Para que Wario pueda acceder a una puerta se ha considerado que debe estar quieto sobre ella sin ningún estado especial. De esta manera si Wario necesita placar y saltar o agacharse, y pasa sobre una puerta, se dará prioridad última a la acción de acceder a la puerta, para que no interrumpan dinámicas más importantes como es la de romper bloques, matar enemigos, o esquivar sus golpes y ataques.

~~~
Los bloques y las monedas grandes mantienen su estado de destruidos en caso de que wario los haya roto, para que, al cambiar de escenarios, si wario vuelve a un escenario previo, estos no reaparezcan.
~~~

### :eight: HUD

Hay dos HUDs diferentes en el juego.

  * El primer hud general, pertenece a Wario y en el se podrá ver la cantidad de vidas que tiene el protagonista y la cantidad de monedas que ha conseguido.
  * El segundo es un hud que pertenece al jefe final para indicar el número de vidas restantes que le quedan, este solo se mostrará en el último escenario, siempre que Wario esté a una distancia mínima del boss necesaria.

### :nine: Enemigos

Hay dos tipos de enemigos presentes en los mapas, el primero es un enemigo que porta una lanza y Wario tendrá que atacarlo por arriba o por la espalda para poder destruirlo y el segundo enemigo lanzará bolas de fuego en la dirección que se encuentre Wario.

Para los enemigos se ha implementado un objeto invisible y no sólido que se coloca en ciertas esquinas, para que estos puedan rebotar contra esos objetos y que no se caigan cuando se encuentran en plataformas con caída en sus bordes.

### :one: :zero: Jefe

Al llegar al cuarto escenario, Wario se tendrá que enfrentar con el jefe final que será el conejo pandillero. Wario tendrá que atacarlo varias veces hasta que se convierta en una bola y será entonces cuando pueda quitarle un punto de vida. Después de repetir unas cuantas veces esta acción, Wario acabará destruyendo al conejo y ganando el juego. Mientras el conejo esté vivo, estará persiguiendo a Wario por el escenario.

### :one: :one: Pantalla victoria & derrota

* Cuando Wario muera en alguno de los escenarios del juego, aparecerá el panel de la pantalla de derrota, donde se le mostrará al jugador la cantidad de puntos obtenidos hasta la muerte de Wario.
* En el caso de que Wario llegue al escenario final y derrote al jefe, aparecerá el panel de la pantalla de victoria, donde se le mostrará al jugador la cantidad de puntos obtenidos hasta la muerte de Wario.

:boom: En ambas opciones, si el jugador presiona intro, volverá al menú inicial y podrá decidir si quiere iniciar una nueva partida. (En el caso de empezar una nueva partida, los valores de las vidas y la puntuación total se reiniciarán a sus estados originales, así como el estado de bloques y monedas que habían desaparecido de la partida por haberlos roto u obtenido).

### :one: :two: Extras

Para mejorar el entorno del juego, se ha estilizado la página web para simular que corre sobre una de las consolas sobre las que el juego original usaba, la gameBoy. También se ha ajustado la imagen con JS, para que la gameBoy siempre esté lo más centrada posible al juego al redimensionar la página.

Por otro lado, se ha añadido de fondo un background sobre el mundo de Warioland 3, para mejorar la imagen general de la página a la hora de que los usuarios entren a jugar a ella.

---

## Diseño de la implementación: Arquitectura y principales componentes :file_folder:

Para poder satisfacer la división de tareas del juego, se ha creado un .js por lo general, que representa cada elemento interno del juego. Estos JS se incorporan en game.js, a través de una función add_NombreElemento(Q); que contiene el propio elemento y lo añade al motor de juego. En algunos casos, se han usado archivos .js para tener elementos similares, como es el caso de las monedas pequeñas, o de los huds. Esto quiere decir que dentro del mismo .js se encuentran los dos tipos de monedas, o los dos tipos de huds.

Por otro lado se han separado también en archivos independientes cada escenario, por el mismo motivo de tener todo separado para poder trabajar mejor bajo github y poder dividir cómodamente el trabajo en paralelo por parte de los miembros del grupo.

Para mejorar la organización, se ha separado el código ejecutable, con los recursos de imágenes y audio, así como los .json asociados a cada imagen, en diferentes directorios. De esta manera se tienen los siguientes directorios:
+ _audio_: contiene los archivos de audio.
+ _data_: contiene archivos json asociados a cada imagen. Cada sprite diferente tiene un ".json" diferente asociado.
+ _images_: contiene las imágenes asociados a cada sprite. Cada sprite diferente tiene una imagen diferente asociada.
+ _javascript_: contiene la lógica del juego. Tanto desde la clase game.js como los escenarios, menús y sprites.
+ _lib_: contiene las librerías del motor de juego Quintus.


## Autores y división de trabajo :sparkling_heart:

:arrow_forward: Alfonso Soria Muñoz
  + Creación de Wario y dinámicas asociadas
  + Gestión de la mayoría de png's (Excluyendo escenarios y menús)
  + Objetos del juego (Escaleras,monedas,vidas,bloques...)
  + Fireball enemy2
  + Huds del juego (Wario + Boss)
  + Game tester + bugs solver
  + Compresión de recursos (Para obtener un juego ligero)
  + Gestión de algún sonido del juego
  + Incorporación de fuentes externas para el score del hud principal
  + Diseño de la estética de la página
  + Organización y desarrollo del readme
  
:arrow_forward: Miguel Jiménez Rodríguez
  + Creación intro del juego
  + Creación menú principal
  + Creación pantallas de controles, victoria y derrota
  + Gestión del estado de bloques y bigcoins
  + Tema algun objeto del juego (coin grande + puerta)
  + Creación y actualización de los escenarios del juego y sus .js asociados
  + Animación de la introducción
  + Favicon de la página
  + Organización y desarrollo del readme

:arrow_forward: Francisco Ponce Belmonte
  + Incorporación del sonido del juego
  + Sensor invisible para rebote de enemy1
  + Boss del juego
  + Enemigos del juego.

# Wario Land 3 - Proyecto DVI
```
Proyecto final de la asignatura Desarrollo de videojuegos mediante tecnologías web.
```

## Comenzando :running:

Wario es un personaje ficticio del universo de Nintendo. Desde su aparición por primera vez como el archienemigo de Mario y jefe final del mismo juego en 1992, Wario ha sido protagonista de su propio catálogo de juegos. 

:heavy_exclamation_mark: Nosotros hemos creado una versión del juego Wario Land 3 lanzado para la game boy color en el año 2000. Aunque hemos querido mantener algunas cosas fieles al juego original, el menú y el mapa inicial no corresponden a los originales.

## Enlace al juego en GitHub :bomb:

```
link: https://fraponce.github.io/WarioLand2_dvi
```

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
* Culetazo, mientras se salta, si se pulsa hacia abajo, Wario hace un culetazo hacía abajo capaz de matar enemigos o destruir bloques.
* Subir escaleras - capacidad de subir escaleras para alcanzar partes altas.
* Atravesar puertas - capacidad de pasar por puertas para pasar a otro escenario.

### :six: Escenarios

El juego se divide en 4 escenarios distintos.

* El primer escenario es un mapa largo donde hay dos puertas ( puerta A y B ), con zonas altas para que Wario las atraviese saltando y zonas bajas, todo mezclado con enemigos y bloques. La puerta A conecta con el escenario 2 y la puerta B conecta con el escenario 3.

* El segundo escenario es una zona pequeña especialmente diseñada para que Wario recoja monedas, un guiño a los mapas y zonas ocultas del juego original donde se escondían gran cantidad de monedas.

* El tercer escenario es otro mapa largo donde la única manera de llegar al otro lado es mediante saltos por plataformas, si el personaje llega al final podrá encontrar otra puerta que conecta al escenario cuarto, pero si se cae, tendrá que volver al principio y subir unas escaleras para volver a intentarlo.

* El cuarto escenario pertenece al mapa del jefe, una vez dentro, el personaje no podrá regresar a los mapas anteriores y se tendrá que enfrentar al jefe final para obtener una victoria, en caso contrario obtendrá una derrota. La derrota podrá ser obtenida si Wario muere por los anteriores mapas a manos de los enemigos.

### :seven: Objetos del escenario

En el escenario podemos encontrar una multitud de objetos diferentes, entre ellos están:

* Bloques: de color rosa, Wario podrá destruirlos y al destruirse podrán soltar monedas de oro y/o plata con una determinada probabilidad.

* Corazones: de color rojo, aparecerán con una probabilidad al destruir enemigos y cada corazón recuperará otro corazón de vida de Wario.

* Monedas grandes: se encuentran repartida por todos los escenarios sin necesidad de destruir bloques y valdrán 10 monedas de las normales.

* Monedas pequeñas: se dividen en monedas doradas y monedas plateadas. Son más pequeñas que las monedas grandes y aparecen bajo una probabilidad al destruir bloques.

### :eight: HUD

Hay dos HUDs diferentes en el juego, el primer hud general pertenece a Wario y en el se podrá ver la cantidad de vidas que tiene el protagonista y la cantidad de monedas que ha conseguido. El segundo es un hud que pertenece al jefe final para indicar el número de vidas restantes que le quedan.

### :nine: Enemigos

Hay dos tipos de enemigos presentes en los mapas, el primero es un enemigo que porta una lanza y Wario tendrá que atacarlo por arriba o por la espalda para poder destruirlo y el segundo enemigo lanzará bolas de fuego en la dirección que se encuentre Wario.

### :one: :zero: Jefe

Al llegar al cuarto escenario, Wario se tendrá que enfrentar con el jefe final que será el conejo pandillero. Wario tendrá que atacarlo varias veces hasta que se convierta en una bola y será entonces cuando pueda quitarle un punto de vida. Después de repetir unas cuantas veces esta acción, Wario acabará destruyendo al conejo y ganando el juego. Mientras el conejo esté vivo, estará persiguiendo a Wario por el escenario.

### :one: :one: Pantalla victoria & derrota

* Cuando Wario muera en alguno de los escenarios del juego, aparecerá el panel de la pantalla de derrota, donde se le mostrará al jugador la cantidad de puntos obtenidos hasta la muerte de Wario.
* En el caso de que Wario llegue al escenario final y derrote al jefe, aparecerá el panel de la pantalla de victoria, donde se le mostrará al jugador la cantidad de puntos obtenidos hasta la muerte de Wario.

:boom: En ambas opciones, si el jugador presiona intro, volverá al menú inicial y podrá decidir si quiere iniciar una nueva partida. (En el caso de empezar una nueva partida, los valores de la cantidad de las monedas y la puntuación total se reiniciarán).

## Autores :sparkling_heart:

:arrow_forward: Alfonso Soria Muñoz

:arrow_forward: Miguel Jiménez Rodríguez

:arrow_forward: Francisco Ponce Belmonte

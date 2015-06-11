#Piezīmes
Visos piemēros tiek pieņemts, ka mainīgais `simry` ir jau izveidots, un tā vērtība ir `new Simry('canvas', tick);`
#Objekti
##Figūras
###Riņķis - `simry.circle(left, top, radius)`
* _left_ - attālums no ekrāna kreisās malas
* _top_ - attālum no ekrāna augšas
* _radius_ - riņķa radiuss

####Piemērs
Parādīsim riņķi ekrāna centrā. Papildus tiek izmantotas `getWidth()` un `getHeight()` funkcijas.
* `getWidth` atgriež mūsu ekrāna platumu
* `getHeight` atgriež augstumu _(aukstumu atgriezt nevar, jo šī bibliotēka neļauj mērīt temperatūru)_

```javascript
var simry = new Simry('canvas'); //Inicializējam bibliotēku uz HTML elementa <canvas></canvas>
var x = simry.getWidth() / 2; //Ekrāna platuma vidus. Piemēram, ja ekrāna platums ir 1600, tad vidus būs kordinātē 800
var y = simry.getHeight() / 2; //Līdzīgi kā ar ekrāna platumu, iegūstam ekrāna augstuma vidu.
simry.circle(x, y, 50); //Ekrāna centrā izveidojas riņķis ar radiusu 50.
```
Lieliski, tagad ekrāna vidū ir melns caurums! Cerams, ka neizpletīsies...
#Piezīmes
Visos piemēros tiek pieņemts, ka mainīgais `simry` ir jau izveidots, un tā vērtība ir `new Simry('canvas', tick);`
#Objekti
##Riņķis - `simry.circle(left, top, radius, options)`
* _left_ - attālums no ekrāna kreisās malas
* _top_ - attālum no ekrāna augšas
* _radius_ - riņķa radiuss
* _options_ - figūras opcijas

###Piemērs
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
##Elipse - `simry.ellipse(left, top, rx, ry, options)`
* _left_ - attālums no ekrāna kreisās malas
* _top_ - attālum no ekrāna augšas
* _rx_ - radiuss pa X assi
* _ry_ - radiuss pa Y assi
* _options_ - figūras opcijas

Ellipse tas pats riņķis vien ir, vienīgā atšķirība - tas ir nedaudz izstiepts.

###Piemērs
Līdzīgs iepriekšējam piemēram, bet riņķa vietā būs _...wait for it..._ ellipse
```javascript
var x = simry.getWidth() / 2;
var y = simry.getHeight() / 2;
simry.ellipse(x, y, 50, 100); //Ekrāna centrā izveidojas ellipse.
```

##Attēls - `simry.image(url, left, top, options, callback)`
* _url_ - interneta vai lokāls attēls
* _left_ - attālums no kreisās malas
* _top_ - attālums no augšas
* _options_ - figūras opcijas
* _callback_ - funkcija, kas izsauksies, kad attēls ielādēsies.

Nevēlies rādīt garlaicīgas figūras, bet gan uber-high-texture attēlus? Pareizā izvēle

###Piemērs
Izveidosim ekrāna centrā kosmosa kuģi, kurš kustās!                   
```javascript
var x = simry.getWidth() / 2;
var y = simry.getHeight() / 2;
var imageLocation = 'ship.png'; //Kuģa attēla atrašanās vieta. Pieņemsim, ka mums jau ir attēls šajā pašā mapē

simry.image(imageLocation, x, y, null, function(ship) {
    simry.enableMoving(ship); //Tiklīdz attēls ir ielādējies, atļauj to kustināt.
});
```

##Četrsturis - `simry.rectangle(left, top, width, height, options)`
* _left_ - attālums no kreisās malas
* _top_ - attālums no augšas
* _width_ - attālums no augšas
* _height_ - attālums no augšas
* _options_ - figūras opcijas

###Piemērs
```javascript
var x = simry.getWidth() / 2;
var y = simry.getHeight() / 2;
simry.rectangle(x, y, 50, 50); //Ekrāna centrā izveidojas kvadrāts.
```
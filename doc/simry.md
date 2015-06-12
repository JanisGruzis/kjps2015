#Piezīmes
Visos piemēros tiek pieņemts, ka mainīgais `simry` ir jau izveidots, un tā vērtība ir `new Simry('canvas', tick);`
#Objekti
##Figūras
###Riņķis - `simry.circle(left, top, radius, options)`
* _left_ - attālums no ekrāna kreisās malas
* _top_ - attālum no ekrāna augšas
* _radius_ - riņķa radiuss
* _options_ - figūras opcijas

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
###Elipse - `simry.ellipse(left, top, rx, ry, options)`
* _left_ - attālums no ekrāna kreisās malas
* _top_ - attālum no ekrāna augšas
* _rx_ - radiuss pa X assi
* _ry_ - radiuss pa Y assi
* _options_ - figūras opcijas

Ellipse tas pats riņķis vien ir, vienīgā atšķirība - tas ir nedaudz izstiepts.

####Piemērs
Līdzīgs iepriekšējam piemēram, bet riņķa vietā būs _...wait for it..._ ellipse
```javascript
var x = simry.getWidth() / 2;
var y = simry.getHeight() / 2;
simry.ellipse(x, y, 50, 100); //Ekrāna centrā izveidojas ellipse.
```

###Trīsstūris - `simry.triangle(left, top, width, height, options)`
* _left_ - attālums no kreisās malas
* _top_ - attālums no augšas
* _width_ - trīsstūra pamatnes platums
* _height_ - trīsstūra augstums
* _options_ - figūras opcijas

####Piemērs
```javascript
var x = simry.getWidth() / 2;
var y = simry.getHeight() / 2;
simry.triangle(x, y, 50, 50);
```

###Četrsturis - `simry.rectangle(left, top, width, height, options)`
* _left_ - attālums no kreisās malas
* _top_ - attālums no augšas
* _width_ - attālums no augšas
* _height_ - attālums no augšas
* _options_ - figūras opcijas

####Piemērs
```javascript
var x = simry.getWidth() / 2;
var y = simry.getHeight() / 2;
simry.rectangle(x, y, 50, 50); //Ekrāna centrā izveidojas kvadrāts.
```

###Daudzstūris - `simry.polygon(points, options)`
* _points_ - masīvs ar punktiem
* _options_ - figūras opcijas

Gadījumā ja tev niez pēc sarežģītākas figūras, bet negribas lietot bildes.
Attālumu no kreisās malas un augšas padod opcijās.

####Piemērs
```javascript
var points = [
    {x:10,y:10},
    {x:15,y:15},
    {x:30,y:15},
    {x:40,y:10},
    {x:30,y:0},
    {x:-10,y:-10}
];
simry.polygon(points, {
   fill: 'blue',  //Aizpilda daudzstūri ar zilo krāsu
   left: 150, 
   top: 150
});
```
##Līnijas
###Līnija - `simry.line(x1, y1, x2, y2, strokeWidth, options)`
* _x1_ - 1. punkta X koordināte
* _y1_ - 1. punkta X koordināte
* _x2_ - 1. punkta X koordināte
* _y2_ - 1. punkta X koordināte
* _strokeWidth_ - Līnijas platums
* _options_ - Līnijas opcijas

Novelk līniju starp 1. un 2. punktu

####Piemērs
Līnija no ekrāna kreisā augšējā stūra, līdz ekrāna lababajam apagšējam stūrim.              
```javascript
simry.line(0, 0, simry.getWidth(), simry.getHeight(), 10);
```
###Lauzta līnija - `simry.polyline(points, strokeWidth, options)`
* _points_ - Masīvs ar lauztās līnijas punktiem
* _strokeWidth_ - Līnijas platums
* _options_ - Līnijas opcijas

Novelk līniju starp visiem punktiem

####Piemērs            
```javascript
var points = [
    {x:10,y:10},
    {x:15,y:15},
    {x:30,y:15},
    {x:40,y:10},
    {x:30,y:0},
    {x:-10,y:-10}
];
simry.polyline(points, 10);
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

##Teksts - `simry.text(text, left, top, options)`
* _text_ - teksts
* _left_ - attālums no kreisās malas
* _top_ - attālums no augšas
* _options_ - teksta opcijas

###Piemērs
```javascript
var x = simry.getWidth() / 2;
var y = simry.getHeight() / 2;

simry.text('Thou shall write provide text', x, y);
```


#Objektu manipulācija
##Atļaut pārvietot - `simry.enableMoving(object)`
* _object_ - objekta mainīgais

Atļauj lietotājam doto objektu pārvietot.

###Piemērs
Skatīt attēla objekta piemēru.

##Aizliegt pārvietot - `simry.disableMoving(object)`
* _object_ - objekta mainīgais

Padara doto objektu nekustināmu

###Piemērs
```javascript
simry.disableMoving(ship); //Kosmoa kuģis vairs nav kustināms.
```

##Pārvietot objektu - `simry.move(object, xDelta, yDelta)`
* _object_ - objekta mainīgais
* _xDelta_ - Pārvieto objektu X assī par noteiktu daudzumu
* _yDelta_ - Pārvieto objektu Y assī par noteiktu daudzumu

Pārvieto doto objektu par noteiktu daudzumu

###Piemērs
```javascript
simry.move(ship, 100, 100); //Pārvieto kosmoa kuģi 100 kordinātes uz auģus & pa labi
```

#Vispārīgas funkcijas
##Fona krāsa - `simry.setBackgroundColor(color)`
* _color_ - krāsa

Nomaina fona krasu.
###Piemērs
```javascript
simry.setBackgroundColor('rgba(0,0,255,0.3)'); //Fona krāsa nomainas uz zilu ar 30% caurspīdīgumu
```

##Fona attēls - `simry.setBackgroundImage(image)`
* _image_ - Attēla atrašanās vieta

Nomaina fona attēlu.
###Piemērs
```javascript
var image = 'bg.png';
simry.setBackgroundColor(image);
```

##Aizsedzošais attēls - `simry.setOverlayImage(image)`
* _image_ - Attēla atrašanās vieta

Visam ekrānam priekšā uzliek attēlu.
###Piemērs
```javascript
var image = 'bg.png';
simry.setOverlayImage(image);
```

##Noklusējuma krāsa - `simry.setColor(color)`
* _color_ - Objektu noklusējuma krāsa.

Ja, izveidojot jaunu objektu, krāsa netiek norādīta, tiks izmantota šī uzstādītā
###Piemērs
```javascript
simry.setColor('green'); //Uzstāda noklusējuma krāsu uz zaļu
```

##Sadursme - `simry.intersects(object1, object2)`
* _object1_ - Pirmais objekts
* _object2_ - Otrais objekts

Pārbauda vai abi objekti sadurās.
###Piemērs
```javascript
if(simry.intersects(alien, ship)) { //Tiek pārbaudīts vai objekts alien un objekts ship saduras
    //Pārņem pasauli
} else {
    //Pa priekšu jaiznīcina kuģis
}
```

##Ekrāna platums - `simry.getWidth()`
Atgriež ekrāna platumu

##Ekrāna platums - `simry.getHeight()`
Atgriež ekrāna augstumu

##Pārvietošanas notikums - `simry.onMoving(object, function)`
* _object_ - Objekts, kurš tiks pārbaudīts
* _function_ - funkcija, kas tiks izsaukta

Pārvietojoties `object`, tiek izsaukta funkcija `function`
###Piemērs
Katru reizi, kad kuģis tiek pakustināts, pārbaudam, vai nenotiek sadursme ar citplanētieti.
```javascript
simry.onMoving(ship, function() {
    if (isGameOver(c)) {
        gameOver(c);
    }
});
```

##Klikšķa notikums - `simry.onClick(object, function)`
* _object_ - Objekts, kurš tiks pārbaudīts
* _function_ - funkcija, kas tiks izsaukta

Uzklikšķinot uz objekta `object`, izsauc funkcija `function`.
###Piemērs
```javascript
simry.onClick(ship, function() {
    console.log("Mmmmm... feels good, man.");
});
```
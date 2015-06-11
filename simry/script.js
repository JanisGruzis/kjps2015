/**
 * Vienkārša bibliotēka, lai palīdzētu programmēt html5 kanvas.
 * @param {String} canvasId 		HTML kanvas elementa identifikators.
 * @param {function} tickCallback 	Funkcija, kuru izsauc ik pēc tickPeriod milisekundēm.
 * @param {Number} tickPeriod     	Cik bieži izsaukt tickCallback funkciju.
 */
var Simry = function(canvasId, tickCallback, tickPeriod){

	var self = this;

	tickPeriod = !tickPeriod || parseInt(tickPeriod) <= 0 ?
		1000 :
		parseInt(tickPeriod);

	/**
	 * On resize set canvas width and height to 100%.
	 */
	window.onresize = function(){
		if (self.canvas)
		{
			self.canvas.setWidth(window.innerWidth);
			self.canvas.setHeight(window.innerHeight);
			self.canvas.remove().renderAll();
		}
	};

	/**
	 * Inicializē kanvas zīmēšanai.
	 */
	var initialize = function(){
		self.start();
		self.canvas = new fabric.Canvas(canvasId);
		self.canvas.selectable = false;
		window.onresize();
	};

	/**
	 * Nokrāsot fonu.
	 * @param {String} color Krāsa.
	 * @return {Simry}
	 */
	this.setBackgroundColor = function(color){
		self.canvas.backgroundColor = color;
		return self;
	};

	/**
	 * Uzlikt fonā attēlu.
	 * @param {String} image Attēla taka.
	 * @return {Simry}
	 */
	this.setBackgroundImage = function(image){
		self.canvas.setBackgroundColor({
				source: image,
				repeat: 'repeat'
			},
			self.canvas.renderAll.bind(canvas));
		return self;
	};

	/**
	 * Uzlikt visam priekšā attēlu.
	 * @param {String} image Attēla taka.
	 * @return {Simry}
	 */
	this.setOverlayImage = function(image){
		self.canvas.setOverlayColor({
				source: image,
				repeat: 'repeat'
			},
			self.canvas.renderAll.bind(canvas));
		return self;
	};

	/**
	 * Uzstādīt krāsu figūrām.
	 * @param {Object} color Krāsa.
	 */
	this.setColor = function(color){
		self.color = color;
		return self;
	};

	/**
	 * Zīmēt riņķi.
	 * @param  {Number} left    Attālums no kreisās malas.
	 * @param  {Number} top     Attālums no augšas.
	 * @param  {Number} radius  Radiuss.
	 * @param  {Object} options Figūras opcijas.
	 * @return {fabric.Circle}  Figūras objekts.
	 */
	this.circle = function(left, top, radius, options){
		options = defaultOptions(options);
		options.left = left;
		options.top = top;
		options.radius = radius;

		if (self.color){
			options.fill = self.color;
		}

		var circle = new fabric.Circle(options);
		self.canvas.add(circle);

		return circle;
	};

	/**
	 * Zīmēt elipsi.
	 * @param  {Number} left    Attālums no kreisās malas.
	 * @param  {Number} top     Attālums no augšas.
	 * @param  {Number} rx   	X radiuss.
	 * @param  {Number} ry  	Y radiuss.
	 * @param  {Object} options Figūras opcijas.
	 * @return {fabric.Ellipse}  Figūras objekts.
	 */
	this.ellipse = function(left, top, rx, ry, options){
		options = defaultOptions(options);
		options.left = left;
		options.top = top;
		options.rx = rx;
		options.ry = ry;

		if (self.color){
			options.fill = self.color;
		}

		var ellipse = new fabric.Ellipse(options);
		self.canvas.add(ellipse);

		return ellipse;
	};

	/**
	 * Zīmēt attēlu.
	 * @param  {String} url     	Attēla taka.
	 * @param  {Number} left    	Attālums no kreisās malas.
	 * @param  {Number} top     	Attālums no augšas.
	 * @param  {Object} options 	Figūras opcijas.
	 * @param  {Function} callback 	Kad attēls ir ielādēts, tiek izsaukta šī funkcija un iedota attēla instance.
	 * @return {Simry}
	 */
	this.image = function(url, left, top, options, callback){
		options = defaultOptions(options);
		var image = new fabric.Image.fromURL(url, function(img){
			options.left = left;
			options.top = top;
			img.setOptions(options);

			self.canvas.add(img);

			if (typeof(callback) === 'function'){
				callback(img);
			}
		});

		return self;
	};

	/**
	 * Vai divas figūras pārklājas.
	 * @param  {fabric.Object} obj1 #1 figūra.
	 * @param  {fabric.Object} obj2 #2 figūra.
	 * @return {Boolean}      		Vai figūra #1 pārklājas ar figūru #2.
	 */
	this.intersects = function(obj1, obj2){
		return obj1.intersectsWithObject(obj2);
	};

	/**
	 * Zīmēt taisnstūri.
	 * @param  {Number} left    Attālums no kreisās malas.
	 * @param  {Number} top     Attālums no augšas.
	 * @param  {Number} width   Platums.
	 * @param  {Number} height  Augstums.
	 * @param  {Object} options Figūras opcijas.
	 * @return {fabric.Rect}    Figūras objekts.
	 */
	this.rectangle = function(left, top, width, height, options){
		options = defaultOptions(options);
		options.left = left;
		options.top = top;
		options.width = width;
		options.height = height;

		if (self.color){
			options.fill = self.color;
		}

		var rect = new fabric.Rect(options);
		self.canvas.add(rect);

		return rect;
	};

	/**
	 * Rakstīt tekstu.
	 * @param  {String} text 	Teksts.
	 * @param  {Number} left    Attālums no kreisās malas.
	 * @param  {Number} top     Attālums no augšas.
	 * @param  {Object} options Teksta opcijas.
	 * @return {fabric.Text}    Teksta objekts.
	 */
	this.text = function(text, left, top, options){
		options = defaultOptions(options);
		options.left = left;
		options.top = top;

		if (self.color){
			options.fill = self.color;
		}

		var label = new fabric.Text(text, options);
		self.canvas.add(label);

		return label;
	};

	/**
	 * Zīmēt daudzstūri.
	 * @param  {Array} points  	Daudzstūra virsotņu punkti.
	 * @param  {Object} options Figūras opcijas.
	 * @return {fabric.Polygon} Figūras objekts.
	 */
	this.polygon = function(points, options){
		options = defaultOptions(options);

		if (self.color){
			options.fill = self.color;
		}

		var polygon = new fabric.Polygon(points, options);
		self.canvas.add(polygon);

		return polygon;
	};

	/**
	 * Zīmēt trijstūri.
	 * @param  {Number} left    	Attālums no kreisās malas.
	 * @param  {Number} top     	Attālums no augšas.
	 * @param  {Number} width   	Trijstūra pamatnes platums.
	 * @param  {Number} height  	Trijstūra augstums.
	 * @param  {Object} options 	Figūras opcijas.
	 * @return {fabric.Triangle}	Figūras objekts.
	 */
	this.triangle = function(left, top, width, height, options){
		options = defaultOptions(options);

		if (self.color){
			options.fill = self.color;
		}
		
		options.left = left;
		options.top = top;
		options.width = width;
		options.height = height;

		var triangle = new fabric.Triangle(options);
		self.canvas.add(triangle);

		return triangle;
	};

	/**
	 * Zīmēt lauztu līniju.
	 * @param  {Array} points  		Lauztās līnijas punkti.
	 * @param  {Number} strokeWidth Līnijas platums.
	 * @param  {Object} options 	Lauztās līnijas opcijas.
	 * @return {fabric.Polyline}	Lauztās līnijas objekts.
	 */
	this.polyline = function(points, strokeWidth, options){
		options = defaultOptions(options);
		options.strokeWidth = strokeWidth ? strokeWidth : 1;

		if (self.color){
			options.fill = 'transparent';
			options.stroke = self.color;
		}

		var polyline = new fabric.Polyline(points, options);
		self.canvas.add(polyline);

		return polyline;
	};

	/**
	 * Zīmēt līniju.
	 * @param  {Number} x1      	#1 punkta x koordināte.
	 * @param  {Number} y1      	#1 punkta y koordināte.
	 * @param  {Number} x2     		#2 punkta x koordināte.
	 * @param  {Number} y2      	#2 punkta y koordināte.
	 * @param  {Number} strokeWidth Līnijas platums.
	 * @param  {Object} options 	Līnijas opcijas.
	 * @return {fabric.Line}		Līnijas objekts.
	 */
	this.line = function(x1, y1, x2, y2, strokeWidth, options){
		options = defaultOptions(options);
		options.strokeWidth = strokeWidth ? strokeWidth : 1;

		if (self.color){
			options.fill = self.color;
			options.stroke = self.color;
		}

		var coords = [x1, y1, x2, y2];
		var line = new fabric.Line(coords, options);
		self.canvas.add(line);

		return line;
	};
	
	/**
	 * Atļaut kustināt figūru.
	 * @param {fabric.Object} obj Kustināmais objekts.
	 * @return {Simry}
	 */
	this.enableMoving = function(obj){
		obj.setOptions({
			lockMovementX: false,
			lockMovementY: false
		});
		return self;
	};
	
	/**
	 * Neļaut kustināt figūru.
	 * @param {fabric.Object} obj Nekustināmais objekts.
	 * @return {Simry}
	 */
	this.disableMoving = function(obj){
		obj.setOptions({
			lockMovementX: true,
			lockMovementY: true
		});
		return self;
	};
	
	/**
	 * Pārvietot figūru.
	 * @param {fabric.Object} obj Pārvietojamais objekts.
	 * @param {Number} xDelta X ass pārvietojuma vektors.
	 * @param {Number} yDelta Y ass pārvietojuma vektors.
	 * @return {Simry}
	 */
	this.move = function(obj, xDelta, yDelta){
		obj.setOptions({
			left: obj.getLeft() + xDelta,
			top: obj.getTop() + yDelta
		});
		obj.setCoords();
		
		return self;
	};

	/**
	 * Dabūt kanvas platumu.
	 * @return {Number} Kanvas platums.
	 */
	this.getWidth = function(){
		return self.canvas.getWidth();
	};

	/**
	 * Dabūt kanvas augstumu.
	 * @return {Number} Kanvas augstums.
	 */
	this.getHeight = function(){
		return self.canvas.getHeight();
	};

	/**
	 * Objekta kustināšanas notikums
	 * @param  {fabric.Object} obj 	Elements, kuram gaidīt notikumu.
	 * @param  {Function} callback 	Funkcija, kuru izsauc uz notikumu.
	 * @return {Simry}
	 */
	this.onMoving = function(obj, callback){
		obj.on('moving', function(e){
			obj.setCoords();
			callback(e);
		});
		return self;
	};
	
	/**
	 * Iedarbina galveno ciklu.
	 * @return {Simry}
	 */
	this.start = function(){
		if (typeof(tickCallback) === 'function'){
			self.interval = setInterval(function(){
				tickCallback(self);
				self.canvas.remove().renderAll();
			}, tickPeriod);
		}
		return self;
	};

	/**
	 * Apstrādināt galveno ciklu.
	 * @return {Simry}
	 */
	this.stop = function(){
		if (self.interval){
			clearInterval(self.interval);
			delete self.interval;
		}

		return self;
	};
	
	/**
	 * Izdzēst objektu.
	 * @param {fabric.Object} Dzēšamais objekts.
	 * @return {Simry}
	 */
	this.remove = function(obj){
		self.canvas.remove(obj);
		return self;
	};

	/**
	 * Uzstādīt noklusētās opcijas.
	 * @param  {Object} options Opcijas.
	 * @return {Object}        	Opcijas.
	 */
	var defaultOptions = function(options){
		options = typeof(options) !== 'object' || options === null ?
			{} :
			options;

		options.hasControls = false;
		options.hasBorders = false;
		options.lockMovementX = true;
		options.lockMovementY = true

		return options;
	};

	initialize();
};
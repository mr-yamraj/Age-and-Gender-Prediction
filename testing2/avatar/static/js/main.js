$(function() {
	var canvas = $("#c");
	var canvasHeight;
	var canvasWidth;
	var ctx;
	var dt = 0.1;
	
	var pointCollection;
	
	function init() {
		updateCanvasDimensions();
		
var g = [
        		 //A

        		 new Point(-150, -20, 0.0, 9, "#114B5F"),
				 new Point(-160, -5, 0.0, 10, "#028090"),
				 new Point(-140, -5, 0.0, 8, "#119DA4"),
				 new Point(-170, 10, 0.0, 10, "#00A9A5"),
				 new Point(-130, 10, 0.0, 7, "#114B5F"),
				 new Point(-180, 25, 0.0, 6, "#00A9A5"),
				 
				 new Point(-160, 25, 0.0, 9, "#028090"),
				 new Point(-140, 25, 0.0, 11, "#17638C"),
				 
				 new Point(-120, 25, 0.0, 5.5, "#119DA4"),
				 new Point(-190, 40, 0.0, 8, "#114B5F"),
				 new Point(-110, 40, 0.0, 9, "#028090"),
				 new Point(-200, 55, 0.0, 10, "#00A9A5"),
				 new Point(-100, 55, 0.0, 11, "#17638C"),
				 //I
				 new Point(-70, 55, 0.0, 10, "#8BC34A"),
				 new Point(-70, 40, 0.0, 9, "#4CAF50"),
				 new Point(-70, 25, 0.0, 8, "#689F38"),
				 new Point(-70, 10, 0.0, 8, "#8BC34A"),
				 new Point(-70, -5, 0.0, 9, "#4CAF50"),
				 new Point(-70, -20, 0.0, 10, "#689F38"),
				 //A

        		 new Point(50, -20, 0.0, 9, "#114B5F"),
				 new Point(40, -5, 0.0, 10, "#028090"),
				 new Point(60, -5, 0.0, 8, "#119DA4"),
				 new Point(30, 10, 0.0, 10, "#00A9A5"),
				 new Point(70, 10, 0.0, 7, "#114B5F"),
				 new Point(20, 25, 0.0, 6, "#00A9A5"),
				 
				 new Point(40, 25, 0.0, 9, "#028090"),
				 new Point(60, 25, 0.0, 11, "#17638C"),
				 
				 new Point(80, 25, 0.0, 5.5, "#119DA4"),
				 new Point(10, 40, 0.0, 8, "#114B5F"),
				 new Point(90, 40, 0.0, 9, "#028090"),
				 new Point(0, 55, 0.0, 10, "#00A9A5"),
				 new Point(100, 55, 0.0, 11, "#17638C"),

				 //V
				 new Point(150, 55, 0.0, 5, "#9C27B0"),
				 new Point(140, 40, 0.0, 8, "#7B1FA2"),
				 new Point(160, 40, 0.0, 5, "#E1BEE7"),
				 new Point(130, 25, 0.0, 6, "#9C27B0"),
				 new Point(170, 25, 0.0, 7, "#7B1FA2"),
				 new Point(120, 10, 0.0, 7, "#7C4DFF"),
				 new Point(180, 10, 0.0, 8, "#E1BEE7"),
				 new Point(110, -5, 0.0, 11, "#9C27B0"),
				 new Point(190, -5, 0.0, 11, "#7C4DFF"),
				 new Point(100, -20, 0.0, 11, "#7B1FA2"),
				 new Point(200, -20, 0.0, 11, "#E1BEE7"),

				 //A

        		 new Point(250, -20, 0.0, 9, "#114B5F"),
				 new Point(240, -5, 0.0, 10, "#028090"),
				 new Point(260, -5, 0.0, 8, "#119DA4"),
				 new Point(230, 10, 0.0, 10, "#00A9A5"),
				 new Point(270, 10, 0.0, 7, "#114B5F"),
				 new Point(220, 25, 0.0, 6, "#00A9A5"),
				 
				 new Point(240, 25, 0.0, 9, "#028090"),
				 new Point(260, 25, 0.0, 11, "#17638C"),
				 
				 new Point(280, 25, 0.0, 5.5, "#119DA4"),
				 new Point(210, 40, 0.0, 8, "#114B5F"),
				 new Point(290, 40, 0.0, 9, "#028090"),
				 new Point(200, 55, 0.0, 10, "#00A9A5"),
				 new Point(300, 55, 0.0, 11, "#17638C"),

				 //T
				 new Point(340, 55, 0.0, 10, "#FBC02D"),
				 new Point(340, 40, 0.0, 9, "#FFF9C4"),
				 new Point(340, 25, 0.0, 8, "#FFEB3B"),
				 new Point(340, 10, 0.0, 8, "#FFF9C4"),
				 new Point(340, -5, 0.0, 9, "#FFC107"),
				 new Point(340, -20, 0.0, 10, "#FFEB3B"),

				 new Point(325, -20, 0.0, 6, "#FBC02D"),
				 new Point(310, -20, 0.0, 8, "#FFC107"),
				 new Point(355, -20, 0.0, 6, "#FFEB3B"),
				 new Point(370, -20, 0.0, 8, "#FBC02D"),

				 //A

        		 new Point(430, -20, 0.0, 9, "#114B5F"),
				 new Point(420, -5, 0.0, 10, "#028090"),
				 new Point(440, -5, 0.0, 8, "#119DA4"),
				 new Point(410, 10, 0.0, 10, "#00A9A5"),
				 new Point(450, 10, 0.0, 7, "#114B5F"),
				 new Point(400, 25, 0.0, 6, "#00A9A5"),
				 
				 new Point(420, 25, 0.0, 9, "#028090"),
				 new Point(440, 25, 0.0, 11, "#17638C"),
				 
				 new Point(460, 25, 0.0, 5.5, "#119DA4"),
				 new Point(390, 40, 0.0, 8, "#114B5F"),
				 new Point(470, 40, 0.0, 9, "#028090"),
				 new Point(380, 55, 0.0, 10, "#00A9A5"),
				 new Point(480, 55, 0.0, 11, "#17638C"),

				 //R
				 new Point(510, 55, 0.0, 10, "#2196F3"),
				 new Point(510, 40, 0.0, 9, "#536DFE"),
				 new Point(510, 25, 0.0, 8, "#BBDEFB"),
				 new Point(510, 10, 0.0, 8, "#1976D2"),
				 new Point(510, -5, 0.0, 9, "#2196F3"),
				 new Point(510, -20, 0.0, 10, "#536DFE"),
				 new Point(530, -20, 0.0, 9, "#1976D2"),
				 new Point(545, -15, 0.0, 6, "#536DFE"),
				 new Point(550, -5, 0.0, 5.5, "#BBDEFB"),
				 new Point(545, 10, 0.0, 9, "#536DFE"),
				 new Point(530, 15, 0.0, 6, "#1976D2"),
				 new Point(525, 25, 0.0, 5.5, "#2196F3"),
				 new Point(535, 30, 0.0, 7, "#BBDEFB"),
				 new Point(545, 40, 0.0, 9, "#1976D2"),
				 new Point(550, 55, 0.0, 8, "#536DFE"),



				 ]		
		gLength = g.length;
		for (var i = 0; i < gLength; i++) {
			g[i].curPos.x = (canvasWidth/2 - 180) + g[i].curPos.x;
			g[i].curPos.y = (canvasHeight/2 - 65) + g[i].curPos.y;
			
			g[i].originalPos.x = (canvasWidth/2 - 180) + g[i].originalPos.x;
			g[i].originalPos.y = (canvasHeight/2 - 65) + g[i].originalPos.y;
		};
		
		pointCollection = new PointCollection();
		pointCollection.points = g;
		
		initEventListeners();
		timeout();
	};
	
	function initEventListeners() {
		$(window).bind('resize', updateCanvasDimensions).bind('mousemove', onMove);
		
		canvas.get(0).ontouchmove = function(e) {
			e.preventDefault();
			onTouchMove(e);
		};
		
		canvas.get(0).ontouchstart = function(e) {
			e.preventDefault();
		};
	};
	
	function updateCanvasDimensions() {
		canvas.attr({height: $(window).height(), width: $(window).width()});
		canvasWidth = canvas.width();
		canvasHeight = canvas.height();

		draw();
	};
	
	function onMove(e) {
		if (pointCollection)
			pointCollection.mousePos.set(e.pageX, e.pageY);
	};
	
	function onTouchMove(e) {
		if (pointCollection)
			pointCollection.mousePos.set(e.targetTouches[0].pageX, e.targetTouches[0].pageY);
	};
	
	function timeout() {
		draw();
		update();
		
		setTimeout(function() { timeout() }, 30);
	};
	
	function draw() {
		var tmpCanvas = canvas.get(0);

		if (tmpCanvas.getContext == null) {
			return; 
		};
		
		ctx = tmpCanvas.getContext('2d');
		ctx.clearRect(0, 0, canvasWidth, canvasHeight);
		
		if (pointCollection)
			pointCollection.draw();
	};
	
	function update() {		
		if (pointCollection)
			pointCollection.update();
	};
	
	function Vector(x, y, z) {
		this.x = x;
		this.y = y;
		this.z = z;
 
		this.addX = function(x) {
			this.x += x;
		};
		
		this.addY = function(y) {
			this.y += y;
		};
		
		this.addZ = function(z) {
			this.z += z;
		};
 
		this.set = function(x, y, z) {
			this.x = x; 
			this.y = y;
			this.z = z;
		};
	};
	
	function PointCollection() {
		this.mousePos = new Vector(0, 0);
		this.points = new Array();
		
		this.newPoint = function(x, y, z) {
			var point = new Point(x, y, z);
			this.points.push(point);
			return point;
		};
		
		this.update = function() {		
			var pointsLength = this.points.length;
			
			for (var i = 0; i < pointsLength; i++) {
				var point = this.points[i];
				
				if (point == null)
					continue;
				
				var dx = this.mousePos.x - point.curPos.x;
				var dy = this.mousePos.y - point.curPos.y;
				var dd = (dx * dx) + (dy * dy);
				var d = Math.sqrt(dd);
				
				if (d < 150) {
					point.targetPos.x = (this.mousePos.x < point.curPos.x) ? point.curPos.x - dx : point.curPos.x - dx;
					point.targetPos.y = (this.mousePos.y < point.curPos.y) ? point.curPos.y - dy : point.curPos.y - dy;
				} else {
					point.targetPos.x = point.originalPos.x;
					point.targetPos.y = point.originalPos.y;
				};
				
				point.update();
			};
		};
		
		this.draw = function() {
			var pointsLength = this.points.length;
			for (var i = 0; i < pointsLength; i++) {
				var point = this.points[i];
				
				if (point == null)
					continue;

				point.draw();
			};
		};
	};
	
	function Point(x, y, z, size, colour) {
		this.colour = colour;
		this.curPos = new Vector(x, y, z);
		this.friction = 0.8;
		this.originalPos = new Vector(x, y, z);
		this.radius = size;
		this.size = size;
		this.springStrength = 0.1;
		this.targetPos = new Vector(x, y, z);
		this.velocity = new Vector(0.0, 0.0, 0.0);
		
		this.update = function() {
			var dx = this.targetPos.x - this.curPos.x;
			var ax = dx * this.springStrength;
			this.velocity.x += ax;
			this.velocity.x *= this.friction;
			this.curPos.x += this.velocity.x;
			
			var dy = this.targetPos.y - this.curPos.y;
			var ay = dy * this.springStrength;
			this.velocity.y += ay;
			this.velocity.y *= this.friction;
			this.curPos.y += this.velocity.y;
			
			var dox = this.originalPos.x - this.curPos.x;
			var doy = this.originalPos.y - this.curPos.y;
			var dd = (dox * dox) + (doy * doy);
			var d = Math.sqrt(dd);
			
			this.targetPos.z = d/100 + 1;
			var dz = this.targetPos.z - this.curPos.z;
			var az = dz * this.springStrength;
			this.velocity.z += az;
			this.velocity.z *= this.friction;
			this.curPos.z += this.velocity.z;
			
			this.radius = this.size*this.curPos.z;
			if (this.radius < 1) this.radius = 1;
		};
		
		this.draw = function() {
			ctx.fillStyle = this.colour;
			ctx.beginPath();
			ctx.arc(this.curPos.x, this.curPos.y, this.radius, 0, Math.PI*2, true);
			ctx.fill();
		};
	};
	
	init();
});
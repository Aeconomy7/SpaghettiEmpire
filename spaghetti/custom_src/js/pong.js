var PaddleObj = function() { };

PaddleObj.prototype.init = function(game_object, side) {
	this.game = game_object;
	this.width = 15;
	this.height = 100;

	if (side == 'left')
		this.position = {x:40, y:this.game.height/2};
	else
		this.position = {x:this.game.width-40, y:this.game.height/2};
}

PaddleObj.prototype.render = function(ctx) {
	ctx.fillStyle = "white";
	ctx.fillRect (this.position.x-this.width/2, this.position.y-this.height/2, this.width, this.height);
}

PaddleObj.prototype.setYPosition = function(y_pos) {
	this.position.y = y_pos;
	if ((this.position.y - this.height/2) < 0)
		this.position.y = this.height/2;
	if ((this.position.y + this.height/2) > this.game.height)
		this.position.y = this.game.height - this.height/2;
}

PaddleObj.prototype.update = function(delta_time) {
	//don't do anything on update by default
}

PaddleObj.prototype.isBallColliding = function(ball) {
	return (ball.position.x < (this.position.x + this.width/2))
		&&	(ball.position.x > (this.position.x - this.width/2))
		&&	(ball.position.y < (this.position.y + this.height/2))
		&&  (ball.position.y > (this.position.y - this.height/2));
}

AIPaddleObj = function() {
	this.speed = 100;
};

AIPaddleObj.prototype = PaddleObj.prototype;
AIPaddleObj.constructor = AIPaddleObj;

AIPaddleObj.prototype.update = function(delta_time) {
	if (this.game.ball.position.y < this.position.y) {
		this.setYPosition(this.position.y -= this.speed * delta_time);
	}
	if (this.game.ball.position.y > this.position.y) {
		this.setYPosition(this.position.y += this.speed * delta_time);
	}
}




var BallObj = function() { };

BallObj.prototype.init = function(game_object, initial_speed, pos_x, pos_y) {
	this.game = game_object;
	this.position = {x:pos_x, y:pos_y};
	this.vector = {x:initial_speed, y:initial_speed};
}

BallObj.prototype.update = function(frame_time) {
	var previous_position = this.position;

	this.position.x += this.vector.x*frame_time;
	this.position.y += this.vector.y*frame_time;
	if (this.position.x > this.game.width) {
		this.position.x = this.game.width;
		this.vector.x *= -1;
	}
	if (this.position.x < 0) {
		this.position.x = 0;
		this.vector.x *= -1;
	}
	if (this.position.y < 0) {
		this.position.y = 0;
		this.vector.y *= -1;
	}
	if (this.position.y > this.game.height) {
		this.position.y = this.game.height;
		this.vector.y *= -1;
	}

	if (this.game.aiPaddle.isBallColliding(this) || this.game.playerPaddle.isBallColliding(this)) {
		this.position = previous_position;
		this.vector.x *= -1;
	}
}

BallObj.prototype.render = function(ctx) {
	ctx.beginPath();
	ctx.fillStyle="white";
	ctx.arc(this.position.x, this.position.y, 10, 0 , 2 * Math.PI, false);
	ctx.fill();
	//ctx.stroke();
}





var GameObj = function() {
	this.gameCanvas = document.createElement('canvas');
}

GameObj.prototype.setCanvasSize = function(width, height) {
	this.width = width;
	this.height = height;
	this.gameCanvas.width = width;
	this.gameCanvas.height = height;
}

GameObj.prototype.init = function(parent, width, height) {
	this.setCanvasSize(width, height);
	parent.appendChild(this.gameCanvas);
	this.ball = new BallObj();
	this.ball.init(this, 100, width/2, height/2);
	this.playerPaddle = new PaddleObj();
	this.playerPaddle.init(this, 'left');
	this.gameCanvas.onmousemove = function(playerPaddle) {
		return function(e) {
			playerPaddle.setYPosition(e.offsetY || e.layerY);
		}
	}(this.playerPaddle);
	this.aiPaddle = new AIPaddleObj();
	this.aiPaddle.init(this,'right');
}

GameObj.prototype.update = function(delta_time) {
	this.ball.update(delta_time);
	this.aiPaddle.update(delta_time);
}

GameObj.prototype.drawFrame = function() {
	var ctx = this.gameCanvas.getContext("2d");
	ctx.fillStyle="black";
	ctx.fillRect(0,0,this.gameCanvas.width,this.gameCanvas.height);
	this.ball.render(ctx);
	this.playerPaddle.render(ctx);
	this.aiPaddle.render(ctx);
}

GameObj.prototype.run = function(delta_time) {
	this.update(delta_time);
	this.drawFrame();
}




var setup = function() {
	var div = document.getElementById('pongDiv');
	var game = new GameObj();
	game.init(div, 640, 480);
	var previous_time = 0;
	var frameCallback = function(timestamp) {
		if (previous_time == 0) {
			previous_time = timestamp;
		}
		//convert to seconds
		delta_time = (timestamp - previous_time)/1000;
		//fix the delta time to a max of 0.1 seconds, so that even if frame rate is really slow, the jumps don't get too big
		if (delta_time > 0.1)
			delta_time = 0.1;

		previous_time = timestamp;
		game.run(delta_time);
		window.requestAnimationFrame(frameCallback);
	}
	window.requestAnimationFrame(frameCallback);
	/*
	window.onresize = function() {
		game.setCanvasSize(window.innerWidth, window.innerHeight);
	}
	*/
}

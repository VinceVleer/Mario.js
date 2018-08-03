var currentSprite = 4;

var xPos = 120;
var yPos = 0;
var isOnGround = false;

function moveMario(){

	var direction;

	if (input.right === true) {
		direction = 2;
	}

	if (input.left === true) {
		direction = -2;
	}

	if (isOnGround === true) {
		xPos+=direction;
	}

	currentSprite++;

	if (currentSprite > 3) {
		currentSprite = 1
	};

}

function drawMario(){

	for (let q = 0; q < objects.mario.size[0].y; q++) {
		for (let i = 0; i < objects.mario.size[0].x; i++) {
			c.fillStyle = objects.mario.palette[0][objects.mario.sprite[currentSprite][i+(q*objects.mario.size[0].x)]];
			c.fillRect((i + xPos),(q + yPos),1,1);
		}
	}

	if (xPos > 256) {
		xPos = -16
	};

	if (xPos < -16) {
		xPos = 256
	};


	if (input.a === true) {
		isOnGround = false;
		yPos = 0;
	};

	if (isOnGround === false) {
		gravity();
	};

	if (yPos > 193) {
		isOnGround = true;
	};

	if (isOnGround === true) {
		yPos = 193;
	};

	if (isOnGround === true && input.right === false && input.left === false) {
		currentSprite = 0;
	};

	if (isOnGround === false && input.right === false && input.left === false) {
		currentSprite = 4;
	};

	function gravity(){
		yPos++;
		yPos = (yPos * 1.1);
	}

}

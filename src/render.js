function render(){
	c.clearRect(0, 0, canvas.width, canvas.height);

	drawBackgroundLayer();
	drawSpriteLayer();

	console.clear();
	console.log('up = ' + input.up);
	console.log('down = ' + input.down);
	console.log('left = ' + input.left);
	console.log('right = ' + input.right);
	console.log('a = ' + input.a);
	console.log('b = ' + input.b);
	console.log(isOnGround);

}

setInterval(render, 1000/60);
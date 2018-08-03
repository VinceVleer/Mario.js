function drawBrick(x, y){
	for (let q = 0; q < objects.brick.size[0].y; q++) {
		for (let z = 0; z < objects.brick.size[0].x; z++) {
			c.fillStyle = objects.brick.palette[0][objects.brick.sprite[0][z+(q*objects.brick.size[0].x)]];
			c.fillRect(z+(x*16),q+(y*16),1,1);
		}
	}
}
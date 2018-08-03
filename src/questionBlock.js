function drawQstBlock(x, y){
	for (let q = 0; q < objects.qstBlock.size[0].y; q++) {
		for (let z = 0; z < objects.qstBlock.size[0].x; z++) {
			c.fillStyle = objects.qstBlock.palette[0][objects.qstBlock.sprite[0][z+(q*objects.qstBlock.size[0].x)]];
			c.fillRect(z+(x*16),q+(y*16),1,1);
		}
	}
}
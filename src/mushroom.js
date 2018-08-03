function drawMushroom(){
	for (let q = 0; q < objects.mushroom.size[0].y; q++) {
		for (let z = 0; z < objects.mushroom.size[0].x; z++) {
			c.fillStyle = objects.mushroom.palette[0][objects.mushroom.sprite[0][z+(q*objects.mushroom.size[0].x)]];
			c.fillRect((z),(q),1,1);
		}
	}
}
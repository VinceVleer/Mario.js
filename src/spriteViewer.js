function spriteViewer(object, size, sprite, pallete){
	for (let q = 0; q < objects.titleScreen.size[size].y; q++) {
		for (let z = 0; z < objects.titleScreen.size[size].x; z++) {
			c.fillStyle = objects.titleScreen.palette[pallete][objects.titleScreen.sprite[sprite][z+(q*objects.titleScreen.size[size].x)]];
			c.fillRect((z),(q),1,1);
		}
	}
}
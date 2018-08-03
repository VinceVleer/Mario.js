function floor(start, length){
	for (let a = 0; a < 2; a++) {
		for (let b = 0; b < length; b++) {
			for (let q = 0; q < 16; q++) {
				for (let i = 0; i < 16; i++) {
					c.fillStyle = objects.floor.palette[0][objects.floor.sprite[0][i+(q*objects.floor.size[0].x)]];
					c.fillRect(i+(b*16)+(start*16),(q+208)+a*16,1,1);
				}
			}
		}
	}
}
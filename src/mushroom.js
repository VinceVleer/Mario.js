var tick = 0;		//frame count
var time = 0;		//passed seconds
var speed = 0;		//velocity in meters per second (m/s)
var dist = 0;		//distance traveled per frame

function drawMushroom(x,y){

	//calculate physics until terminal velocity (50m/s) is reached
	if (speed<50) {
		tick++;
		time = (tick/60);
		speed = (time*time)*10;
	}

	//translate speed value to mushroom Y position
	dist = (dist + (speed/60)*16);

	//loop Y axis dimension
	if (dist>240) {
		dist-=256+y;
	}

	for (let q = 0; q < objects.mushroom.size[0].y; q++) {
		for (let z = 0; z < objects.mushroom.size[0].x; z++) {
			c.fillStyle = objects.mushroom.palette[0][objects.mushroom.sprite[0][z+(q*objects.mushroom.size[0].x)]];
			c.fillRect(z+(x),q+(dist)+y,1,1);
		}
	}

	//debug info
	console.clear();
	console.log('frame = ' + tick);
	console.log('passed time = ' + Math.round(time*10)/10 + 's');
	console.log('current speed = ' + Math.round(speed) + 'm/s');
	console.log('current speed = ' + Math.round(speed*3.6) + 'km/h');
	console.log('Y position = ' + dist);

}
var input = {
	up: false,
	down: false,
	left: false,
	right: false,
	a: false,
	b: false,
	start: false,
	select: false,
}

window.addEventListener("keydown", moveSomething);
window.addEventListener("keyup", stopSomething);

function moveSomething(e) {
	switch(e.keyCode) {
		case 38:
			input.up= true;
			break;
		case 40:
			input.down= true;
			break;
		case 37:
			input.left= true;
			break;
		case 39:
			input.right= true;
			break;
		case 32:
			input.a= true;
			break;
		case 16:
			input.b= true;
			break;
	}
}

function stopSomething(e) {
	switch(e.keyCode) {
		case 38:
			input.up= false;
			break;
		case 40:
			input.down= false;
			break;
		case 37:
			input.left= false;
			break;
		case 39:
			input.right= false;
			break;
		case 32:
			input.a= false;
			break;
		case 16:
			input.b= false;
			break;
	}
}
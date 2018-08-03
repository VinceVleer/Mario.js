const objects = {

	mario: {
		size: [
			{ x: 16, y: 16},
			{ x: 16, y: 32},
		],
		sprite: [

			[
				0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 
				0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 
				0, 0, 0, 0, 3, 3, 3, 2, 2, 3, 2, 0, 0, 0, 0, 0, 
				0, 0, 0, 3, 2, 3, 2, 2, 2, 3, 2, 2, 2, 0, 0, 0, 
				0, 0, 0, 3, 2, 3, 3, 2, 2, 2, 3, 2, 2, 2, 0, 0, 
				0, 0, 0, 3, 3, 2, 2, 2, 2, 3, 3, 3, 3, 0, 0, 0, 
				0, 0, 0, 0, 0, 2, 2, 2, 2, 2, 2, 2, 0, 0, 0, 0, 
				0, 0, 0, 0, 3, 3, 1, 3, 3, 3, 0, 0, 0, 0, 0, 0, 
				0, 0, 0, 3, 3, 3, 1, 3, 3, 1, 3, 3, 3, 0, 0, 0, 
				0, 0, 3, 3, 3, 3, 1, 3, 3, 1, 3, 3, 3, 3, 0, 0, 
				0, 0, 2, 2, 3, 1, 2, 1, 1, 2, 1, 3, 2, 2, 0, 0, 
				0, 0, 2, 2, 2, 1, 1, 1, 1, 1, 1, 2, 2, 2, 0, 0, 
				0, 0, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 0, 0, 
				0, 0, 0, 0, 1, 1, 1, 0, 0, 1, 1, 1, 0, 0, 0, 0, 
				0, 0, 0, 3, 3, 3, 0, 0, 0, 0, 3, 3, 3, 0, 0, 0, 
				0, 0, 3, 3, 3, 3, 0, 0, 0, 0, 3, 3, 3, 3, 0, 0
			],
		
			[
				0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 
				0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 
				0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 
				0, 0, 0, 0, 3, 3, 3, 2, 2, 3, 2, 0, 0, 0, 0, 0, 
				0, 0, 0, 3, 2, 3, 2, 2, 2, 3, 2, 2, 2, 0, 0, 0, 
				0, 0, 0, 3, 2, 3, 3, 2, 2, 2, 3, 2, 2, 2, 0, 0, 
				0, 0, 0, 3, 3, 2, 2, 2, 2, 3, 3, 3, 3, 0, 0, 0, 
				0, 0, 0, 0, 0, 2, 2, 2, 2, 2, 2, 2, 0, 0, 0, 0, 
				0, 0, 0, 0, 3, 3, 3, 3, 1, 3, 0, 2, 0, 0, 0, 0, 
				0, 0, 0, 2, 3, 3, 3, 3, 3, 3, 2, 2, 2, 0, 0, 0, 
				0, 0, 2, 2, 1, 3, 3, 3, 3, 3, 2, 2, 0, 0, 0, 0, 
				0, 0, 3, 3, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 
				0, 0, 3, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 
				0, 3, 3, 1, 1, 1, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 
				0, 3, 0, 0, 0, 0, 3, 3, 3, 0, 0, 0, 0, 0, 0, 0, 
				0, 0, 0, 0, 0, 0, 3, 3, 3, 3, 0, 0, 0, 0, 0, 0
			],
		
			[
				0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 
				0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 
				0, 0, 0, 0, 3, 3, 3, 2, 2, 3, 2, 0, 0, 0, 0, 0, 
				0, 0, 0, 3, 2, 3, 2, 2, 2, 3, 2, 2, 2, 0, 0, 0, 
				0, 0, 0, 3, 2, 3, 3, 2, 2, 2, 3, 2, 2, 2, 0, 0, 
				0, 0, 0, 3, 3, 2, 2, 2, 2, 3, 3, 3, 3, 0, 0, 0, 
				0, 0, 0, 0, 0, 2, 2, 2, 2, 2, 2, 2, 0, 0, 0, 0, 
				0, 0, 0, 0, 3, 3, 1, 3, 3, 3, 0, 0, 0, 0, 0, 0, 
				0, 0, 0, 3, 3, 3, 3, 1, 1, 3, 3, 0, 0, 0, 0, 0, 
				0, 0, 0, 3, 3, 3, 1, 1, 2, 1, 1, 2, 0, 0, 0, 0, 
				0, 0, 0, 3, 3, 3, 3, 1, 1, 1, 1, 1, 0, 0, 0, 0, 
				0, 0, 0, 1, 3, 3, 2, 2, 2, 1, 1, 1, 0, 0, 0, 0, 
				0, 0, 0, 0, 1, 3, 2, 2, 1, 1, 1, 0, 0, 0, 0, 0, 
				0, 0, 0, 0, 0, 1, 1, 1, 3, 3, 3, 0, 0, 0, 0, 0, 
				0, 0, 0, 0, 0, 3, 3, 3, 3, 3, 3, 3, 0, 0, 0, 0,
				0, 0, 0, 0, 0, 3, 3, 3, 3, 0, 0, 0, 0, 0, 0, 0
			],
		
			[
				0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 
				0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 
				0, 0, 0, 0, 3, 3, 3, 2, 2, 3, 2, 0, 0, 0, 0, 0, 
				0, 0, 0, 3, 2, 3, 2, 2, 2, 3, 2, 2, 2, 0, 0, 0, 
				0, 0, 0, 3, 2, 3, 3, 2, 2, 2, 3, 2, 2, 2, 0, 0, 
				0, 0, 0, 3, 3, 2, 2, 2, 2, 3, 3, 3, 3, 0, 0, 0, 
				0, 0, 0, 0, 0, 2, 2, 2, 2, 2, 2, 2, 0, 0, 0, 0, 
				0, 0, 3, 3, 3, 3, 1, 1, 3, 3, 0, 0, 0, 0, 0, 0, 
				2, 2, 3, 3, 3, 3, 1, 1, 1, 3, 3, 3, 2, 2, 2, 0, 
				2, 2, 2, 0, 3, 3, 1, 2, 1, 1, 1, 3, 3, 2, 2, 0, 
				2, 2, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 3, 0, 0, 
				0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3, 3, 0, 0, 
				0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3, 3, 0, 0, 
				0, 3, 3, 1, 1, 1, 0, 0, 0, 1, 1, 1, 3, 3, 0, 0, 
				0, 3, 3, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
				0, 0, 3, 3, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0
			],

			[
				0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 
				0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 2, 2, 2, 
				0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 
				0, 0, 0, 0, 0, 3, 3, 3, 2, 2, 3, 2, 0, 3, 3, 3, 
				0, 0, 0, 0, 3, 2, 3, 2, 2, 2, 3, 2, 2, 3, 3, 3, 
				0, 0, 0, 0, 3, 2, 3, 3, 2, 2, 2, 3, 2, 2, 2, 3, 
				0, 0, 0, 0, 3, 3, 2, 2, 2, 2, 3, 3, 3, 3, 3, 0, 
				0, 0, 0, 0, 0, 0, 2, 2, 2, 2, 2, 2, 2, 3, 0, 0, 
				0, 0, 3, 3, 3, 3, 3, 1, 3, 3, 3, 1, 3, 0, 0, 0, 
				0, 3, 3, 3, 3, 3, 3, 3, 1, 3, 3, 3, 1, 0, 0, 3, 
				2, 2, 3, 3, 3, 3, 3, 3, 1, 1, 1, 1, 1, 0, 0, 3, 
				2, 2, 2, 0, 1, 1, 3, 1, 1, 2, 1, 1, 2, 1, 3, 3, 
				0, 2, 0, 3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3, 3, 
				0, 0, 3, 3, 3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3, 3, 
				0, 3, 3, 3, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 
				0, 3, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0
			],

			[
				0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 
				0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 2, 0, 0, 0, 0, 0, 
				0, 0, 0, 1, 1, 1, 1, 1, 1, 2, 2, 0, 0, 0, 0, 0, 
				0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 
				0, 0, 0, 3, 3, 3, 2, 2, 3, 2, 2, 2, 0, 0, 0, 0, 
				0, 0, 3, 2, 2, 3, 2, 2, 3, 3, 2, 2, 2, 2, 0, 0, 
				0, 0, 3, 2, 2, 3, 3, 2, 2, 2, 2, 2, 2, 2, 2, 0, 
				0, 3, 3, 2, 2, 3, 3, 2, 2, 2, 3, 2, 2, 2, 2, 0, 
				0, 3, 3, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3, 3, 0, 0, 
				0, 3, 3, 3, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3, 0, 0, 
				0, 0, 0, 3, 3, 2, 2, 2, 2, 2, 2, 2, 2, 0, 0, 0, 
				0, 0, 0, 0, 3, 2, 2, 2, 2, 2, 3, 0, 0, 0, 0, 0, 
				0, 0, 0, 0, 3, 1, 3, 3, 3, 3, 1, 3, 0, 0, 0, 0, 
				0, 0, 0, 3, 3, 1, 3, 3, 3, 3, 1, 3, 3, 0, 0, 0, 
				0, 0, 3, 3, 3, 1, 3, 3, 3, 3, 1, 3, 3, 3, 0, 0, 
				0, 3, 3, 3, 3, 1, 3, 3, 3, 3, 1, 3, 3, 3, 3, 0, 
				0, 3, 3, 3, 1, 1, 3, 3, 3, 3, 1, 1, 3, 3, 3, 0, 
				3, 3, 3, 3, 1, 1, 3, 3, 3, 3, 1, 1, 3, 3, 3, 3, 
				3, 3, 3, 3, 1, 1, 1, 1, 1, 1, 1, 1, 3, 3, 3, 3, 
				3, 3, 3, 3, 1, 2, 1, 1, 1, 1, 2, 1, 3, 3, 3, 3, 
				2, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 
				2, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 
				0, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 0, 
				0, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 0, 
				0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 
				0, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 0, 
				0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 
				0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 
				0, 0, 3, 3, 3, 3, 0, 0, 0, 0, 3, 3, 3, 3, 0, 0, 
				0, 0, 3, 3, 3, 3, 0, 0, 0, 0, 3, 3, 3, 3, 0, 0, 
				3, 3, 3, 3, 3, 3, 0, 0, 0, 0, 3, 3, 3, 3, 3, 3,
				3, 3, 3, 3, 3, 3, 0, 0, 0, 0, 3, 3, 3, 3, 3, 3
			],

		],
		palette: [
			[
				nesColor[0].cFF,
				nesColor[0].c16,
				nesColor[0].c27,
				nesColor[0].c18,
			],
			[
				nesColor[0].cFF,
				nesColor[0].c30,
				nesColor[0].c27,
				nesColor[0].c18,
			],
			[
				nesColor[0].cFF,
				nesColor[0].c37,
				nesColor[0].c27,
				nesColor[0].c05,
			],
		],
	},

	floor: {
		size: [
			{ x: 16, y: 16},
		],
		sprite: [
			[
				2, 1, 1, 1, 1, 1, 1, 1, 1, 3, 2, 1, 1, 1, 1, 2, 
				1, 2, 2, 2, 2, 2, 2, 2, 2, 3, 1, 2, 2, 2, 2, 3, 
				1, 2, 2, 2, 2, 2, 2, 2, 2, 3, 1, 2, 2, 2, 2, 3, 
				1, 2, 2, 2, 2, 2, 2, 2, 2, 3, 1, 2, 2, 2, 2, 3, 
				1, 2, 2, 2, 2, 2, 2, 2, 2, 3, 1, 3, 2, 2, 2, 3, 
				1, 2, 2, 2, 2, 2, 2, 2, 2, 3, 1, 3, 3, 3, 3, 2, 
				1, 2, 2, 2, 2, 2, 2, 2, 2, 3, 1, 1, 1, 1, 1, 3, 
				1, 2, 2, 2, 2, 2, 2, 2, 2, 3, 1, 2, 2, 2, 2, 3, 
				1, 2, 2, 2, 2, 2, 2, 2, 2, 3, 1, 2, 2, 2, 2, 3, 
				1, 2, 2, 2, 2, 2, 2, 2, 2, 3, 1, 2, 2, 2, 2, 3, 
				3, 3, 2, 2, 2, 2, 2, 2, 3, 1, 2, 2, 2, 2, 2, 3, 
				1, 1, 3, 3, 2, 2, 2, 2, 3, 1, 2, 2, 2, 2, 2, 3, 
				1, 2, 1, 1, 3, 3, 3, 3, 1, 2, 2, 2, 2, 2, 2, 3, 
				1, 2, 2, 2, 1, 1, 1, 3, 1, 2, 2, 2, 2, 2, 2, 3, 
				1, 2, 2, 2, 2, 2, 2, 3, 1, 2, 2, 2, 2, 2, 3, 3, 
				2, 3, 3, 3, 3, 3, 3, 2, 1, 3, 3, 3, 3, 3, 3, 2
			],
		],
		palette: [
			[
				nesColor[0].cFF,
				nesColor[0].c37,
				nesColor[0].c17,
				nesColor[0].c0D,
			],
			[
				nesColor[0].cFF,
				nesColor[0].c31,
				nesColor[0].c1C,
				nesColor[0].c0D,
			],
		],
	},

	mushroom: {
		size: [
			{ x: 16, y: 16},
		],
		sprite: [
			[
				0, 0, 0, 0, 0, 0, 2, 2, 2, 2, 0, 0, 0, 0, 0, 0, 
				0, 0, 0, 0, 0, 2, 2, 2, 2, 3, 3, 0, 0, 0, 0, 0, 
				0, 0, 0, 0, 2, 2, 2, 2, 3, 3, 3, 3, 0, 0, 0, 0, 
				0, 0, 0, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3, 0, 0, 0, 
				0, 0, 2, 2, 2, 2, 2, 2, 2, 3, 3, 3, 2, 2, 0, 0, 
				0, 2, 2, 3, 3, 3, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0, 
				0, 2, 3, 3, 3, 3, 3, 2, 2, 2, 2, 2, 2, 2, 2, 0, 
				2, 2, 3, 3, 3, 3, 3, 2, 2, 2, 2, 2, 3, 3, 2, 2, 
				2, 2, 3, 3, 3, 3, 3, 2, 2, 2, 2, 2, 3, 3, 3, 2, 
				2, 2, 2, 3, 3, 3, 2, 2, 2, 2, 2, 2, 2, 3, 3, 2, 
				2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 
				0, 2, 3, 3, 3, 1, 1, 1, 1, 1, 1, 3, 3, 3, 2, 0, 
				0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 
				0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 2, 1, 0, 0, 0, 0, 
				0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 2, 1, 0, 0, 0, 0, 
				0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 1, 0, 0, 0, 0, 0
			],
		],
		palette: [
			[
				nesColor[0].cFF,
				nesColor[0].c20,
				nesColor[0].c27,
				nesColor[0].c16,
			],
		],
	},

	qstBlock: {
		size: [
			{ x: 16, y: 16},
		],
		sprite: [
			[
				0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0, 
				2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3, 
				2, 1, 3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3, 1, 3, 
				2, 1, 1, 1, 1, 2, 2, 2, 2, 2, 1, 1, 1, 1, 1, 3, 
				2, 1, 1, 1, 2, 2, 3, 3, 3, 2, 2, 1, 1, 1, 1, 3, 
				2, 1, 1, 1, 2, 2, 3, 1, 1, 2, 2, 3, 1, 1, 1, 3, 
				2, 1, 1, 1, 2, 2, 3, 1, 1, 2, 2, 3, 1, 1, 1, 3, 
				2, 1, 1, 1, 1, 3, 3, 1, 2, 2, 2, 3, 1, 1, 1, 3, 
				2, 1, 1, 1, 1, 1, 1, 2, 2, 3, 3, 3, 1, 1, 1, 3, 
				2, 1, 1, 1, 1, 1, 1, 2, 2, 3, 1, 1, 1, 1, 1, 3, 
				2, 1, 1, 1, 1, 1, 1, 1, 3, 3, 1, 1, 1, 1, 1, 3, 
				2, 1, 1, 1, 1, 1, 1, 2, 2, 1, 1, 1, 1, 1, 1, 3, 
				2, 1, 1, 1, 1, 1, 1, 2, 2, 3, 1, 1, 1, 1, 1, 3, 
				2, 1, 3, 1, 1, 1, 1, 1, 3, 3, 1, 1, 1, 3, 1, 3, 
				2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3, 
				3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3
			],
		],
		palette: [
			[
				nesColor[0].cFF,
				nesColor[0].c27,
				nesColor[0].c17,
				nesColor[0].c0D,
			],
		],
	},

	brick: {
		size: [
			{ x: 16, y: 16},
		],
		sprite: [
			[
				1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 
				2, 2, 2, 2, 2, 2, 2, 3, 2, 2, 2, 2, 2, 2, 2, 3, 
				2, 2, 2, 2, 2, 2, 2, 3, 2, 2, 2, 2, 2, 2, 2, 3, 
				3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 
				2, 2, 2, 3, 2, 2, 2, 2, 2, 2, 2, 3, 2, 2, 2, 2, 
				2, 2, 2, 3, 2, 2, 2, 2, 2, 2, 2, 3, 2, 2, 2, 2, 
				2, 2, 2, 3, 2, 2, 2, 2, 2, 2, 2, 3, 2, 2, 2, 2, 
				3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 
				2, 2, 2, 2, 2, 2, 2, 3, 2, 2, 2, 2, 2, 2, 2, 3, 
				2, 2, 2, 2, 2, 2, 2, 3, 2, 2, 2, 2, 2, 2, 2, 3, 
				2, 2, 2, 2, 2, 2, 2, 3, 2, 2, 2, 2, 2, 2, 2, 3, 
				3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 
				2, 2, 2, 3, 2, 2, 2, 2, 2, 2, 2, 3, 2, 2, 2, 2, 
				2, 2, 2, 3, 2, 2, 2, 2, 2, 2, 2, 3, 2, 2, 2, 2, 
				2, 2, 2, 3, 2, 2, 2, 2, 2, 2, 2, 3, 2, 2, 2, 2, 
				3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3
			],
		],
		palette: [
			[
				nesColor[0].cFF,
				nesColor[0].c37,
				nesColor[0].c17,
				nesColor[0].c0D,
			],
		],
	},

	titleScreen: {
		size: [
			{ x: 137, y: 86},
		],
		sprite: [
			[
				0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,
				1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,3,
				1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,3,

			],
		],
		palette: [
			[
				nesColor[0].cFF,
				nesColor[0].c37,
				nesColor[0].c17,
				nesColor[0].c0D,
			],
		],
	},

	empty: {
		sprite: [
			[],
		],
		palette: [
			[],
		],
	},

};
var Gpio = require('onoff').Gpio,
	green = new Gpio(18, 'out'),
	red = new Gpio(23, 'out'),
	blue = new Gpio(16, 'out');

green.writeSync(1);
console.log("green on");

setTimeout(function(){
	green.writeSync(0);
	console.log("green off");
	setTimeout(function(){
        	blue.writeSync(1);
        	console.log("blue on");
		setTimeout(function(){
			blue.writeSync(0);
			console.log("blue off");
				},3000)
			},3000)
},3000);

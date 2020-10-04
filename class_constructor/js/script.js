class Tiger {
	constructor(name) {
		this.name = name;
	}
	feedCat() {
		console.log('HRRRrrr-RRrrr MEOOOOW');
	}
}
class angryTiger extends Tiger {
	throwDart() {
		console.log('ZzZzZzZz MEOW');
	}
}

let tigerSimba = new Tiger('Simba');
let angryDoodle = new angryTiger('Doodle');

tigerSimba.feedCat();
angryDoodle.throwDart();
angryDoodle.feedCat();

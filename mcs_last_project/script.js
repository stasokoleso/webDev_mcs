class Person {
	constructor(name) {
		this.name = name;
		this.happiness = 0;
	}
	hasCat() {
		return this.happiness++;
	}
	hasRest() {
		return this.happiness++;
	}
	hasMoney() {
		return this.happiness++;
	}
	isSunny() {
		let xhr = new XMLHttpRequest();
		xhr.open(
			'GET',
			`http://api.openweathermap.org/data/2.5/weather?q=Moscow&appid=d3dd038f6d1e063cb7899182d8e507e2`,
			false
		);
		xhr.send();
		let DATA = JSON.parse(xhr.responseText);
		if (DATA.main.temp - 273 > 15) {
			return this.happiness++;
		} else {
			return this.happiness;
		}
	}
}

const submit = document.querySelector('#submitButton');

submit.onclick = function (e) {
	e.preventDefault();
	let personName = document.querySelector('input[name="name"]').value;
	let hasCat = document.querySelector('input[name="cat"]:checked').value;
	let hasRest = document.querySelector('input[name="rest"]:checked').value;
	let hasMoney = document.querySelector('input[name="money"]:checked').value;

	let user = new Person(personName);
	hasCat === 'yes' ? user.hasCat() : user.happiness;
	hasRest === 'yes' ? user.hasRest() : user.happiness;
	hasMoney === 'yes' ? user.hasMoney() : user.happiness;

	user.isSunny();

	let displayedName = document.querySelector('.personName');
	let displayedIcon = document.querySelector('.icon');

	displayedName.innerHTML = personName + `:`;

	if (user.happiness === 4) {
		displayedIcon.innerHTML = '😄';
	} else if (user.happiness === 2 || user.happiness === 3) {
		displayedIcon.innerHTML = '😐';
	} else if (user.happiness < 2) {
		displayedIcon.innerHTML = '🙁';
	}
};

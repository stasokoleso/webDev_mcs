const APIKey = 'd3dd038f6d1e063cb7899182d8e507e2';
const submit = document.querySelector('#getButton');

let xhr = new XMLHttpRequest();

submit.onclick = function (e) {
	e.preventDefault();

	var city = document.querySelector('input').value;
	const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIKey}`;

	xhr.open('GET', url, false);
	xhr.send();
	let DATA = JSON.parse(xhr.responseText);
	// console.log(DATA); Проверочный)
	document.querySelector('.text').innerHTML = `Temperature in ${city} is ${Math.round(
		DATA.main.temp - 273
	)}℃ and Wind speed is ${DATA.wind.speed} m/s`;
};

// // 4.2.1, 4.4.1 Модуль числа (сразу писал тернарный)
// let value = parseInt(prompt('Please, enter any number'));

// value >= 0 ? console.log(value) : console.log(-value);

// // 4.3.1 Камень, ножницы, бумага
// const rock = 0;
// const scissors = 1;
// const paper = 2;

// // попросим игрока ввести ответ в виде числа
// let player = parseInt(prompt('Your choice: 0 - rock, 1 - scissors, 2 - paper'));
// // Рандомное число 0, 1 или 2 — разберем это позже, пока не заморачивайтесь
// let computer = Math.floor(Math.random() * 3);

// // опишем все условия и будем выводить в консоль 'computer win' или 'player win'
// if (player == computer) {
// 	console.log(`Draw! Try again.`);
// } else if (
// 	(player == rock && computer == scissors) ||
// 	(player == scissors && computer == paper) ||
// 	(player == paper && computer == rock)
// ) {
// 	console.log(`Congratulations, you win!`);
// } else {
// 	console.log(`Looser! Try again.`);
// }

// // Перебор многомерного массива реперов и продюсеров
let newSchool = [
	[
		['Lil Yachty', 'Playboi Carti', 'Lil Uzi Vert'],
		['Sonny Digital', 'Metro Boomin', '12Hunna'],
	],
	[
		['Yung Lean', 'Ecco2K', 'Bladee'],
		['Whitearmor', 'PJ Beats', 'Yung Gud'],
	],
];

newSchool.forEach((e) => {
	e.forEach((e) => {
		e.forEach((e) => {
			console.log(e);
		})
	})
})

// for (country of newSchool) {
// 	for (let i = 0; i <= country.length; i++) {
// 		country[i].forEach((e) => {
// 			console.log(e);
// 		});
// 		// for (let j = 0; j <= country[i].length; j++) {
// 		// 	console.log(country[i][j]);
// 		// }
// 	}
// }

// function showRappers() {
// 	console.log("These guys rap'n:");
// 	for (rapper of newSchool[0][0]) {
// 		console.log(rapper + ' (US)');
// 	}
// 	for (rapper of newSchool[1][0]) {
// 		console.log(rapper + ' (SWE)');
// 	}
// }

// function showProducers() {
// 	console.log("These guys makes artists rap'n:");
// 	for (producer of newSchool[0][1]) {
// 		console.log(rapper + ' (US)');
// 	}
// 	for (rapper of newSchool[1][1]) {
// 		console.log(rapper + ' (SWE)');
// 	}
// }

// showRappers();
// showProducers();

// let crypto = [
// 	{
// 		name: 'Bitcoin',
// 		price: 1388.37,
// 	},
// 	{
// 		name: 'Ethereum',
// 		price: 716,
// 	},
// 	{
// 		name: 'Litecoin',
// 		price: 140,
// 	},
// ];

// let btc = document.querySelector('#btc');
// let eth = document.querySelector('#eth');
// let ltc = document.querySelector('#ltc');

// let box = document.querySelector('.diagram')

// crypto.forEach((e) => {
// 	for (currency in e) {
// 		box.createElement('div');
// 		currency.setAttribute('id', e.name);;
// 	}
// });

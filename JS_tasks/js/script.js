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
// 	console.log(`Draw! Try again.`)
// } else if (((player == rock) && (computer == scissors)) || ((player == scissors) && (computer == paper)) || ((player == paper) && (computer == rock))) {
// 	console.log(`Congratulations, you win!`);
// } else {
// 	console.log(`Looser! Try again.`)
// };

// Перебор многомерного массива реперов и продюсеров
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
let rappers = [];
let producers = [];
rappers.push(newSchool[0][0]);
rappers.push(newSchool[1][0]);
producers.push(newSchool[0][1]);
producers.push(newSchool[1][1]);

let usRappers = rappers[0];
let sweRappers = rappers[1];
let usProducers = producers[0];
let sweProducers = producers[1];

// for (i = 0; i <= rappers.length; i++) {
// 	console.log(rappers[i])
// }
function showRappers() {
	console.log('These guys rap\'n:')
	for (rapper of newSchool[0][0]) {
		console.log(rapper + ' (US)')
	};
	for (rapper of newSchool[1][0]) {
		console.log(rapper + ' (SWE)');
	}
};

function showProducers() {
	console.log('These guys makes artists rap\'n:')
	for (producer of newSchool[0][1]) {
		console.log(rapper + ' (US)')
	};
	for (rapper of newSchool[1][1]) {
		console.log(rapper + ' (SWE)');
	}
};

// for (rapper of usRappers) {
// 	console.log(rapper);
// }
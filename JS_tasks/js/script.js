'use strict';
// 4.2.1, 4.4.1 Модуль числа (сразу писал тернарный)
// let value = parseInt(prompt('Please, enter any number'));

// value >= 0 ? console.log(value) : console.log(-value);

// 4.3.1 Камень, ножницы, бумага
const rock = 0;
const scissors = 1;
const paper = 2;

// попросим игрока ввести ответ в виде числа
// let player = parseInt(prompt('Your choice: 0 - rock, 1 - scissors, 2 - paper'));
// Рандомное число 0, 1 или 2 — разберем это позже, пока не заморачивайтесь
// let computer = Math.floor(Math.random() * 3);

// опишем все условия и будем выводить в консоль 'computer win' или 'player win'
if (player == computer) {
	console.log(`Draw! Try again.`);
} else if (
	(player == rock && computer == scissors) ||
	(player == scissors && computer == paper) ||
	(player == paper && computer == rock)
) {
	console.log(`Congratulations, you win!`);
} else {
	console.log(`Looser! Try again.`);
}

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

newSchool.forEach((e) => {
	e.forEach((e) => {
		e.forEach((e) => {
			console.log(e);
		});
	});
});

// Перебор массива фильтром

const numbers = [
	{
		id: 1,
		number: 10,
	},
	{
		id: 2,
		number: -6,
	},
	{
		id: 3,
		number: 22,
	},
];

let newArr = numbers.filter((num) => num.number > 0);
console.log(newArr);
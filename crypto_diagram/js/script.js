let crypto = [
	{
		name: 'Bitcoin',
		price: 1388.37,
	},
	{
		name: 'Ethereum',
		price: 716,
	},
	{
		name: 'Litecoin',
		price: 140,
	},
];

let cryptoPrices = [];
crypto.forEach((element) => {
	cryptoPrices.push(element.price);
});

let maxPrice = Math.max(...cryptoPrices);

crypto.forEach((element) => {
	let div = document.createElement('div');
	div.setAttribute('class', `${element.name.toLowerCase()}`);
	let diagram = document.createElement('div');
	diagram.setAttribute('class', `${element.name.toLowerCase()} diagram`);
	let header = document.createElement('h1');
	let smallHeader = document.createElement('h4');

	header.innerHTML = element.name;
	smallHeader.innerHTML = element.price;
	diagram.setAttribute('style', 'height: 50px; background-color: blue; border-radius: 10px');
	diagram.style['width'] = `${Math.floor(element.price) / maxPrice}` * 100 + `%`;

	div.appendChild(header);
	div.appendChild(smallHeader);
	div.appendChild(diagram);

	const current = document.querySelector('.main');
	current.appendChild(div);
});

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
	let newDiv = document.createElement('div');
	newDiv.setAttribute('class', `${element.name.toLowerCase()}`);
	let newDiagramLine = document.createElement('div');
	newDiagramLine.setAttribute('class', `${element.name.toLowerCase()} diagram`);
	let newHeader = document.createElement('h1');
	let newPriceValue = document.createElement('h4');

	newHeader.innerHTML = element.name;
	newPriceValue.innerHTML = element.price;
	newDiagramLine.setAttribute('style', 'height: 50px; background-color: blue; border-radius: 10px');
	newDiagramLine.style['width'] = `${Math.floor(element.price) / maxPrice}` * 100 + `px`;

	newDiv.appendChild(newHeader);
	newDiv.appendChild(newPriceValue);
	newDiv.appendChild(newDiagramLine);

	const current = document.querySelector('.main');
	current.appendChild(newDiv);
});

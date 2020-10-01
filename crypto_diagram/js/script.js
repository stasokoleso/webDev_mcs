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

crypto.forEach((element) => {
	let newDiv = document.createElement('div');
	newDiv.setAttribute('class', `${element.name.toLowerCase()}`);
	let newBlock = document.createElement('div');
	newBlock.setAttribute('class', `${element.name.toLowerCase()} diagram`);
	let newName = document.createElement('h1');
	let newValue = document.createElement('h4');

	newName.innerHTML = element.name;
	newValue.innerHTML = element.price;
	newBlock.style['width'] = `${Math.floor(element.price)}` + `px`;
	newBlock.style['height'] = `50px`;
	newBlock.style['background-color'] = 'blue';
	newBlock.style['border-radius'] = '10px';

	newDiv.appendChild(newName);
	newDiv.appendChild(newValue);
	newDiv.appendChild(newBlock);

	const current = document.querySelector('.main');
	current.appendChild(newDiv);
});

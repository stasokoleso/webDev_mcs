const body = document.querySelector('body');
const page = document.querySelector('.page');
const name = document.querySelector('.name');
const image = document.querySelector('img');
const shortBio = document.querySelector('.short-bio');

body.style['background-color'] = '#696969';
page.style['color'] = 'ghostwhite';

name.innerHTML = 'DJ Rashad';
image.setAttribute(
	'src',
	'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/DJ_Rashad_2013.jpg/1200px-DJ_Rashad_2013.jpg'
);

shortBio.className += ' animated';

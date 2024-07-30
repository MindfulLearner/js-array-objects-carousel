// swagger javascript

const images = [
	{
		img: './consegna/img/01.webp',
		title: 'Marvel\'s Spiderman Miles Morale',
		text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
	}, 
	{
		img: './consegna/img/02.webp',
		title: 'Ratchet & Clank: Rift Apart',
		text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
	}, 
	{
		img: './consegna/img/03.webp',
		title: 'Fortnite',
		text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
	}, 
	{
		img: './consegna/img/04.webp',
		title: 'Stray',
		text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
	}, 
	{
		img: './consegna/img/05.webp',
		title: "Marvel's Avengers",
		text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
	}
];

// VARIABILI DELL'HTML
// card
let card = document.querySelectorAll('.card');
// imgContainer
let imgContainer = document.querySelectorAll('.imgContainer');


// o m g
let img = document.querySelectorAll('.img');
// title
let title = document.querySelectorAll('.title');
// text
let text = document.querySelectorAll('.text');

for (let i = 0; i < card.length; i++) {
	console.log(images[i].img);
	img[i].src = images[i].img;
	title[i].innerHTML = images[i].title;
	text[i].innerHTML = images[i].text;
}

let contaImg = 0
card[contaImg].classList.remove('hidden');
console.log('conteggio Img: ' + contaImg);


document.querySelector('.destra').addEventListener('click', function() {
	if (contaImg < 4) {
		contaImg++;
		console.log('conteggio Img: ' + contaImg);
		card[contaImg].classList.remove('hidden');
		card[contaImg - 1 ].classList.add('hidden');
		console.log('ciao destra');
	} else {
		card[contaImg].classList.add('hidden');
			console.log('swagger');
		contaImg = 0;
		console.log('conteggio Img: ' + contaImg);
		card[contaImg].classList.remove('hidden');
		console.log('ciao destra');
	}
});

document.querySelector('.sinistra').addEventListener('click', function() {
	if (contaImg > 0) {
		contaImg--;
		console.log('conteggio Img: ' + contaImg);
		card[contaImg].classList.remove('hidden');
		card[contaImg + 1 ].classList.add('hidden');
		console.log('ciao sinistra');
	} else {
		card[contaImg].classList.add('hidden');
		contaImg = 4;
		console.log('conteggio Img: ' + contaImg);
		card[contaImg].classList.remove('hidden');
		console.log('ciao sinistra');
	}
});









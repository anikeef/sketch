const container = document.querySelector('.container');

function createGrid(size) {
	for (i = 0; i < size * size; i++) {
		let box = document.createElement('div');
		let boxSize = 500 / size + 'px';
		box.classList.add('box');
		box.style.width = boxSize;
		box.style.height = boxSize;
		container.appendChild(box);
	}
}

function randomNumber(endNum) {
	return Math.floor(Math.random() * (endNum + 1));
}

function randomColor() {
	return `rgb(${randomNumber(256)}, ${randomNumber(256)}, ${randomNumber(256)})`;
}

function game() {
	let boxes = Array.from(document.querySelectorAll('.box'));
	boxes.forEach(box => {
		box.style.backgroundColor = 'white';
		box.addEventListener('mouseover', function(e) {
			e.target.style.backgroundColor = 'black';
		})
	})
}

//Start

createGrid(16);
game();

const reset = document.querySelector('.reset');
const classic = document.querySelector('.classic');
const rainbow = document.querySelector('.rainbow');
const extreme = document.querySelector('.extreme'); 

reset.addEventListener('click', function() {
	let gridSize = prompt('What size do you prefer?');
	if (!gridSize) {
		return;
	}

	container.innerHTML = '';
	createGrid(gridSize);
	game();
})

classic.addEventListener('click', function() {
	game();
})

rainbow.addEventListener('click', function() {
	let boxes = Array.from(document.querySelectorAll('.box'));
	boxes.forEach(box => {
		box.style.backgroundColor = 'white';
		box.addEventListener('mouseover', function(e) {
			e.target.style.backgroundColor = randomColor();
		})
	})
})











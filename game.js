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

function game(color) {
	let boxes = Array.from(document.querySelectorAll('.box'));
	boxes.forEach(box => {
		box.addEventListener('mouseover', function(e) {
			if (e.shiftKey) {
				e.target.style.backgroundColor = 'white';
				return;
			}
			e.target.style.backgroundColor = color;
		})
	})
}

function restart() {
	let boxes = Array.from(document.querySelectorAll('.box'));
	boxes.forEach(box => {
		box.style.backgroundColor = 'white';
	})
}

//Start

createGrid(32);
game('black');

const newGrid = document.querySelector('.newGrid');
const clean = document.querySelector('.clean');
const rainbow = document.querySelector('.rainbow');
const black = document.querySelector('.black');
const white = document.querySelector('.white');
const red = document.querySelector('.red');
const green = document.querySelector('.green');
const blue = document.querySelector('.blue');

newGrid.addEventListener('click', function() {
	let gridSize = prompt('What size do you prefer?');
	if (!gridSize) {
		return;
	}

	container.innerHTML = '';
	createGrid(gridSize);
	game('black');
})

rainbow.addEventListener('click', function() {
	let boxes = Array.from(document.querySelectorAll('.box'));
	boxes.forEach(box => {
//		box.style.backgroundColor = 'white';
		box.addEventListener('mouseover', function(e) {
			e.target.style.backgroundColor = randomColor();
		})
	})
})

clean.addEventListener('click', restart);

black.addEventListener('click', function() {
	game('black');
})

white.addEventListener('click', function() {
	game('white');
})

red.addEventListener('click', function() {
	game('#FF5858');
})

green.addEventListener('click', function() {
	game('#1AFF75');
})

blue.addEventListener('click', function() {
	game('#00C2FF');
})

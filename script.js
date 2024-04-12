// script.js

const destinationInput = document.getElementById('destination-input');
const addDestinationBtn = document.getElementById('add-destination-btn');
const drawBtn = document.getElementById('draw-btn');
const resetBtn = document.getElementById('reset-btn');
const resultText = document.getElementById('result');

let destinations = [];

// Event listener for adding destination
addDestinationBtn.addEventListener('click', function() {
    const destination = destinationInput.value.trim();
    if (destination !== '') {
        destinations.push(destination);
        destinationInput.value = '';
    }
});

// Event listener for drawing a destination
drawBtn.addEventListener('click', function() {
    if (destinations.length > 0) {
        const randomIndex = Math.floor(Math.random() * destinations.length);
        const winner = destinations[randomIndex];
        resultText.textContent = `Congratulations! The winner is: ${winner}`;
    } else {
        resultText.textContent = "No destinations added yet!";
    }
});

// Event listener for resetting everything
resetBtn.addEventListener('click', function() {
    destinations = [];
    resultText.textContent = '';
});

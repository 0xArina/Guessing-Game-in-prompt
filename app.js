// number entered in prompt
let maximum = parseInt(prompt("Enter the maximum number!"));
// if entered not a number (falsy maximum)
while (!maximum) {
    maximum = parseInt(prompt("Enter a valid number!"));
}

// JS random number from 1 to maximum that we are trying to guess
// (((random num from 0 to 1) * maximum ) chopping off decimal) + 1
const targetNum = Math.floor(Math.random() * maximum) + 1;

let guess = parseInt(prompt("Enter your first guess!"));
let attempts = 1;

while (parseInt(guess) !== targetNum) {

    if (guess === 'q') break;

    attempts++;

    if (guess > targetNum) {
        guess = prompt("Too high! Enter a new guess, or type q to quit");
    } else {
        guess = prompt("Too low! Enter a new guess, or type q to quit");
    }
}

if (guess === 'q') {
    prompt("OK. BYE");
} else {
    prompt(`YOU GOT IT! It took you ${attempts} guess(es)`);
}

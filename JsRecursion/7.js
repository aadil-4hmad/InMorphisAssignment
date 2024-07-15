// Write a JavaScript program to check whether a number is even or not.

const number = parseInt(prompt('Enter a number:'));

if (number % 2 === 0) {
    console.log(`${number} is even.`);
} else {
    console.log(`${number} is odd.`);
}
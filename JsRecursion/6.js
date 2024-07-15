// Write a JavaScript program to get the first n Fibonacci numbers.
//Note : The Fibonacci Sequence is the series of numbers: 0, 1, 1, 2, 3, 5, 8, 13, 
//21, 34, . . . Each subsequent number is the sum of the previous two.

function fibonacci(n) {
    let fib = [0, 1];
    for (let i = 2; i < n; i++) {
        fib[i] = fib[i - 1] + fib[i - 2];
    }
    return fib.slice(0, n);
}

const n = parseInt(prompt('Enter the number of Fibonacci numbers to generate:'));

if (isNaN(n) || n <= 0) {
    console.log('Please enter a valid positive integer.');
} else {
    console.log(`First ${n} Fibonacci numbers: ${fibonacci(n).join(', ')}`);
}
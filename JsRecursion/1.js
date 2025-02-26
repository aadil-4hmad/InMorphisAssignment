// Write a JavaScript program to calculate the factorial of a number.
// In mathematics, the factorial of a non-negative integer n, denoted by n!, is the
// product of all positive integers less than or equal to n. For example, 5! = 5 x 4 x 3
// x 2 x 1 = 120

function factorial(n) {
    if (n === 0 || n === 1) {
      return 1;
    } else {
      return n * factorial(n - 1);
    }
  }
  
  const num = 5;
  const result = factorial(num);
  console.log(`${num}! = ${result}`); // Output: 5! = 120
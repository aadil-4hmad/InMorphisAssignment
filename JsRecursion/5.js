// Write a JavaScript program to compute the exponent of a number.
// Note: The exponent of a number says how many times the base number is used 
//as a factor.
//82 = 8 x 8 = 64. Here 8 is the base and 2 is the exponent.

function exponent(base, exponent) {
    if (exponent === 0) {
        return 1;
    } else {
        return base * exponent(base, exponent - 1);
    }
}

// Test the function
var base = 8;
var exponentValue = 2;
var result = exponent(base, exponentValue);
console.log(`${base} to the power of ${exponentValue} is: ${result}`); // Output: 8 to the power of 2 is: 64
const num1 = 0;
const num2 = -1;
const num3 = 4;

let sortedNumbers;

if (num1 >= num2 && num1 >= num3) {
    sortedNumbers = [num1, num2, num3];
} else if (num2 >= num1 && num2 >= num3) {
    sortedNumbers = [num2, num1, num3];
} else {
    sortedNumbers = [num3, num1, num2];
}
console.log(`Sorted numbers: ${sortedNumbers}`);
// alert(`Sorted numbers: ${sortedNumbers}`);
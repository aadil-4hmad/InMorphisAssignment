// Write a JavaScript program to get the integers in range (x, y).
// Example : range(2, 9)

// Expected Output : [3, 4, 5, 6, 7, 8]
function range(x, y) {
    const result = [];
    for (let i = x + 1; i < y; i++) {
      result.push(i);
    }
    return result;
  }
range(2, 9);
console.log(arr);
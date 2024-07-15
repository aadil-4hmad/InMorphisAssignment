
function flattenArray(arr) {
    return arr.reduce((flat, toFlatten) => {
      return flat.concat(Array.isArray(toFlatten) ? flattenArray(toFlatten) : toFlatten);
    }, []);
  }
  
  // Function to find the difference between two arrays
  function difference(arr1, arr2) {
    // Flatten the arrays
    const flatArr1 = flattenArray(arr1);
    const flatArr2 = flattenArray(arr2);
  
    // Find elements in flatArr1 that are not in flatArr2
    const diff1 = flatArr1.filter(item => !flatArr2.includes(item));
    
    // Find elements in flatArr2 that are not in flatArr1
    const diff2 = flatArr2.filter(item => !flatArr1.includes(item));
    
    // Combine both differences and maintain the order
    return diff1.concat(diff2);
  }
  
  // Test Data
  console.log(difference([1, 2, 3], [100, 2, 1, 10])); // Output: [3, 10, 100]
  console.log(difference([1, 2, 3, 4, 5], [1, [2], [3, [[4]]], [5, 6]])); // Output: [6]
  console.log(difference([1, 2, 3], [100, 2, 1, 10])); // Output: [3, 10, 100]
  
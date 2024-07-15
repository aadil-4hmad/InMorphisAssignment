
function isRegExp(value) {
    return value instanceof RegExp;
}

// Test Data
console.log(isRegExp(/abc/));               // true (it's a RegExp)
console.log(isRegExp(new RegExp('abc')));   // true (it's a RegExp)
console.log(isRegExp('abc'));                 // false (string is not a RegExp)
console.log(isRegExp({}));                   // false (object is not a RegExp)
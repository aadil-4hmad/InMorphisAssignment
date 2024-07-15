function calculate() {
    var num1 = parseFloat(prompt("Enter the first number:"));
    var num2 = parseFloat(prompt("Enter the second number:"));

    var multiplication = num1 * num2;
    var division = num1 / num2;

    console.log("Multiplication:", multiplication);
    console.log("Division:", division);
}

calculate();
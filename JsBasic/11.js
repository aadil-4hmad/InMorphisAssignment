function convertTemperature() {
    var celsius = 60;
    var fahrenheit = (celsius * 9 / 5) + 32;
    console.log(celsius + "°C is " + fahrenheit.toFixed(2) + "°F");

    var fahrenheit2 = 45;
    var celsius2 = (fahrenheit2 - 32) * 5 / 9;
    console.log(fahrenheit2 + "°F is " + celsius2.toFixed(2) + "°C");
}

convertTemperature();
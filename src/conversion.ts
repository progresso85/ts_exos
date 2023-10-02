// Function to convert Celsius to Fahrenheit
function celsiusToFahrenheit(celsius: number): number {
    return (celsius * 9/5) + 32;
}

// Test the function
const celsiusTemperature = 25;
const fahrenheitTemperature = celsiusToFahrenheit(celsiusTemperature);
console.log(`${celsiusTemperature}°C is equal to ${fahrenheitTemperature}°F.`); 
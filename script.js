function convertTemperature() {
    // Get user input
    var temperature = parseFloat(document.getElementById('temperatureInput').value);
    var unit = document.getElementById('unitSelect').value;
    
    // Validate input
    if (isNaN(temperature)) {
        alert('Please enter a valid number for temperature.');
        return;
    }

    // Convert temperature
    var result;
    switch(unit) {
        case 'celsius':
            result = {
                fahrenheit: (temperature * 9/5) + 32,
                kelvin: temperature + 273.15
            };
            break;
        case 'fahrenheit':
            result = {
                celsius: (temperature - 32) * 5/9,
                kelvin: (temperature - 32) * 5/9 + 273.15
            };
            break;
        case 'kelvin':
            result = {
                celsius: temperature - 273.15,
                fahrenheit: (temperature - 273.15) * 9/5 + 32
            };
            break;
    }

    // Display result
    var resultArea = document.getElementById('resultArea');
    resultArea.innerHTML = '';
    for (var key in result) {
        resultArea.innerHTML += result[key].toFixed(2) + ' ' + key.toUpperCase() + '<br>';
    }
}

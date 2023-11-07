document.addEventListener("DOMContentLoaded", function () {
    const temperatureInput = document.getElementById("exampleInputNumber");
    const unitSelect = document.getElementById("exampleInputUnit");
    const convertbtn = document.querySelector(".btn-dark");
    const result = document.querySelector("#convertbtn span");

    const formcheck = document.getElementById("formcheck");
    const currenttemp = document.getElementById("currenttemp");

    var CtoF = document.getElementById("CtoF");

    convertbtn.addEventListener("click", function() {
        const temperature = parseFloat(temperatureInput.value);
        const selectedUnit = unitSelect.value;
        let convertedTemperature;

        if (selectedUnit === "1") {
            convertedTemperature = (temperature * 9 / 5) + 32;
            result.textContent = `${convertedTemperature.toFixed(2)}°F `;
        } else {
            convertedTemperature = temperature;
            result.textContent = `${convertedTemperature.toFixed(2)}°C `;
        }
    });


    formcheck.addEventListener("click", function () {
        if (currenttemp.textContent == "Enter Temperature in Celsius") {
            convertbtn.addEventListener("click", function () {
                const temperature = parseFloat(temperatureInput.value);
                const selectedUnit = unitSelect.value;
                let convertedTemperature;

                if (selectedUnit === "1") {
                    convertedTemperature = temperature;
                    result.textContent = `${convertedTemperature.toFixed(2)}°F `;
                } else {                   
                    convertedTemperature = (temperature-32)*5/9;
                    result.textContent = `${convertedTemperature.toFixed(2)}°C `;
                }
            });
            currenttemp.textContent = "Enter Temperature in Fahrenheit";
            CtoF.textContent = "Fahrenheit To Celsius"
        }
        else if (currenttemp.textContent == "Enter Temperature in Fahrenheit") {

            convertbtn.addEventListener("click", function () {
                const temperature = parseFloat(temperatureInput.value);
                const selectedUnit = unitSelect.value;
                let convertedTemperature;
        
                if (selectedUnit === "1") {
                    convertedTemperature = (temperature * 9 / 5) + 32;
                    result.textContent = `${convertedTemperature.toFixed(2)}°F `;
                } else {
                    convertedTemperature = temperature;
                    result.textContent = `${convertedTemperature.toFixed(2)}°C `;
                }
            });

            currenttemp.textContent = "Enter Temperature in Celsius";
            CtoF.textContent = "Celsius To Fahrenheit";
        }
    })
});

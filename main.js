
document.getElementById("convert_button").addEventListener("click", function () {
    let value = document.getElementById("input_currency").value;
    if (value == "") {
        alert("You need to type a value!");
        return;
    }
    let input = document.getElementById("select_currency");
    let output = document.getElementById("select_out_currency");
    if (input.value == output.value) {
        alert("You can't convert the same currency!");
        return;
    }
    const exchangeRates = {
        USD: { USD: 1, EUR: 0.93, COP: 4000 },
        EUR: { USD: 1.07, EUR: 1, COP: 4300 },
        COP: { USD: 0.00025, EUR: 0.00023, COP: 1 },
    };
    let result = value * exchangeRates[input.value][output.value];
    document.getElementById("output_currency").innerHTML = result.toFixed(2) + " " + output.value;
});

document.getElementById("input_currency").addEventListener("keydown", function () {
    console.log(event.keyCode);
    if (event.keyCode != 8 
        && event.keyCode != 190 
        && event.keyCode != 37 
        && event.keyCode != 39 
        && event.keyCode != 9 
        && (event.keyCode < 48 || event.keyCode > 57)) {
        alert("Just type numbers!");
        event.preventDefault();
    }
});
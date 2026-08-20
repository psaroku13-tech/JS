const form = document.querySelector('form');

form.addEventListener('submit', function (e) {
    e.preventDefault();
    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const result = document.querySelector('#results');

    if (height <= 0 || isNaN(height)) {
        result.innerHTML = `Please give a correct height: ${height}`;
        return;
    }

    if (weight <= 0 || isNaN(weight)) {
        result.innerHTML = `Please give a correct weight: ${weight}`;
        return;
    }

    // BMI calculation
    const bmi = (height * weight).toFixed(2);

    result.innerHTML = `Your BMI is ${bmi}`;
});
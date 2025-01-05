const display = document.getElementById("display");
// inputVal.value = 0;
const btns = document.querySelectorAll('button');



let displayArray = [];
let displayString;

function calculate(btn) {
    const value = btn.innerText;

    if (value === 'AC') {
        displayArray = [];
        display.innerText = '0'
        return
    } else if (displayString && value === '=') {

        display.innerText = eval(displayString);
    } else if (value === 'DEL') {

        displayArray.pop();
        display.innerText = displayArray.join('');
    } else if (value === '0' && displayString === '0') {

        return;
    } else {

        let lastChar = displayString ? displayString.slice(-1) : '';
        if (lastChar === '' && ["+", "-", "*", "/", "%", "="].includes(value)) {

            return;
        }
        if (["+", "-", "*", "/", "%"].includes(value) && ["+", "-", "*", "/", "%"].includes(lastChar)) {

            return
        }
        if (value === '.') {
            let lastNumber = displayString.split(/[\+\/\-\*]/).pop();
            if (lastNumber.includes('.')) {

                return;
            }
        }

        displayArray.push(value);
        displayString = displayArray.join('');
        display.innerText = displayString;
    }
}

btns.forEach((btn) => {
    btn.addEventListener('click', () => {
        calculate(btn)
    }

    )
})
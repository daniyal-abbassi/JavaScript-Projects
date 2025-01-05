const display = document.getElementById('display');
const btns = document.querySelectorAll('button');


let calculationArray = [];
let calculationValue;


function calculate(btn) {
    let value = btn.innerText;

    if (value === 'AC') {
        calculationArray = [];
        display.innerText = calculationArray.join('');
        return
    } else if (value === '=' && calculationValue) {
        display.innerText = eval(calculationValue);
        return
    } else if (value === '0' && calculationValue === '0') {
        return
    } else {
        if (["+", "-", "*", "/", "."].includes(value)) {
            const lastChar = calculationValue ? calculationValue.slice(-1) : '';
            if (["+", "-", "*", "/", "."].includes(value) && ["+", "-", "*", "/", "."].includes(lastChar)) {
                return
            }
        }
        let lastNumbers =  calculationValue ? calculationValue.split(/[\/\+\*\-]/).pop() : '';
        if (value==='.'&& lastNumbers.includes('.')) {
            return
        }
        if (!calculationValue && value==='.') {    
            return
        }

        calculationArray.push(value);
        calculationValue = calculationArray.join('');
        display.innerText = calculationValue;
    }


}


btns.forEach((btn) => {
    btn.addEventListener('click', () => {
        calculate(btn)
    })
})
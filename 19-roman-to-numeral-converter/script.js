const inputNumber = document.getElementById('number');
const output = document.getElementById('output');
const convertBtn = document.getElementById('convert-btn');

const convertToRoman = (number) => {
    const romanNumerals = [
        { roman: 'M', value: 1000 },
        { roman: 'CM', value: 900 },
        { roman: 'D', value: 500 },
        { roman: 'CD', value: 400 },
        { roman: 'C', value: 100 },
        { roman: 'XC', value: 90 },
        { roman: 'L', value: 50 },
        { roman: 'XL', value: 40 },
        { roman: 'X', value: 10 },
        { roman: 'IX', value: 9 },
        { roman: 'V', value: 5 },
        { roman: 'IV', value: 4 },
        { roman: 'I', value: 1 }
      ];
    let result = '';
    for (const {roman,value} of romanNumerals) {
        while (number >= value) {
            result += roman;
            number -= value;
        }
    }
    return result;
}

const showRoman = () => {
    let e = inputNumber.value;
    if(e==='') {
        output.innerText = "Please enter a valid number";
        return;
    }
    if(e>3999) {
        output.innerText = "Please enter a number less than or equal to 3999";
    } else if (e<=0) {
        output.innerText = "Please enter a number greater than or equal to 1";
    } else {
        output.innerText = convertToRoman(e);
    }
}

convertBtn.addEventListener('click',(e)=>{
    e.preventDefault();
    showRoman();
})

inputNumber.addEventListener('keydown',(e)=>{
    if(e.key==='Enter') {
        e.preventDefault();
        showRoman();
    }
})
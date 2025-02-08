const inputNumber = document.getElementById("number-input");
const convertBtn = document.getElementById("convert-btn");
const result = document.getElementById("result");


const decimalToBinary = (input) => {
    const remainders = [];

    while(input>0) {
        const quotient = Math.floor(input/2);
        const remainder = input % 2;
        remainders.push(remainder);
        input = quotient;
    }
    
    result.innerText = remainders.reverse().join("");; 
   
}


const checkUserInput = () => {
    if (!inputNumber.value || isNaN(parseInt(inputNumber.value)) || inputNumber.value < 0) {
        window.alert("please input a valid number!");
        return;
    }
    decimalToBinary(parseInt(inputNumber.value));
    inputNumber.value = '';
}
convertBtn.addEventListener("click", checkUserInput)
inputNumber.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        checkUserInput();
    }
})
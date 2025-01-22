const textInput = document.getElementById('text-input');
const checkBtn = document.getElementById('check-btn');
const result = document.getElementById('result');




const regexForOneLetter = /^[a-z]$/i;
const regexForNonAlphabetical = /[^a-z0-9]/g;

const isPalindrom = (str) => str.split('').reverse().join('');


textInput.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        isInputPalindrom();
    }
})

checkBtn.addEventListener('click', (event) => {
    isInputPalindrom()
})

function isInputPalindrom() {
    if (textInput.value.trim() === '') alert('Please input a value');
    if (regexForOneLetter.test(textInput.value)) {
        result.innerText = `${textInput.value} is a palindrome.`;
        result.classList.remove('false')
        result.classList.add('true')
    }
    const deleteNonNumerical = textInput.value.toLowerCase().replace(regexForNonAlphabetical, '')
    if (deleteNonNumerical === isPalindrom(deleteNonNumerical)) {
        result.innerText = `${textInput.value} is a palindrome.`;
        result.classList.remove('false')
        result.classList.add('true')
    }
    else {
        result.innerText = `${textInput.value} is not a palindrome.`;
        result.classList.remove('true')
        result.classList.add('false')
    }
}
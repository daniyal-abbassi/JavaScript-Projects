const bodyElement = document.body;
const btnElement = document.getElementById('change-btn')
const spanElement = document.getElementById('color')

const values = [1, 2, 3, 4, 5, 6, 7, 8, 9, 'a', 'b', 'c', 'd', 'e', 'f'];

function RandomNumber() {
    return Math.floor(Math.random() * values.length)
}

btnElement.addEventListener('click', function () {
    let hash = '#'
    for (let i = 0; i < 6; i++) {
        hash += values[RandomNumber()]
    }
    bodyElement.style.backgroundColor = hash
    btnElement.style.backgroundColor = hash
    spanElement.style.color = hash
    spanElement.innerText = hash.toUpperCase()
})


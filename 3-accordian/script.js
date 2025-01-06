import animeData from "./data.js";


const container = document.getElementsByClassName('container')[0];
const toggleBtn = document.getElementById('toggle-button');
let isMulti = true;

animeData.forEach((item) => {
    //get the data
    const { id, answer, question } = item;
    //create a card for each data
    const card = document.createElement('div');
    //give it a class
    card.classList.add('card');
    //add that created card to container
    container.appendChild(card)
    //create a header for head of the data
    const header = document.createElement('h2');
    header.classList.add('header')
    //append the header to created card
    card.appendChild(header)
    //this time actually give the text to the header
    header.textContent = question;
    //create paragraph for answeres
    const text = document.createElement('p');
    //give a class to text
    text.classList.add('text');
    //append the paragraph to the card
    card.appendChild(text);
    text.textContent = answer
    text.classList.add('hide')

    const h2Tags = document.querySelectorAll('h2');
    //add event listener for showing the answer on click
    
    header.addEventListener('click', () => {
        

        if (isMulti) {
            text.classList.toggle('hide')
        } else {
            const pTags = document.querySelectorAll('.text')
            text.classList.toggle('hide')
            pTags.forEach((p) => {
                if (text !== p) {
                    p.classList.add('hide')
                }
            })
        }

    })

})



toggleBtn.addEventListener('click', () => {
    if (isMulti) {
        isMulti = false;
        toggleBtn.textContent = 'Enable MultiSelection';
    } else {
        isMulti = true;
        toggleBtn.textContent = 'Disable MultiSelection';
    }
})
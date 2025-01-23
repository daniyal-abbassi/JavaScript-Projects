const currentDateParagraph = document.getElementById('current-date');
const dateOptionsSelectElement = document.getElementById('data-options');

const date = new Date();
const day = date.getDate();
const month = date.getMonth() + 1;
const year = date.getFullYear();
const hours = date.getHours();
const minutes = date.getMinutes();

const formattedDate = `${day}-${month}-${year}`;

currentDateParagraph.textContent = formattedDate;


dateOptionsSelectElement.addEventListener("change",()=>{

    currentDateParagraph.classList.add('fade-out');

    setTimeout(() => {
        switch(dateOptionsSelectElement.value) {
            case"yyyy-mm-dd" : 
             currentDateParagraph.textContent = formattedDate.split("-").reverse().join("-");
             break;
     
             case "mm-dd-yyyy-h-mm":
           currentDateParagraph.textContent = `${month}-${day}-${year} ${hours} Hours ${minutes} Minutes`;
           break;
     
           default:
             currentDateParagraph.textContent = formattedDate;
         }

         currentDateParagraph.classList.remove('fade-out');
         currentDateParagraph.classList.add('fade-in')
    },600)
    
})
currentDateParagraph.addEventListener("transitionend",() => {
    currentDateParagraph.classList.remove('fade-in')
})
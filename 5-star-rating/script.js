const stars = document.querySelectorAll('.fa-star');
const text = document.getElementById('text');

let selectedRating = 0;
stars.forEach((star, index) => {
    star.addEventListener('mouseenter', () => {
        stars.forEach((s,i)=>{
            s.classList.toggle('active', i<=index)
            console.log('now enter')
        })
    })
    star.addEventListener('mouseleave',()=>{
        stars.forEach((s,i)=>{
            s.classList.toggle('active', i<selectedRating)
        })
    })

    star.addEventListener('click',()=>{
        selectedRating = index + 1;
        stars.forEach((s,i)=>{
            s.classList.toggle('active', i<selectedRating)
        })
        console.log(text)
        text.innerText=selectedRating;
        console.log('seleced rating is: ',selectedRating)
    })
})

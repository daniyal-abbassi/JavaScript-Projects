//grab the container, slide container and next and prev btns
const sliderContainer = document.querySelector('.contaienr');
const slide = document.querySelector('.slides');
const nextBtn = document.getElementById('next-btn');
const prevBtn = document.getElementById('prev-btn');

//set the initial interval and slideId
const interval = 9000;
let slideId;

//grab each slide container which has image in it, in a node list
let slides = document.querySelectorAll('.slide');
let index = 1;

//make a copy of first and last div(with its image tag in it)
const firstClone = slides[0].cloneNode(true);
const lastClone = slides[slides.length - 1].cloneNode(true);

//give each copy an id
firstClone.id = 'first-clone';
lastClone.id = 'last-clone';

//put the colnes in first and last of the slides contaienr
slide.append(firstClone);
slide.prepend(lastClone);

//get the inner width of the slides[index]- currently is the visible item
const slideWidth = slides[index].clientWidth;

//move the first image(which is a clone from the last image that we prepend to first of the container) to the left, how much? with the quentity of the image width that we want to be displayed
slide.style.transform = `translateX(${-slideWidth * index}px)`;

//declare an arrow function which set and Interval each interval seconds.
const startSlide = () => {
    slideId = setInterval(() => {
        moveToNext()

    }, interval)
}


//what that arrow functin would do? and also the next btn  
//increase the index by one
//just move the current slide[index], to the left, how much? quentity of the width * index
//do that in transition
const moveToNext = () => {
    let slides = document.querySelectorAll('.slide');
    if (index >= slides.length - 1) return
    index++;
    slide.style.transform = `translateX(${-slideWidth * index}px)`;
    slide.style.transition = '.7s'
    
}


//when the transition ends(in first clone or last clone), show the first or last instantly-MAKES THE ILLUSION OF AN INFINITE LOOP
slide.addEventListener('transitionend', () => {
    let slides = document.querySelectorAll('.slide');
    if (slides[index].id === firstClone.id) {
        slide.style.transition = '0s';
        index = 1;
        slide.style.transform = `translateX(${-slideWidth * index}px)`;

    }
    if (slides[index].id === lastClone.id) {
        slide.style.transition = '0s';
        index = slides.length - 2;
        slide.style.transform = `translateX(${-slideWidth * index}px)`;

    }
})
//when moving backwards, decrease the index and set the width of the container less and more less each backward
const moveToPrev = () => {
    let slides = document.querySelectorAll('.slide');
    if (index <= 0) return
    index--;
    slide.style.transform = `translateX(${-slideWidth * index}px)`;
    slide.style.transition = '.7s'
}


//add EventListeners for next and prev btns and mouse enter and leave events
nextBtn.addEventListener('click', moveToNext)
prevBtn.addEventListener('click', moveToPrev)

sliderContainer.addEventListener('mouseenter', () => {
    clearInterval(slideId)
})

sliderContainer.addEventListener('mouseleave', startSlide)
startSlide()
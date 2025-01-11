const photos = [
    "https://images4.alphacoders.com/735/73556.jpg",
    "https://images5.alphacoders.com/106/1061607.png",
    "https://images3.alphacoders.com/671/671320.jpg",
    "https://images7.alphacoders.com/572/572786.png",
    "https://images4.alphacoders.com/244/244898.jpg",
    "https://images7.alphacoders.com/656/656799.png",
    "https://images4.alphacoders.com/657/657895.png",
    "https://images2.alphacoders.com/137/1371077.png",
    "https://images.alphacoders.com/659/659957.jpg",
    "https://images5.alphacoders.com/120/1209035.jpg"
]
let copyArry = photos.slice();
let imagSlide = 0;
function makeImgTag(src) {
    const imgElement = document.createElement('img');
    imgElement.src = src;
    imgElement.classList.add('img');
    return imgElement;
}
let imageElement = makeImgTag(photos[imagSlide])
document.getElementById('image').appendChild(imageElement);

document.getElementById('right-arrow').addEventListener('click', () => {
    copyArry.push(copyArry.shift());
    imagSlide++;
    
    if (imagSlide < 10) {

        // console.log('right if: ', imagSlide)
        document.getElementById('image').innerHTML = '';
        let imageElement = makeImgTag(photos[imagSlide])
        document.getElementById('image').appendChild(imageElement);
        setSlider(imagSlide)

        // imagSlide++;
        // console.log('right if: ', imagSlide)
    } else {
        imagSlide = 0
        document.getElementById('image').innerHTML = '';
        let imageElement = makeImgTag(photos[imagSlide])
        document.getElementById('image').appendChild(imageElement);
        setSlider(imagSlide)
        // imagSlide++;
        // console.log('right else: ', imagSlide)
    }
    // imagSlide++;
})
document.getElementById('left-arrow').addEventListener('click', () => {
    
    imagSlide--;
    
    if (imagSlide >= 0) {

        document.getElementById('image').innerHTML = '';
        let imageElement = makeImgTag(photos[imagSlide])
        document.getElementById('image').appendChild(imageElement);
        setSlider(imagSlide)
        // imagSlide--;    
        // console.log('left if : ', imagSlide)
    } else {
        imagSlide = 9;
        document.getElementById('image').innerHTML = '';
        let imageElement = makeImgTag(photos[imagSlide])
        document.getElementById('image').appendChild(imageElement);
        setSlider(imagSlide)
        // console.log('left else: ', imagSlide)
    }
    // imagSlide--;

})


const slider = document.getElementById('slider')
for (let i = 0; i < photos.length ; i++) {
    const sliderItem = document.createElement('div')
    sliderItem.classList.add('slider-item')
    slider.appendChild(sliderItem)
}
const sliderItems = document.querySelectorAll('.slider-item')
const setSlider = (currentImg) => {
    sliderItems.forEach((item, index) => {
        item.classList.toggle('active', index === currentImg)
        if(index===imagSlide) console.log('index: ',index,'slide',imagSlide)
    })
}
setSlider(imagSlide)






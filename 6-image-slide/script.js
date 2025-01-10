const contaienr = document.querySelector('.container')
const imgTag = document.querySelector('.image');
const rightArrow = document.getElementById('right')
const picName = document.getElementById('name')
const desc = document.getElementById('description')
let imageLinks = [];
async function getUrl() {
    const response = await fetch('https://api.waifu.im/search');
    const data = await response.json();
    const url =  data.images[0].url; 
    console.log(data.images[0].tags[0].name)
    console.log(data.images[0].tags[0].description)
    picName.innerText = `name: ${data.images[0].tags[0].name}`
    desc.innerText = `description: ${data.images[0].tags[0].description}`
    loadImg(url)
    inserLinkToArray(url)
}
function inserLinkToArray (url) {
    imageLinks.push(url)
}
rightArrow.onclick = () => {
    getUrl()
}
// function setName(picName) {
//     name.innerText = picName;
// }
function loadImg(src) {
        imgTag.src = src;
    // console.log(imgTag)     
}

getUrl()


const container = document.querySelector('.container');
const loadBtn = document.querySelector('.load-more');
const loadingText = document.querySelector('.loading');
let skipProducts = 0;
let btnClicked = 1;
async function loadAnime() {
    try {
        loadingText.style.display = 'block';
        const res = await fetch(`https://dummyjson.com/products?limit=20&skip=${skipProducts}`);
        const data = await res.json();
        let title = data.products[0].title;
        let image = data.products[0].thumbnail;
        console.log(image)
        createitems(data.products);
        loadingText.style.display = 'none';
    } catch (error) {
        console.log(error);
        loadingText.textContent = 'Please Re-load the page, there was an error while loading the page...'
    }
}
loadAnime()

loadBtn.addEventListener('click', () => {
    console.log(btnClicked)
    if (btnClicked === 5) {
        loadBtn.textContent = '100 Products reached';
        loadBtn.disabled = true;
        loadBtn.classList.toggle('disactive')
    }
    skipProducts += 20;
    console.log(skipProducts)
    loadAnime();
    btnClicked++;
})
const createitems = (data) => {
    data.forEach((product) => {
        const { title, thumbnail, id } = product;
        const image = thumbnail
        container.innerHTML += `<div class='product' id='${title}'>
                                    <img src='${image}' class='product-img' alt='image-${id}' loading='lazy' data-src='${image}'/>
                                    <p class='product-name'>${title}</p>
                                </div>`
        // console.log(title,image)
    });
}

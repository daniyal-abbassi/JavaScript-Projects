const changeThemeBtn = document.querySelector('.change-theme-btn');
const htmlElement = document.documentElement;




changeThemeBtn.addEventListener('click',() => {
    if (htmlElement.dataset.theme === 'dark') {
        htmlElement.dataset.theme = '';
    } else {
        htmlElement.dataset.theme = 'dark';
    }
    console.log(htmlElement.dataset, htmlElement)
})

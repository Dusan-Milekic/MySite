
function toggleDarkMode(e) {
    let htmlElement = document.querySelector('html');
    let imageElement = document.querySelector('img');
    if (parseInt(e.target.value) == 1){
        htmlElement.classList.remove('dark');
        imageElement.src = './images/sun.png';
    }
    if(parseInt(e.target.value) == 0){
        htmlElement.classList.add('dark');
        imageElement.src = './images/moon.png';
    }
}
const rangeInput = document.querySelector('input[type="range"]');
rangeInput.addEventListener('input', toggleDarkMode);
toggleDarkMode({ target: rangeInput });
const divLoader = document.getElementById('loader');
const btnLoader =  document.getElementById('btn');
btnLoader.addEventListener('click', () => {
    divLoader.classList.toggle('loader-animation');
    if(btnLoader.innerText === 'Searching...') {
        btnLoader.innerText = "Find your dream house!"
    } else btnLoader.innerText = "Searching...";
})
const nav = document.querySelector('.nav');
const burgerMenu = document.getElementById('burger-menu');

burgerMenu.addEventListener('click', function() {
    nav.classList.toggle('is-active');
    burgerMenu.classList.toggle('is-active');
})
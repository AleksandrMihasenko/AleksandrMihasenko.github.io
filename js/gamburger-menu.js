const gamburger = document.querySelector('.gamburger');
const menu = document.querySelector('.navigation');



gamburger.addEventListener('click', () => {
    gamburger.classList.toggle('gamburger_active');
    menu.classList.toggle('navigation_active');
});
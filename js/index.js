const menuBtn = document.querySelector('.header_hamburger_button');
const headerMenu = document.querySelector('.header_menu');

menuBtn.addEventListener('click', function () {
    headerMenu.classList.toggle('menuOn');
    console.log(headerMenu.className);
})
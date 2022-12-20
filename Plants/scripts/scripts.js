// Humburger menu
const hamburger = document.querySelector('.hamburger');
const hamburgerBtn = document.querySelector('.hamburger__line');
const navigationMenu = document.querySelector('.nav');
const navigationMenuLinks = document.querySelectorAll('.nav-link');
const hamburgerPopupOverlay = document.querySelector('.header__navigation');


function openHamburgerMenu() {
  navigationMenu.classList.toggle('nav-active');
  document.body.classList.toggle('scroll-lock');
  hamburgerBtn.classList.toggle('hamburger__line_opened');
  hamburger.classList.toggle('hamburger-btn-position');
  hamburgerPopupOverlay.classList.add('popup');
//    navigationMenuLinks[0].removeAttribute('active');
}
hamburgerBtn.addEventListener('click', openHamburgerMenu);


// Функция закрытия Humburger menu по нажатию на ESC или по нажатию вне Humburger menu
function closeHamburgerMenu(event) {
  if (event.code === 'Escape' || event.target == hamburgerPopupOverlay) {
    document.body.classList.remove('scroll-lock');
    navigationMenu.classList.remove('nav-active');
    hamburgerBtn.classList.remove('hamburger__line_opened');
    hamburger.classList.remove('hamburger-btn-position');
  } 
}
document.addEventListener('keyup', closeHamburgerMenu);


// Закрытие Humburger menu по нажатию вне Humburger menu

window.addEventListener('click', closeHamburgerMenu);

//Закрытие Humburger menu при нажатии на ссылку (через делегирование событий)

function clickLinkCloseHamburger(event) {
  if (event.target.closest('.nav-link')) {
    // openHamburgerMenu();
    document.body.classList.remove('scroll-lock');
    navigationMenu.classList.remove('nav-active');
    hamburgerBtn.classList.remove('hamburger__line_opened');
    hamburger.classList.remove('hamburger-btn-position');
  }
}
navigationMenu.addEventListener('click', clickLinkCloseHamburger);
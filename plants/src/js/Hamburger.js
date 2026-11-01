/* ---------------------- Humburger menu ------------------------- */
const hamburgerData = {
  hamburger: document.querySelector('.hamburger'),
  hamburgerBtn: document.querySelector('.hamburger__line'),
  navigationMenu: document.querySelector('.nav'),
  hamburgerPopupOverlay: document.querySelector('.header__navigation'),
  openHamburgerMenu: () => {
    navigationMenu.classList.toggle('nav-active');
    document.body.classList.toggle('scroll-lock');
    hamburgerBtn.classList.toggle('hamburger__line_opened');
    hamburger.classList.toggle('hamburger-btn-position');
    hamburgerPopupOverlay.classList.add('popup');
  },  
  // Функция закрытия Humburger menu по нажатию на ESC или по нажатию вне Humburger menu
  closeHamburgerMenu: (event) => {
    if (event.code === 'Escape' || event.target == hamburgerPopupOverlay) {
      document.body.classList.remove('scroll-lock');
      navigationMenu.classList.remove('nav-active');
      hamburgerBtn.classList.remove('hamburger__line_opened');
      hamburger.classList.remove('hamburger-btn-position');
    } 
  },
  //Закрытие Humburger menu при нажатии на ссылку (через делегирование событий)
  clickLinkCloseHamburger: (event) => {
    if (event.target.closest('.nav-link')) {
      document.body.classList.remove('scroll-lock');
      navigationMenu.classList.remove('nav-active');
      hamburgerBtn.classList.remove('hamburger__line_opened');
      hamburger.classList.remove('hamburger-btn-position');
    }
  }
}

export const hamburger = hamburgerData.hamburger;
export const hamburgerBtn = hamburgerData.hamburgerBtn;
export const navigationMenu = hamburgerData.navigationMenu;
export const hamburgerPopupOverlay = hamburgerData.hamburgerPopupOverlay;
export const openHamburgerMenu = hamburgerData.openHamburgerMenu;
export const closeHamburgerMenu = hamburgerData.closeHamburgerMenu;
export const clickLinkCloseHamburger = hamburgerData.clickLinkCloseHamburger;
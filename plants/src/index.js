import './sass/styles.scss';

import { showGreetings } from './js/Greetings.js';
import { hamburger, navigationMenu, openHamburgerMenu,
        closeHamburgerMenu, clickLinkCloseHamburger } from './js/Hamburger.js';
import { accordionBlock, accordionOpenBtns, accordionCloseBtns,
        openAccordion, closeAccordion } from './js/Accordion.js';
import { serviceButtonsBlock, blurFigures } from './js/Blur.js';
import { cityMenuHead, cityMenuForm, openCityMenu, escClosesCityMenu,
        outsideEvtListener, openAdressCard } from './js/CitySelect.js';

// window.onload = showGreetings();

/* Task 1 */
/* ---------------------- Blur service section cards ------------------------- */
serviceButtonsBlock.addEventListener('click', blurFigures);

/* Task 2 */
/* ---------------------- Accordion ------------------------- */
for (let opentBtn of accordionOpenBtns) {
  opentBtn.addEventListener('click', openAccordion);
}
  
for (let closeBtn of accordionCloseBtns) {
  closeBtn.addEventListener('click', closeAccordion);
};
// Смена цвета кнопки Order в активном состоянии
// Делегирование событий
const colorActiveBtn = (event) => {
  if (event.target.closest('.panel__button')) {
    event.target.classList.toggle('panel__button_selected');
  }
} 
accordionBlock.addEventListener('click', colorActiveBtn);

/* Task 3 */
/* ---------------------- City select in contacts menu ------------------------- */
cityMenuHead.addEventListener('click', openCityMenu); // cityBtn.addEventListener('click', openCityMenu);
document.addEventListener('keyup', escClosesCityMenu);
document.addEventListener('click', outsideEvtListener);
cityMenuForm.addEventListener('click', openAdressCard);

// /* ---------------------- Humburger menu ------------------------- */
hamburger.addEventListener('click', openHamburgerMenu);
document.addEventListener('keyup', closeHamburgerMenu);
// Закрытие Humburger menu по нажатию вне Humburger menu
window.addEventListener('click', closeHamburgerMenu);
navigationMenu.addEventListener('click', clickLinkCloseHamburger);
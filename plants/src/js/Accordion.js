/* Task 2 */
/* ---------------------- Accordion ------------------------- */

const accordionBlock = document.querySelector('.accordion');
const accordionOpenBtns = document.getElementsByClassName('accordion__button');
const accordionCloseBtns = document.getElementsByClassName('accordion__dropup-btn');
const accordionCardOpened = document.getElementsByClassName('accordion__opened');
const orderBtns = accordionBlock.getElementsByClassName('panel__button');
let counterActivePriceCards = accordionBlock.getElementsByClassName('accordion__opened_unactive');


function openAccordion(event) {
  let priceCardOpen = this.nextElementSibling;

// Task: Пользователь не может одновременно открыть все тарифы услуг, при открытии нового тарифа предыдущее автоматически закрывается.
if (counterActivePriceCards.length <= 2) {
  for (openedPriceCard of accordionCardOpened) {
    if (!openedPriceCard.classList.contains('accordion__opened_unactive')) {
      openedPriceCard.classList.add('accordion__opened_unactive'); // при открытии нового тарифа предыдущее автоматически закрывается.
      openedPriceCard.previousElementSibling.classList.remove('accordion__button_unactive'); // при открытии нового тарифа, dropup кнопка закрытого тарифа снова отображается вместо этого закрытого тарифа.
    }
  }
}
// ----------------------------------------------------------------- //

  this.classList.add('accordion__button_unactive');
  if (!priceCardOpen.classList.contains('accordion__opened_unactive')) {
    priceCardOpen.classList.add('accordion__opened_unactive');
  } else {
  priceCardOpen.classList.remove('accordion__opened_unactive');
}

// Итерация по DOM-коллекции кнопок Order и удаление стиля active при открытии тарифа (если active - стиль ранее был добавлен при предыдущем нажатии)
  Array.prototype.forEach.call(orderBtns, function(btn) {
    btn.classList.remove('active-btn');
});
}

for (let opentBtn of accordionOpenBtns) {
  opentBtn.addEventListener('click', openAccordion);
}


 function closeAccordion(event) {
  let priceCardClose = this.closest('.accordion__opened');
  let priceCardOpen = this.closest('.accordion__opened').previousElementSibling;
  priceCardClose.classList.add('accordion__opened_unactive');
  priceCardOpen.classList.remove('accordion__button_unactive');
 }

 for (let closeBtn of accordionCloseBtns) {
  closeBtn.addEventListener('click', closeAccordion);
};

// Смена цвета кнопки Order в активном состоянии
// Делегирование событий
function colorActiveBtn(event) {
  if (event.target.closest('.panel__button')) {
    event.target.classList.toggle('active-btn');
  }
}

accordionBlock.addEventListener('click', colorActiveBtn);
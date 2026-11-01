/* Task 2 */
/* ---------------------- Accordion ------------------------- */
const accordionData = {
  accordionBlock: document.querySelector('.accordion'),
  accordionOpenBtns: document.getElementsByClassName('accordion__button'),
  accordionCloseBtns: document.getElementsByClassName('accordion__dropup-btn'),
  accordionCardOpened: document.getElementsByClassName('accordion__opened'),
  orderBtns: document.querySelector('.accordion').getElementsByClassName('panel__button'),
  counterActivePriceCards: document.querySelector('.accordion').getElementsByClassName('accordion__opened_unactive'),
  openAccordion: function (event) {
    let priceCardOpen = this.nextElementSibling;
  // Task: Пользователь не может одновременно открыть все тарифы услуг, при открытии нового тарифа предыдущее автоматически закрывается.
    if (counterActivePriceCards.length <= 2) {
      for (let openedPriceCard of accordionCardOpened) {
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
      btn.classList.remove('panel__button_selected');
  });
  },
  closeAccordion: function (event) {
    console.log(this)
    let priceCardClose = this.closest('.accordion__opened');
    let priceCardOpen = this.closest('.accordion__opened').previousElementSibling;
    priceCardClose.classList.add('accordion__opened_unactive');
    priceCardOpen.classList.remove('accordion__button_unactive');
  },
}

export const accordionBlock = accordionData.accordionBlock;
export const accordionOpenBtns = accordionData.accordionOpenBtns;
export const accordionCloseBtns = accordionData.accordionCloseBtns;
export const accordionCardOpened = accordionData.accordionCardOpened;
export const orderBtns = accordionData.orderBtns;
export let counterActivePriceCards = accordionData.counterActivePriceCards;
export const openAccordion = accordionData.openAccordion;
export const closeAccordion = accordionData.closeAccordion;
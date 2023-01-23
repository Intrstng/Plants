/* Task 1 */
/* ---------------------- Blur service section cards ------------------------- */

const serviceButtonsBlock = document.querySelector('.service__buttons');
const figuresDataSet = document.querySelectorAll('.cards__item figure');
function blurAdd(element) {
  element.classList.add('cards__item_blured');
}
function blurToggle(element) {
  element.classList.toggle('cards__item_blured');
}
function blurRemove(element) {
  element.classList.remove('cards__item_blured');
}

// Делегирование событий
function blurFigures(event) {
  // ---- Выбор не более двух кнопок в разделе Service ---- //
  let counter = serviceButtonsBlock.getElementsByClassName('active-btn');
  let serviceType;
  if (event.target.closest('button')) {
    serviceType = event.target.textContent;
    if (counter.length < 2)  {
      event.target.classList.toggle('active-btn');
    } else {
      if (event.target.classList.contains('active-btn')) {
        event.target.classList.remove('active-btn');
      }
 
// Сюда вставляем код (Внимание! Этот код отдельно от нижнего блока, т.к. counter.length при уменьшении количества активных кнопок корректно работает только здесь)
   if (counter.length === 1) {
    figuresDataSet.forEach((elem) => {
     if (elem.dataset.type == serviceType && !elem.classList.contains('cards__item_blured')) blurAdd(elem);
    });
   }
// здесь заканчиваем
      return;
    }  
  }

// ----------------------------------------------------- //
// Нижний блок кода

 figuresDataSet.forEach((elem) => {
   if (counter.length === 1) {
     if (elem.dataset.type !== serviceType) blurToggle(elem);
   }
   if (counter.length === 0) {
     if (elem.dataset.type !== serviceType) blurRemove(elem);
   }
   if (counter.length === 2) {
    if (elem.dataset.type == serviceType && elem.classList.contains('cards__item_blured')) blurToggle(elem);
   }
 });
}
  serviceButtonsBlock.addEventListener('click', blurFigures);
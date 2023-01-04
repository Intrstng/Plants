/* Task 3 */
/* ---------------------- City select in contacts menu ------------------------- */
const cityBlock = document.querySelector('.city');
const cityMenuHead = document.querySelector('.city__dropdown');
const cityMenuForm = document.querySelector('.city__dropdown-content');
const adressInfoItems = document.querySelectorAll('.adresses__info p');
const adressCard = document.querySelector('.adresses');
const adressInfo = document.querySelector('.adresses-info');
const adressCardBtn = document.querySelector('.adresses__button');
const employeeImg = document.querySelector('.contact__image-block');
const contactHeader = document.querySelector('.contact__content').children[1];
// SVG-sprite
const cityDropdownArrow = document.querySelector('.city-dropdown-arrow');

cityMenuHead.addEventListener('click', openCityMenu); // cityBtn.addEventListener('click', openCityMenu);

function openCityMenu() {
  cityBlock.classList.toggle('city_opened');
  cityMenuHead.classList.toggle('city__dropdown_active');
  cityMenuForm.classList.toggle('closed');
  adressCard.classList.add('closed');
    // SVG-sprite (change)
  // cityDropdownArrow.innerHTML = '<use xlink:href="./src/img/arrows-sprite.svg#grey-up"></use>';
 
//  employeeImg.classList.add('contact__image-block_active');
// contactHeader.classList.add('title_active');
}
function closeCityMenu() {
  cityBlock.classList.remove('city_opened');
  cityMenuHead.classList.remove('city__dropdown_active');
  cityMenuForm.classList.add('closed');
//  employeeImg.classList.remove('contact__image-block_active');
  // SVG-sprite (return back)
  // cityDropdownArrow.innerHTML = '<use xlink:href="./src/img/arrows-sprite.svg#grey-down"></use>';
}


// Функция закрытия City menu по нажатию на ESC или по нажатию вне City menu
function escClosesCityMenu(event) {
  if (event.code === 'Escape') {
    closeCityMenu();
  } 
}
document.addEventListener('keyup', escClosesCityMenu);


// Закрытие City menu по нажатию вне City menu

document.addEventListener('click', outsideEvtListener);
function outsideEvtListener(evt) {
    if (evt.target === cityMenuForm || cityMenuForm.contains(evt.target) || cityMenuHead.contains(evt.target)) return;
    closeCityMenu();
  }


  /* ---------------------- Open and fill city adress card ------------------------- */
  // Открытие карточки с адресом по клику на ссылку с названием города в City menu
  // Через делегирование событий

  cityMenuForm.addEventListener('click', openAdressCard);
   function openAdressCard(event) {
    let city, phone, officeAdress;
    // employeeImg.style.marginTop = '-237px'; // Исправить

    // adressesDataBase - база данных город - телефон - адрес
    const adressesDataBase = {
      'Yonkers, NY': {
                      phone: '+1	914	678 0003',
                      'office adress': '511 Warburton Ave',
      },
      'Canandaigua, NY': {
        phone: '+1	585	393 0001',
        'office adress': '151 Charlotte Street',
      },
      'Sherrill, NY': {
        phone: '+1	315	908 0004',
        'office adress': '14 WEST Noyes BLVD',
      },
      'New York City': {
        phone: '+1	212	456 0002',
        'office adress': '9 East 91st Street',
      },
    };

    if (event.target.closest('p')) {
      closeCityMenu();
    }
      adressCard.classList.remove('closed');
      city = event.target.textContent; // определяем город нажатой ссылки
      adressInfoItems[0].textContent = city;
      
      phone = adressesDataBase[city].phone; // определяем из базы данных телефон выбранного города
      adressInfoItems[1].textContent = phone;

      officeAdress = adressesDataBase[city]['office adress']; // определяем из базы данных адрес выбранного города
      adressInfoItems[2].textContent = officeAdress;
    
    // Вставка номера выбранного города в ссылку href кнопки .adresses__button
      adressCardBtn.setAttribute('href', 'tel: ' + phone);
      console.log(adressCardBtn.getAttribute('href'));
   }
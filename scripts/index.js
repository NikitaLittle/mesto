let profileName = document.querySelector('.profile__name');
let profileEditButton = document.querySelector('.profile__edit-button');
let profileDescription = document.querySelector('.profile__description');
let popUp = document.querySelector('.popup');
let popUpForm = popUpEdit.querySelector('.popup__form');
let popUpName = popUpEdit.querySelector('.popup__input_field_name');
let popUpDescription = popUpEdit.querySelector('.popup__input_field_description');
let popUpCloseButton = popUpEdit.querySelector('.popup__close-button');

// Открытие попапа с исходными данными пользователя
function popUpOpening() {}

// function popUpOpening() {
//   popUpName.value = profileName.textContent;
//   popUpDescription.value = profileDescription.textContent;
//   popUp.classList.add('popup_opened');
// }

// // Закрытие попапа
// function popUpClose() {
//   popUp.classList.remove('popup_opened');
// }

// Заполнение полей данными пользователя
function handleFormSubmit(evt) {
  evt.preventDefault();
  profileName.textContent = popUpName.value;
  profileDescription.textContent = popUpDescription.value;
  popUpClose();
}

profileEditButton.addEventListener('click', popUpOpening);
popUpCloseButton.addEventListener('click', popUpClose);
popUpForm.addEventListener('submit', handleFormSubmit);

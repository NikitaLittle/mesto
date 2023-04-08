// Импорты классов
import { Card } from './Card.js';
import { FormValidator } from './FormValidatior.js';

// Экспорты переменных
export { imagePopup, imagePopupImage, imagePopupTitle };

// Объекты профиля документа
const profileEditButton = document.querySelector('.profile__edit-button');
const profileName = document.querySelector('.profile__name');
const profileDescription = document.querySelector('.profile__description');
const profileAddButton = document.querySelector('.profile__add-button');
// Объекты мест
const places = document.querySelector('.places');
const placeTemplate = places.querySelector('.place__template').content;
// Объекты стд. попапа
const popUpList = document.querySelectorAll('.popup');
// Объекты "профиль" попап
const profilePopUp = document.querySelector('.profile-popup');
const profilePopUpForm = profilePopUp.querySelector('[name="profileForm"]');
const profilePopUpName = profilePopUp.querySelector('.profile-popup__input_field_name');
const profilePopUpDescription = profilePopUp.querySelector('.profile-popup__input_field_description');
// Объекты "добавить" попап
const addingPopUp = document.querySelector('.adding-popup');
const addingPopUpForm = addingPopUp.querySelector('[name="addForm"]');
const addingInputTitle = addingPopUp.querySelector('.adding-popup__input_field_title');
const addingInputLink = addingPopUp.querySelector('.adding-popup__input_field_link');
// Объекты "изображение" попап
const imagePopup = document.querySelector('.image-popup');
const imagePopupImage = imagePopup.querySelector('.image-popup__image');
const imagePopupTitle = imagePopup.querySelector('.image-popup__title');
// Массив изначальных мест
const initialPlaces = [
  {
    name: 'Канада, Озеро Морейн',
    link: 'https://images.unsplash.com/photo-1677530248517-ee23fb4150ae?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
  },
  {
    name: 'Токио, Япония',
    link: 'https://images.unsplash.com/photo-1677529461522-b2a94a2a3a08?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
  },
  {
    name: 'Живописный мост, Москва, Россия',
    link: 'https://images.unsplash.com/photo-1523509433743-6f42a58221df?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1333&q=80',
  },
  {
    name: 'Накано, Токио, Япония',
    link: 'https://images.unsplash.com/photo-1677350785705-1a5a0bb00587?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
  },
  {
    name: 'Торонто, Канада',
    link: 'https://images.unsplash.com/photo-1677253171049-8cf508015e99?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
  },
  {
    name: 'Москва, Россия',
    link: 'https://images.unsplash.com/photo-1512495039889-52a3b799c9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
  },
];
// Селекторы и классы валидации
const config = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button',
  inactiveButtonClass: 'popup__button_inactive',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__input-error_active',
};
// Экзепляры класса валидации
const profileFormValidator = new FormValidator(profilePopUpForm, config);
const addingFormValidator = new FormValidator(addingPopUpForm, config);

// Добавление карточек в секцию
initialPlaces.forEach(function (placeItem) {
  places.prepend(createCard(placeItem));
});

// Открытие попапов
function openPopUp(popUp) {
  popUp.classList.add('popup_opened');
  document.addEventListener('keydown', closePopUpByEsc);
}

// Обработка нововведенных даных профиля
function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  profileName.textContent = profilePopUpName.value;
  profileDescription.textContent = profilePopUpDescription.value;
  closePopUp(profilePopUp);
}

// Заполнение полей данными профиля
function fillFieldsForm() {
  profilePopUpName.value = profileName.textContent;
  profilePopUpDescription.value = profileDescription.textContent;
}

function createCard(placeItem) {
  const placesContent = new Card(placeItem, placeTemplate, openPopUp);
  return placesContent.createPlace();
}

// Создание новых карточек
function createNewPlace(evt) {
  evt.preventDefault();
  const arrayNewPlace = {
    image: addingInputLink.value,
    name: addingInputTitle.value,
  };
  evt.target.reset();
  places.prepend(createCard(arrayNewPlace));
  addingFormValidator.disableButton();
  closePopUp(addingPopUp);
}

// Закрытие попапов
function closePopUp(popUp) {
  popUp.classList.remove('popup_opened');
  document.removeEventListener('keydown', closePopUpByEsc);
}

// Добавление слушателей на кнопки для закрытия попапов
popUpList.forEach(function (popUp) {
  popUp.addEventListener('mousedown', function (evt) {
    if (evt.target.classList.contains('popup') || evt.target.classList.contains('popup__close-button')) {
      closePopUp(popUp);
    }
  });
});

// Закрытие попапа на "Escape"
function closePopUpByEsc(evt) {
  if (evt.key === 'Escape') {
    const openedPopUp = document.querySelector('.popup_opened');
    closePopUp(openedPopUp);
  }
}

// Слушатели "профиль" попап
profileEditButton.addEventListener('click', function () {
  openPopUp(profilePopUp);
  fillFieldsForm();
});
profilePopUp.addEventListener('submit', handleProfileFormSubmit);

// Слушатели "добавить" попап
profileAddButton.addEventListener('click', function () {
  openPopUp(addingPopUp);
});
addingPopUp.addEventListener('submit', createNewPlace);

// Включение валидации форм
profileFormValidator.enableValidation();
addingFormValidator.enableValidation();

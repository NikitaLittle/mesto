// Импорты классов
import '../pages/index.css';
import Section from '../components/Section';
import { Card } from '../components/Card.js';
import { FormValidator } from '../components/FormValidatior.js';
import {
  config,
  profilePopUpForm,
  initialPlaces,
  placeTemplate,
  profileAddButton,
  profileEditButton,
  addingPopUpForm,
  profilePopUpName,
  profilePopUpDescription,
} from '../utils/constants';
import PopupWithImage from '../components/PopupWithImage';
import UserInfo from '../components/UserInfo';
import PopupWithForm from '../components/PopupWithForm';

// Экзепляры класса валидации
const profileFormValidator = new FormValidator(profilePopUpForm, config);
const addingFormValidator = new FormValidator(addingPopUpForm, config);

// Экземпляр информации пользователя
const userInfo = new UserInfo('.profile__name', '.profile__description');

// Экземпляр формы профиля
const profilePopupWithForm = new PopupWithForm('.profile-popup', (data) => {
  userInfo.setUserInfo(data);
});

// Экземлпяр "увеличенное изображение" попапа
const popupWithImage = new PopupWithImage('.image-popup', '.image-popup__image', '.image-popup__title');

// Функция заполянения данных попапа изображения
function handleCardClick(image, title) {
  popupWithImage.open(image, title);
}

// Функция создания новой карточки
function createCard(newCard) {
  const card = new Card(newCard, placeTemplate, handleCardClick);
  const cardElement = card.createPlace();

  return cardElement;
}

// Экземпляр секции карточек
const section = new Section(
  {
    items: initialPlaces,
    renderer: function (item) {
      section.addItem(createCard(item));
    },
  },
  '.places'
);

// Экземлпяр формы "добавить карточку"
const addingPopupWithForm = new PopupWithForm('.adding-popup', (data) => {
  const arrayNewPlace = {
    link: data.name,
    name: data.link,
  };

  section.addItem(createCard(arrayNewPlace));
  addingPopupWithForm.close();
});

// Слушатель кнопки "добавить карточку"
profileAddButton.addEventListener('click', function () {
  addingPopupWithForm.open();
});

// Слушатель кнопки "редактировать или профиль"
profileEditButton.addEventListener('click', function () {
  const profileData = userInfo.getUserInfo();
  profilePopUpName.value = profileData.username;
  profilePopUpDescription.value = profileData.bio;
  profilePopupWithForm.open();
  profileFormValidator.disableButton();
  userInfo.setUserInfo(userInfo.getUserInfo());
});

// Обработка карточек
section.rendererItems();

// Включение валидации форм
profileFormValidator.enableValidation();
addingFormValidator.enableValidation();

profilePopupWithForm.setEventListeners();
addingPopupWithForm.setEventListeners();
popupWithImage.setEventListeners();

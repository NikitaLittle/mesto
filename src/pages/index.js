// Импорты классов
import '../pages/index.css';
import Section from '../components/Section';
import { Card } from '../components/Card.js';
import { FormValidator } from '../components/FormValidatior.js';
import {
  config,
  profilePopUpForm,
  addingPopupSelector,
  addingInputTitle,
  initialPlaces,
  placeTemplate,
  placesSelector,
  addingInputLink,
  profileAddButton,
  profileEditButton,
  profilePopupSelector,
  imagePopupSelector,
  addingPopUpForm,
  usernameSelector,
  bioSelector,
} from '../utils/constants';
import Popup from '../components/Popup';
import PopupWithImage from '../components/PopupWithImage';
import UserInfo from '../components/UserInfo';
import PopupWithForm from '../components/PopupWithForm';

// Экзепляры класса валидации
const profileFormValidator = new FormValidator(profilePopUpForm, config);
const addingFormValidator = new FormValidator(addingPopUpForm, config);

// Экземпляр "профиль" попапа
const profilePopup = new Popup(profilePopupSelector);

// Экземпляр "редактировать" попапа
const addingPopup = new Popup(addingPopupSelector);

// Экземпляр информации пользователя
const userInfo = new UserInfo(usernameSelector, bioSelector);

// Экземпляр формы профиля
const profilePopupWithForm = new PopupWithForm(profilePopupSelector, (data) => {
  userInfo.setUserInfo(data);
  profileFormValidator.disableButton();
});

// Экземлпяр "увеличенное изображение" попапа
const popupWithImage = new PopupWithImage(imagePopupSelector);
function handleCardClick(image, title) {
  popupWithImage.open(image, title);
}

// Экземпляр секция карточек
const section = new Section(
  {
    items: initialPlaces,
    renderer: function (item) {
      const card = new Card(item, placeTemplate, handleCardClick);
      const cardElement = card.createPlace();
      section.addItem(cardElement);
    },
  },
  placesSelector
);

// Экземлпяр формы "добавить карточку"
const addingPopupForm = new PopupWithForm(addingPopupSelector, (evt) => {
  const arrayNewPlace = {
    link: addingInputLink.value,
    name: addingInputTitle.value,
  };

  const card = new Card(arrayNewPlace, placeTemplate, handleCardClick);
  const cardElement = card.createPlace();

  section.addItem(cardElement);
  addingFormValidator.disableButton();
  addingPopupForm.close();
});

// Слушатель "добавить" кнопки
profileAddButton.addEventListener('click', function () {
  addingPopup.open();
});

// Слушатель "редактировать" кнопки
profileEditButton.addEventListener('click', function () {
  profilePopup.open();
  userInfo.setUserInfo(userInfo.getUserInfo());
});

profilePopupWithForm.setEventListeners();
profilePopup.setEventListeners();
addingPopup.setEventListeners();
addingPopupForm.setEventListeners();
popupWithImage.setEventListeners();

// Обработка карточек
section.rendererItems();

// Включение валидации форм
profileFormValidator.enableValidation();
addingFormValidator.enableValidation();

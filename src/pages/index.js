// Импорты классов
import '../pages/index.css';
import Section from '../components/Section';
import { Card } from '../components/Card.js';
import { FormValidator } from '../components/FormValidatior.js';
import {
  config,
  profilePopUpForm,
  cardTemplate,
  profileAddButton,
  profileEditButton,
  addingPopUpForm,
  profilePopUpName,
  profilePopUpDescription,
  avatarPopupForm,
  profileAvatarButton,
} from '../utils/constants';
import PopupWithImage from '../components/PopupWithImage';
import UserInfo from '../components/UserInfo';
import PopupWithForm from '../components/PopupWithForm';
import Api from '../components/Api';
import PopupWithQuestion from '../components/PopupWithQuestion';
let userId;

const section = new Section({}, '.cards');

// Экземлпяр "увеличенное изображение" попапа
const popupWithImage = new PopupWithImage('.image-popup', '.image-popup__image', '.image-popup__title');

// Экземпляр информации пользователя
const userInfo = new UserInfo('.profile__name', '.profile__description', '.profile__avatar');

// Экзепляры класса валидации
const profileFormValidator = new FormValidator(profilePopUpForm, config);
const addingFormValidator = new FormValidator(addingPopUpForm, config);
const avatarFormValidator = new FormValidator(avatarPopupForm, config);

const api = new Api({
  baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-66',
  headers: {
    authorization: '69d7b6ea-dbde-4d21-ad17-b503108508a5',
    'Content-Type': 'application/json',
  },
});

api.getProfile().then((res) => {
  userInfo.setUserInfo({ name: res.name, about: res.about, avatarLink: res.avatar });
  userId = res._id;
});

api.getInitialCards().then((cardList) => {
  const section = new Section(
    {
      items: cardList,
      renderer: (card) => {
        section.addItem(createCard({ link: card.link, name: card.name, likes: card.likes, cardId: card._id, ownerId: card.owner._id }));
      },
    },
    '.cards'
  );
  section.rendererItems();
});

// Функция создания новой карточки
function createCard(data) {
  const card = new Card(
    data,
    cardTemplate,
    (image, title) => {
      popupWithImage.open(image, title);
    },
    () => {
      questionPopup.open(data.cardId, card.deleteCard.bind(card));
    },
    (cardId) => {
      if (card.isLikes()) {
        api.deleteLikeCard(cardId).then((res) => {
          card.setLikes(res.likes);
        });
      } else {
        api.putLikeCard(cardId).then((res) => {
          card.setLikes(res.likes);
        });
      }
    },
    userId
  );
  const cardElement = card.createCard();

  return cardElement;
}

// Экземпляр формы профиля
const profilePopup = new PopupWithForm('.profile-popup', (data) => {
  profilePopup.loadProcess({ isLoad: true, status: 'Сохранение...' });

  api
    .editProfile({ name: data.name, about: data.about })
    .then((res) => {
      userInfo.setUserInfo({ name: res.name, about: res.about, avatarLink: res.avatar });
    })
    .finally(() => {
      profilePopup.loadProcess({ isLoad: false });
    });
});

// Экземлпяр формы "добавить карточку"
const addingPopup = new PopupWithForm('.adding-popup', (data) => {
  addingPopup.loadProcess({ isLoad: true, status: 'Создание...' });
  const newCardData = {
    name: data.name,
    link: data.link,
  };

  api
    .addNewCard(newCardData)
    .then((res) => {
      section.addItem(createCard({ name: res.name, link: res.link, likes: res.likes, cardId: res._id, ownerId: res.owner._id }));
    })
    .finally(() => {
      addingPopup.loadProcess({ isLoad: false });
    });

  addingPopup.close();
});

const questionPopup = new PopupWithQuestion('.question-popup', (cardId, deleteCard) => {
  api.deleteCard(cardId).then((res) => {
    deleteCard();
  });
});

const avatarPopup = new PopupWithForm('.update-avatar-popup', (avatar) => {
  avatarPopup.loadProcess({ isLoad: true, status: 'Сохранение...' });
  api
    .updateAvatar(avatar.link)
    .then((res) => {
      userInfo.setUserInfo({ name: res.name, about: res.about, avatarLink: res.avatar });
    })
    .finally(() => {
      avatarPopup.loadProcess({ isLoad: false });
    });
});

profileAvatarButton.addEventListener('click', () => {
  avatarFormValidator.disableButton();
  avatarPopup.open();
});

// Слушатель кнопки "добавить карточку"
profileAddButton.addEventListener('click', function () {
  addingFormValidator.disableButton();
  addingPopup.open();
});

// Слушатель кнопки "редактировать профиль"
profileEditButton.addEventListener('click', function () {
  profilePopup.open();
  profileFormValidator.disableButton();
  const profileData = userInfo.getUserInfo();
  profilePopUpName.value = profileData.name;
  profilePopUpDescription.value = profileData.about;
});

// Включение валидации форм
profileFormValidator.enableValidation();
addingFormValidator.enableValidation();
avatarFormValidator.enableValidation();

profilePopup.setEventListeners();
addingPopup.setEventListeners();
popupWithImage.setEventListeners();
questionPopup.setEventListeners();
avatarPopup.setEventListeners();

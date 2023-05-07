// Объекты профиля документа
const profileEditButton = document.querySelector('.profile__edit-button');
const usernameSelector = '.profile__name';
const profileName = document.querySelector('.profile__name');
const bioSelector = '.profile__description';
const profileDescription = document.querySelector('.profile__description');
const profileAddButton = document.querySelector('.profile__add-button');
// Объекты мест
const placesSelector = '.places';
const placeTemplate = document.querySelector('.place__template').content;
// Объекты "профиль" попап
const profilePopupSelector = '.profile-popup';
const profilePopUp = document.querySelector('.profile-popup');
const profilePopUpForm = profilePopUp.querySelector('[name="profileForm"]');
const profilePopUpName = profilePopUp.querySelector('.profile-popup__input_field_name');
const profilePopUpDescription = profilePopUp.querySelector('.profile-popup__input_field_description');
// Объекты "добавить" попап
const addingPopupSelector = '.adding-popup';
const addingPopUp = document.querySelector('.adding-popup');
const addingPopUpForm = addingPopUp.querySelector('[name="addForm"]');
const addingInputTitle = addingPopUp.querySelector('.adding-popup__input_field_title');
const addingInputLink = addingPopUp.querySelector('.adding-popup__input_field_link');
// Объекты "изображение" попап
const imagePopupSelector = '.image-popup';
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

export {
  profileEditButton,
  usernameSelector,
  profileName,
  bioSelector,
  profileDescription,
  profileAddButton,
  placesSelector,
  placeTemplate,
  profilePopupSelector,
  profilePopUpForm,
  profilePopUpName,
  profilePopUpDescription,
  addingPopupSelector,
  addingPopUp,
  addingPopUpForm,
  addingInputTitle,
  addingInputLink,
  imagePopupSelector,
  imagePopup,
  imagePopupImage,
  imagePopupTitle,
  initialPlaces,
  config,
};

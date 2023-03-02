let profileName = document.querySelector('.profile__name');
let profileEditButton = document.querySelector('.profile__edit-button');
let profileDescription = document.querySelector('.profile__description');
let popUp = document.querySelector('.popup');
let popUpForm = popUp.querySelector('.popup__form');
let popUpName = popUp.querySelector('.popup__input_field_name');
let popUpDescription = popUp.querySelector('.popup__input_field_description');
let popUpCloseButton = popUp.querySelector('.popup__close-button');

// Открытие попапа с исходными данными пользователя
function popUpOpening() {
  popUpName.value = profileName.textContent;
  popUpDescription.value = profileDescription.textContent;
  popUp.classList.add('popup_opened');
}

// Закрытие попапа
function popUpClose() {
  popUp.classList.remove('popup_opened');
}

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

function likeButtonPainted(evt) {
  const eventTarget = evt.target;
  eventTarget.classList.toggle('place__like-button_painted');
}

// Добавление изначальных мест на страницу
const initialPlaces = [
  {
    title: 'Канада, Озеро Морейн',
    image:
      'https://images.unsplash.com/photo-1677530248517-ee23fb4150ae?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
  },
  {
    title: 'Токио, Япония',
    image:
      'https://images.unsplash.com/photo-1677529461522-b2a94a2a3a08?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
  },
  {
    title: 'Живописный мост, Москва, Россия',
    image:
      'https://images.unsplash.com/photo-1523509433743-6f42a58221df?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1333&q=80',
  },
  {
    title: 'Накано, Токио, Япония',
    image:
      'https://images.unsplash.com/photo-1677350785705-1a5a0bb00587?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
  },
  {
    title: 'Торонто, Канада',
    image:
      'https://images.unsplash.com/photo-1677253171049-8cf508015e99?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
  },
  {
    title: 'Москва, Россия',
    image:
      'https://images.unsplash.com/photo-1512495039889-52a3b799c9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
  },
];

const places = document.querySelector('.places');
const placeTemplate = places.querySelector('.place__template').content;

function addInitialPlaces(place) {
  const placeTemplateCopy = placeTemplate.cloneNode(true);
  const placeTitle = placeTemplateCopy.querySelector('.place__title');
  const placeImage = placeTemplateCopy.querySelector('.place__image');
  const likeButton = document.querySelector('.place__like-button');
  placeTitle.textContent = place.title;
  placeImage.setAttribute('src', place.image);
  likeButton.addEventListener('click', likeButtonPainted);
  places.append(placeTemplateCopy);
}

initialPlaces.forEach(addInitialPlaces);

// Открытие/закрытие попапа
const addButton = document.querySelector('.profile__add-button');
const popUpAdding = document.querySelector('.popup_adding');
const closeButton = popUpAdding.querySelector('.popup__close-button');

function popUpAddingOpening() {
  popUpAdding.classList.add('popup_opened');
}

function popUpAddingClosing() {
  popUpAddingTitle.value = '';
  popUpAddingLink.value = '';
  popUpAdding.classList.remove('popup_opened');
}

addButton.addEventListener('click', popUpAddingOpening);
closeButton.addEventListener('click', popUpAddingClosing);

// Добавление новосозданных мест на страницу
const popUpAddingTitle = popUpAdding.querySelector('.popup__input_field_title');
const popUpAddingLink = popUpAdding.querySelector('.popup__input_field_link');

function creatingNewPlace(evt) {
  evt.preventDefault();
  const placeTemplateCopy = placeTemplate.cloneNode(true);
  const placeTitle = placeTemplateCopy.querySelector('.place__title');
  const placeImage = placeTemplateCopy.querySelector('.place__image');
  placeTitle.textContent = popUpAddingTitle.value;
  placeImage.setAttribute('src', popUpAddingLink.value);
  places.prepend(placeTemplateCopy);
  popUpAddingClosing();
}

popUpAdding.addEventListener('submit', creatingNewPlace);

// Лайк карточки
// const likeButton = document.querySelector('.place__like-button');

// function likeButtonPainted(evt) {
//   const eventTarget = evt.target;
//   eventTarget.classList.toggle('place__like-button_painted');
// }
// likeButton.addEventListener('click', likeButtonPainted);

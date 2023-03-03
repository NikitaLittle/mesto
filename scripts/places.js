const places = document.querySelector('.places');
const placeTemplate = places.querySelector('.place__template').content;
const addButton = document.querySelector('.profile__add-button');
const popUpAdding = document.querySelector('.popup_adding');
const closeButton = popUpAdding.querySelector('.popup__close-button');
const popUpAddingTitle = popUpAdding.querySelector('.popup__input_field_title');
const popUpAddingLink = popUpAdding.querySelector('.popup__input_field_link');
const popUpImageContainer = document.querySelector('.popup_images');

// Закрашивание лайка
function likeButtonPainted(evt) {
  const eventTarget = evt.target;
  eventTarget.classList.toggle('place__like-button_painted');
}

// Удаление места
function deletingPlace(evt) {
  const eventTarget = evt.target;
  const deletedPlace = eventTarget.closest('.place');
  deletedPlace.remove();
}

// Открытие попапа изоборажния
function imagePopUpOpening() {
  popUpImageContainer.classList.add('popup_opened');
}

// Закрытие попапа изображения
function imagePopUpClosing() {
  popUpImageContainer.classList.remove('popup_opened');
}

// Добавление изначальных мест на страницу
function addInitialPlaces(place) {
  const placeTemplateCopy = placeTemplate.cloneNode(true);
  const placeTitle = placeTemplateCopy.querySelector('.place__title');
  const placeImage = placeTemplateCopy.querySelector('.place__image');
  const likeButton = placeTemplateCopy.querySelector('.place__like-button');
  const deleteButton = placeTemplateCopy.querySelector('.place__urn-button');
  const popUpImage = popUpImageContainer.querySelector('.popup__image');
  const closeButtonImage = popUpImageContainer.querySelector('.popup__close-button');
  const popUpImageTitle = popUpImageContainer.querySelector('.popup__image-title');
  placeTitle.textContent = place.title;
  placeImage.setAttribute('src', place.image);
  popUpImage.setAttribute('src', place.image);
  popUpImageTitle.textContent = place.title;
  placeImage.addEventListener('click', imagePopUpOpening);
  closeButtonImage.addEventListener('click', imagePopUpClosing);
  deleteButton.addEventListener('click', deletingPlace);
  likeButton.addEventListener('click', likeButtonPainted);
  places.prepend(placeTemplateCopy);
}
initialPlaces.forEach(addInitialPlaces);

// Добавление новосозданных мест на страницу
function creatingNewPlace(evt) {
  evt.preventDefault();
  const addingForm = evt.target;
  const popUpAddingTitle = addingForm.querySelector('.popup__input_field_title').value;
  const popUpAddingLink = addingForm.querySelector('.popup__input_field_link').value;
  const place = {
    title: popUpAddingTitle,
    image: popUpAddingLink,
  };
  popUpAddingClosing();
  addInitialPlaces(place);
}
popUpAdding.addEventListener('submit', creatingNewPlace);

// Открытие/закрытие попапа
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

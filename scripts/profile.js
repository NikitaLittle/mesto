// Селекторы профиля
const profileEditButton = document.querySelector('.profile__edit-button');
const profileName = document.querySelector('.profile__name');
const profileDescription = document.querySelector('.profile__description');
const profileAddButton = document.querySelector('.profile__add-button');
// Селекторы мест
const places = document.querySelector('.places');
const placeTemplate = places.querySelector('.place__template').content;
// Селекторы стд. попапа
const popUp = document.querySelector('.popup');
const popUpCloseButton = popUp.querySelector('.popup__close-button');
// Селекторы профиля попапа
const profilePopUp = document.querySelector('.profile-popup');
const profilePopUpCloseButton = profilePopUp.querySelector('.profile-popup__close-button');
const profilePopUpForm = profilePopUp.querySelector('.profile-popup__form');
const profilePopUpName = profilePopUp.querySelector('.profile-popup__input_field_name');
const profilePopUpDescription = profilePopUp.querySelector('.profile-popup__input_field_description');
// Селекторы "добавить" попап
const addingPopUp = document.querySelector('.adding-popup');
const addingPopUpCloseButton = addingPopUp.querySelector('.adding-popup__close-button');
const addingInputTitle = addingPopUp.querySelector('.adding-popup__input_field_title');
const addingInputLink = addingPopUp.querySelector('.adding-popup__input_field_link');
// Селекторы "изображение" попап
const imagePopup = document.querySelector('.image-popup');
const imagePopupImage = imagePopup.querySelector('.image-popup__image');
const imagePopupTitle = imagePopup.querySelector('.image-popup__title');
const imagePopupCloseButton = imagePopup.querySelector('.image-popup__close-button');

// Обработка нововведенных даных
function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  profileName.textContent = profilePopUpName.value;
  profileDescription.textContent = profilePopUpDescription.value;
  closePopUp(profilePopUp);
}

// Заполнение инпутов данными профиля
profilePopUpName.value = profileName.textContent;
profilePopUpDescription.value = profileDescription.textContent;

// Создание карточки
function createPlace(place) {
  const placeTemplateCopy = placeTemplate.cloneNode(true);
  const placeImage = placeTemplateCopy.querySelector('.place__image');
  const urnButton = placeTemplateCopy.querySelector('.place__urn-button');
  const placeTitle = placeTemplateCopy.querySelector('.place__title');
  const likeButton = placeTemplateCopy.querySelector('.place__like-button');
  placeImage.setAttribute('src', place.image);
  placeImage.setAttribute('alt', place.title);
  placeTitle.textContent = place.title;
  placeImage.addEventListener('click', openPopUpImage);
  urnButton.addEventListener('click', deletePlace);
  likeButton.addEventListener('click', toggleLike);
  return placeTemplateCopy;
}

function addInitialPlaces(item) {
  const place = createPlace(item);
  places.prepend(place);
}
initialPlaces.forEach(addInitialPlaces);

// Открытие попапов
function openPopUp(popUp) {
  popUp.classList.add('popup_opened');
}

// Закрытие попапов
function closePopUp(popUp) {
  popUp.classList.remove('popup_opened');
}

// Создание новых карточек
function createNewPlace(evt) {
  evt.preventDefault();
  const arrayNewPlaces = {
    image: addingInputLink.value,
    title: addingInputTitle.value,
  };
  addInitialPlaces(arrayNewPlaces);
  evt.target.reset();
  closePopUp(addingPopUp);
}

// Лайк мест
function toggleLike(evt) {
  evt.target.classList.toggle('place__like-button_painted');
}

// Открытие попапа изображения
function openPopUpImage(evt) {
  openPopUp(imagePopup);
  imagePopupImage.setAttribute('src', evt.target.getAttribute('src'));
  imagePopupImage.setAttribute('alt', evt.target.getAttribute('alt'));
  const place = evt.target.closest('.place');
  imagePopupTitle.textContent = place.querySelector('.place__title').textContent;
}

// Удаление мест
function deletePlace(evt) {
  const deletedPlace = evt.target.closest('.place');
  deletedPlace.remove();
}

// Слушатели "профиль" попап
profileEditButton.addEventListener('click', function () {
  openPopUp(profilePopUp);
});
profilePopUpCloseButton.addEventListener('click', function () {
  closePopUp(profilePopUp);
});
profilePopUpForm.addEventListener('submit', handleProfileFormSubmit);
// Слушатели "добавить" попап
profileAddButton.addEventListener('click', function () {
  openPopUp(addingPopUp);
});
addingPopUpCloseButton.addEventListener('click', function () {
  closePopUp(addingPopUp);
});
addingPopUp.addEventListener('submit', createNewPlace);
// Слушатель ув. изображения попап
imagePopupCloseButton.addEventListener('click', function () {
  closePopUp(imagePopup);
});

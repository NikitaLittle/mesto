import { imagePopup, imagePopupImage, imagePopupTitle } from './index.js';

export class Place {
  constructor(array, templateSelector, handleImageClick) {
    this._image = array.image;
    this._alt = array.title;
    this._title = array.title;
    this._templateSelector = templateSelector;
    this._handleImageClick = handleImageClick;
  }

  // Получение шаблона
  _getTemplate() {
    this._placeElement = this._templateSelector.querySelector('.place').cloneNode(true);

    return this._placeElement;
  }

  // Создание карточки
  createPlace() {
    this._content = this._getTemplate();

    this._placeImage = this._content.querySelector('.place__image');
    this._urnButton = this._content.querySelector('.place__urn-button');
    this._likeButton = this._content.querySelector('.place__like-button');

    this._placeImage.src = this._image;
    this._content.querySelector('.place__image').alt = this._title;
    this._content.querySelector('.place__title').textContent = this._title;

    this._setEventListeners();

    return this._content;
  }

  // Открытие попапа изображения
  _openPopUpImage() {
    this._handleImageClick(imagePopup);

    imagePopupImage.src = this._image;
    imagePopupImage.alt = this._title;
    imagePopupTitle.textContent = this._title;
  }

  // Лайк мест
  _toggleLike() {
    this._likeButton.classList.toggle('place__like-button_painted');
  }

  // Удаление мест
  _deletePlace() {
    this._content.remove();
  }

  // Установка слушателей
  _setEventListeners() {
    this._placeImage.addEventListener('click', () => {
      this._openPopUpImage();
    });

    this._urnButton.addEventListener('click', () => {
      this._deletePlace();
    });

    this._likeButton.addEventListener('click', () => {
      this._toggleLike();
    });
  }
}

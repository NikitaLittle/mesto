export class Card {
  constructor(array, template, handleImageClick) {
    this._image = array.link;
    this._alt = array.name;
    this._title = array.name;
    this._template = template;
    this._handleImageClick = handleImageClick;
  }

  // Получение шаблона
  _getTemplate() {
    this._placeElement = this._template.querySelector('.place').cloneNode(true);

    return this._placeElement;
  }

  // Создание карточки
  createPlace(newCard) {
    this._content = this._getTemplate();

    this._placeImage = this._content.querySelector('.place__image');
    this._urnButton = this._content.querySelector('.place__urn-button');
    this._likeButton = this._content.querySelector('.place__like-button');

    this._placeImage.src = this._image;
    this._placeImage.alt = this._title;
    this._content.querySelector('.place__title').textContent = this._title;

    this._setEventListeners();

    return this._content;
  }

  // Лайк мест
  _toggleLike() {
    this._likeButton.classList.toggle('place__like-button_painted');
  }

  // Удаление мест
  _deletePlace() {
    this._content.remove();
    this._content = null;
  }

  // Установка слушателей
  _setEventListeners() {
    this._placeImage.addEventListener('click', () => {
      this._handleImageClick(this._image, this._title);
    });

    this._urnButton.addEventListener('click', () => {
      this._deletePlace();
    });

    this._likeButton.addEventListener('click', () => {
      this._toggleLike();
    });
  }
}

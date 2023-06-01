export class Card {
  constructor(data, template, handleImageClick, handleDeleteClick, handleLikeClick, userId) {
    this._image = data.link;
    this._alt = data.name;
    this._title = data.name;
    this._cardId = data.cardId;
    this._likes = data.likes;
    this._ownerId = data.ownerId;

    this._userId = userId;
    this._template = template;
    this._content = this._getTemplate();
    this._handleImageClick = handleImageClick;
    this._handleDeleteClick = handleDeleteClick;
    this._handleLikeClick = handleLikeClick;
  }

  // Получение шаблона
  _getTemplate() {
    this._placeElement = this._template.querySelector('.place').cloneNode(true);

    return this._placeElement;
  }

  isLikes() {
    this._userIsLikes = this._likes.find((user) => {
      return user._id === this._userId;
    });

    return this._userIsLikes;
  }

  _paintLike() {
    this._likeButton.classList.add('place__like-button_painted');
  }

  _unPaintLike() {
    this._likeButton.classList.remove('place__like-button_painted');
  }

  setLikes(newLikes) {
    this._likes = newLikes;
    this._numberLikes.textContent = this._likes.length;

    if (this.isLikes()) {
      this._paintLike();
    } else {
      this._unPaintLike();
    }
  }

  // Создание карточки
  createPlace() {
    this._placeImage = this._content.querySelector('.place__image');
    this._urnButton = this._content.querySelector('.place__urn-button');
    this._likeButton = this._content.querySelector('.place__like-button');
    this._numberLikes = this._content.querySelector('.place__number-likes');

    this._placeImage.src = this._image;
    this._placeImage.alt = this._title;
    this._content.querySelector('.place__title').textContent = this._title;

    this._setEventListeners();
    this.setLikes(this._likes);

    if (this._ownerId !== this._userId) {
      this._urnButton.style.display = 'none';
    }

    return this._content;
  }

  // Удаление мест
  deletePlace() {
    this._content.remove();
    this._content = null;
  }

  // Установка слушателей
  _setEventListeners() {
    this._placeImage.addEventListener('click', () => {
      this._handleImageClick(this._image, this._title);
    });

    this._urnButton.addEventListener('click', () => {
      this._handleDeleteClick(this._cardId);
    });

    this._likeButton.addEventListener('click', () => {
      this._handleLikeClick(this._cardId);
    });
  }
}

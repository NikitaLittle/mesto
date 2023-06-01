import PopupWithForm from './PopupWithForm';

export default class PopupWithQuestion extends PopupWithForm {
  constructor(popupSelector, handleFormSubmit) {
    super(popupSelector, handleFormSubmit);
  }

  open(cardId, deleteCard) {
    super.open();
    this._cardId = cardId;
    this.deleteCard = deleteCard;
  }

  setEventListeners() {
    this._form.addEventListener('submit', (evt) => {
      evt.preventDefault();
      this._handleFormSubmit(this._cardId, this.deleteCard);
      super.close();
    });
  }
}

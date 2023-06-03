import Popup from './Popup';

export default class PopupWithQuestion extends Popup {
  constructor(popupSelector, handleFormSubmit) {
    super(popupSelector);
    this._handleFormSubmit = handleFormSubmit;
    this._form = this._popup.querySelector('.popup__form');
  }

  open(cardId, deleteCard) {
    super.open();
    this._cardId = cardId;
    this.deleteCard = deleteCard;
  }

  setEventListeners() {
    super.setEventListeners();
    this._form.addEventListener('submit', (evt) => {
      evt.preventDefault();
      this._handleFormSubmit(this._cardId, this.deleteCard);
    });
  }
}

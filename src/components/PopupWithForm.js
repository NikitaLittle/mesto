import Popup from './Popup';

export default class PopupWithForm extends Popup {
  constructor(popupSelector, handleFormSubmit) {
    super(popupSelector);
    this._handleFormSubmit = handleFormSubmit;
    this._form = this._popup.querySelector('.popup__form');
    this._inputList = this._form.querySelectorAll('.popup__input');
    this._buttonSubmit = this._popup.querySelector('.popup__button');
    this._buttonSubmitText = this._buttonSubmit.textContent;
    this._inputValue = {};
  }

  _getInputValues() {
    this._inputList.forEach((input) => {
      this._inputValue[input.name] = input.value;
    });
    return this._inputValue;
  }

  close() {
    super.close();
    this._form.reset();
  }

  loadProcess({ isLoad, status }) {
    if (isLoad) {
      this._buttonSubmit.textContent = `${status}`;
    } else {
      this._buttonSubmit.textContent = this._buttonSubmitText;
    }
  }

  setEventListeners() {
    super.setEventListeners();
    this._form.addEventListener('submit', (evt) => {
      evt.preventDefault();
      this._handleFormSubmit(this._getInputValues());
      this.close();
    });
  }
}

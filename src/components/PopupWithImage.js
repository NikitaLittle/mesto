import Popup from './Popup';

export default class PopupWithImage extends Popup {
  constructor(popupSelector, imagePopupImageSelector, imagePopupTitleSelector) {
    super(popupSelector);
    this._imagePopupImageSelector = this._popupSelector.querySelector(imagePopupImageSelector);
    this._imagePopupTitleSelector = this._popupSelector.querySelector(imagePopupTitleSelector);
  }

  open(image, title) {
    super.open();
    this._imagePopupImageSelector.src = image;
    this._imagePopupImageSelector.alt = title;
    this._imagePopupTitleSelector.textContent = title;
  }
}

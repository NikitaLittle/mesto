import Popup from './Popup';

export default class PopupWithImage extends Popup {
  constructor(popupSelector, imagePopupImageSelector, imagePopupTitleSelector) {
    super(popupSelector);
    this._imagePopupImage = this._popup.querySelector(imagePopupImageSelector);
    this._imagePopupTitle = this._popup.querySelector(imagePopupTitleSelector);
  }

  open(image, title) {
    super.open();
    this._imagePopupImage.src = image;
    this._imagePopupImage.alt = title;
    this._imagePopupTitle.textContent = title;
  }
}

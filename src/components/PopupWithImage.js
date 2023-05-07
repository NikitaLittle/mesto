import { imagePopupImage, imagePopupTitle } from '../utils/constants';
import Popup from './Popup';

export default class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
  }

  open(image, title) {
    super.open();
    imagePopupImage.src = image;
    imagePopupImage.alt = title;
    imagePopupTitle.textContent = title;
  }
}

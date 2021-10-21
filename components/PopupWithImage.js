import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
  }
 
  open({ link, name }) {
    const elementImage = this._popupSelector.querySelector('.popup__image');
    elementImage.src = link;
    elementImage.alt = name;
    this._popupSelector.querySelector('.popup__name-title').textContent = name;
    super.open();
  }
}
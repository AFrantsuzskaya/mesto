import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector)
    this._elementImage = this._popupElement.querySelector('.popup__image');
  }

  open({ link, name }) {
    this._elementImage.src = link;
    this._elementImage.alt = name;
    this._popupElement.querySelector('.popup__name-title').textContent = name;
    super.open();
  }
}
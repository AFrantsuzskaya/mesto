import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
  open({ link, name }) {
    const elementImage = this._popupElement.querySelector('.popup__image');
    elementImage.src = link;
    elementImage.alt = name;
    this._popupElement.querySelector('.popup__name-title').textContent = name;
    super.open();
  }
}
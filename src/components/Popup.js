export default class Popup {
  constructor(popupSelector) {
    this._popupElement = document.querySelector(popupSelector);
    //селектор попапа
    this._handleEscClose = this._handleEscClose.bind(this);
    //явная приявязка колбэка ф-ции
    this._elementImage = this._popupElement.querySelector('.popup__image');
  }

  open() {
    this._popupElement.classList.add('popup_open');
    document.addEventListener('keydown', this._handleEscClose);
  }

  close() {
    this._popupElement.classList.remove('popup_open');
    document.removeEventListener('keydown', this._handleEscClose);
  }

  _handleEscClose(evt) {
    if (evt.key === 'Escape') {
      this.close();
    }
  }
  setEventListeners() { 
    this._popupElement.querySelector('.popup__close-button').addEventListener('click', () => {
        this.close();
      });
    this._popupElement.addEventListener('mousedown', (evt) => {
        if(evt.target.classList.contains('popup_open')) {
          this.close();
        }
    });
  }
}


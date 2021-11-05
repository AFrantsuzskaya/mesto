import Popup from "./Popup.js"

export default class PopupWitDeleteForm extends Popup {
    constructor(popupSelector, handleSubmit) {
        super(popupSelector);
        this._handleSubmit = handleSubmit;
        //this._formElement = document.querySelector('.popup__form_block_delete');
        this._form = this._popupElement.querySelector('.popup__form');
    }
    setSubmitHandler(handleSubmit) {
      this._handleSubmit = handleSubmit;
    }
    
    setEventListeners() {
      super.setEventListeners();
      this._form.addEventListener('submit', (event) => {
        event.preventDefault();
        this._handleSubmit();
      })
    }

}
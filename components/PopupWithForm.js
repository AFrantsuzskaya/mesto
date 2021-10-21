import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
  constructor(popupSelector, handleFormSubmit) {
    super(popupSelector);
    this._handleFormSubmit = handleFormSubmit;
    //колбэк сабмита формы
    this._form = this._popupSelector.querySelector('.popup__form');
      
  }
  _getInputValues() {
    //собирает данные всех полей формы
    const inputList = Array.from(this._form.querySelectorAll('.popup__field'));
    //массив инпутов
    const formValues = {};
    //объект данных инпутов
    inputList.forEach(input => formValues[input.name] = input.value);
    //массив - элемент массива - элемент объекта данных формы (по name) = данные инпута
    return formValues;
    //вернуть объект с данными всех полей формы
  }
  setEventListeners() {
    //обработчик сабмита
        this._form.addEventListener('submit', (event) => {
            this._handleFormSubmit(this._getInputValues());
            //колбэк сабмита формы(собирает данные всех полей формы)
            this.close();
        });
     super.setEventListeners();
     
  }

  close() {
    this._form.reset();
    super.close();
  }
}
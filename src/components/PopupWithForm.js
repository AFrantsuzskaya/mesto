import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
  constructor(popupSelector, handleFormSubmit) {
    super(popupSelector);
    this._handleFormSubmit = handleFormSubmit;
    //колбэк сабмита формы
    this._form = this._popupElement.querySelector('.popup__form');
    this._inputList = Array.from(this._form.querySelectorAll('.popup__field'));
    this.submitButton = this._form.querySelector('.popup__submit-button');
      
  }
  _getInputValues() {
    const formValues = {};
    //объект данных инпутов
    this._inputList.forEach(input => formValues[input.name] = input.value);
    //массив - элемент массива - элемент объекта данных формы (по name) = данные инпута
    return formValues;
    //вернуть объект с данными всех полей формы
  }
  setEventListeners() {
    this._form.addEventListener('submit', (event) => {
      this._handleFormSubmit(this._getInputValues());
    });
    super.setEventListeners();
  }

  close() {
    this._form.reset();
    super.close();
  }

  renderLoading(isLoading = false, title = 'Сохранить', loadingTitle = 'Загрузка...') {
    this.submitButton.textContent = isLoading ? loadingTitle : title;
  }
}
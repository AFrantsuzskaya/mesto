export default class FormValidator {
  constructor(config, formElement) {
    this._config = config;
    this._formElement = formElement;
    this._inputList = Array.from(this._formElement.querySelectorAll(this._config.inputSelector));
    this._buttonElement = this._formElement.querySelector(this._config.submitButtonSelector);
  }
  //показать/скрыть сообщение об ошибке
  _showInputError = (inputElement) => {
    this._errorElement = this._formElement.querySelector(`#${inputElement.id}-error`);
    inputElement.classList.add(this._config.inputErrorClass);
    this._errorElement.textContent = inputElement.validationMessage;
    this._errorElement.classList.add(this._config.errorClass);
  }
  
   _hideInputError = (inputElement) => {
    this._errorElement = this._formElement.querySelector(`#${inputElement.id}-error`);
    inputElement.classList.remove(this._config.inputErrorClass);
    this._errorElement.classList.remove(this._config.errorClass);
    this._errorElement.textContent = '';
  }

  //включение/выключение кнопок сабмит 
  disableSubmitButton = () => {
    this._buttonElement.classList.add(this._config.inactiveButtonClass);
    this._buttonElement.setAttribute('disabled', '');
  };
  
  _enableSubmitButton = () => {
    this._buttonElement.classList.remove(this._config.inactiveButtonClass);
    this._buttonElement.removeAttribute('disabled');
  }
  
  //поиск ошибки в формах для кнопки
  _hasInvalidInput = () => {
    return this._inputList.some(inputElement => {
      return !inputElement.validity.valid;
    });
  }

  // проверка валидности поля
  _checkInputValidity = (inputElement) => {
    if (!inputElement.validity.valid) {
      this._showInputError(inputElement);
    } else {
      this._hideInputError(inputElement);
    }
  }

  //отображение кнопки сабмит
  _toggleButtonState = () => {
      if (this._hasInvalidInput()) { 
      this.disableSubmitButton();
    } else {
      this._enableSubmitButton();
    }
  }

  //навешивание обработчиков событий формы
  _setEventListeners = () => {
    this._formElement.addEventListener('submit', (event) => {
        event.preventDefault();
    });
    this._inputList.forEach(inputElement => {
      inputElement.addEventListener('input', () => {
        this._checkInputValidity(inputElement);
        this._toggleButtonState();
      });
    });
    this._toggleButtonState();
  }

  enableValidation = () => {
      this._setEventListeners();
  }

  resetValidation = () => {
    this._toggleButtonState();
    this._inputList.forEach((inputElement) => {
      this._hideInputError(inputElement)
    })
  }
}
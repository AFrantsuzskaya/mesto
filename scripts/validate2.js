




const formElement = document.querySelector('.popup__form');
const formInput = formElement.querySelector('.popup__field');
// const buttonElement = formElement.querySelector('.popup__submit-button');

//const formError =  formElement.querySelector(`.${formInput.id}-error`);

//добавляет класс с ошибкой
const showInputError = (formElement, formInput, errorMessage) => {
  const formError = formElement.querySelector(`#${formInput.id}-error`);
  formInput.classList.add('popup__field_type_error');
  //показать сообщение об ошибке
  formError.textContent = errorMessage;
  formError.classList.add('popup__error_visible');
};

// удаляет класс с ошибкой
const hideInputError = (formElement, formInput) => {
  const formError = formElement.querySelector(`#${formInput.id}-error`);
  formInput.classList.remove('popup__field_type_error');
  //скрыть сообщение об ошибке
  formError.classList.remove('popup__error_visible');
  //очистим ошибку
  formError.textContent = '';
};

//проверяет валидность и вызывает внутри показать или скрыть
const isValid = (formElement, formInput) => {
  if (!formInput.validity.valid) {
    showInputError(formElement, formInput, formInput.validationMessage);

  } else {
    hideInputError(formElement, formInput);
  }
};

const setEventListeners = (formElement) => {
  //нашли все поля формы и сделали из них массив
  const inputList = Array.from(formElement.querySelectorAll('.popup__field'));
  //найдем в текущей форма кнопку отправки
  const buttonElement = formElement.querySelector('.popup__submit-button');
  //toggleButtonState(inputList, buttonElement);

  inputList.forEach((formInput) => {
    //каждому полю добавила обработчик
    formInput.addEventListener('input', () => {
      //внутри колбэка вызываем isValid передав ей форму и проверяемый элемент
      isValid(formElement, formInput);

      toggleButtonState(inputList, buttonElement);
    });
  });
};

const enableValidation = () => {
  const formList = Array.from(document.querySelectorAll('.popup__form'));
  formList.forEach((formElement) => {
    formElement.addEventListener('submit', (evt) => {
      evt.preventDefault();
    });
    setEventListeners(formElement);
  });
};

enableValidation();

const hasInvalidInput = (inputList) => {
  return inputList.some((formInput) => {
    return !formInput.validity.valid;
  });
}
/*
const hasAnEmptyInput = (inputList) => {
  return !inputList.every((formInput) => {
    return formInput.value.lenght === 0;
  });
}
|| hasAnEmptyInput(inputList)*/

const toggleButtonState = (inputList, buttonElement) => {
  //если хоть один инпут не валиден то сделать кнопку не активной
  if (hasInvalidInput(inputList)) {
    buttonElement.classList.add('popup__submit-button_disabled');
  } else {
    // в ином случае убрать класс не активности
    buttonElement.classList.remove('popup__submit-button_disabled');
  }
}

formElement.addEventListener('submit', function(evt) {
  evt.preventDefault();
});

formInput.addEventListener('input', isValid);


//проверка начально пустых полей
/*const hasNotInputValues = (inputList) => {
  return inputList.every(inputElement => {
    return inputElement.value.lenght === 0;          
  });
}*/
/*
const toggleButtonState = (formElement, inputList, submitButtonSelector, inactiveButtonClass) => {
  const buttonElement = formElement.querySelector(submitButtonSelector);
  if (hasInvalidInput(inputList)) {  // || hasNotInputValues(inputList)
    disableSubmitButton(buttonElement, inactiveButtonClass);
  } else {
    enableSubmitButton(buttonElement, inactiveButtonClass);
  }
};*/
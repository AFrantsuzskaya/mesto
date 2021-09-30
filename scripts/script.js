import Card from "./Card.js";
import FormValidator from "./FormValidator.js";
import { initialCards } from "./initial-сards.js";

//submit-popup
const openSubmitPopupButton = document.querySelector('.profile__edit-button'); 
const popupTypeSubmit = document.querySelector('.popup_type_submit');
const closePopupInfoButton = document.querySelector('.popup__close-button_block_info');
const profileName = document.querySelector('.profile__name');
const profileJob = document.querySelector('.profile__occupation');
const popupFormElementInfo = document.querySelector('.popup__form_block_info');
const nameInput = document.querySelector('.popup__field_type_mame');
const jobInput = document.querySelector('.popup__field_type_about-me');

//add-popup
const openPopupAddButton = document.querySelector('.profile__add-button');
const popupTypeAdd = document.querySelector('.popup_type_add');
const placeNameInput = document.querySelector('.popup__field_type_placename');
const addLinkInput = document.querySelector('.popup__field_type_link');
const submitButtonAdd = document.querySelector('.popup__submit-button_type_add');
const closePopupAddButton = document.querySelector('.popup__close-button_block_add');

//image-popup
const popupTypeImage = document.querySelector('.popup_type_image');
const popupImage = document.querySelector('.popup__image');
const popupTitle = document.querySelector('.popup__name-title');
const closePopupImageButton = document.querySelector('.popup__close-button_block_image');

//cards
const popupFormAddCard = document.querySelector('.popup__form_block_add-card');
const elementsCard = document.querySelector('.elements__content'); // контейнер для публикации картинок

// список попапов
const popupsList = document.querySelectorAll('.popup');
//переменная для кнопки esc
const closePopupKeyCode = 27;

//
const config = {
  formSelector: '.popup__form',
  inputSelector: '.popup__field',
  submitButtonSelector: '.popup__submit-button',
  inactiveButtonClass: 'popup__submit-button_disabled',
  inputErrorClass: 'popup__field_type_error',
  errorClass: 'popup__error_visible'
}

//функции открытия/закрытия popup

function openPopup (popup) {
  popup.classList.add('popup_open');
  document.addEventListener('keydown', closePopupEsc);
}

function closePopup(popup) {
  popup.classList.remove('popup_open');
  document.removeEventListener('keydown', closePopupEsc);
}

// ф-ция закрытия при нажатии Esc
const closePopupEsc = (evt) => {
  if (evt.keyCode === closePopupKeyCode) {
    const openPopapSelector = document.querySelector('.popup_open');
    closePopup(openPopapSelector);
  }
}; 
// функция добавления данных из формы Info
function handleProfileFormSubmit (event) {
  event.preventDefault();
  profileName.textContent = nameInput.value;
  profileJob.textContent = jobInput.value;
  closePopup(popupTypeSubmit);
}

//открытие и наполнение попапа с изображением
function handleImageClick (name, link) {
  popupImage.src = link;
  popupImage.alt = name;
  popupTitle.textContent = name;
  openPopup(popupTypeImage);
}

function addCard (data) {
  const card = new Card(data, '#element__template', handleImageClick);
  const cardElement = card.render();
  elementsCard.prepend(cardElement);
}

initialCards.forEach((item) => {
  addCard(item);
});

function handleElementFormSubmit(event) {
  event.preventDefault();
  const data = {
    name: placeNameInput.value,
    link: addLinkInput.value
  };
  addCard(data);
  closePopup(popupTypeAdd);
  popupFormAddCard.reset();
  submitButtonAdd.classList.add(config.inactiveButtonClass);
  submitButtonAdd.setAttribute('disabled', '');
};

//валидация форм
const formInfoValid = new FormValidator(config, popupFormElementInfo);
formInfoValid.enableValidation();
const formAddCardValid = new FormValidator(config, popupFormAddCard);
formAddCardValid.enableValidation();

//обработчики

openSubmitPopupButton.addEventListener('click', function() {
  if (!popupTypeSubmit.classList.contains('popup_open')) {
    nameInput.value = profileName.textContent;
    jobInput.value = profileJob.textContent;
  }
  openPopup(popupTypeSubmit);
});

openPopupAddButton.addEventListener('click', () => {
  openPopup(popupTypeAdd);
});

closePopupInfoButton.addEventListener('click', () => {
  closePopup(popupTypeSubmit);
});

closePopupAddButton.addEventListener('click', () => {
  closePopup(popupTypeAdd);
});

closePopupImageButton.addEventListener('click', () => {
  closePopup(popupTypeImage);
});

popupFormElementInfo.addEventListener('submit', handleProfileFormSubmit); 

popupFormAddCard.addEventListener('submit', handleElementFormSubmit);

//закрытие попап при клике вне формы 
popupsList.forEach((popup) => {
  popup.addEventListener('mousedown', (evt) => {
    if(evt.target.classList.contains('popup_open')) {
      closePopup(popup);
    }
  });
});





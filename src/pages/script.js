import { initialCards } from "../utils/initial-сards.js";
import Card from "../components/Card.js";
import FormValidator from "../components/FormValidator.js";
import Section from "../components/Section.js";
import PopupWithImage from "../components/PopupWithImage.js";
import PopupWithForm  from "../components/PopupWithForm.js";
import UserInfo from "../components/UserInfo.js";
import './index.css';

const openProfilePopupButton = document.querySelector('.profile__edit-button'); 
const popupFormElementInfo = document.querySelector('.popup__form_block_info');
const openPopupAddButton = document.querySelector('.profile__add-button');
const popupFormAddCard = document.querySelector('.popup__form_block_add-card');

const config = {
  formSelector: '.popup__form',
  inputSelector: '.popup__field',
  submitButtonSelector: '.popup__submit-button',
  inactiveButtonClass: 'popup__submit-button_disabled',
  inputErrorClass: 'popup__field_type_error',
  errorClass: 'popup__error_visible'
}
const configSelectors = {
  popupImageSelector: '.popup_type_image',
  popupAddCardSelector: '.popup_type_add',
  poppupProfileSelector: '.popup_type_submit',
  templateSelector: '#element__template',
  elementsContainer: '.elements__content',
  profileName: '.profile__name',
  profileAbout: '.profile__occupation',
  formInfo: 'form[name="form_info"]'
}

// попап с картинкой
const popupImage = new PopupWithImage(configSelectors.popupImageSelector);
// попап добавляющий новую карточку
const popupAddCard = new PopupWithForm(configSelectors.popupAddCardSelector, (data) => {
  cardList.addItem(createCard(data));
  formAddCardValid.disableSubmitButton();
});
// попап личного профиля
const popupWithProfileForm = new PopupWithForm(configSelectors.poppupProfileSelector, (data) => {
  userInfo.setUserInfo(data);
});

// ф-ция создания карточки
const createCard = (data) => {
  const card = new Card(data, configSelectors.templateSelector, (data) => {
      popupImage.open(data);
    });
  const cardElement = card.render(); 
  return cardElement;
};

const cardList = new Section({ 
  items: initialCards, 
  renderer: (item) => {
    cardList.addItem(createCard(item));
  } },
  configSelectors.elementsContainer);
  
cardList.renderAll();

const userInfo = new UserInfo ({ 
  nameSelector:  configSelectors.profileName,
  aboutSelector: configSelectors.profileAbout });

//валидация форм
const formInfoValid = new FormValidator(config, popupFormElementInfo);
formInfoValid.enableValidation();
const formAddCardValid = new FormValidator(config, popupFormAddCard);
formAddCardValid.enableValidation();


popupImage.setEventListeners();
popupWithProfileForm.setEventListeners(); 
popupAddCard.setEventListeners();

openProfilePopupButton.addEventListener('click', function() {
  const data = userInfo.getUserInfo();
  const form = document.querySelector(configSelectors.formInfo);
  for (let key in data) {
    form.elements[key].value = data[key];
  } 
  popupWithProfileForm.open();
});

openPopupAddButton.addEventListener('click', () => {
  popupAddCard.open();
});

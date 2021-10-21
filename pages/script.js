import { openSubmitPopupButton, popupFormElementInfo, openPopupAddButton, popupFormAddCard, config } from "../utils/constants.js"
import { initialCards } from "../utils/initial-сards.js";
import Card from "../components/Card.js";
import FormValidator from "../components/FormValidator.js";
import Section from "../components/Section.js";
import PopupWithImage from "../components/PopupWithImage.js";
import PopupWithForm  from "../components/PopupWithForm.js";
import UserInfo from "../components/UserInfo.js";

// попап с картинкой
const popupImage = new PopupWithImage('.popup_type_image');
// попап добавляющий новую карточку
const popupAddCard = new PopupWithForm('.popup_type_add', (data) => {
  cardList.addItem(createCard(data));
});
// попап личного профиля
const popupWithProfileForm = new PopupWithForm('.popup_type_submit', (data) => {
  userInfo.setUserInfo(data);
});

// ф-ция создания карточки
const createCard = (data) => {
  const card = new Card(data, '#element__template', (data) => {
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
  '.elements__content');
  
cardList.renderAll();

const userInfo = new UserInfo ({ 
  nameSelector:  '.profile__name',
  aboutSelector: '.profile__occupation' });

//валидация форм
const formInfoValid = new FormValidator(config, popupFormElementInfo);
formInfoValid.enableValidation();
const formAddCardValid = new FormValidator(config, popupFormAddCard);
formAddCardValid.enableValidation();


popupImage.setEventListeners();
popupWithProfileForm.setEventListeners(); 

openSubmitPopupButton.addEventListener('click', function() {
  const data = userInfo.getUserInfo();
  const form = document.querySelector('form[name="form_info"]');
  for (let key in data) {
    form.elements[key].value = data[key];
  } 
  popupWithProfileForm.open();
});

openPopupAddButton.addEventListener('click', () => {
  popupAddCard.open();
  popupAddCard.setEventListeners();
});


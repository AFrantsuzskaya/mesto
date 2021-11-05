import { validationConfig, configSelectors } from "../utils/constants.js";
import Card from "../components/Card.js";
import FormValidator from "../components/FormValidator.js";
import Section from "../components/Section.js";
import PopupWithImage from "../components/PopupWithImage.js";
import PopupWithForm  from "../components/PopupWithForm.js";
import UserInfo from "../components/UserInfo.js";
import Api from "../components/Api.js";
import './index.css';
import PopupWitDeleteForm from "../components/PopupWithDeleteForm.js";

const openProfilePopupButton = document.querySelector('.profile__edit-button'); 
const popupFormElementInfo = document.querySelector('.popup__form_block_info');
const openPopupAddButton = document.querySelector('.profile__add-button');
const popupFormAddCard = document.querySelector('.popup__form_block_add-card');
const popupFormAddAvatar = document.querySelector('.popup__form_block_avatar');
const inputName = document.querySelector('.popup__field_type_name');
const inputAbout = document.querySelector('.popup__field_type_about-me');
let userId = null;

const userInfo = new UserInfo ({ 
  nameSelector:  configSelectors.profileName,
  aboutSelector: configSelectors.profileAbout,
  avatarSelector: configSelectors.avatar,
});

const cardList = new Section({ 
  renderer: (item) => {
    cardList.addItem(createCard(item));
    } 
  },
  configSelectors.elementsContainer);
  


const api = new Api({
  address: 'https://mesto.nomoreparties.co/v1',
  groupId: 'cohort-29',
  token: 'f416e76f-617f-4e84-afcd-d10e230d2054'
})
//  данные с сервера
api
  .getAppInfo()
  .then(([userInfoRes, cardListRes]) => {
    userId = userInfoRes._id
    cardList.renderAll(cardListRes.reverse());
    userInfo.setUserInfo({
      name: userInfoRes.name,
      about: userInfoRes.about,
      link: userInfoRes.avatar
    })
  })
  .catch(err => console.log(`Ошибка загрузки инициирующих данных: ${err}`))

const popupAvatar = new PopupWithForm(configSelectors.popupAvatar, (data) => {
  popupAvatar.renderLoading(true, 'Сохранить', 'Сохраниние...')
  api.setUserAvatar(data.avatar)
  .then((info) => {
    userInfo.setUserInfo({
      link: info.avatar
    });
    popupAvatar.close();
    formAddAvatarValid.disableSubmitButton();
  })
  .catch(err => console.log(`Ошибка сохранения аватара: ${err}`))
  .finally(() => {
    popupAvatar.renderLoading(false, 'Сохранить', 'Сохраниние...')
  })
})

const popupCardDelete = new PopupWitDeleteForm(configSelectors.popupDelete);

// попап с картинкой
const popupImage = new PopupWithImage(configSelectors.popupImageSelector);
// попап добавляющий новую карточку
const popupAddCard = new PopupWithForm(configSelectors.popupAddCardSelector, (data) => {
  popupAddCard.renderLoading(true, 'Создать', 'Создание...')
  api
    .setCard(data.name, data.link)
    .then((data) => { 
      cardList.addItem(createCard(data));
      popupAddCard.close();
    })
    .catch(err => console.log(`Ошибка загрузки карточки: ${err}`))
    .finally(() => {
      popupAddCard.renderLoading(false, 'Создать', 'Создание...')
    })
    
})
  
  
// попап личного профиля
const popupWithProfileForm = new PopupWithForm(configSelectors.poppupProfileSelector, (data) => {
  popupWithProfileForm.renderLoading(true, 'Создать', 'Создание...')
  api
    .setUserInfo(data.name, data.about)
    .then((userInfoRes) => {
      userInfo.setUserInfo({
        name: userInfoRes.name,
        about: userInfoRes.about
      })
      popupWithProfileForm.close()
    })
    .catch(err => console.log(`Ошибка сохранения данных профиля: ${err}`))
    .finally(() => {
      popupWithProfileForm.renderLoading(false, 'Создать', 'Создание...')
    })
    
});

// ф-ция создания карточки
const createCard = (data) => {
  const card = new Card(
    data,
    userId, 
    configSelectors.templateSelector, 
    (data) => {
      popupImage.open(data);
    }, 
    (card) => {
      popupCardDelete.open();
      popupCardDelete.setSubmitHandler(() => {
        api
          .removeCard(card.getId())
          .then(() => {
            card.removeCard()
            popupCardDelete.close()
          })
        .catch(err => console.log(`Ошибка удаления карточки: ${err}`))
        })
    },
    (card) => {
      api
        .toggleLike(card.getId(), !card.isLiked())
        .then(data => card.setLikes(data.likes))
        .catch(err => console.log(`Ошибка изменения состояния лайка ${err}`))
    });
  const cardElement = card.render(); 
  return cardElement;
};

//валидация форм
const formInfoValid = new FormValidator(validationConfig, popupFormElementInfo);
formInfoValid.enableValidation();
const formAddCardValid = new FormValidator(validationConfig, popupFormAddCard);
formAddCardValid.enableValidation();
const formAddAvatarValid = new FormValidator(validationConfig, popupFormAddAvatar);
formAddAvatarValid.enableValidation();


popupImage.setEventListeners();
popupWithProfileForm.setEventListeners(); 
popupAddCard.setEventListeners();
popupAvatar.setEventListeners();
popupCardDelete.setEventListeners();



openProfilePopupButton.addEventListener('click', function() {
  formInfoValid.resetValidation();
  const data = userInfo.getUserInfo();
  inputName.value = data.name;
  inputAbout.value = data.about;
  popupWithProfileForm.open();
});

openPopupAddButton.addEventListener('click', () => {
  formAddCardValid.resetValidation();
  popupAddCard.open();
  formAddCardValid.disableSubmitButton();
});

document.querySelector('.profile__avatar').addEventListener('click', ()=> {
  formAddAvatarValid.resetValidation();
  popupAvatar.open();
})




  


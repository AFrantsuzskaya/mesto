import { validationConfig, configSelectors } from "../utils/constants.js";
import Card from "../components/Card.js";
import FormValidator from "../components/FormValidator.js";
import Section from "../components/Section.js";
import PopupWithImage from "../components/PopupWithImage.js";
import PopupWithForm  from "../components/PopupWithForm.js";
import UserInfo from "../components/UserInfo.js";
import Api from "../components/Api.js";
import './index.css';
import Popup from "../components/Popup.js";

const openProfilePopupButton = document.querySelector('.profile__edit-button'); 
const popupFormElementInfo = document.querySelector('.popup__form_block_info');
const openPopupAddButton = document.querySelector('.profile__add-button');
const popupFormAddCard = document.querySelector('.popup__form_block_add-card');
const popupFormAddAvatar = document.querySelector('.popup__form_block_avatar');
const inputName = document.querySelector('.popup__field_type_name');
const inputAbout = document.querySelector('.popup__field_type_about-me');
let userId = null;

const loadingView = (popup, isLoading = false, title = 'Сохранить', loadingTitle = 'Загрузка...') => {
  const popupSubmitButton = document.querySelector('.popup__submit-button');
  popupSubmitButton.textContent = isLoading ? loadingTitle : title;
}

const userInfo = new UserInfo ({ 
  nameSelector:  configSelectors.profileName,
  aboutSelector: configSelectors.profileAbout,
  avatarSelector: configSelectors.avatar
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
    console.log(userInfoRes._id)
    cardList.renderAll(cardListRes.reverse());
    userInfo.setUserInfo({
      name: userInfoRes.name,
      about: userInfoRes.about,
      link: userInfoRes.avatar
    })
  })
  .catch(err => console.log(`Ошибка загрузки инициирующих данных: ${err}`))

const popupAvatar = new PopupWithForm(configSelectors.popupAvatar, (data) => {
  loadingView(popupAvatar, true, 'Сохранить', 'Сохраниние...')
  api.setUserAvatar(data.avatar)
  .then((info) => {
    userInfo.setUserInfo({
      link: info.avatar
    });
    popupAvatar.close();
  })
  .catch(err => console.log(`Ошибка сохранения аватара: ${err}`))
  .finally(() => {
    loadingView(popupAvatar, false, 'Сохранить', 'Сохраниние...')
  })
  formAddAvatarValid.disableSubmitButton();
})

const popupCardDelete = new Popup(configSelectors.popupDelete);

// попап с картинкой
const popupImage = new PopupWithImage(configSelectors.popupImageSelector);
// попап добавляющий новую карточку
const popupAddCard = new PopupWithForm(configSelectors.popupAddCardSelector, (data) => {
  loadingView(popupAvatar, true, 'Создать', 'Создание...')
  api
    .setCard(data.name, data.link)
    .then((data) => {
      api.getCardList().then((cards) => {
      console.log(cards)
      cardList.renderAll(cards.reverse())})
    .catch(err => console.log(`Ошибка загрузки карточки: ${err}`))
    .finally(() => {
      loadingView(popupAvatar, false, 'Создать', 'Создание...')
    })
  })
  
  formAddCardValid.disableSubmitButton();
});
// попап личного профиля
const popupWithProfileForm = new PopupWithForm(configSelectors.poppupProfileSelector, (data) => {
  const newUserInfo = {
    name: document.querySelector('.popup__field_type_name').value,
    about: document.querySelector('.popup__field_type_about-me').value
  };
  loadingView(popupAvatar, true, 'Создать', 'Создание...')
  api
    .setUserInfo(newUserInfo.name, newUserInfo.about)
    .then((userInfoRes) => {
      userInfo.setUserInfo({
        name: userInfoRes.name,
        about: userInfoRes.about
      })
    })
    .catch(err => console.log(`Ошибка сохранения данных профиля: ${err}`))
    .finally(() => {
      loadingView(popupAvatar, false, 'Создать', 'Создание...')
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
    () => {
      function removeCard(evt) {
        api
          .removeCard(this._id)
          .then(() => {
            api
              .getCardList()
              .then((cards) => {
                cardList.renderAll(cards.reverse())})
              .catch(err => console.log(`Ошибка удаления карточки: ${err}`))
          })
        popupCardDelete.close();
      }
      removeCard.bind(data);
      popupCardDelete.open();
      popupCardDelete._popupElement.querySelector('.popup__submit-button')
      .addEventListener('click', removeCard.bind(data));
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
  const data = userInfo.getUserInfo();
  inputName.value = data.name;
  inputAbout.value = data.about;
  popupWithProfileForm.open();
});

openPopupAddButton.addEventListener('click', () => {
  popupAddCard.open();
});

document.querySelector('.profile__avatar').addEventListener('click', ()=> {
  popupAvatar.open();
})




  


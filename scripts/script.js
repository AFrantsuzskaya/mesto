
//submit-popup

const openSubmitPopupButton = document.querySelector('.profile__edit-button'); 
const popupTypeSubmit = document.querySelector('.popup_type_submit');
const closePopupInfoButton = document.querySelector('.popup__close-button_block_info');
const profileName = document.querySelector('.profile__name');
const profileJob = document.querySelector('.profile__occupation');
const popupFormElementInfo = document.querySelector('.popup__form_block_info');
const nameInput = document.querySelector('.popup__field_type_mame');
const jobInput = document.querySelector('.popup__field_type_about-me');
const submitButtonBlockInfo = document.querySelector('.popup__submit-button');

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

//like

const likeButton = document.querySelector('.element__button');
const likeButtonActive = document.querySelector('.element__button_active');

//cards

const popupFormAddCard = document.querySelector('.popup__form_block_add-card');
const addCardButton = document.querySelector('.popup__submit-button_type_add');

const elementsCard = document.querySelector('.elements__content'); // контейнер для публикации картинок
const cardElementTitle = document.querySelector('.element__title');

const elementTemplate = document.querySelector('#element__template').content;

// список попапов

const popupsList = document.querySelectorAll('.popup');

const closePopupKeyCode = 27;

//функции

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

function handleProfileFormSubmit (event) {
    event.preventDefault();
    
    profileName.textContent = nameInput.value;
    profileJob.textContent = jobInput.value;
    closePopup(popupTypeSubmit);
}

function createCard(card) {
  const elementCard = elementTemplate.querySelector('.element').cloneNode(true);
  const elementImage = elementCard.querySelector('.element__image');
  elementImage.src = card.link;
  elementImage.alt = card.name;
  elementCard.querySelector('.element__title').textContent = card.name;
  elementCard.querySelector('.element__button').addEventListener('click', handleElementLikeButton);
  elementCard.querySelector('.element__trash-button').addEventListener('click', function() {
    elementCard.remove();
  });
  elementImage.addEventListener('click', function(event)  {
    popupImage.src = card.link;
    popupImage.alt = card.name;
    popupTitle.textContent = card.name;
    openPopup(popupTypeImage);
  });
  return elementCard;
};

function renderCard(card) {
  elementsCard.prepend(createCard(card));
}

function handleElementFormSubmit(event) {
  event.preventDefault();

  renderCard({
    name: placeNameInput.value,
    link: addLinkInput.value
  });
  closePopup(popupTypeAdd);
  popupFormAddCard.reset();
  disableSubmitButton(submitButtonAdd, actionClassesObj.inactiveButtonClass);
}

initialCards.forEach((card) => {
  createCard(card);
  renderCard(card);
});

function handleElementLikeButton (event) {
  event.target.classList.toggle('element__button_active');
}


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

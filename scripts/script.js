//submit-popup

const openPopupButton = document.querySelector('.profile__edit-button'); 
const popupSubmit = document.querySelector('.popup_type_submit');
const closePopupInfoButton = document.querySelector('.popup__close-button_block_info');
const profileName = document.querySelector('.profile__name');
const profileJob = document.querySelector('.profile__occupation');
const formElement = document.querySelector('.popup__form_blocK_info');
const nameInput = document.querySelector('.popup__field_type_mame');
const jobInput = document.querySelector('.popup__field_type_about-me');
const submitButton = document.querySelector('.popup__submit-button');

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

const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

//функции

function togglePopup(popup) {
  popup.classList.toggle('popup_open'); 
}

function formSubmitHandler (event) {
    event.preventDefault();
    
    profileName.textContent = nameInput.value;
    profileJob.textContent = jobInput.value;
    togglePopup(popupSubmit);
}

function addCard(card) {
  const elementCard = elementTemplate.querySelector('.element').cloneNode(true);
  elementCard.querySelector('.element__image').src = card.link;
  elementCard.querySelector('.element__image').alt = 'фотография';
  elementCard.querySelector('.element__title').textContent = card.name;
  elementCard.querySelector('.element__button').addEventListener('click', function(event) {
    event.target.classList.toggle('element__button_active');
  });
  elementCard.querySelector('.element__trash-button').addEventListener('click', function() {
    elementCard.remove();
  });
  elementCard.querySelector('.element__image').addEventListener('click', function(event)  {
    const img = event.target;
    popupImage.src = img.src;
    popupTitle.textContent = event.target.closest('.element')
    .querySelector('.element__title').textContent;
    togglePopup(popupTypeImage);
  });
  return elementCard;
};

function renderCard(card) {
  elementsCard.prepend(addCard(card));
}

function formAddHandler(event) {
  event.preventDefault();

  renderCard({
    name: placeNameInput.value,
    link: addLinkInput.value
  });
  togglePopup(popupTypeAdd);
  popupFormAddCard.reset();
}

initialCards.forEach((card) => {
  addCard(card);
  renderCard(card);
});

//обработчики

openPopupButton.addEventListener('click', function() {
  if (!popupSubmit.classList.contains('popup_open')) {
    nameInput.value = profileName.textContent;
    jobInput.value = profileJob.textContent;
}
togglePopup(popupSubmit);
});

openPopupAddButton.addEventListener('click', () => {
  togglePopup(popupTypeAdd);
});

closePopupInfoButton.addEventListener('click', () => {
  togglePopup(popupSubmit);
});

closePopupAddButton.addEventListener('click', () => {
  togglePopup(popupTypeAdd);
});

closePopupImageButton.addEventListener('click', () => {
  togglePopup(popupTypeImage);
});

formElement.addEventListener('submit', formSubmitHandler); 

popupFormAddCard.addEventListener('submit', formAddHandler);

let openPopupButton = document.querySelector('.profile__edit-button'); 
let popupSubmit = document.querySelector('.popup_type_submit');
let closePopupInfoButton = document.querySelector('.popup__close-button_block_info');
let profileName = document.querySelector('.profile__name');
let profileJob = document.querySelector('.profile__occupation');
let formElement = document.querySelector('.popup__form_blocK_info');
let nameInput = document.querySelector('.popup__field_type_mame');
let jobInput = document.querySelector('.popup__field_type_about-me');
let submitButton = document.querySelector('.popup__submit-button');

const openPopupAddButton = document.querySelector('.profile__add-button');
const popupTypeAdd = document.querySelector('.popup_type_add');
const placeNameInput = document.querySelector('.popup__field_type_placename');
const addLinkInput = document.querySelector('.popup__field_type_link');
const submitButtonAdd = document.querySelector('.popup__submit-button_type_add');
const closePopupAddButton = document.querySelector('.popup__close-button_block_add');

function togglePopup(popup) {
  popup.classList.toggle('popup_open'); 
}

function formSubmitHandler (event) {
    event.preventDefault();
    
    profileName.textContent = nameInput.value;
    profileJob.textContent = jobInput.value;
    togglePopup(popupSubmit);
}

openPopupButton.addEventListener('click', function() {
  if (!popupSubmit.classList.contains('popup_open')) {
    nameInput.value = profileName.textContent;
    jobInput.value = profileJob.textContent;
}
togglePopup(popupSubmit);
});

openPopupAddButton.addEventListener('click', function() {
  togglePopup(popupTypeAdd);
});

closePopupInfoButton.addEventListener('click', function() {
  togglePopup(popupSubmit);
});

closePopupAddButton.addEventListener('click', function(){
  togglePopup(popupTypeAdd);
})

formElement.addEventListener('submit', formSubmitHandler); 

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



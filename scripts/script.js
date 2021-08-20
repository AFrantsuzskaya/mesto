let openPopupButton = document.querySelector('.profile__edit-button'); 
let popup = document.querySelector('.popup');
let closePopupButton = document.querySelector('.popup__close-button');
let profileName = document.querySelector('.profile__name');
let profileJob = document.querySelector('.profile__occupation');
let formElement = document.querySelector('.popup__form');
let nameInput = document.querySelector('.popup__field_type_mame');
let jobInput = document.querySelector('.popup__field_type_about-me');
let submitButton = document.querySelector('.popup__submit-button');

function togglePopup() {
  if (!popup.classList.contains('popup_open')) {
    nameInput.value = profileName.textContent;
    jobInput.value = profileJob.textContent;
}
  
   popup.classList.toggle('popup_open');
}

function formSubmitHandler (event) {
    event.preventDefault();
    
    profileName.textContent = nameInput.value;
    profileJob.textContent = jobInput.value;
    togglePopup();
}

openPopupButton.addEventListener('click', togglePopup);
closePopupButton.addEventListener('click', togglePopup);
formElement.addEventListener('submit', formSubmitHandler); 

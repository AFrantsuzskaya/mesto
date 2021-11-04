import Api from "../components/Api"

export const validationConfig = {
    formSelector: '.popup__form',
    inputSelector: '.popup__field',
    submitButtonSelector: '.popup__submit-button',
    inactiveButtonClass: 'popup__submit-button_disabled',
    inputErrorClass: 'popup__field_type_error',
    errorClass: 'popup__error_visible'
  }
export const configSelectors = {
    popupImageSelector: '.popup_type_image',
    popupAddCardSelector: '.popup_type_add',
    poppupProfileSelector: '.popup_type_submit',
    templateSelector: '#element__template',
    elementsContainer: '.elements__content',
    profileName: '.profile__name',
    profileAbout: '.profile__occupation',
    formInfo: 'form[name="form_info"]',
    avatar: '.profile__avatar',
    popupAvatar: '.popup_type_avatar',
    popupDelete: '.popup_type_delete'
  }

 
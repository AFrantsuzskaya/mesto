export default class Card {
  constructor(data, templateSelector, handleImageClick) {
    this._name = data.name;
    this._link = data.link;
    this._templateSelector = templateSelector;
    this._handleImageClick = handleImageClick;
  }
  
  _getCardTemplate() {
    const cardElement = document
    .querySelector(this._templateSelector)
    .content
    .querySelector('.element')
    .cloneNode(true);
  
    return cardElement;
  }
  
  _likeToggle(evt) {
    this._element.querySelector('.element__button').classList.toggle('element__button_active');
  }
  
  _removeCard(evt) {
    this._element.querySelector('.element__trash-button').closest('.element').remove();
  }
  
  _setEventListeners() {
    this._element.querySelector('.element__button').addEventListener('click', () => {
      this._likeToggle();
    });
    this._element.querySelector('.element__trash-button').addEventListener('click', () => {
      this._removeCard();
    });
    this._element.querySelector('.element__image').addEventListener('click', () => {
      this._handleImageClick(this._name, this._link);
    });
  }
  
  render() {
    this._element = this._getCardTemplate();
    this._setEventListeners();
    this._element.querySelector('.element__image').src = this._link;
    this._element.querySelector('.element__image').alt = this._name;
    this._element.querySelector('.element__title').textContent = this._name;
    return this._element;
  }
}
  
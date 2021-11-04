export default class Card {
  constructor(data, currentUserId, templateSelector, handleImageClick, handleDeleteButtonClick, handleLike) {
    this._name = data.name;
    this._link = data.link;
    this._ownerId = data.owner._id; // id владельца карточки
    this._id = data._id; // id карточки
    this._likes = data.likes;
    this._currentUserId = currentUserId; //id текущего пользователя
    this._templateSelector = templateSelector;
    this._handleImageClick = handleImageClick;
    this._handleDeleteButtonClick = handleDeleteButtonClick;
    this._handleLike = handleLike;
  }
  
  _getCardTemplate() {
    const cardElement = document
    .querySelector(this._templateSelector)
    .content
    .querySelector('.element')
    .cloneNode(true);
  
    return cardElement;
  }
  
  _likeToggle() {
    const likeButton = this._element.querySelector('.element__button');
    this._element.querySelector('.element__counter').textContent = this._likes.length;
    if (this.isLiked()) {
      likeButton.classList.add('element__button_active');
    } else {
      likeButton.classList.remove('element__button_active');
    }
  }
  
  removeCard(evt) {
    this._element.querySelector('.element__trash-button').closest('.element').remove();
    this._element = null;
  }
  
  getId() {
    return this._id;
  }

  isLiked() {
    return this._likes.some(user => user._id === this._currentUserId);
  }

  setLikes(likes) {
    this._likes = likes
    this._likeToggle();
  }

  _setEventListeners() {
    this._element.querySelector('.element__button').addEventListener('click', () => {
      this._handleLike(this);
    });
    this._element.querySelector('.element__trash-button').addEventListener('click', () => {
      this._handleDeleteButtonClick();
    });
    this._element.querySelector('.element__image').addEventListener('click', () => {
      this._handleImageClick({name: this._name, link: this._link});
      });
  }
  
  render() {
    this._element = this._getCardTemplate();
    const elementImage = this._element.querySelector('.element__image');
    this._setEventListeners();
    elementImage.src = this._link;
    elementImage.alt = this._name;
    this._element.querySelector('.element__title').textContent = this._name;
    if (this._currentUserId != this._ownerId) {
      this._element.querySelector('.element__trash-button').style.display = 'none';
    }
    this._likeToggle();
    this._setEventListeners();
    return this._element;
    //возвращает готовую карточку
  }
}
  
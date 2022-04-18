export class Card {
  constructor(text, image, likes, _id, userId, ownedId, cardTemplateSelector, handleCardClick, handleDeleteClick, handleLikeClick, handleLikeRemove) {
    this._text = text;
    this._image = image;
    this._cardTemplateSelector = cardTemplateSelector;
    this._handleCardClick = handleCardClick;
    this._likes = likes;
    this._handleDeleteClick = handleDeleteClick;
    this._id = _id;
    this._userId = userId;
    this._ownerId = ownedId;
    this._handleLikeClick = handleLikeClick;
    this._handleLikeRemove = handleLikeRemove;
  }
  _getTemplate() {
    const cardItem = document
    .querySelector(this._cardTemplateSelector)
    .content
    .querySelector('.element')
    .cloneNode(true);

    return cardItem;
  }
  renderCard() {
    this._element = this._getTemplate();
    this._elementImage = this._element.querySelector('.element__image');
    this._elementText = this._element.querySelector('.element__info-caption');
    this._elementHeart = this._element.querySelector('.element__heart');
    this._elementDeleteCard = this._element.querySelector('.element__button-element-detele');
    this._elementImage.src = this._image;
    this._elementText.textContent = this._text;
    this._elementImage.alt = this._text;
    this._setEventListeners();
    this.setLikes(this._likes)
    if (this._ownerId !== this._userId) {
      this._elementDeleteCard.style.display = 'none'
    }
    const userHasLikeCard = this._likes.find(user => user._id === this._userId)
    if (userHasLikeCard) {
      this.cardLike();
    }
    return this._element;
  }

  setLikes(newLikes) {
    this._likes = newLikes;
    this._elementHeartCounter = this._element.querySelector('.element__heartCounter')
    this._elementHeartCounter.textContent = this._likes.length;
  }

  isLiked() {
    const userHasLikeCard = this._likes.find(user => user._id === this._userId)

    return userHasLikeCard
  }

  cardLike() {
    this._elementHeart.classList.toggle('element__heart_active');
  }
  deleteCard() {
    this._element.remove();
    this._element = null;
  }

  _setEventListeners() {
    this._elementHeart.addEventListener('click', () => {
      this._handleLikeClick(this._id);
    })
    this._elementDeleteCard.addEventListener('click', () => {
      this._handleDeleteClick(this._id);
    })
    this._elementImage.addEventListener('click', () => {
      this._handleCardClick(this._text, this._image);
    })

  }
}

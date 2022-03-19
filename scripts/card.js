import {titlePopupPreview, imagePopupPreview, openPopup, popupOpenElements} from './index.js'
export class Card {
  constructor(text, image, cardTemplateSelector) {
    this._text = text;
    this._image = image;
    this._cardTemplateSelector = cardTemplateSelector;
  }

  _getTemplate() {
      this.cardItem = document
      .querySelector(this._cardTemplateSelector)
      .content.querySelector('.element')
      .cloneNode(true)
      return this.cardItem
  }

  renderCard() {
    this._element = this._getTemplate()
    this._elementImage = this._element.querySelector('.element__image')
    this._elementText = this._element.querySelector('.element__info-caption')
    this._elementHeart = this._element.querySelector('.element__info-button')
    this._elementDeleteCard = this._element.querySelector('.element__button-element-detele')

    this._elementImage.src = this._image
    this._elementText.textContent = this._text
    this._elementImage.alt = this._text
    this._setEventListeners()

    return this._element
  }
  _cardLike() {
    this._elementHeart.classList.toggle('element__info-button_active')
  }
  _deleteCard() {
    this._element.remove()
  }
  _openPopupCard() {
    titlePopupPreview.textContent = this._text
    imagePopupPreview.src = this._image
    imagePopupPreview.alt = this._image

    openPopup(popupOpenElements)
  }
  
  _setEventListeners() {
    this._elementHeart.addEventListener('click', () => {
      this._cardLike()
    })
    this._elementDeleteCard.addEventListener('click', () => {
      this._deleteCard()
    })
    this._elementImage.addEventListener('click', () => {
      this._openPopupCard()
    })
  }
}
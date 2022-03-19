import { initialCards } from './cards.js'
import { FormValidator } from './FormValidator.js'
import { Card } from './Card.js'

const popups = document.querySelectorAll(".popup")

const popupEdit = document.querySelector('.popup-edit')
const popupEditNameInput = popupEdit.querySelector('.popup__input-name');
const popupEditJobInput = popupEdit.querySelector('.popup__input-about');
const popupEditForm = popupEdit.querySelector('.popup__form');

const popupAdd = document.querySelector('.popup-add-element')
const titleInputValue = popupAdd.querySelector('.popup__input-name')
const descriptionInputValue = popupAdd.querySelector('.popup__input-about')
const popupCloseButtonAdd = popupAdd.querySelector('.popup__close-button')
const popupFormSubmitAdd = popupAdd.querySelector('.popup__form')
const submitButtonCreateCard = popupAdd.querySelector(".popup__button")

const popupOpenElements = document.querySelector('.popup-open-element')
const imagePopupPreview = popupOpenElements.querySelector('.popup__image')
const titlePopupPreview = popupOpenElements.querySelector('.popup__text')
const popupBtnAddElementsClose = popupOpenElements.querySelector('.popup__close-button')

const profile = document.querySelector('.profile')
const profileOpenPopupButton = profile.querySelector('.profile__edit-button')
const popupAddBtn = profile.querySelector('.profile__add-button')
const profileName = profile.querySelector('.profile__name')
const profileAbout = profile.querySelector('.profile__about')

const sectionElements = document.querySelector('.elements')

const validationConfig = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button',
  inactiveButtonClass: 'popup__button_disabled',
  inputErrorClass: 'popup__input_type-error',
  errorClass: 'popup__input-error_active'
};

function createCard(text, image) {
  const card = new Card(text, image, '.template')
  const cardElement = card.renderCard();
  return cardElement;
}

const addCard = card => {
  sectionElements.prepend(card)
}

initialCards.forEach((item) => {
  const card = createCard(item.name, item.link)
  addCard(card)
})

function openPopup(popup) {
  popup.classList.add("popup_opened")
  document.addEventListener("keydown", closeByEscape)
}

function closePopup(popup) {
  popup.classList.remove('popup_opened')
  document.removeEventListener("keydown", closeByEscape)
}

popups.forEach((popup) => {
  popup.addEventListener("mousedown", (evt) => {
    if (evt.target.classList.contains("popup_opened")) {
      closePopup(popup)
    }
    if (evt.target.classList.contains("popup__close-button")) {
      closePopup(popup)
    }
  })
})

function closeByEscape(evt) {
  if (evt.key === "Escape") {
    const openedPopup = document.querySelector(".popup_opened")
    closePopup(openedPopup)
  }
}

profileOpenPopupButton.addEventListener('click', function() {
  openPopup(popupEdit)
  popupEditNameInput.value = profileName.textContent
  popupEditJobInput.value = profileAbout.textContent
})

popupAddBtn.addEventListener('click', function(){
  popupFormSubmitAdd.reset()
  addCardValidator.toggleButtonState();
  openPopup(popupAdd)
})

function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  profileName.textContent = popupEditNameInput.value;
  profileAbout.textContent = popupEditJobInput.value;
  closePopup(popupEdit);
}

popupEditForm.addEventListener('submit', handleProfileFormSubmit)

function handleCardFormSubmit(evt) {
  evt.preventDefault();
  const card = createCard(titleInputValue.value, descriptionInputValue.value);
  addCard(card);
  closePopup(popupAdd);
}

popupFormSubmitAdd.addEventListener('submit', handleCardFormSubmit)

const editProfileValidator = new FormValidator(validationConfig, popupEditForm)
const addCardValidator = new FormValidator(validationConfig, popupFormSubmitAdd)

editProfileValidator.enableValidation()
addCardValidator.enableValidation()

export {titlePopupPreview, imagePopupPreview, openPopup, popupOpenElements}
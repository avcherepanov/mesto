export const popups = document.querySelectorAll(".popup")

export const popupEdit = document.querySelector('.popup-edit')
export const popupEditNameInput = popupEdit.querySelector('.popup__input-name');
export const popupEditJobInput = popupEdit.querySelector('.popup__input-about');
export const popupEditForm = popupEdit.querySelector('.popup__form');

export const popupAdd = document.querySelector('.popup-add-element')
export const popupCloseButtonAdd = popupAdd.querySelector('.popup__close-button')
export const popupFormSubmitAdd = popupAdd.querySelector('.popup__form')
export const submitButtonCreateCard = popupAdd.querySelector(".popup__button")

export const popupOpenElements = document.querySelector('.popup-open-element')
export const imagePopupPreview = popupOpenElements.querySelector('.popup__image')
export const titlePopupPreview = popupOpenElements.querySelector('.popup__text')
export const popupBtnAddElementsClose = popupOpenElements.querySelector('.popup__close-button')

export const profile = document.querySelector('.profile')
export const profileOpenPopupButton = profile.querySelector('.profile__edit-button')
export const profileAddBtn = profile.querySelector('.profile__add-button')
export const profileName = profile.querySelector('.profile__name')
export const profileAbout = profile.querySelector('.profile__about')

export const sectionElements = document.querySelector('.elements')
export const allCards = ".elements"

export const validationConfig = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button',
  inactiveButtonClass: 'popup__button_disabled',
  inputErrorClass: 'popup__input_type-error',
  errorClass: 'popup__input-error_active'
};
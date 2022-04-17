export const popupAvatar = document.querySelector('.popup-avatar')
export const popupAvatarForm = popupAvatar.querySelector('.popup__form')

export const popupEdit = document.querySelector('.popup-edit')
export const popupEditNameInput = popupEdit.querySelector('.popup__input-name');
export const popupEditJobInput = popupEdit.querySelector('.popup__input-about');
export const popupEditForm = popupEdit.querySelector('.popup__form');

export const popupAdd = document.querySelector('.popup-add-element')
export const popupFormSubmitAdd = popupAdd.querySelector('.popup__form')

export const profile = document.querySelector('.profile')
export const profileOpenPopupButton = profile.querySelector('.profile__edit-button')
export const profileAddBtn = profile.querySelector('.profile__add-button')

export const avatar = document.querySelector('.profile__avatar');

export const validationConfig = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button',
  inactiveButtonClass: 'popup__button_disabled',
  inputErrorClass: 'popup__input_type-error',
  errorClass: 'popup__input-error_active'
};
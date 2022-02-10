const profileOpenPopupButton = document.querySelector('.profile__edit-button')
const popupAddBtn = document.querySelector('.profile__add-button')

const popupEdit = document.querySelector('.popup-edit')
const popupCloseButtonEdit = popupEdit.querySelector('.popup__close-button')

const popupAdd = document.querySelector('.popup-add-element')
const titleInputValue = popupAdd.querySelector('.popup__input-name')
const descriptionInputValue = popupAdd.querySelector('.popup__input-about')
const popupCloseButtonAdd = popupAdd.querySelector('.popup__close-button')
const popupFormSubmitAdd = popupAdd.querySelector('.popup__form')

const formElement = document.querySelector('.popup__container')
const nameInput = formElement.querySelector('.popup__input-name')
const aboutInput = formElement.querySelector('.popup__input-about')


const profileName = document.querySelector('.profile__name')
const profileAbout = document.querySelector('.profile__about')

const popupOpenElements = document.querySelector('.popup-open-element')
const imagePopupPreview = popupOpenElements.querySelector('.popup__image')
const titlePopupPreview = popupOpenElements.querySelector('.popup__text')
const popupBtnAddElementsClose = popupOpenElements.querySelector('.popup__close-button')

const sectionElements = document.querySelector('.elements')
const elementTemplate = document.querySelector('.temlate').content


function openPopup(popup) {
  popup.classList.add('popup_opened')
}

function closePopup(popup) {
  popup.classList.remove('popup_opened')
}

profileOpenPopupButton.addEventListener('click', function() {
  openPopup(popupEdit)
  nameInput.value = profileName.textContent
  aboutInput.value = profileAbout.textContent
})

popupCloseButtonEdit.addEventListener('click', function(){
  closePopup(popupEdit)
})

popupAddBtn.addEventListener('click', function(){
  openPopup(popupAdd)
})

popupCloseButtonAdd.addEventListener('click', function(){
  closePopup(popupAdd)
})

function handleProfileFormSubmit (evt) {
  evt.preventDefault()
  profileName.textContent = nameInput.value
  profileAbout.textContent = aboutInput.value
  closePopup(popupEdit)
}
formElement.addEventListener('submit', handleProfileFormSubmit)

function createCard(name, link) {
    const card = elementTemplate.querySelector('.element').cloneNode(true)
    const elementInfoCaption = card.querySelector('.element__info-caption')
    const elementImage = card.querySelector('.element__image')
    elementInfoCaption.textContent = name
    elementImage.src = link
    elementImage.alt = name
    card
    .querySelector('.element__info-button')
    .addEventListener('click', function(evt) {
        evt.target.classList.toggle('element__info-button_active')
    })
    elementImage.addEventListener('click', function(){
      openPopup(popupOpenElements)
      imagePopupPreview.src = link
      imagePopupPreview.alt = name
      titlePopupPreview.textContent = name
    })
    card.querySelector('.element__button-element-detele').addEventListener('click', function(evt) {
      evt.target.closest('.element').remove()
    })
    return card;
}

popupBtnAddElementsClose.addEventListener('click', function(){
closePopup(popupOpenElements)
})

initialCards.forEach(function(item) {
  sectionElements.prepend(createCard(item.name, item.link));
})

function handleCardFormSubmit (evt) {
  evt.preventDefault()
  sectionElements.prepend(createCard(titleInputValue.value, descriptionInputValue.value))
  closePopup(popupAdd)
  popupAdd.reset()
}

popupFormSubmitAdd.addEventListener('submit', handleCardFormSubmit);
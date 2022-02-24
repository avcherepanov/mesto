const profileOpenPopupButton = document.querySelector('.profile__edit-button')
const popupAddBtn = document.querySelector('.profile__add-button')

const popupEdit = document.querySelector('.popup-edit')
const popupCloseButtonEdit = popupEdit.querySelector('.popup__close-button')

const popupAdd = document.querySelector('.popup-add-element')
const titleInputValue = popupAdd.querySelector('.popup__input-name')
const descriptionInputValue = popupAdd.querySelector('.popup__input-about')
const popupCloseButtonAdd = popupAdd.querySelector('.popup__close-button')
const popupFormSubmitAdd = popupAdd.querySelector('.popup__form')
const submitButtonCreateCard = popupAdd.querySelector(".popup__button");

const formProfileElement = document.querySelector('.popup__container')
const nameInput = formProfileElement.querySelector('.popup__input-name')
const aboutInput = formProfileElement.querySelector('.popup__input-about')


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
  document.addEventListener("keydown", closeByEscape)
}

function closePopup(popup) {
  popup.classList.remove('popup_opened')
  document.removeEventListener("keydown", closeByEscape)
}

const popups = document.querySelectorAll(".popup")

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
  nameInput.value = profileName.textContent
  aboutInput.value = profileAbout.textContent
})

popupAddBtn.addEventListener('click', function(){
  openPopup(popupAdd)
})

function handleProfileFormSubmit (evt) {
  evt.preventDefault()
  profileName.textContent = nameInput.value
  profileAbout.textContent = aboutInput.value
  closePopup(popupEdit)
}
formProfileElement.addEventListener('submit', handleProfileFormSubmit)

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

function handleCardFormSubmit(evt) {
  evt.preventDefault()
  sectionElements.prepend(createCard(titleInputValue.value, descriptionInputValue.value))
  closePopup(popupAdd)
  popupFormSubmitAdd.reset()
  submitButtonCreateCard.setAttribute("disabled", "")
  submitButtonCreateCard.classList.add(validationConfig.inactiveButtonClass)
}

popupFormSubmitAdd.addEventListener('submit', handleCardFormSubmit)
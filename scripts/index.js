const profileOpenPopupButton = document.querySelector('.profile__edit-button')

const popupEdit = document.querySelector('.popup-edit')
const popupCloseButton = document.querySelector('.popup__close-button')
const popupAddBtn = document.querySelector('.profile__add-button')

const popupAdd = document.querySelector('.popup-add-element')
const titleInputValue = popupAdd.querySelector('.popup__input-name')
const descriptionInputValue = popupAdd.querySelector('.popup__input-about')
const popupCloseBtn = popupAdd.querySelector('.popup__close-button')
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

const initialCards = [
    {
      name: 'Архыз',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
      name: 'Челябинская область',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
      name: 'Иваново',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
      name: 'Камчатка',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
      name: 'Холмогорский район',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
      name: 'Байкал',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
]; 

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

popupCloseButton.addEventListener('click', function(){
  closePopup(popupEdit)
})

popupAddBtn.addEventListener('click', function(){
  openPopup(popupAdd)
})

popupCloseBtn.addEventListener('click', function(){
  closePopup(popupAdd)
})

function formSubmitHandler (evt) {
  evt.preventDefault()
  profileName.textContent = nameInput.value
  profileAbout.textContent = aboutInput.value
  closePopup(popupEdit)
}
formElement.addEventListener('submit', formSubmitHandler)

function createCard(name, link) {
    const card = elementTemplate.querySelector('.element').cloneNode(true)
    const elementImage = card.querySelector('.element__image')
    card.querySelector('.element__info-caption').textContent = name
    card.querySelector('.element__image').src = link
    let buttonLike = document.querySelector('.element__info-button')
    card
    .querySelector('.element__info-button')
    .addEventListener('click', function(evt) {
        evt.target.classList.toggle('element__info-button_active')
    })
    elementImage.addEventListener('click', function(){
      openPopup(popupOpenElements)
      imagePopupPreview.src = link
      titlePopupPreview.textContent = name
    })
    card.querySelector('.element__button-element-detele').addEventListener('click', function(evt) {
      evt.target.closest('.element').remove()
    })
    popupBtnAddElementsClose.addEventListener('click', function(){
      closePopup(popupOpenElements)
    })
    return card;
}

function render(card) {
    sectionElements.append(card)
}

initialCards.forEach((item) => {
    let cardItem = createCard(item.name, item.link)
    render(cardItem)
})

function formSubmitHandlerAdd (evt) {
  evt.preventDefault();
  sectionElements.prepend(createCard(titleInputValue.value, descriptionInputValue.value));
  closePopup(popupAdd);
  titleInputValue.value = '';
  descriptionInputValue.value = '';
}

popupFormSubmitAdd.addEventListener('submit', formSubmitHandlerAdd);
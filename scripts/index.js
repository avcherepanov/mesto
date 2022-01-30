const profileOpenPopupButton = document.querySelector('.profile__edit-button')
const popup = document.querySelector('.popup')
const popupCloseButton = document.querySelector('.popup__close-button')
const formElement = document.querySelector('.popup__container')
const profileName = document.querySelector('.profile__name')
const profileAbout = document.querySelector('.profile__about')
const nameInput = document.getElementById('name')
const aboutInput = document.getElementById('about')

function openPopup() {
    popup.classList.add('popup_opened')
    nameInput.value = profileName.textContent
    aboutInput.value = profileAbout.textContent
}

function formSubmitHandler (evt) {
    evt.preventDefault()
    profileName.textContent = nameInput.value
    profileAbout.textContent = aboutInput.value
    closePopup()
}

function closePopup() {
    popup.classList.remove('popup_opened')
}

formElement.addEventListener('submit', formSubmitHandler)
profileOpenPopupButton.addEventListener('click', openPopup)
popupCloseButton.addEventListener('click', closePopup)

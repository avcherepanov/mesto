const profileOpenPopupButton = document.querySelector('.profile__edit-button')
const popup = document.querySelector('.popup')
const popupCloseButton = document.querySelector('.popup__close-button')
let formElement = document.querySelector('.popup__container');
let profileName = document.querySelector('.profile__name')
let profileAbout = document.querySelector('.profile__about')
let nameInput = document.getElementById('name')
let aboutInput = document.getElementById('about')

function openPopup() {
    popup.classList.add('popup_opened')
    nameInput.value = profileName.textContent
    aboutInput.value = profileAbout.textContent
}

function closePopup() {
    popup.classList.remove('popup_opened')
}

function formSubmitHandler (evt) {
    evt.preventDefault()
    profileName.textContent = nameInput.value
    profileAbout.textContent = aboutInput.value
    closePopup()
}

formElement.addEventListener('submit', formSubmitHandler)
profileOpenPopupButton.addEventListener('click', openPopup)
popupCloseButton.addEventListener('click', closePopup)

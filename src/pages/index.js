import "./index.css";
import { FormValidator } from "../scripts/components/FormValidator.js";
import { Card } from "../scripts/components/Card.js";
import { initialCards } from "../scripts/cards.js";
import { Section } from "../scripts/components/Section.js";
import {
  popupEditNameInput,
  popupEditJobInput,
  popupEditForm,
  popupFormSubmitAdd,
  profileOpenPopupButton,
  profileAddBtn,
  validationConfig,
} from "../scripts/utils/constant.js";
import { PopupWithImage } from "../scripts/components/PopupWithImage.js";
import { PopupWithForm } from "../scripts/components/PopupWithForm.js";
import { UserInfo } from "../scripts/components/UserInfo.js";

//валидация
const editProfileValidator = new FormValidator(validationConfig, popupEditForm);
editProfileValidator.enableValidation();

const addCardValidator = new FormValidator(validationConfig, popupFormSubmitAdd);
addCardValidator.enableValidation();

//  userInfo
const userInfoEx = new UserInfo({
  titleSelector: ".profile__name",
  jobSelector: ".profile__about"
});

// форма edit profile
const profilePopup = new PopupWithForm('.popup-edit', {
  submitEvent: (formData) => {
    userInfoEx.setUserInfo({
     name: formData.username,
     job: formData.about,
    });
    profilePopup.close();
  },
});
profilePopup.setEventListeners();

profileOpenPopupButton.addEventListener("click", function () {
  const getInfo = userInfoEx.getUserInfo();
  popupEditNameInput.value = getInfo.name;
  popupEditJobInput.value = getInfo.job;
  profilePopup.open();
});


profileAddBtn.addEventListener("click", function () {
  addCardValidator.toggleButtonState();
  cardPopup.open();
});

// popup picture
const popupWithImage = new PopupWithImage('.popup-open-element');

//открытие попапа picture
function handleCardClick(text, image) {
  popupWithImage.open(text, image);
}
popupWithImage.setEventListeners();

// Создадим экземпляр карточки
function createCard(text, image) {
  const card = new Card(text, image, '.template', handleCardClick);
  const cardElement = card.renderCard();
  return cardElement;
}


const cardPopup = new PopupWithForm(".popup-add-element", {
  submitEvent: (formData) => {
    const card = createCard(formData.text, formData.link);
    cardSection.prependItem(card);
    cardPopup.close();
  },
});
cardPopup.setEventListeners();

// создаем Section (отображаем карточки)
const cardSection = new Section(
  {
    items: initialCards,
    renderer: (item) => {
      const card = createCard(item.name, item.link);
      cardSection.setItem(card);
    },
  },
  '.elements'
);
cardSection.renderItem();

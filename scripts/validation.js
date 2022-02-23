const showInputError = (formElement, inputElement, errorMessage, validationConfig) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.add(validationConfig.inputErrorClass);
  errorElement.textContent = errorMessage;
  errorElement.classList.add(validationConfig.errorClass);
};

const hideInputError = (formElement, inputElement, validationConfig) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.remove(validationConfig.inputErrorClass);
  errorElement.classList.remove(validationConfig.errorClass);
  errorElement.textContent = "";
};

const isValid = (formElement, inputElement, validationConfig) => {
  if (!inputElement.validity.valid) {
    showInputError(formElement, inputElement, inputElement.validationMessage, validationConfig);
  } else {
    hideInputError(formElement, inputElement, validationConfig);
  }
};

const hasInvalidInput = (inputList) => {
  return inputList.some((inputElement) => {
    return !inputElement.validity.valid;
  });
};

const toggleButtonState = (inputList, buttonElement, buttonElementText, validationConfig) => {
  if (hasInvalidInput(inputList)) {
    buttonElement.classList.add(validationConfig.inactiveButtonClass);
    buttonElement.setAttribute("disabled", "");
  } else {
    buttonElement.classList.remove(validationConfig.inactiveButtonClass);
    buttonElement.removeAttribute("disabled", "");
  }
};

const setEventListeners = (formElement, validationConfig) => {
  const inputList = Array.from(
    formElement.querySelectorAll(validationConfig.inputSelector)
  );
  // Пробегаемся по каждому импуту чтобы добавить им обработчик 'input'
  const buttonElement = formElement.querySelector(validationConfig.submitButtonSelector);
  const buttonElementText = formElement.querySelector(validationConfig.submitButtonSelectorText);
  toggleButtonState(inputList, buttonElement, buttonElementText, validationConfig);
  inputList.forEach((inputElement) => {
    inputElement.addEventListener("input", () => {
      isValid(formElement, inputElement, validationConfig); // Передаем в колбек функция IsValid
      toggleButtonState(inputList, buttonElement, buttonElementText, validationConfig);
    });
  });
};


const enableValidation = (validationConfig) => {
    // Вытаскиваем все формы с помощию массива
    const formList = Array.from(document.querySelectorAll(validationConfig.formSelector));
    // Пробегаемся по массиву и сбрасываем ему отправку
    formList.forEach((formElement) => {
      formElement.addEventListener("input", (evt) => {
        evt.preventDefault();
      });
      setEventListeners(formElement, validationConfig);
    });
}

const validationConfig = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button',
  submitButtonSelectorText: '.popup__button-text',
  inactiveButtonClass: 'popup__button_disabled',
  inputErrorClass: 'popup__input_type-error',
  errorClass: 'popup__input-error_active'
};

enableValidation(validationConfig);


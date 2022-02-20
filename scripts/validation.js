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
      buttonElementText.classList.add(validationConfig.inactiveSubmitButtonSelectorText);
      buttonElement.setAttribute("disabled", "");
    } else {
      buttonElement.classList.remove(validationConfig.inactiveButtonClass);
      buttonElementText.classList.remove(validationConfig.inactiveSubmitButtonSelectorText);
      buttonElement.removeAttribute("disabled", "");
    }
  };
  
  const setEventListeners = (formElement, validationConfig) => {
    const inputList = Array.from(
      formElement.querySelectorAll(validationConfig.inputSelector)
    );
    const buttonElement = formElement.querySelector(validationConfig.submitButtonSelector);
    const buttonElementText = formElement.querySelector(validationConfig.submitButtonSelectorText);
    toggleButtonState(inputList, buttonElement, buttonElementText, validationConfig);
    inputList.forEach((inputElement) => {
      inputElement.addEventListener("input", () => {
        isValid(formElement, inputElement, validationConfig);
        toggleButtonState(inputList, buttonElement, buttonElementText, validationConfig);
      });
    });
  };
  
  const enableValidation = (validationConfig) => {
      const formList = Array.from(document.querySelectorAll(validationConfig.formSelector));
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
    inactiveSubmitButtonSelectorText: 'popup__button-text_disabled',
    inactiveButtonClass: 'popup__button_disabled',
    inputErrorClass: 'popup__input-name_type-error',
    errorClass: 'popup__input-error-active'
  };
  
  enableValidation(validationConfig);
const objectData = {
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__save-btn',
    inactiveButtonClass: 'popup__save-btn_disabled',
    inputErrorClass: 'form__input_type_error',
    errorClass: 'popup__input-error_active'
};

const showInputError = (formElement, inputElement, errorMessage, object) => {
    const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
    inputElement.classList.add(object.inputErrorClass);
    errorElement.textContent = errorMessage;
    errorElement.classList.add(object.errorClass);
};

const hideInputError = (formElement, inputElement, object) => {
    const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
    inputElement.classList.remove(object.inputErrorClass);
    errorElement.classList.remove(object.errorClass);
    errorElement.textContent = '';
};

const isValid = (formElement, inputElement, object) => {
    if (!inputElement.validity.valid) {
    showInputError(formElement, inputElement, inputElement.validationMessage, object);
    } else {
    hideInputError(formElement, inputElement, object);
    }
};

const hasInvalidInput = (inputList) => {
    return inputList.some((inputElement) => {
    return !inputElement.validity.valid;
    })
};

const toggleButtonState = (inputList, buttonElement, object) => {
    if (hasInvalidInput(inputList)) {
    buttonElement.classList.add(object.inactiveButtonClass);
    buttonElement.disabled = true;
    } else {
    buttonElement.classList.remove(object.inactiveButtonClass);
    buttonElement.disabled = "";
    }
};



const setEventListeners = (formElement, object) => {
    const inputList = Array.from(formElement.querySelectorAll(object.inputSelector));
    const buttonElement = formElement.querySelector(object.submitButtonSelector);
    
    toggleButtonState(inputList, buttonElement, object);

    inputList.forEach((inputElement) => {
    inputElement.addEventListener('input', () => {
        isValid(formElement, inputElement, object);
        toggleButtonState(inputList, buttonElement, object);
    });
    });
};


const enableValidation = (object) => {
    const formList = Array.from(document.querySelectorAll(object.formSelector));
    formList.forEach((formElement) => {
    formElement.addEventListener('submit', (evt) => {
        evt.preventDefault();
    });

    setEventListeners(formElement, object);
    });
};

enableValidation(objectData);
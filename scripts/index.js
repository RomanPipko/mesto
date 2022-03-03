const popup = document.querySelector('.popup');
const popupCloseBtn = popup.querySelector('.popup__close-btn');
const popupEditBtn = document.querySelector('.profile__edit-btn');
let formElement = document.querySelector('.popup__form');
let profileName = document.querySelector('.profile__name');
let profileJob = document.querySelector('.profile__job');
let nameInput = formElement.querySelector('.popup__input-name');
let jobInput = formElement.querySelector('.popup__input-job');


const OpenPopup = function() {
    popup.classList.add('popup_is-opened');
    nameInput.value = profileName.textContent;
    jobInput.value = profileJob.textContent;

}
const ClosePopup = function() {
    popup.classList.remove('popup_is-opened');
    
}
const ClosePopupByClickOnOverlay = function (Event) {
    if (Event.target !== Event.currentTarget) {
        return;
    }
    ClosePopup();
}
popupEditBtn.addEventListener('click', OpenPopup);
popupCloseBtn.addEventListener('click', ClosePopup);
popup.addEventListener('click', ClosePopupByClickOnOverlay);


function formSubmitHandler (evt) {
    evt.preventDefault();
    profileName.textContent = nameInput.value;
    profileJob.textContent = jobInput.value;
    ClosePopup();
}
formElement.addEventListener('submit', formSubmitHandler);


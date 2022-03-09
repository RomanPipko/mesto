const popup = document.querySelector('.popup');
const popupCloseBtn = popup.querySelector('.popup__close-btn');
const popupEditBtn = document.querySelector('.profile__edit-btn');
let formElement = document.querySelector('.popup__form');
let profileName = document.querySelector('.profile__name');
let profileJob = document.querySelector('.profile__job');
let nameInput = formElement.querySelector('.popup__input-name');
let jobInput = formElement.querySelector('.popup__input-job');


const openPopup = function() {
    popup.classList.add('popup_is-opened');
    nameInput.value = profileName.textContent;
    jobInput.value = profileJob.textContent;

}
const closePopup = function() {
    popup.classList.remove('popup_is-opened');
    
}
/*
const closePopupByClickOnOverlay = function (Event) {
    if (Event.target !== Event.currentTarget) {
        return;
    }
    closePopup();
}
*/



function formSubmitHandler (evt) {
    evt.preventDefault();
    profileName.textContent = nameInput.value;
    profileJob.textContent = jobInput.value;
    closePopup();
}
formElement.addEventListener('submit', formSubmitHandler);
popupEditBtn.addEventListener('click', openPopup);
popupCloseBtn.addEventListener('click', closePopup);
/*
popup.addEventListener('click', closePopupByClickOnOverlay);
*/



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


const popups = document.querySelectorAll('.popup');

const profilePopup = document.querySelector('.popup_type_profile');

const cardPopup = document.querySelector('.popup_type_card');

const imagePopup = document.querySelector('.popup_type_image');
const imagePopupTitle = imagePopup.querySelector('.popup__image-title');
const image = imagePopup.querySelector('.popup__image');



const popupEditBtn = document.querySelector('.profile__edit-btn');
const popupAddBtn = document.querySelector('.profile__add-btn');

const profileForm = document.querySelector('.popup__form_type_profile');
const nameInput = profileForm.querySelector('.popup__input_type_name');
const jobInput = profileForm.querySelector('.popup__input_type_job');


const profileName = document.querySelector('.profile__name');
const profileJob = document.querySelector('.profile__job');

const cardForm = document.querySelector('.popup__form_type_card');
const placeNameInput = document.querySelector('.popup__input_type_placeName');
const linkInput = document.querySelector('.popup__input_type_link');
const submitButton = cardForm.querySelector('.popup__save-btn');


const elemetsList = document.querySelector('.elements__list');
const cardTemplate = document.querySelector('#element-template').content;



// функция открытия попапа
function openPopup(popup) {
  popup.classList.add('popup_is-opened');
  document.addEventListener('keydown', popupCloseByEscpe);

}

// функция закрытия попапа
function closePopup(popup) {
  popup.classList.remove('popup_is-opened')
  document.removeEventListener('keydown', popupCloseByEscpe);

}

// функция октрытия попапа редактирования профиля 
function openEditProfile() {
    nameInput.value = profileName.textContent;
    jobInput.value = profileJob.textContent;
    openPopup(profilePopup);
}


// функция сохранения редактирования данных о пользователе
function ProfileFormSubmitHandler (evt) {
    evt.preventDefault();
    profileName.textContent = nameInput.value;
    profileJob.textContent = jobInput.value;
    closePopup(profilePopup);
}
// функция создания карточки
function createCard (link, place) {
  const card = cardTemplate.querySelector('.elements__item').cloneNode(true);
  card.querySelector('.elements__photo').src = link;
  card.querySelector('.elements__title').textContent = place;
  card.querySelector('.elements__title').alt = place;
  card.querySelector('.elements__like-btn').addEventListener('click', function(evt) {
    evt.target.classList.toggle('elements__like-btn_active');
  });
  card.querySelector('.elements__delete-btn').addEventListener('click', function() {
    card.remove();
  })
  const cardImage = card.querySelector('.elements__photo');
  cardImage.addEventListener('click', function() {
  imagePopupTitle.textContent = card.querySelector('.elements__title').textContent
  image.src = card.querySelector('.elements__photo').src
  image.alt = card.querySelector('.elements__title').textContent
  openPopup(imagePopup)
  });
  return card;
  };

 // функция отбражения созданой карточки 
function renderCard(link, place) {
  const card = createCard(link, place);
  elemetsList.prepend(card);
}
for (let i = 0; i < initialCards.length; i++) {
  const cardData = initialCards[i]
  renderCard(cardData.link, cardData.name)
  }

//функция добавления новой карточки
function addCardSubmit(evt) {
  evt.preventDefault();
  const placeName = placeNameInput.value;
  const link = linkInput.value;
  closePopup(cardPopup);
  renderCard(link, placeName);
  cardForm.reset();
  submitButton.setAttribute('disabled', true);
  submitButton.classList.add('popup__save-btn_disabled');
};


profileForm.addEventListener('submit', ProfileFormSubmitHandler);

cardForm.addEventListener('submit', addCardSubmit);

popupEditBtn.addEventListener('click', openEditProfile);

popupAddBtn.addEventListener('click', () => openPopup(cardPopup));


// закрытие попапов клавишей Esc
const popupCloseByEscpe = (evt) => { 
  if (evt.key === 'Escape') {
    const openedPopup = document.querySelector('.popup_is-opened');
    closePopup(openedPopup)
  }
};
popups.forEach(() => {
  document.addEventListener('keydown', popupCloseByEscpe);
  document.removeEventListener('keydown', popupCloseByEscpe);
});

// закрытие попапов кликом в оверлей и крестик

popups.forEach((popup) => {
  popup.addEventListener('mousedown', (evt) => {
      if (evt.target.classList.contains('popup_is-opened')) {
          closePopup(popup)
      }
      if (evt.target.classList.contains('popup__close-btn')) {
        closePopup(popup)
      }
  });
});





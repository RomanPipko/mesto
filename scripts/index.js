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
const profilePopupCloseBtn = profilePopup.querySelector('.popup__close-btn');

const cardPopup = document.querySelector('.popup_type_card');
const cardPopupCloseBtn = cardPopup.querySelector('.popup__close-btn');

const imagePopup = document.querySelector('.popup_type_image');
const imagePopupCloseBtn = imagePopup.querySelector('.popup__close-btn');



const popupEditBtn = document.querySelector('.profile__edit-btn');
const popupAddBtn = document.querySelector('.profile__add-btn');

const profileForm = document.querySelector('.popup__form');
const nameInput = profileForm.querySelector('.popup__input_type_name');
const jobInput = profileForm.querySelector('.popup__input_type_job');

const profileName = document.querySelector('.profile__name');
const profileJob = document.querySelector('.profile__job');

const cardForm = document.querySelector('.popup__form_type_card');
const placeNameInput = document.querySelector('.popup__input_type_placeName');
const linkInput = document.querySelector('.popup__input_type_link');

const elemetsList = document.querySelector('.elements__list');
const cardTemplate = document.querySelector('#element-template').content;

  // отображение исходных карточек
function renderInitialCard(arr) {
  const card = cardTemplate.querySelector('.elements__item').cloneNode(true);
  card.querySelector('.elements__photo').src = arr.link;
  card.querySelector('.elements__title').textContent = arr.name;
  card.querySelector('.elements__like-btn').addEventListener('click', function(evt) {
    evt.target.classList.toggle('elements__like-btn_active');
  });
  card.querySelector('.elements__delete-btn').addEventListener('click', function() {
    card.remove();
  })
  const cardImage = card.querySelector('.elements__photo');
  cardImage.addEventListener('click', function() {
  imagePopup.querySelector('.popup__image-title').textContent = card.querySelector('.elements__title').textContent
  imagePopup.querySelector('.popup__image').src = card.querySelector('.elements__photo').src
  imagePopup.querySelector('.popup__image').alt = card.querySelector('.elements__title').textContent
  openImage()
  });
  elemetsList.appendChild(card);
}
  initialCards.forEach(renderInitialCard);

// функция открытия попапа
function openPopup(popups) {
  popups.classList.add('popup_is-opened')
}

// функция закрытия попапа
function closePopup(popups) {
  popups.classList.remove('popup_is-opened')
}

// функция октрытия попапа редактирования профиля 
function openEditProfile() {
    nameInput.value = profileName.textContent;
    jobInput.value = profileJob.textContent;
    openPopup(profilePopup);
}
// функция открытия попапа добавления карточки
function openAddCard() {
  openPopup(cardPopup);
}
// функция открытия просмотра изображения
function openImage() {
  openPopup(imagePopup);
}


// функция сохранения редактирования данных о пользователе
function formSubmitHandler (evt) {
    evt.preventDefault();
    profileName.textContent = nameInput.value;
    profileJob.textContent = jobInput.value;
    closePopup(profilePopup);
}
// функция создания карточки
function createCard (linkInput, placeNameInput) {
  const card = cardTemplate.querySelector('.elements__item').cloneNode(true);
  card.querySelector('.elements__photo').src = linkInput.value;
  card.querySelector('.elements__title').textContent = placeNameInput.value;
  card.querySelector('.elements__like-btn').addEventListener('click', function(evt) {
    evt.target.classList.toggle('elements__like-btn_active');
  });
  card.querySelector('.elements__delete-btn').addEventListener('click', function() {
    card.remove();
  })
  const cardImage = card.querySelector('.elements__photo');
  cardImage.addEventListener('click', function() {
  imagePopup.querySelector('.popup__image-title').textContent = card.querySelector('.elements__title').textContent
  imagePopup.querySelector('.popup__image').src = card.querySelector('.elements__photo').src
  imagePopup.querySelector('.popup__image').alt = card.querySelector('.elements__title').textContent
  openImage();
  });
  return card;
  };

 // функция отбражения созданой карточки 
function renderCard() {
  const card = createCard(linkInput, placeNameInput);
  elemetsList.prepend(card);
}
//функция добавления новой карточки
function addCardSubmit(evt) {
  evt.preventDefault();
  const placeName = placeNameInput.value;
  const link = linkInput.value;
  const cardData = {placeName, link};
  closePopup(cardPopup);
  renderCard(cardData);
}


profileForm.addEventListener('submit', formSubmitHandler);

cardForm.addEventListener('submit', addCardSubmit);

popupEditBtn.addEventListener('click', openEditProfile);

popupAddBtn.addEventListener('click', openAddCard);



// закрытие попапа профайла кликом на крестик
profilePopupCloseBtn.addEventListener('click', () => {
  closePopup(profilePopup);
});
// закрытие попапа карточки кликом на крестик
cardPopupCloseBtn.addEventListener('click', () => {
  closePopup(cardPopup);
});
// закрытие попапа картинки кликом на крестик
imagePopupCloseBtn.addEventListener('click', () => {
  closePopup(imagePopup)
});










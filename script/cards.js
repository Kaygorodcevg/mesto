import initialCards from "./arrayCards.js";

// import enableValidation from "./validate.js";

// выбираем все popup для закрытия по Esc //
const allPopups = document.querySelectorAll(".popup");
// profile popup //
const popupProfile = document.querySelector(".popup_profile");
const editButton = document.querySelector(".profile__edit-button");
const profileTitle = document.querySelector(".profile__title");
const profileSubtitle = document.querySelector(".profile__subtitle");
// add cards popup //
const buttonAddCard = document.querySelector(".profile__add-button"); // кнопка добавления карточек
// image popup //
const buttonOpenPopupCard = document.querySelector(".popup_add-card"); // кнопка открытия попапа добавления карточек
const popupZoomImage = document.querySelector(".popup_zoom-image"); //  Попап картинки
const popupFigcaption = popupZoomImage.querySelector(".popup__figcaption");
const popupPicture = popupZoomImage.querySelector(".popup__picture");

const elementsSection = document.querySelector(".elements__list");
const elementsTemplate = document.querySelector("#elements__template").content;
// forms //
const cardForm = document.forms.addCardForm;
const placeName = cardForm.elements.placeName;
const placeUrl = cardForm.elements.placeUrl;

const profileForm = document.forms.editProfileForm;
const userName = profileForm.elements.userName;
const userJob = profileForm.elements.userJob;

// функция открытия popup //
function openPopup(popup) {
  popup.classList.add("popup_opened");
  document.addEventListener('keydown', closeByEsc);
};

// функция закрытия popup //
function closePopup(popup) {
  popup.classList.remove("popup_opened");
  document.removeEventListener('keydown', closeByEsc); 
};

// реакция //
const makeReaction = (evt) => {
  evt.target.classList.toggle("elements__reaction_active");
};

// удаления карточки //
const deleteCard = (evt) => {
  evt.target.closest(".elements__list-item").remove();
};

// popup открытия картинки //
const openPopupZoomImage = (name, link) => {
  popupFigcaption.textContent = name;
  popupPicture.alt = name;
  popupPicture.src = link;
  openPopup(popupZoomImage);
};

const createElement = (item) => {
  const elementItem = elementsTemplate.querySelector(".elements__list-item").cloneNode(true);
  const cardTitle = elementItem.querySelector(".elements__text");
  const cardImage = elementItem.querySelector(".elements__image");

  cardTitle.textContent = item.name;
  cardImage.alt = item.name;
  cardImage.src = item.link;

  cardImage.addEventListener("click", () =>
    openPopupZoomImage(item.name, item.link)
  ); //  Попап открытия картинки
  elementItem.querySelector(".elements__reaction").addEventListener("click", makeReaction);
  elementItem.querySelector(".elements__remove-button").addEventListener("click", deleteCard);

  return elementItem;
};

// render card //
const renderElement = (item, wrapper) => {
  const composeElement = createElement(item);
  wrapper.prepend(composeElement);
};

// Добавление карточек на страницу //
const createAllElements = () => {
  initialCards.forEach(function (item) {
    renderElement(item, elementsSection);
  });
};

createAllElements();

// Форма редактирования профиля //
function editProfileForm(evt) {
  evt.preventDefault();
  profileTitle.textContent = userName.value;
  profileSubtitle.textContent = userJob.value;
  closePopup(popupProfile);
}

// Форма добавления карточки //
function addCard(evt) {
  evt.preventDefault();
  const composeForm = { name: placeName.value, link: placeUrl.value };
  renderElement(composeForm, elementsSection);
  closePopup(buttonOpenPopupCard);
  cardForm.reset();
}

// закрытие popup по нажатию Esc //
function closeByEsc (evt) {
  if (evt.key === "Escape") {
    const openedPopup = document.querySelector('.popup_opened');
    closePopup(openedPopup);
  };
};

// закрытие popup через overlay и по крестику//
allPopups.forEach((popup) => {
  popup.addEventListener('mousedown', (evt) => {
      if (evt.target.classList.contains('popup_opened')) {
          closePopup(popup);
      };
      if (evt.target.classList.contains('popup__close-icon')) {
        closePopup(popup);
      };
  });
});

const submitButtonAddForm = document.querySelector('.popup__submit-button')

const handleAddFormButtonState = () => {
  submitButtonAddForm.classList.add('popup__submit-button_disabled');
  submitButtonAddForm.setAttribute("disabled", true);
}





editButton.addEventListener("click", () => openPopup(popupProfile));
profileForm.addEventListener("submit", editProfileForm);
cardForm.addEventListener("submit", addCard);
buttonAddCard.addEventListener("click", () => { 
  handleAddFormButtonState();
  openPopup(buttonOpenPopupCard);
});








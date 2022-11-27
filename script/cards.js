import initialCards from "./arrayCards.js";

// profile popup //
const editPopup = document.querySelector(".popup_profile");
const closeButton = document.querySelector(".popup__close-icon");
const editButton = document.querySelector(".profile__edit-button");
const formElement = document.querySelector(".popup__form_profile"); //  Форма редактирования данных профиля
const nameInput = formElement.querySelector(".popup__input_type_name"); // Находим поля формы в DOM
const jobInput = formElement.querySelector(".popup__input_type_job"); // Находим поля формы в DOM
const profileTitle = document.querySelector(".profile__title");
const profileSubtitle = document.querySelector(".profile__subtitle");
// add cards popup //
const addCardPopup = document.querySelector(".popup_add-card"); // попап добавления карточек
const addCardForm = addCardPopup.querySelector(".popup__form_add-card");
const placeInput = addCardPopup.querySelector(".popup__input_place_name"); // поле ввода названия
const urlInput = addCardPopup.querySelector(".popup__input_place_url"); // поле ввода ссылки
const addCardCloseButton = document.querySelector(".popup__close-icon_add-card"); // кнопка закрытия
const addCardButtom = document.querySelector(".profile__add-button"); // кнопка добавления карточек
// image popup //
const popupZoomImage = document.querySelector(".popup_zoom-image"); //  Попап картинки
const popupFigcaption = popupZoomImage.querySelector(".popup__figcaption");
const popupPicture = popupZoomImage.querySelector(".popup__picture");
const pictureCloseButton = document.querySelector(".popup__close-icon_zoom-image"); // кнопка закрытия для картинки
const elementsSection = document.querySelector(".elements__list");
const elementsTemplate = document.querySelector("#elements__template").content;

// функция открытия popup //
function openPopup(popup) {
  popup.classList.add("popup_opened");
}

// функция закрытия popup //
function closePopup(popup) {
  popup.classList.remove("popup_opened");
}

// реакция //
const makeReaction = (evt) => {
  evt.target.classList.toggle("elements__reaction_active");
};

// удаления карточки //
const deleteCard = (evt) => {
  evt.target.closest(".elements__list-item").remove();
};

// popup открытия картинки //
const openPopupZoomImage = () => {
  openPopup(popupZoomImage);
};

const createElement = (item) => {
  const elementItem = elementsTemplate.querySelector(".elements__list-item").cloneNode(true);
  const cardTitle = elementItem.querySelector(".elements__text");
  const cardImage = elementItem.querySelector(".elements__image");

  cardTitle.textContent = item.name;
  cardImage.alt = item.name;
  cardImage.src = item.link;

  popupFigcaption.textContent = item.name;
  popupPicture.src = item.link;
  popupPicture.alt = item.name;

  elementItem.querySelector(".elements__reaction").addEventListener("click", makeReaction);
  elementItem.querySelector(".elements__remove-button").addEventListener("click", deleteCard);
  cardImage.addEventListener("click", openPopupZoomImage); //  Попап открытия картинки

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
  profileTitle.textContent = nameInput.value;
  profileSubtitle.textContent = jobInput.value;
  closePopup(editPopup);
}

// Форма добавления карточки //
function addCard(evt) {
  evt.preventDefault();
  const composeForm = { name: placeInput.value, link: urlInput.value };
  renderElement(composeForm, elementsSection);
  closePopup(addCardPopup);
  placeInput.value = "";
  urlInput.value = "";
};

editButton.addEventListener("click", () => openPopup(editPopup));
closeButton.addEventListener("click", () => closePopup(editPopup));
formElement.addEventListener("submit", editProfileForm);
addCardButtom.addEventListener("click", () => openPopup(addCardPopup));
addCardCloseButton.addEventListener("click", () => closePopup(addCardPopup));
popupZoomImage.addEventListener("click", () => closePopup(popupZoomImage));
addCardForm.addEventListener("submit", addCard);

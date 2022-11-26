import initialCards from "./arrayCards.js";
const addCardPopup = document.querySelector(".popup__add-card"); // попап добавления карточек
const addCardForm = addCardPopup.querySelector(".popup__form_add-card");
const placeInput = addCardPopup.querySelector(".popup__input_place_name"); // поле ввода названия
const urlInput = addCardPopup.querySelector(".popup__input_place_url"); // поле ввода ссылки
const addCardCloseButton = document.querySelector(".popup__close-icon_add-card"); // кнопка закрытия
const addCardButtom = document.querySelector(".profile__add-button"); // кнопка добавления карточек
const popupZoomImage = document.querySelector(".popup__zoom-image"); //  Попап картинки
const popupFigcaption = popupZoomImage.querySelector(".popup__figcaption");
const popupPicture = popupZoomImage.querySelector(".popup__picture");
const pictureCloseButton = document.querySelector(".popup__close-icon_zoom-image"); // кнопка закрытия для картинки
const elementsSection = document.querySelector(".elements__list");
const elementsTemplate = document.querySelector("#elements__template").content;

const createElement = (item) => {
  const elementItem = elementsTemplate.querySelector(".elements__list-item").cloneNode(true);
  const cardTitle = elementItem.querySelector(".elements__text");
  const cardImage = elementItem.querySelector(".elements__image");
  cardTitle.textContent = item.name;
  cardImage.src = item.link;

  // реакция
  elementItem.querySelector(".elements__reaction").addEventListener("click", function (evt) {
      evt.target.classList.toggle("elements__reaction_active");
    });

  // кнопка удаления карточки
  const deleteButton = elementItem.querySelector(".elements__remove-button");
  deleteButton.addEventListener("click", function () {
    const listItem = deleteButton.closest(".elements__list-item");
    listItem.remove();
  });

  // popup открытия картинки
  cardImage.addEventListener("click", function () {
    popupFigcaption.textContent = item.name;
    popupPicture.src = item.link;
    popupZoomImage.classList.add("popup_opened");
  });

  return elementItem;
};

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

// закрытие popup карточки //
function addCardPopupClose() {
  addCardPopup.classList.remove("popup_opened");
}

// закрытие popup картинки //
function zoomImagePopupClose() {
  popupZoomImage.classList.remove("popup_opened");
}

// открытие popup карточки//
function addCardPopupOpen() {
  addCardPopup.classList.add("popup_opened");
}

// Форма добавления карточки //
function addCard(evt) {
  evt.preventDefault();
  const composeForm = { name: placeInput.value, link: urlInput.value };
  placeInput.value = "";
  urlInput.value = "";
  renderElement(composeForm, elementsSection);
  addCardPopupClose();
}

popupZoomImage.addEventListener("click", zoomImagePopupClose);
addCardButtom.addEventListener("click", addCardPopupOpen);
addCardCloseButton.addEventListener("click", addCardPopupClose);
addCardForm.addEventListener("submit", addCard);

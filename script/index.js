import { FormValidator } from "./formValidator.js";
import { Card } from "./cards.js";
import {
  initialCards, 
  enableValidation,
  allPopups,
  popupProfile,
  editButton,
  profileTitle,
  profileSubtitle,
  buttonAddCard,
  submitButtonAddForm,
  buttonOpenPopupCard,
  cardForm,
  placeName,
  placeUrl,
  profileForm,
  userName,
  userJob,
  formList,
} from "./const.js";

// функция открытия popup //
export function openPopup(popup) {
  popup.classList.add("popup_opened");
  document.addEventListener("keydown", closeByEsc);
};

// функция закрытия popup //
export function closePopup(popup) {
  popup.classList.remove("popup_opened");
  document.removeEventListener("keydown", closeByEsc);
};

// Форма добавления карточки //
function addCard(evt) {
  evt.preventDefault();
  const composeForm = { name: placeName.value, link: placeUrl.value };
  const card = new Card(composeForm, "#elements__template");
  const cardElement = card.generateCard();
  document.querySelector(".elements__list").prepend(cardElement);
  cardForm.reset();
  closePopup(buttonOpenPopupCard);
};

// функция создания карточек
initialCards.forEach((item) => {
  const card = new Card(item, "#elements__template");
  const cardElement = card.generateCard();
  document.querySelector(".elements__list").prepend(cardElement);
});

//  создание для проверяемой формы экземпляря класса
formList.forEach((item) => {
  const valid = new FormValidator(enableValidation, item);
  valid.enableValidation();
});

// Форма редактирования профиля //
function editProfileForm(evt) {
  evt.preventDefault();
  profileTitle.textContent = userName.value;
  profileSubtitle.textContent = userJob.value;
  closePopup(popupProfile);
};

// Деактивация кнопки добавления карточек //
const blockAddCardsButton = () => {
  submitButtonAddForm.classList.add("popup__submit-button_disabled");
  submitButtonAddForm.disabled = true;
};

// закрытие popup по нажатию Esc //
function closeByEsc(evt) {
  if (evt.key === "Escape") {
    const openedPopup = document.querySelector(".popup_opened");
    closePopup(openedPopup);
  };
};

// закрытие popup через overlay и по крестику//
allPopups.forEach((popup) => {
  popup.addEventListener("mousedown", (evt) => {
    if (evt.target.classList.contains("popup_opened")) {
      closePopup(popup);
    }
    if (evt.target.classList.contains("popup__close-icon")) {
      closePopup(popup);
    };
  });
});

buttonAddCard.addEventListener("click", () => {
  blockAddCardsButton();
  openPopup(buttonOpenPopupCard);
});
editButton.addEventListener("click", () => openPopup(popupProfile));
profileForm.addEventListener("submit", editProfileForm);
cardForm.addEventListener("submit", addCard);

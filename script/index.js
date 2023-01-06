import { FormValidator } from "./FormValidator.js";
import { Card } from "./Card.js";
import { openPopup, closePopup } from "./utils.js";
import {
  initialCards,
  enableValidation,
  popupCloseButton,
  allPopups,
  popupProfile,
  editButton,
  profileTitle,
  profileSubtitle,
  buttonAddCard,
  popupAddCard,
  cardForm,
  placeName,
  placeUrl,
  profileForm,
  userName,
  userJob,
  elementsList,
} from "./const.js";

// Форма создания карточки //
function createCard(item) {
  const card = new Card(item, "#elements__template");
  return card.generateCard();
};

// Форма добавления карточки //
function addCard(evt) {
  evt.preventDefault();
  const composeForm = { name: placeName.value, link: placeUrl.value };
  elementsList.prepend(createCard(composeForm));
  cardForm.reset();
  closePopup(popupAddCard);
};

// функция создания карточек
initialCards.forEach((item) => {
  createCard(item);
  elementsList.prepend(createCard(item));
});

//  создание для проверяемой формы экземпляря класса
const editProfileFormValidation = new FormValidator(enableValidation, popupProfile);
editProfileFormValidation.enableValidation();

const addCardFormValidation = new FormValidator(enableValidation, popupAddCard);
addCardFormValidation.enableValidation();

// Форма редактирования профиля //
function editProfileForm(evt) {
  evt.preventDefault();
  profileTitle.textContent = userName.value;
  profileSubtitle.textContent = userJob.value;
  closePopup(popupProfile);
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

// Обработчики
buttonAddCard.addEventListener("click", () => {
  addCardFormValidation.disableSubmitButton();
  cardForm.reset();
  addCardFormValidation.resetValidationState();
  openPopup(popupAddCard);
});
popupCloseButton.addEventListener("click", () => closePopup());
editButton.addEventListener("click", () => {
  profileForm.reset();
  editProfileFormValidation.resetValidationState();
  openPopup(popupProfile)
});
profileForm.addEventListener("submit", editProfileForm);
cardForm.addEventListener("submit", addCard);

// text for init 
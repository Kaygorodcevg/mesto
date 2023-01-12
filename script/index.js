import { FormValidator } from "./FormValidator.js";
import Card  from "./Card.js";
import Section from './Section.js'
import PopupWithImage from "./PopupWithImage.js";
import PopupWithForm from './PopupWithForm.js'
import UserInfo from "./UserInfo.js";

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
  popupZoomImage,
  makeNewCardButton,
} from "./const.js";

//  создание для проверяемой формы экземпляря класса
const editProfileFormValidation = new FormValidator(enableValidation, popupProfile);
editProfileFormValidation.enableValidation();

const addCardFormValidation = new FormValidator(enableValidation, popupAddCard);
addCardFormValidation.enableValidation();


// Форма создания карточки //
function createCard(item) {
  const card = new Card(item, handleCardClick, "#elements__template");
  return card.generateCard();
};

const userInfo = new UserInfo({
  nameSelector: ".profile__title",
  descriptionSelector: ".profile__subtitle",
});

const cardsList = new Section(
  {
    items: initialCards,
    renderer: createCard,
  },
  ".elements__list"
);

//отрисовка карточек
cardsList.rendererSection();

const popupWithPicture = new PopupWithImage(".popup_zoom-image");
popupWithPicture.setEventListeners();

const popupWithEditForm = new PopupWithForm(
  handleEditFormSubmit,
  ".popup_profile"
);
popupWithEditForm.setEventListeners();

const popupWithAddForm = new PopupWithForm(
  handleAddFormSubmit,
  ".popup_add-card"
);
popupWithAddForm.setEventListeners();


//нажатие на кнопку сохранения формы
function handleEditFormSubmit(data) {
  userInfo.setUserInfo(data);
  popupWithEditForm.close();
}

//кнопка создания новой карточки
function handleAddFormSubmit() {
  cardsList.addItem(
    createCard({
      name: placeName.value,
      link: placeUrl.value,
    })
  );
  popupWithAddForm.close();
}

//нажатие на картинку карточки
function handleCardClick(name, link) {
  popupWithPicture.open(name, link);
}

// /слушатели для клика на кнопку редактирования профиля и на кнопку добавления новой карточки
editButton.addEventListener("click", () => {
  const { name, job } = userInfo.getUserInfo();
  userName.value = name;
  userJob.value = job;
  profileForm.reset();
  editProfileFormValidation.resetValidationState();
  popupWithEditForm.open();
});


buttonAddCard.addEventListener("click", () => {
  placeName.value = "";
  placeUrl.value = "";
  makeNewCardButton.classList.add("popup__submit-button_disabled");
  makeNewCardButton.disabled = true;
  addCardFormValidation.resetValidationState();
  popupWithAddForm.open();
});


// Форма добавления карточки //
// function addCard(evt) {
//   evt.preventDefault();
//   const composeForm = { name: placeName.value, link: placeUrl.value };
//   elementsList.prepend(createCard(composeForm));
//   cardForm.reset();
//   closePopup(popupAddCard);
// };

// функция создания карточек
// initialCards.forEach((item) => {
//   createCard(item);
//   elementsList.prepend(createCard(item));
// });

// Форма редактирования профиля //
// function editProfileForm(evt) {
//   evt.preventDefault();
//   profileTitle.textContent = userName.value;
//   profileSubtitle.textContent = userJob.value;
//   closePopup(popupProfile);
// };

// закрытие popup через overlay и по крестику//
// allPopups.forEach((popup) => {
//   popup.addEventListener("mousedown", (evt) => {
//     if (evt.target.classList.contains("popup_opened")) {
//       closePopup(popup);
//     }
//     if (evt.target.classList.contains("popup__close-icon")) {
//       closePopup(popup);
//     };
//   });
// });

// Обработчики
// buttonAddCard.addEventListener("click", () => {
//   addCardFormValidation.disableSubmitButton();
//   cardForm.reset();
//   addCardFormValidation.resetValidationState();
//   openPopup(popupAddCard);
// });
// popupCloseButton.addEventListener("click", () => closePopup());
// editButton.addEventListener("click", () => {
//   profileForm.reset();
//   editProfileFormValidation.resetValidationState();
//   openPopup(popupProfile)
// });
// profileForm.addEventListener("submit", editProfileForm);
// cardForm.addEventListener("submit", addCard);

const popupZoomImage = document.querySelector(".popup_zoom-image"); //  Попап картинки
const popupFigcaption = popupZoomImage.querySelector(".popup__figcaption");
const popupPicture = popupZoomImage.querySelector(".popup__picture");
const popupCloseButton = document.querySelector(".popup__close-icon"); //  Кнопка закрытия popup
const allPopups = document.querySelectorAll(".popup"); // выбираем все popup для закрытия по Esc 
// profile popup
const popupProfile = document.querySelector(".popup_profile");
const editButton = document.querySelector(".profile__edit-button");
const profileTitle = document.querySelector(".profile__title");
const profileSubtitle = document.querySelector(".profile__subtitle");
// add cards popup //
const buttonAddCard = document.querySelector(".profile__add-button"); // кнопка добавления карточек
const popupAddCard = document.querySelector(".popup_add-card"); // кнопка открытия попапа добавления карточек
const elementsList = document.querySelector(".elements__list");
// forms //
const cardForm = document.forms.addCardForm;
const placeName = cardForm.elements.placeName;
const placeUrl = cardForm.elements.placeUrl;

const profileForm = document.forms.editProfileForm;
const userName = profileForm.elements.userName;
const userJob = profileForm.elements.userJob;

const initialCards = [
  {
    name: "National park",
    link: "https://images.unsplash.com/photo-1604542031551-3fd943f1886f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
  },
  {
    name: "Cape Town",
    link: "https://images.unsplash.com/photo-1671705782043-f3495bcfd522?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzMzd8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    name: "Moscow",
    link: "https://images.unsplash.com/photo-1671686673740-894ef70768e5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyMzN8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    name: "Manhattan",
    link: "https://images.unsplash.com/photo-1669194978993-830b52b9a450?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
  },
  {
    name: "Owl",
    link: "https://images.unsplash.com/photo-1669147528483-5b5b4493cbe3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
  },
  {
    name: "Sibiria",
    link: "https://images.unsplash.com/photo-1671820914661-a28b77586efc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxOTB8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
  },
];

const enableValidation = {
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__submit-button",
  inactiveButtonClass: "popup__submit-button_disabled",
  inputErrorClass: "popup__input_error",
  errorClass: "popup__input-error_active",
};

export {
  initialCards,
  enableValidation,
  popupFigcaption,
  popupPicture,
  popupCloseButton,
  popupZoomImage,
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
};

const editPopup = document.querySelector(".popup_profile");
const closeButton = document.querySelector(".popup__close-icon");
const editButton = document.querySelector(".profile__edit-button");
const formElement = document.querySelector(".popup__form_profile"); //  Форма редактирования данных профиля
const nameInput = formElement.querySelector(".popup__input_type_name"); // Находим поля формы в DOM
const jobInput = formElement.querySelector(".popup__input_type_job"); // Находим поля формы в DOM
const profileTitle = document.querySelector(".profile__title");
const profileSubtitle = document.querySelector(".profile__subtitle");

// закрытие popup //
function popupClose() {
  editPopup.classList.remove("popup_opened");
}

// открытие popup //
function openPopup() {
  editPopup.classList.add("popup_opened");
}

// Форма редактирования профиля //
function formSubmitHandler(evt) {
  evt.preventDefault();
  profileTitle.textContent = nameInput.value;
  profileSubtitle.textContent = jobInput.value;
  popupClose();
}

editButton.addEventListener("click", openPopup);
closeButton.addEventListener("click", popupClose);
formElement.addEventListener("submit", formSubmitHandler);

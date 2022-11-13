const editPopup = document.querySelector('.popup');
const closeButton = document.querySelector('.popup__close-icon');
const editButton = document.querySelector('.profile__edit-button');
const formElement = document.querySelector('.popup__form'); // Находим форму в DOM
const nameInput = formElement.querySelector('.popup__input_name'); // Находим поля формы в DOM
const jobInput = formElement.querySelector('.popup__input_job'); // Находим поля формы в DOM
const profileTitle = document.querySelector('.profile__title');
const profileSubtitle = document.querySelector('.profile__subtitle');

// закрытие popup //
function popupClose() {
  editPopup.classList.remove('popup_opened');
}

// открытие popup //
function openPopup() {
  editPopup.classList.add('popup_opened');
  nameInput.value = profileTitle.textContent;
  jobInput.value = profileSubtitle.textContent;
}

// Изменения в форму //
function formSubmitHandler(evt) {
  evt.preventDefault();
 profileTitle.textContent = nameInput.value;
 profileSubtitle.textContent = jobInput.value;
  popupClose();
}

editButton.addEventListener('click', openPopup);
closeButton.addEventListener('click', popupClose);
formElement.addEventListener('submit', formSubmitHandler);

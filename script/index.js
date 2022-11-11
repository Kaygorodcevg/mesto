const editPopup = document.querySelector(".popup");
const closeButton = document.querySelector(".popup__close-icon");
const editButton = document.querySelector(".profile__edit-button");

// закрытие popup //
function popupClose() {
  editPopup.classList.remove("popup__opened");
}
closeButton.addEventListener("click", popupClose);

// открытие popup //
function openPopup() {
  editPopup.classList.add("popup__opened");
}
editButton.addEventListener("click", openPopup);

// Изменения в форму //
const formElement = document.querySelector(".popup__form"); // Находим форму в DOM
const nameInput = formElement.querySelector(".popup__input-name"); // Находим поля формы в DOM
const jobInput = formElement.querySelector(".popup__input-job"); // Находим поля формы в DOM

function formSubmitHandler(evt) {
  evt.preventDefault();

  document.querySelector(".profile__title").textContent = nameInput.value;
  document.querySelector(".profile__subtitle").textContent = jobInput.value;
  popupClose();
}

formElement.addEventListener("submit", formSubmitHandler);

// reaction //
const elements = document.querySelector(".elements");
const reaction = elements.querySelectorAll(".elements__reaction");

function addReaction() {
  for (let i = 0; i < reaction.length; i++) {
    reaction[i].addEventListener("click", function () {
      reaction[i].classList.toggle("elements__reaction-active");
    });
  }
}

addReaction();

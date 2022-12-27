import { popupFigcaption, popupPicture, popupZoomImage } from "./const.js";
import { openPopup, closePopup } from "./utils.js";

class Card {
  constructor(data, templateSelector) {
    this._name = data.name;
    this._link = data.link;
    this._templateSelector = templateSelector;
  }

  _getTemplate() {
    const cardElement = document
      .querySelector(this._templateSelector)
      .content.querySelector(".elements__list-item")
      .cloneNode(true);
    return cardElement;
  };

  _handleOpenPopup() {
    popupPicture.src = this._link;
    popupPicture.alt = this._name;
    popupFigcaption.textContent = this._name;
    openPopup(popupZoomImage);
  };

  _handleClosePopup() {
    popupPicture.src = "";
    closePopup(popupZoomImage);
  };

  _makeReaction() {
    this._element
      .querySelector(".elements__reaction")
      .classList.toggle("elements__reaction_active");
  };

  _deleteCard() {
    this._element.remove();
  };

  // Слушатели событий
  _setEventListeners() {
    this._element
      .querySelector(".elements__image")
      .addEventListener("click", () => {
        this._handleOpenPopup();
      });

    this._element
      .querySelector(".elements__reaction")
      .addEventListener("click", () => {
        this._makeReaction();
      });

    this._element
      .querySelector(".elements__remove-button")
      .addEventListener("click", () => {
        this._deleteCard();
      });
  };

  generateCard() {
    this._element = this._getTemplate();
    this._setEventListeners();
    this._image = this._element.querySelector(".elements__image");
    this._image.src = this._link;
    this._image.alt = this._name;
    this._element.querySelector(".elements__text").textContent = this._name;
    return this._element;
  };
};

export { Card };

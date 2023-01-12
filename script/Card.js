export default class Card {
  constructor(data, handleCardClick, templateSelector) {
    this._name = data.name;
    this._link = data.link;
    this._templateSelector = templateSelector;
    this._handleCardClick = handleCardClick;
  }

  _getTemplate() {
    const cardElement = document.
    querySelector(this._templateSelector).
    content.querySelector(".elements__list-item").
    cloneNode(true);
    return cardElement;
  };

    // Слушатели событий
    _setEventListeners() {
      this._element.querySelector(".elements__image").addEventListener('click', () => {
        this._handleCardClick(this._name, this._link);
      });

      this._element.querySelector(".elements__reaction").addEventListener("click", () => {
          this._makeReaction();
        });
  
        this._element.querySelector(".elements__remove-button").addEventListener("click", () => {
          this._deleteCard();
        });
    };

 
  _makeReaction() {
    this._element.querySelector(".elements__reaction").classList.toggle("elements__reaction_active");
  };

  _deleteCard() {
    this._element.remove();
    this._element = null;
  };

  generateCard() {
    this._element = this._getTemplate();
    this._element.querySelector(".elements__image").src = this._link;
    this._element.querySelector(".elements__image").alt = this._name;
    this._element.querySelector(".elements__text").textContent = this._name;
    this._setEventListeners();
    return this._element;
  };

}; 

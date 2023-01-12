import Popup from './Popup.js'

export default class PopupWithForm extends Popup {
    constructor(callbackSubmit, popupSelector) {
    super(popupSelector)
    this._callbackSubmit = callbackSubmit
    this.popupForm = document.querySelector(this._popupSelector);
    this._form = this.popupForm.querySelector(".popup__form");
    }

    _getInputValues() {
        this._inputList = Array.from(
            this.popupForm.querySelectorAll(".popup__input")
          );
          //создаем пустой объект
          this._formValues = {};
          //собираем в него значения всех полей из формы, с ключами объекта = атрибутами каждого инпута
          this._inputList.forEach((input) => {
            this._formValues[input.name] = input.value;
          });
          return this._formValues;
    }

    setEventListeners() {
        super.setEventListeners();
        this._form.addEventListener("submit", (evt) => {
            evt.preventDefault();
            this._callbackSubmit(this._getInputValues())
        })
    }

    close() {
        super.close();
        this._form.reset();
    }
}

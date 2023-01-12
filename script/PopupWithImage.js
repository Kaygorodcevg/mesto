import Popup from './Popup.js'

export default class PopupWithImage extends Popup {
    constructor(popupSelector) {
    super(popupSelector)
    this._link = this._popupElement.querySelector(".popup__picture");
    this._name = this._popupElement.querySelector(".popup__figcaption");
    }

 open(name, link) {
   this._link.src = link;
   this._link.alt = name;
   this._name.textContent = name;
    super.open();
 }   
}

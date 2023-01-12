export default class Section {
    constructor({ items, renderer }, templateSelector) {
      this._renderer = renderer;
      this._items = items;
      this._templateSelector = document.querySelector(templateSelector);
    }
  
    //для каждого айтема применяет рендерер
    rendererSection() {
      this._items.forEach((item) => {
        const card = this._renderer(item);
        this.addItem(card);
      });
    }
  
    //вставит в разметку
    addItem(element) {
        this._templateSelector.prepend(element);
    }
  }
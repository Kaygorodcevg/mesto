export default class UserInfo {
    //получает объект с двумя селекторами полей - имя и описание
    constructor({ nameSelector, descriptionSelector }) {
      this._nameProfile = document.querySelector(nameSelector);
      this._aboutProfile = document.querySelector(descriptionSelector);
    }
  
    //возвращает текущие текстовые значения  элементов  из разметки(читаем поля профиля со страницы)
    getUserInfo() {
      return {
        name:  this._nameProfile.textContent,
        job: this._aboutProfile.textContent,
      };
    }
  
    //получает объект с ключами и устанавливает в разметку их значения(меняем поля профиля на странице)
    setUserInfo(data) {
        this._nameProfile.textContent = data.name;
        this._aboutProfile.textContent = data.job;
    }
}
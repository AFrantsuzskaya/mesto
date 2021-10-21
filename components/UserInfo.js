export default class UserInfo {
    constructor({ nameSelector, aboutSelector }) {
        this._nameSelector = document.querySelector(nameSelector);
        //profile__name
        this._aboutSelector = document.querySelector(aboutSelector);
        //'.profile__occupation'
    }
    getUserInfo() {
        //возвращает объект с данными пользователя (при открытии попапа)
        const dataUser = {};
        //объект из инпутов
        dataUser.username = this._nameSelector.textContent;
        //инпут с name - username = profile__name.текст
        dataUser.about = this._aboutSelector.textContent;
        //инпут с name - about = .profile__occupation.текст
        return dataUser
        //вернуть объект         
    }

    setUserInfo({ username, about }) {
      //принимает новые данные и добавляет на страницу
      this._nameSelector.textContent = username;
      //profile__name.текст = инпут с name - username
      this._aboutSelector.textContent = about;
      //.profile__occupation.текст = инпут с name - about
    }
}
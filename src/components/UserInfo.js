export default class UserInfo {
    constructor({ nameSelector, aboutSelector, avatarSelector }) {
        this._nameSelector = document.querySelector(nameSelector);
        this._aboutSelector = document.querySelector(aboutSelector);
        this._avatarSelector = document.querySelector(avatarSelector);
    }
    getUserInfo() {
        const dataUser = {};
        dataUser.name = this._nameSelector.textContent;
        dataUser.about = this._aboutSelector.textContent;
        return dataUser
    }

    setUserInfo({ name, about, link }) {
      if(name){this._nameSelector.textContent = name};
      if(about){this._aboutSelector.textContent = about};
      if(link){this._avatarSelector.style.backgroundImage = `url('${link}')`};
    }
}
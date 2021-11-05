export default class UserInfo {
    constructor({ nameSelector, aboutSelector, avatarSelector }) {
        this._nameElement = document.querySelector(nameSelector);
        this._aboutElement = document.querySelector(aboutSelector);
        this._avatarElement = document.querySelector(avatarSelector);
        
    }
    getUserInfo() {
        const dataUser = {};
        dataUser.name = this._nameElement.textContent;
        dataUser.about = this._aboutElement.textContent;
        return dataUser
    }

    setUserInfo({ name, about, link, _id }) {
      if(name){this._nameElement.textContent = name};
      if(about){this._aboutElement.textContent = about};
      if(link){this._avatarElement.style.backgroundImage = `url('${link}')`};
      this._id = _id;
    }
}
export default class UserInfo {
  constructor(userNameSelector, bioSelector, avatarSelector) {
    this._userName = document.querySelector(userNameSelector);
    this._about = document.querySelector(bioSelector);
    this._avatar = document.querySelector(avatarSelector);
  }

  setUserInfo({ name, about, avatar }) {
    this._userName.textContent = name;
    this._about.textContent = about;
    this._avatar.src = avatar;
  }

  getUserInfo() {
    const name = this._userName.textContent;
    const about = this._about.textContent;

    return { name, about };
  }
}

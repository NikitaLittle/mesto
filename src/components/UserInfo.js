export default class UserInfo {
  constructor(userNameSelector, bioSelector) {
    this._userName = document.querySelector(userNameSelector);
    this._bio = document.querySelector(bioSelector);
  }

  setUserInfo({ userName, bio }) {
    this._userName.textContent = userName;
    this._bio.textContent = bio;
  }

  getUserInfo() {
    const userName = this._userName.textContent;
    const bio = this._bio.textContent;

    return { userName, bio };
  }
}

export default class UserInfo {
  constructor(usernameSelector, bioSelector) {
    this._username = document.querySelector(usernameSelector);
    this._bio = document.querySelector(bioSelector);
  }

  setUserInfo({ username, bio }) {
    this._username.textContent = username;
    this._bio.textContent = bio;
  }

  getUserInfo() {
    const username = this._username.textContent;
    const bio = this._bio.textContent;

    return { username, bio };
  }
}

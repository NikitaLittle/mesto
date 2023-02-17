let profileName = document.querySelector(".profile__name");
let profileEditButton = document.querySelector(".profile__edit-button");
let profileDescription = document.querySelector(".profile__description");
let popUp = document.querySelector(".pop-up");
let popUpForm = popUp.querySelector(".pop-up__form");
let popUpName = popUp.querySelector(".pop-up__name");
let popUpDescription = popUp.querySelector(".pop-up__description");
let popUpSaveButton = popUp.querySelector(".pop-up__save-button");
let popUpCloseButton = popUp.querySelector(".pop-up__close-button");

profileEditButton.addEventListener("click", function () {
  popUpName.value = profileName.textContent;
  popUpDescription.value = profileDescription.textContent;
  popUp.classList.add("pop-up_opened");
});

function popUpClose() {
  popUp.classList.remove("pop-up_opened");
}
popUpCloseButton.addEventListener("click", popUpClose);

function handleFormSubmit(evt) {
  evt.preventDefault();
  profileName.textContent = popUpName.value;
  profileDescription.textContent = popUpDescription.value;
}
popUpForm.addEventListener("submit", handleFormSubmit);
popUpSaveButton.addEventListener("click", popUpClose);

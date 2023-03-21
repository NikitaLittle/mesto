// Массив изначальных мест
const initialPlaces = [
  {
    title: 'Канада, Озеро Морейн',
    image:
      'https://images.unsplash.com/photo-1677530248517-ee23fb4150ae?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
  },
  {
    title: 'Токио, Япония',
    image:
      'https://images.unsplash.com/photo-1677529461522-b2a94a2a3a08?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
  },
  {
    title: 'Живописный мост, Москва, Россия',
    image:
      'https://images.unsplash.com/photo-1523509433743-6f42a58221df?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1333&q=80',
  },
  {
    title: 'Накано, Токио, Япония',
    image:
      'https://images.unsplash.com/photo-1677350785705-1a5a0bb00587?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
  },
  {
    title: 'Торонто, Канада',
    image:
      'https://images.unsplash.com/photo-1677253171049-8cf508015e99?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
  },
  {
    title: 'Москва, Россия',
    image:
      'https://images.unsplash.com/photo-1512495039889-52a3b799c9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
  },
];

// Селекторы и классы валидации
const config = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button',
  inactiveButtonClass: 'popup__button_inactive',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__input-error_active',
};

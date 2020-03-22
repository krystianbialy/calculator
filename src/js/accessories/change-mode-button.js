const body = document.querySelector('#body');
const clipboardTextarea = document.querySelector(
  '#calculator__clipboard-textarea'
);
const changeMode = document.querySelector('#change-mode');
const clipboardTextareaPlaceholder = document.querySelector(
  '.calculator__clipboard-textarea'
);

changeMode.onclick = () => {
  body.classList.toggle('body-dark-mode');
  clipboardTextarea.classList.toggle('clipboard-dark-mode');
  changeMode.classList.toggle('change-mode-dark-mode');
  clipboardTextareaPlaceholder.classList.toggle('clipboard-textarea-dark-mode');
};

const clipboardButton = document.querySelector('#clipboard-button');
const calculatorClipboard = document.querySelector('#calculator__clipboard');
const clipboardButtonIcon = document.querySelector('#clipboard-button__icon');
const clipboardButtonClose = document.querySelector(
  '#calculator__clipboard-button-close-icon'
);

clipboardButton.onclick = () => {
  calculatorClipboard.classList.toggle('clipboard-button-toggle');
  clipboardButtonIcon.classList.toggle('clipboard-button-dark-mode');
};

clipboardButtonClose.onclick = () => {
  calculatorClipboard.classList.toggle('clipboard-button-toggle');
  clipboardButtonIcon.classList.toggle('clipboard-button-dark-mode');
};

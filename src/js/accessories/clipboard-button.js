const clipboardButton = document.querySelector('#clipboard-button');
const calculatorClipboard = document.querySelector('#calculator__clipboard');
const clipboardButtonIcon = document.querySelector('#clipboard-button__icon');
const clipboardButtonClose = document.querySelector(
  '#calculator__clipboard-button-close-icon'
);
const calculatorInformations = document.querySelector(
  '#calculator__informations'
);
const informationButtonIcon = document.querySelector(
  '#information-button__icon'
);

clipboardButton.onclick = () => {
  const calculatorInformationsClassTest = calculatorInformations.classList.toggle(
    'information-button-toggle'
  );
  const informationButtonIconClassTest = informationButtonIcon.classList.toggle(
    'information-button-dark-mode'
  );

  if (
    calculatorInformationsClassTest === true &&
    informationButtonIconClassTest === true
  ) {
    calculatorInformations.classList.remove('information-button-toggle');
    informationButtonIcon.classList.remove('information-button-dark-mode');
  }

  calculatorClipboard.classList.toggle('clipboard-button-toggle');
  clipboardButtonIcon.classList.toggle('clipboard-button-dark-mode');
};

clipboardButtonClose.onclick = () => {
  calculatorClipboard.classList.toggle('clipboard-button-toggle');
  clipboardButtonIcon.classList.toggle('clipboard-button-dark-mode');
};

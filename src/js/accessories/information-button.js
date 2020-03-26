const informationButton = document.querySelector('#information-button');
const calculatorInformations = document.querySelector(
  '#calculator__informations'
);
const informationButtonIcon = document.querySelector(
  '#information-button__icon'
);
const informationsButtonClose = document.querySelector(
  '#calculator__informations-button-close-icon'
);
const calculatorClipboard = document.querySelector('#calculator__clipboard');
const clipboardButtonIcon = document.querySelector('#clipboard-button__icon');

informationButton.onclick = () => {
  const calculatorClipboardClassTest = calculatorClipboard.classList.contains(
    'clipboard-button-toggle'
  );
  const clipboardButtonIconClassTest = clipboardButtonIcon.classList.contains(
    'clipboard-button-dark-mode'
  );

  if (
    calculatorClipboardClassTest === true &&
    clipboardButtonIconClassTest === true
  ) {
    calculatorClipboard.classList.remove('clipboard-button-toggle');
    clipboardButtonIcon.classList.remove('clipboard-button-dark-mode');
  }

  calculatorInformations.classList.toggle('information-button-toggle');
  informationButtonIcon.classList.toggle('information-button-dark-mode');
};

informationsButtonClose.onclick = () => {
  calculatorInformations.classList.toggle('information-button-toggle');
  informationButtonIcon.classList.toggle('information-button-dark-mode');
};

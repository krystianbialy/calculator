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

informationButton.onclick = () => {
  calculatorInformations.classList.toggle('information-button-toggle');
  informationButtonIcon.classList.toggle('information-button-dark-mode');
};

informationsButtonClose.onclick = () => {
  calculatorInformations.classList.toggle('information-button-toggle');
  informationButtonIcon.classList.toggle('information-button-dark-mode');
};

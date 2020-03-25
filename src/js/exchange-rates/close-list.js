const exchangeRatesButtonClose = document.querySelector(
  '#calculator__exchange-rates-button-close-icon'
);
const exchangeRatesListItem = document.querySelector(
  '.calculator__exchange-rates-list'
);

exchangeRatesButtonClose.onclick = () => {
  exchangeRates.style.display = 'none';
  calculatorClipboard.classList.remove('clipboard-margin');
  calculatorInformations.classList.remove('informations-margin');
};

exchangeRatesListItem.onclick = () => {
  if (window.innerWidth > 620) {
    exchangeRates.style.display = 'block';
  } else {
    exchangeRates.style.display = 'none';
  }
};

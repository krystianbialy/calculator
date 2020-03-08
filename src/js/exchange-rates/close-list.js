const exchangeRatesButtonClose = document.querySelector(
  '#calculator__exchange-rates-button-close-icon'
);
const exchangeRates = document.querySelector('#calculator__exchange-rates');
const exchangeRatesListItem = document.querySelector(
  '.calculator__exchange-rates-list'
);

exchangeRatesButtonClose.onclick = () => {
  exchangeRates.style.display = 'none';
};

exchangeRatesListItem.onclick = () => {
  exchangeRates.style.display = 'none';
};

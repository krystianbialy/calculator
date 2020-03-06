const exchangeRatesButtonClose = document.querySelector(
  '#calculator__exchange-rates-button-close-icon'
);
const exchangeRates = document.querySelector('#calculator__exchange-rates');

exchangeRatesButtonClose.onclick = () => {
  exchangeRates.style.display = 'none';
};

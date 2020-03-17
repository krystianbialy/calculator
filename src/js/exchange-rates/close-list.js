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
  if (window.innerWidth > 620) {
    exchangeRates.style.display = 'block';
  } else {
    exchangeRates.style.display = 'none';
  }
};

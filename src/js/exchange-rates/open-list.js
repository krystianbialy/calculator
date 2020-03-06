const buttonExchangeRates = document.querySelector(
  '#calculator__input-operation-value-exchange-rates'
);
const exchangeRates = document.querySelector('#calculator__exchange-rates');

buttonExchangeRates.onclick = () => {
  exchangeRates.style.display = 'block';
};

exchangeRates.style.display = 'none';

buttonExchangeRates.onclick = () => {
  if (exchangeRates.style.display === 'none') {
    calculatorClipboard.classList.add('clipboard-margin');
    exchangeRates.style.display = 'block';
  } else {
    exchangeRates.style.display = 'none';
    calculatorClipboard.classList.remove('clipboard-margin');
  }
};

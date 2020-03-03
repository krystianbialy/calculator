const url = 'http://api.nbp.pl/api/exchangerates/tables/a/';
const exchangeRates = async () => {
  try {
    const response = await fetch(url);
    const json = await response.json();
    return json;
  } catch (error) {
    console.error('NBP API response error', error);
  }
}

exchangeRates()
  .then(table => table[0].rates)
  .then(rates => {
    const exchangeRates = document.querySelector('#calculator__exchange-rates-list');
    let ratesList = '';
    rates.forEach(rate => {
      ratesList += `<li class="calculator__exchange-rates-list-item">${rate.currency}</li>`
    })
    exchangeRates.innerHTML = `${ratesList}`;
    const currencies = document.querySelectorAll('.calculator__exchange-rates-list-item');
    Array.from(currencies).map(currency => {
      return currency.addEventListener('click', () => {
        rates.map(rate => {
          if (rate.currency === currency.innerHTML) {
            displayValue += rate.code;
            displayValue += '(';
            outputOperationValue.innerHTML = displayValue;
          }
        })
      })
    });
  })
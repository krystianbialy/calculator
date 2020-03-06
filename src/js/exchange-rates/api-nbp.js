const url = 'https://api.nbp.pl/api/exchangerates/tables/a/';
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
            displayValue += rate.code + '(';
            outputOperationValue.innerHTML = displayValue;
            rateMid = rate.mid;
            valueToBeConverted = 'true';
          }
        })
      })
    });
  })

  const convertACurrency = () => {
     if (valueToBeConverted === 'true' && saveNumber === 'false') {
       calculationsZone = [];
       openingParethesis = displayValue.slice(0, 1).includes('(');
       if (openingParethesis === true) {
        calculationsZone.push('(');
       }
       const valueEntered = displayValue.match(/[0-9]/g).join('');
       calculationsZone.push('(' + rateMid * valueEntered + ')' );
       if (openingParethesis === true) {
        calculationsZone.push(')');
       }
       console.log(valueEntered);
       console.log(calculationsZone);
     }

     if (valueToBeConverted === 'true' && saveNumber === 'true' ) {
      calculationsZone.splice(-pendingValue.length - 1);
      calculationsZone.push('(' + rateMid * pendingValue.join('') + ')' );
      console.log(pendingValue);
      console.log(calculationsZone);
     }
  }

  export {convertACurrency};
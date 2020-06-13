import { convertACurrencyServices } from './convert-a-currency-services';

export const convertACurrency = () => {
  if (valueToBeConverted === 'true' && saveNumber === 'false') {
    exchangeRatesValueLengthMemory.push(calculationsZone.length);
    calculationsZone = [];
    openingParenthesis = displayValue.slice(0, 1).includes('(');
    if (openingParenthesis === true) {
      calculationsZone.push('(');
    }
    const valueEntered = displayValue.match(/[0-9.]/g).join('');
    calculationsZone.push('(' + rateMid * valueEntered + ')');
    convertACurrencyServices();
    if (openingParenthesis === true) {
      calculationsZone.push(')');
    }
  }

  if (valueToBeConverted === 'true' && saveNumber === 'true') {
    calculationsZone.splice(-pendingValue.length);
    calculationsZone.push('(' + rateMid * pendingValue.join('') + ')');
    convertACurrencyServices();
    exchangeRatesValueLengthMemory.push(pendingValue.length);
    if (openingParenthesis === true) {
      calculationsZone.push(')');
    }
  }
};

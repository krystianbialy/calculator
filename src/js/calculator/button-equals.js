import { performMathPowerAndPush } from './math-power.js';
import { performMathRootAndPush } from './math-root.js';
import { performOutputOperation } from './output-operation.js';
import { convertACurrency } from '../exchange-rates/convert-a-currency.js';

buttonEquals.onclick = () => {
  var displayValueLetterTest;
  if (!displayValue.includes('=')) {
    performMathPowerAndPush();
    performMathRootAndPush();
    convertACurrency();
    displayValue += '=';
    const resultOfTheAction = eval(calculationsZone.join(''));
    const addingStringToResult = resultOfTheAction + '';
    const dotDetection = addingStringToResult.includes('.');
    const displayValueMatch = displayValue.match(/[A-Z]/g);
    if (displayValueMatch !== null) {
      displayValueLetterTest = /^[A-Z]+$/.test(displayValueMatch.join(''));
    } else {
      displayValueLetterTest = false;
    }
    if (dotDetection === true && displayValueLetterTest === false) {
      displayResult = resultOfTheAction.toFixed(2);
    } else if (dotDetection === true && displayValueLetterTest === true) {
      displayResult =
        resultOfTheAction.toFixed(2) +
        '<span class="pln-shortcut-style">PLN</span>';
    } else if (dotDetection === false && displayValueLetterTest === true) {
      displayResult =
        resultOfTheAction + '<span class="pln-shortcut-style">PLN</span>';
    } else {
      displayResult = resultOfTheAction;
    }
    if (displayResult === undefined) {
      displayResult = 0;
    }
    performOutputOperation();
    equalsWasClicked = 'true';
  }
  if (displayValue.includes('=')) {
    for (let i = 0; i < allNumbers.length; i += 1) {
      allNumbers[i].style.pointerEvents = 'none';
    }
    for (let i = 0; i < allOperators.length; i += 1) {
      allOperators[i].style.pointerEvents = 'none';
    }
    const exchangeRatesListItem = document.querySelectorAll(
      '.calculator__exchange-rates-list-item'
    );
    for (let i = 0; i < exchangeRatesListItem.length; i += 1) {
      exchangeRatesListItem[i].style.pointerEvents = 'none';
    }
    buttonEquals.style.pointerEvents = 'none';
  }
};

window.onerror = () => {
  displayValue = displayValue.slice(0, displayValue.length - 1);
  displayResult = 'Popraw działanie!';
  performOutputOperation();
};

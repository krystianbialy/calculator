import { performMathPowerAndPush } from './math-power.js';
import { performMathRootAndPush } from './math-root.js';
import { performOutputOperation } from './output-operation.js';
import { convertACurrency } from '../exchange-rates/convert-a-currency.js';

buttonEquals.onclick = () => {
  var displayValueLetterTest;
  performMathPowerAndPush();
  performMathRootAndPush();
  convertACurrency();
  console.log(calculationsZone);
  displayValue += '=';
  const resultOfTheAction = eval(calculationsZone.join(''));
  const addingStringToResult = resultOfTheAction + '';
  const dotDetection = addingStringToResult.includes('.');
  const displayValueMatch = displayValue.match(/[A-Z]/g);
  console.log(displayValueMatch);
  if (displayValueMatch !== null) {
    displayValueLetterTest = /^[A-Z]+$/.test(displayValueMatch.join(''));
    console.log(displayValueLetterTest);
  } else {
    displayValueLetterTest = false;
    console.log(displayValueLetterTest);
  }
  if (dotDetection === true && displayValueLetterTest === false) {
    displayResult = resultOfTheAction.toFixed(2);
  } else if (dotDetection === true && displayValueLetterTest === true) {
    displayResult = resultOfTheAction.toFixed(2) + 'PLN';
  } else if (dotDetection === false && displayValueLetterTest === true) {
    displayResult = resultOfTheAction + 'PLN';
  } else {
    displayResult = resultOfTheAction;
  }
  performOutputOperation();
  equalsWasClicked = 'true';
};

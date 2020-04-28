import { performMathPowerAndPush } from './math-power.js';
import { performMathRootAndPush } from './math-root.js';
import { convertACurrency } from '../exchange-rates/convert-a-currency.js';

let performOperation = itemClicked => {
  let operator = itemClicked.target.innerText;

  if (operator === '×') {
    operator = '*';
  } else if (operator === '÷') {
    operator = '/';
  }

  if (operator === '(' || operator === ')') {
    displayValue += operator;
    calculationsZone.push(operator);
    if (operator === ')') {
      closingParenthesis = 'true';
      if (valueToBeConverted === 'true') {
        displayValue += '<exchangeRates>';
        calculationsZone.pop();
      }
    }
  }

  if (
    operator === '*' ||
    operator === '/' ||
    operator === '+' ||
    operator === '-'
  ) {
    performMathPowerAndPush();
    performMathRootAndPush();
    convertACurrency();
    if (
      openingParenthesis === true &&
      saveNumber === 'false' &&
      (savePower === 'true' ||
        saveRootNumber === 'true' ||
        saveNAndRootNumber === 'true' ||
        valueToBeConverted === 'true')
    ) {
      calculationsZone.pop();
    }
    pendingValue = [];
    pendingPowerOrRootNumber = [];
    rootN = [];
    saveNumber = 'true';
    savePower = 'false';
    saveRootNumber = 'false';
    saveNAndRootNumber = 'false';
    closingParenthesis = 'false';
    valueToBeConverted = 'false';
    if (operator === '*') {
      operator = '×';
    } else if (operator === '/') {
      operator = '÷';
    }
    displayValue += operator;
    if (operator === '×') {
      operator = '*';
    } else if (operator === '÷') {
      operator = '/';
    }
    calculationsZone.push(operator);
  }

  const lastElementOfValue = displayValue.slice(-1);
  const lastElementOfValueNumberTest = /^[0-9]+$/.test(lastElementOfValue);

  if (
    operator === 'x2' &&
    saveNumber === 'false' &&
    lastElementOfValueNumberTest === true
  ) {
    let saveDisplayValueForPowerX2 = displayValue;
    displayValue += '2'.sup();
    calculationsZone = [];
    openingParenthesis = saveDisplayValueForPowerX2.includes('(');
    if (openingParenthesis === true) {
      saveDisplayValueForPowerX2 = saveDisplayValueForPowerX2.replace('(', '');
      calculationsZone.push('(');
    }
    calculationsZone.push(Math.pow(saveDisplayValueForPowerX2, 2));
    const valueAndPowerToMemory = saveDisplayValueForPowerX2 + 1;
    powersX2orSquareRootsLengthMemory.push(valueAndPowerToMemory.length);
    console.log(powersX2orSquareRootsLengthMemory);
  } else if (
    operator === 'x2' &&
    saveNumber === 'true' &&
    lastElementOfValueNumberTest === true
  ) {
    displayValue += '2'.sup();
    calculationsZone.splice(-pendingValue.length);
    calculationsZone.push(Math.pow(pendingValue.join(''), 2));
    powersX2orSquareRootsLengthMemory.push(pendingValue.length + 1);
    console.log(powersX2orSquareRootsLengthMemory);
  }

  if (operator === 'xy' && lastElementOfValueNumberTest === true) {
    saveDisplayValueForPowerYOrRootN = displayValue;
    savePower = 'true';
    performedMathPowerAndPushed = 'false';
    equalsWasClicked = 'false';
    for (let i = 0; i < allOperators.length; i += 1) {
      allOperators[i].style.pointerEvents = 'none';
    }
    buttonExchangeRates.style.pointerEvents = 'none';
    buttonEquals.style.pointerEvents = 'none';
  }

  const lastElementOfValueOperatorTest = /^[× ÷ + -]+$/.test(
    lastElementOfValue
  );

  if (
    (operator === '√' && displayValue === '') ||
    (operator === '√' && lastElementOfValueOperatorTest === true)
  ) {
    saveRootNumber = 'true';
    displayValue += '√';
    performedSquareRootAndPushed = 'false';
    performedMathPowerAndPushed = 'true';
    equalsWasClicked = 'false';
  }

  if (operator === 'n√a' && lastElementOfValueNumberTest === true) {
    saveDisplayValueForPowerYOrRootN = displayValue;
    saveNAndRootNumber = 'true';
    displayValue = displayValue.slice(0, displayValue.length - rootN.length);
    displayValue += rootN.join('').sup() + '√';
    performedSquareRootAndPushed = 'false';
    performedMathPowerAndPushed = 'true';
    equalsWasClicked = 'false';
    for (let i = 0; i < allOperators.length; i += 1) {
      allOperators[i].style.pointerEvents = 'none';
    }
    buttonExchangeRates.style.pointerEvents = 'none';
    buttonEquals.style.pointerEvents = 'none';
  }

  if (operator === '.') {
    displayValue += operator;
    pendingValue.push(operator);
    calculationsZone.push(operator);
  }

  outputOperationValue.innerHTML = displayValue;
};

for (let i = 0; i < allOperators.length; i += 1) {
  allOperators[i].addEventListener('click', performOperation);
}

export { performOperation };

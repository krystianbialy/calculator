import { performMathPowerAndPush } from './math-power.js';
import { performMathRootAndPush } from './math-root.js';
import { initialConfiguration } from './initial-configuration.js';
import { performOutputOperation } from './output-operation.js';

buttonBackspace.onclick = () => {
  if (equalsWasClicked === 'false' && performedMathPowerAndPushed === 'false') {
    performMathPowerAndPush();
    performedMathPowerAndPushed = 'true';
  } else if (
    equalsWasClicked === 'false' &&
    performedSquareRootAndPushed === 'false'
  ) {
    performMathRootAndPush();
    performedSquareRootAndPushed = 'true';
  }
  const equals = displayValue.includes('=');
  if (equals === false) {
    const superscriptTag = '<sup></sup>';
    const closingSuperscriptTag = '</sup>';
    const closingSuperscriptTagDetection = displayValue.slice(
      -closingSuperscriptTag.length
    );
    const powerXyTag = '<powerxy>';
    const powerXyTagDetection = displayValue.slice(-powerXyTag.length);
    const squareRootTag = '<squareroot>';
    const squareRootTagDetection = displayValue.slice(-squareRootTag.length);
    const rootTag = '<root>';
    const rootTagDetection = displayValue.slice(-rootTag.length);
    const exchangeRatesTag = '<exchangeRates>';
    const exchangeRatesTagDetection = displayValue.slice(
      -exchangeRatesTag.length
    );
    if (closingSuperscriptTag === closingSuperscriptTagDetection) {
      const powersX2MemoryLastValue =
        powersX2orSquareRootsLengthMemory[
          powersX2orSquareRootsLengthMemory.length - 1
        ];
      displayValue = displayValue.slice(
        0,
        displayValue.length - superscriptTag.length
      );
      displayValue = displayValue.slice(
        0,
        displayValue.length - powersX2MemoryLastValue
      );
      powersX2orSquareRootsLengthMemory.pop();
    } else if (powerXyTag === powerXyTagDetection) {
      const powersXYMemoryLastValue =
        powersXYorRootsLengthMemory[powersXYorRootsLengthMemory.length - 1];
      const powersYMemoryLastValue =
        powersYorRootsNLengthMemory[powersYorRootsNLengthMemory.length - 1];
      displayValue = displayValue.slice(
        0,
        displayValue.length -
          superscriptTag.length * powersYMemoryLastValue -
          powerXyTag.length * powersYMemoryLastValue
      );
      displayValue = displayValue.slice(
        0,
        displayValue.length - powersXYMemoryLastValue
      );
      powersXYorRootsLengthMemory.pop();
      powersYorRootsNLengthMemory.pop();
    } else if (squareRootTag === squareRootTagDetection) {
      const squareRootsMemoryLastValue =
        powersX2orSquareRootsLengthMemory[
          powersX2orSquareRootsLengthMemory.length - 1
        ];
      const squareRootsNumberValueMemoryLastValue =
        squareRootsNumberValueLengthMemory[
          squareRootsNumberValueLengthMemory.length - 1
        ];
      displayValue = displayValue.slice(
        0,
        displayValue.length -
          squareRootTag.length * squareRootsNumberValueMemoryLastValue
      );
      displayValue = displayValue.slice(
        0,
        displayValue.length - squareRootsMemoryLastValue
      );
      powersX2orSquareRootsLengthMemory.pop();
      squareRootsNumberValueLengthMemory.pop();
    } else if (rootTag === rootTagDetection) {
      const rootsNMemoryLastValue =
        powersYorRootsNLengthMemory[powersYorRootsNLengthMemory.length - 1];
      const rootsMemoryLastValue =
        powersXYorRootsLengthMemory[powersXYorRootsLengthMemory.length - 1];
      const rootsNumberValueMemoryLastValue =
        rootsNumberValueLengthMemory[rootsNumberValueLengthMemory.length - 1];
      displayValue = displayValue.slice(
        0,
        displayValue.length -
          rootsMemoryLastValue -
          rootTag.length * rootsNumberValueMemoryLastValue
      );
      displayValue = displayValue.slice(
        0,
        displayValue.length -
          rootsNMemoryLastValue -
          superscriptTag.length * rootsNMemoryLastValue
      );
      powersYorRootsNLengthMemory.pop();
      powersXYorRootsLengthMemory.pop();
      rootsNumberValueLengthMemory.pop();
      const openingSuperscript = '<sup>';
      const openingSuperscriptDetection = displayValue.slice(
        -openingSuperscript.length
      );
      if (openingSuperscript === openingSuperscriptDetection) {
        console.log('SUP DELETE');
        displayValue = displayValue.slice(
          0,
          displayValue.length - openingSuperscript.length
        );
        pendingPowerOrRootNumber = [];
        pendingValue = [];
      }
    } else if (exchangeRatesTag === exchangeRatesTagDetection) {
      const exchangeRatesSkeleton = 'XYZ()';
      const exchangeRatesValueLengthMemoryLastValue =
        exchangeRatesValueLengthMemory[
          exchangeRatesValueLengthMemory.length - 1
        ];
      displayValue = displayValue.slice(
        0,
        displayValue.length -
          exchangeRatesTag.length -
          exchangeRatesValueLengthMemoryLastValue -
          exchangeRatesSkeleton.length
      );
      exchangeRatesValueLengthMemory.pop();
      console.log(exchangeRatesValueLengthMemoryLastValue);
    } else {
      displayValue = displayValue.slice(0, displayValue.length - 1);
    }
    calculationsZone.pop();
  } else {
    displayValue = displayValue.slice(0, displayValue.length - 1);
  }

  pendingValue.pop();
  pendingPowerOrRootNumber.pop();
  savePower = 'false';
  saveRootNumber = 'false';
  rootN = [];
  saveNAndRootNumber = 'false';

  if (displayValue === '') {
    initialConfiguration();
  }
  performOutputOperation();

  if (!displayValue.includes('=')) {
    for (let i = 0; i < allNumbers.length; i += 1) {
      allNumbers[i].style.pointerEvents = 'auto';
    }
    for (let i = 0; i < allOperators.length; i += 1) {
      allOperators[i].style.pointerEvents = 'auto';
    }
    const exchangeRatesListItem = document.querySelectorAll(
      '.calculator__exchange-rates-list-item'
    );
    for (let i = 0; i < exchangeRatesListItem.length; i += 1) {
      exchangeRatesListItem[i].style.pointerEvents = 'auto';
    }
    buttonEquals.style.pointerEvents = 'auto';
  }

  console.log(pendingValue);
  console.log(displayValue);
  console.log(calculationsZone);
  console.log(powersX2orSquareRootsLengthMemory);
  console.log(powersXYorRootsLengthMemory);
  console.log(powersYorRootsNLengthMemory);
  console.log(rootsNumberValueLengthMemory);
  console.log(squareRootsNumberValueLengthMemory);
};

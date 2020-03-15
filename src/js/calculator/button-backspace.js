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
    const superscript = '<sup></sup>';
    const closingSuperscript = '</sup>';
    const closingSuperscriptDetection = displayValue.slice(
      -closingSuperscript.length
    );
    const powerXY = '<powerxy>';
    const powerXYDetection = displayValue.slice(-powerXY.length);
    const squareRoot = '<squareroot>';
    const squareRootDetection = displayValue.slice(-squareRoot.length);
    const root = '<root>';
    const rootDetection = displayValue.slice(-root.length);
    if (closingSuperscript === closingSuperscriptDetection) {
      const powersX2MemoryLastValue =
        powersX2orSquareRootsLengthMemory[
          powersX2orSquareRootsLengthMemory.length - 1
        ];
      displayValue = displayValue.slice(
        0,
        displayValue.length - superscript.length
      );
      displayValue = displayValue.slice(
        0,
        displayValue.length - powersX2MemoryLastValue
      );
      powersX2orSquareRootsLengthMemory.pop();
    } else if (powerXY === powerXYDetection) {
      const powersXYMemoryLastValue =
        powersXYorRootsLengthMemory[powersXYorRootsLengthMemory.length - 1];
      const powersYMemoryLastValue =
        powersYorRootsNLengthMemory[powersYorRootsNLengthMemory.length - 1];
      displayValue = displayValue.slice(
        0,
        displayValue.length -
          superscript.length * powersYMemoryLastValue -
          powerXY.length * powersYMemoryLastValue
      );
      displayValue = displayValue.slice(
        0,
        displayValue.length - powersXYMemoryLastValue
      );
      powersXYorRootsLengthMemory.pop();
      powersYorRootsNLengthMemory.pop();
    } else if (squareRoot === squareRootDetection) {
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
          squareRoot.length * squareRootsNumberValueMemoryLastValue
      );
      displayValue = displayValue.slice(
        0,
        displayValue.length - squareRootsMemoryLastValue
      );
      powersX2orSquareRootsLengthMemory.pop();
      squareRootsNumberValueLengthMemory.pop();
    } else if (root === rootDetection) {
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
          root.length * rootsNumberValueMemoryLastValue
      );
      displayValue = displayValue.slice(
        0,
        displayValue.length -
          rootsNMemoryLastValue -
          superscript.length * rootsNMemoryLastValue
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
    buttonExchangeRates.style.pointerEvents = 'auto';
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

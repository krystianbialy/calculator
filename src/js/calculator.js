const allNumbers = document.querySelectorAll(
  '.calculator__input-operation-value--number'
);
const allOperators = document.querySelectorAll(
  '.calculator__input-operation-value--operator'
);
const buttonBackspace = document.querySelector(
  '#calculator__input-operation-value-backspace'
);
const buttonClear = document.querySelector(
  '#calculator__input-operation-value-clear'
);
const buttonEquals = document.querySelector(
  '#calculator__input-operation-value-equals'
);

var outputOperationValue = document.querySelector(
  '#calculator__output-operation-value'
);
var outputOperationResult = document.querySelector(
  '#calculator__output-operation-result'
);

var displayResult = 0;
var displayValue = '';
var saveNumber = 'false';
var savePower = 'false';
var saveRootNumber = 'false';
var saveNAndRootNumber = 'false';
var closingParenthesis = 'false';
var equalsWasClicked = 'false';
var performedMathPowerAndPushed = 'false';
var performedSquareRootAndPushed = 'false';
var openingParethesis;
var saveDisplayValueForPowerYOrRootN;
var powerOrRootNumber = [];
var rootN = [];
var pendingPowerOrRootNumber = [];
var pendingValue = [];
var calculationsZone = [];
var powersX2orSquareRootsLengthMemory = [];
var squareRootsNumberValueLengthMemory = [];
var powersXYorRootsLengthMemory = [];
var powersYorRootsNLengthMemory = [];
var rootsNumberValueLengthMemory = [];

const loadDisplayResult = () => {
  outputOperationResult.innerHTML = displayResult;
};

loadDisplayResult();

const performOutputOperation = () => {
  outputOperationResult.innerHTML = displayResult;
  outputOperationValue.innerHTML = displayValue;
};

const performMathPowerAndPush = () => {
  if (savePower === 'true' && saveNumber === 'false') {
    calculationsZone = [];
    openingParethesis = saveDisplayValueForPowerYOrRootN.includes('(');
    if (openingParethesis === true) {
      saveDisplayValueForPowerYOrRootN = saveDisplayValueForPowerYOrRootN.replace(
        '(',
        ''
      );
      calculationsZone.push('(');
    }
    calculationsZone.push(
      Math.pow(
        saveDisplayValueForPowerYOrRootN,
        pendingPowerOrRootNumber.join('')
      )
    );
    if (openingParethesis === true) {
      calculationsZone.push(')');
    }
    powersXYorRootsLengthMemory.push(
      saveDisplayValueForPowerYOrRootN.length + pendingPowerOrRootNumber.length
    );
    powersYorRootsNLengthMemory.push(pendingPowerOrRootNumber.length);
    console.log(powersXYorRootsLengthMemory);
    console.log(powersYorRootsNLengthMemory);
  }

  if (
    savePower === 'true' &&
    saveNumber === 'true' &&
    closingParenthesis === 'false'
  ) {
    calculationsZone.splice(-pendingValue.length);
    pendingValue.splice(-pendingPowerOrRootNumber.length);
    calculationsZone.push(
      Math.pow(pendingValue.join(''), pendingPowerOrRootNumber.join(''))
    );
    powersXYorRootsLengthMemory.push(
      pendingValue.length + pendingPowerOrRootNumber.length
    );
    powersYorRootsNLengthMemory.push(pendingPowerOrRootNumber.length);
    console.log(powersXYorRootsLengthMemory);
  }

  if (
    savePower === 'true' &&
    saveNumber === 'true' &&
    closingParenthesis === 'true'
  ) {
    calculationsZone.splice(-pendingValue.length - 1);
    pendingValue.splice(-pendingPowerOrRootNumber.length);
    calculationsZone.push(
      Math.pow(pendingValue.join(''), pendingPowerOrRootNumber.join(''))
    );
    calculationsZone.push(')');
    powersXYorRootsLengthMemory.push(
      pendingValue.length + pendingPowerOrRootNumber.length
    );
    powersYorRootsNLengthMemory.push(pendingPowerOrRootNumber.length);
    console.log(powersXYorRootsLengthMemory);
  }
};

const performMathRootAndPush = () => {
  if (saveRootNumber === 'true' && saveNumber === 'false') {
    calculationsZone = [];
    openingParethesis = displayValue.includes('(');
    if (openingParethesis === true) {
      calculationsZone.push('(');
    }
    calculationsZone.push(Math.sqrt(pendingPowerOrRootNumber.join('')));
    if (openingParethesis === true) {
      calculationsZone.push(')');
    }
    powersX2orSquareRootsLengthMemory.push(pendingPowerOrRootNumber.length + 1);
    squareRootsNumberValueLengthMemory.push(pendingPowerOrRootNumber.length);
    console.log(powersX2orSquareRootsLengthMemory);
  } else if (saveNAndRootNumber === 'true' && saveNumber === 'false') {
    calculationsZone = [];
    openingParethesis = saveDisplayValueForPowerYOrRootN.includes('(');
    if (openingParethesis === true) {
      saveDisplayValueForPowerYOrRootN = saveDisplayValueForPowerYOrRootN.replace(
        '(',
        ''
      );
      calculationsZone.push('(');
    }
    calculationsZone.push(
      Math.pow(
        pendingPowerOrRootNumber.join(''),
        1 / saveDisplayValueForPowerYOrRootN
      )
    );
    if (openingParethesis === true) {
      calculationsZone.push(')');
    }
    powersXYorRootsLengthMemory.push(pendingPowerOrRootNumber.length + 1);
    rootsNumberValueLengthMemory.push(pendingPowerOrRootNumber.length);
    powersYorRootsNLengthMemory.push(saveDisplayValueForPowerYOrRootN.length);
  }

  if (
    saveRootNumber === 'true' &&
    saveNumber === 'true' &&
    closingParenthesis === 'false'
  ) {
    calculationsZone.splice(-pendingValue.length);
    pendingValue.splice(-pendingPowerOrRootNumber.length);
    calculationsZone.push(Math.sqrt(pendingPowerOrRootNumber.join('')));
    powersX2orSquareRootsLengthMemory.push(pendingPowerOrRootNumber.length + 1);
    squareRootsNumberValueLengthMemory.push(pendingPowerOrRootNumber.length);
    console.log(powersX2orSquareRootsLengthMemory);
  } else if (
    saveNAndRootNumber === 'true' &&
    saveNumber === 'true' &&
    closingParenthesis === 'false'
  ) {
    calculationsZone.splice(-pendingValue.length);
    pendingValue.splice(-pendingPowerOrRootNumber.length);
    calculationsZone.push(
      Math.pow(pendingPowerOrRootNumber.join(''), 1 / pendingValue.join(''))
    );
    powersXYorRootsLengthMemory.push(pendingPowerOrRootNumber.length + 1);
    rootsNumberValueLengthMemory.push(pendingPowerOrRootNumber.length);
    powersYorRootsNLengthMemory.push(pendingValue.length);
  }

  if (
    saveRootNumber === 'true' &&
    saveNumber === 'true' &&
    closingParenthesis === 'true'
  ) {
    calculationsZone.splice(-pendingValue.length - 1);
    pendingValue.splice(-pendingPowerOrRootNumber.length);
    calculationsZone.push(Math.sqrt(pendingPowerOrRootNumber.join('')));
    calculationsZone.push(')');
    powersX2orSquareRootsLengthMemory.push(pendingPowerOrRootNumber.length + 1);
    squareRootsNumberValueLengthMemory.push(pendingPowerOrRootNumber.length);
    console.log(powersX2orSquareRootsLengthMemory);
  } else if (
    saveNAndRootNumber === 'true' &&
    saveNumber === 'true' &&
    closingParenthesis === 'true'
  ) {
    calculationsZone.splice(-pendingValue.length - 1);
    pendingValue.splice(-pendingPowerOrRootNumber.length);
    calculationsZone.push(
      Math.pow(pendingPowerOrRootNumber.join(''), 1 / pendingValue.join(''))
    );
    calculationsZone.push(')');
    powersXYorRootsLengthMemory.push(pendingPowerOrRootNumber.length + 1);
    rootsNumberValueLengthMemory.push(pendingPowerOrRootNumber.length);
    powersYorRootsNLengthMemory.push(pendingValue.length);
  }
};

let enterANumber = itemClicked => {
  const number = itemClicked.target.innerText;
  displayValue += number;
  calculationsZone.push(number);
  rootN.push(number);

  if (saveNumber === 'true') {
    pendingValue.push(number);
  }

  if (savePower === 'true') {
    displayValue = displayValue.slice(0, displayValue.length - 1);
    powerOrRootNumber.push(number);
    pendingPowerOrRootNumber.push(number);
    const power = powerOrRootNumber;
    displayValue += power.join('').sup() + '<powerxy>';
    powerOrRootNumber = [];
  }

  if (saveRootNumber === 'true' || saveNAndRootNumber === 'true') {
    displayValue = displayValue.slice(0, displayValue.length - 1);
    powerOrRootNumber.push(number);
    pendingPowerOrRootNumber.push(number);
    const rootNumber = powerOrRootNumber;
    if (saveRootNumber === 'true') {
      displayValue += rootNumber.join('') + '<squareroot>';
    } else if (saveNAndRootNumber === 'true') {
      displayValue += rootNumber.join('') + '<root>';
    }
    powerOrRootNumber = [];
  }

  outputOperationValue.innerHTML = displayValue;
};

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
    if (
      openingParethesis === true &&
      saveNumber === 'false' &&
      (savePower === 'true' ||
        saveRootNumber === 'true' ||
        saveNAndRootNumber === 'true')
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

  if (operator === 'x2' && saveNumber === 'false') {
    let saveDisplayValueForPowerX2 = displayValue;
    displayValue += '2'.sup();
    calculationsZone = [];
    openingParethesis = saveDisplayValueForPowerX2.includes('(');
    if (openingParethesis === true) {
      saveDisplayValueForPowerX2 = saveDisplayValueForPowerX2.replace('(', '');
      calculationsZone.push('(');
    }
    calculationsZone.push(Math.pow(saveDisplayValueForPowerX2, 2));
    const valueAndPowerToMemory = saveDisplayValueForPowerX2 + 1;
    powersX2orSquareRootsLengthMemory.push(valueAndPowerToMemory.length);
    console.log(powersX2orSquareRootsLengthMemory);
  } else if (operator === 'x2' && saveNumber === 'true') {
    displayValue += '2'.sup();
    calculationsZone.splice(-pendingValue.length);
    calculationsZone.push(Math.pow(pendingValue.join(''), 2));
    powersX2orSquareRootsLengthMemory.push(pendingValue.length + 1);
    console.log(powersX2orSquareRootsLengthMemory);
  }

  if (operator === 'xy') {
    saveDisplayValueForPowerYOrRootN = displayValue;
    savePower = 'true';
    performedMathPowerAndPushed = 'false';
  }

  if (operator === '√') {
    saveRootNumber = 'true';
    displayValue += '√';
    performedSquareRootAndPushed = 'false';
  }

  if (operator === 'n√a') {
    saveDisplayValueForPowerYOrRootN = displayValue;
    saveNAndRootNumber = 'true';
    displayValue = displayValue.slice(0, displayValue.length - rootN.length);
    displayValue += rootN.join('').sup() + '√';
  }

  if (operator === '.') {
    displayValue += operator;
    calculationsZone.push(operator);
  }

  outputOperationValue.innerHTML = displayValue;
};

for (let i = 0; i < allNumbers.length; i += 1) {
  allNumbers[i].addEventListener('click', enterANumber);
}

for (let i = 0; i < allOperators.length; i += 1) {
  allOperators[i].addEventListener('click', performOperation);
}

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
    } else {
      displayValue = displayValue.slice(0, displayValue.length - 1);
    }
    calculationsZone.pop();
  } else {
    displayValue = displayValue.slice(0, displayValue.length - 1);
  }
  saveDisplayValueForPowerYOrRootN = 0;
  if (displayValue === '') {
    displayResult = 0;
  }
  performOutputOperation();
  console.log(displayValue);
  console.log(calculationsZone);
  console.log(powersX2orSquareRootsLengthMemory);
  console.log(squareRootsNumberValueLengthMemory);
  console.log(powersXYorRootsLengthMemory);
  console.log(powersYorRootsNLengthMemory);
  console.log(rootsNumberValueLengthMemory);
  console.log(saveDisplayValueForPowerYOrRootN + 'X');
};

buttonClear.onclick = () => {
  displayResult = 0;
  displayValue = '';
  performOutputOperation();
  saveNumber = 'false';
  savePower = 'false';
  saveRootNumber = 'false';
  saveNAndRootNumber = 'false';
  closingParenthesis = 'false';
  powerOrRootNumber = [];
  rootN = [];
  pendingPowerOrRootNumber = [];
  pendingValue = [];
  calculationsZone = [];
};

buttonEquals.onclick = () => {
  performMathPowerAndPush();
  performMathRootAndPush();
  console.log(calculationsZone);
  const resultOfTheAction = eval(calculationsZone.join(''));
  displayValue += '=';
  displayResult = resultOfTheAction;
  performOutputOperation();
  equalsWasClicked = 'true';
};

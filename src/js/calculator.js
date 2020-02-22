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
var performedMathPowerAndPush = 'false';
var openingParethesis;
var saveDisplayValueForPowerYOrRootN;
var powerOrRootNumber = [];
var rootN = [];
var pendingPowerOrRootNumber = [];
var pendingValue = [];
var calculationsZone = [];
var powersAndRootsLengthMemory = [];

const loadDisplayResult = () => {
  outputOperationResult.innerHTML = displayResult;
};

loadDisplayResult();

const performOutputOperation = () => {
  outputOperationResult.innerHTML = displayResult;
  outputOperationValue.innerHTML = displayValue;
};

const pushDisplayedValueToMemory = () => {
  /*
  const valueToMemory = displayValue
    .replace(/[<sup>]/g, '')
    .replace(/[</sup>]/g, '')
    .replace(/\+/g, '');
  let currentMemoryValue;
  if (displayedValueMemory.length > 0) {
    currentMemoryValue = displayedValueMemory.reduce((x, y) => x + y);
  } else {
    currentMemoryValue = 0;
  }
  displayedValueMemory.push(valueToMemory.length - currentMemoryValue);
  */
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
    powersAndRootsLengthMemory.push(
      saveDisplayValueForPowerYOrRootN.length + pendingPowerOrRootNumber.length
    );
    console.log(powersAndRootsLengthMemory);
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
    powersAndRootsLengthMemory.push(
      pendingValue.length + pendingPowerOrRootNumber.length
    );
    console.log(powersAndRootsLengthMemory);
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
    powersAndRootsLengthMemory.push(
      pendingValue.length + pendingPowerOrRootNumber.length
    );
    console.log(powersAndRootsLengthMemory);
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
  }

  if (
    saveRootNumber === 'true' &&
    saveNumber === 'true' &&
    closingParenthesis === 'false'
  ) {
    calculationsZone.splice(-pendingValue.length);
    pendingValue.splice(-pendingPowerOrRootNumber.length);
    calculationsZone.push(Math.sqrt(pendingPowerOrRootNumber.join('')));
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
    displayValue += power.join('').sup();
    powerOrRootNumber = [];
  }

  if (saveRootNumber === 'true' || saveNAndRootNumber === 'true') {
    displayValue = displayValue.slice(0, displayValue.length - 1);
    powerOrRootNumber.push(number);
    pendingPowerOrRootNumber.push(number);
    const rootNumber = powerOrRootNumber;
    displayValue += rootNumber.join('') + '<rootDelete>';
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
    pushDisplayedValueToMemory();
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
    powersAndRootsLengthMemory.push(valueAndPowerToMemory.length);
    console.log(powersAndRootsLengthMemory);
  } else if (operator === 'x2' && saveNumber === 'true') {
    displayValue += '2'.sup();
    calculationsZone.splice(-pendingValue.length);
    calculationsZone.push(Math.pow(pendingValue.join(''), 2));
    powersAndRootsLengthMemory.push(pendingValue.length + 1);
    console.log(powersAndRootsLengthMemory);
  }

  if (operator === 'xy') {
    saveDisplayValueForPowerYOrRootN = displayValue;
    savePower = 'true';
  }

  if (operator === '√') {
    saveRootNumber = 'true';
    displayValue += '√';
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
  if (equalsWasClicked === 'false') {
    if (performedMathPowerAndPush === 'false') {
      performMathPowerAndPush();
      /* do dokończenia odblokowanie tej funkcji */
    }
    performedMathPowerAndPush = 'true';
  }
  const equals = displayValue.includes('=');
  if (equals === false) {
    const closingSuperscript = '</sup>';
    const closingSuperscriptDetection = displayValue.slice(-6);
    if (closingSuperscript === closingSuperscriptDetection) {
      const displayedValueMemoryLastValue =
        powersAndRootsLengthMemory[powersAndRootsLengthMemory.length - 1];
      displayValue = displayValue.slice(0, displayValue.length - 11);
      displayValue = displayValue.slice(
        0,
        displayValue.length - displayedValueMemoryLastValue
      );
      powersAndRootsLengthMemory.pop();
    } else if (closingSuperscript !== closingSuperscriptDetection) {
      /* const test1 = displayValue.slice(-1);
      const testx = test1.match(/[0-9]/);
      console.log(testx);
      if (testx !== null) {
        displayedValueMemory.pop();
      } */
      displayValue = displayValue.slice(0, displayValue.length - 1);
    }
    calculationsZone.pop();
  } else {
    displayValue = displayValue.slice(0, displayValue.length - 1);
  }
  if (displayValue === '') {
    displayResult = 0;
  }
  performOutputOperation();
  console.log(displayValue);
  console.log(calculationsZone);
  console.log(powersAndRootsLengthMemory);
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
  pushDisplayedValueToMemory();
  console.log(calculationsZone);
  const resultOfTheAction = eval(calculationsZone.join(''));
  displayValue += '=';
  displayResult = resultOfTheAction;
  performOutputOperation();
  equalsWasClicked = 'true';
};

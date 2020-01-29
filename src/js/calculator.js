const allNumbers = document.getElementsByClassName(
  'calculator__input-operation-value--number'
);
const allOperators = document.getElementsByClassName(
  'calculator__input-operation-value--operator'
);
const buttonComma = document.getElementById(
  'calculator__input-operation-value-comma'
);
const buttonBackspace = document.getElementById(
  'calculator__input-operation-value-backspace'
);
const buttonClear = document.getElementById(
  'calculator__input-operation-value-clear'
);
const buttonRoot = document.getElementById(
  'calculator__input-operation-value-root'
);
const buttonSquareRoot = document.getElementById(
  'calculator__input-operation-value-square-root'
);
const buttonPower = document.getElementById(
  'calculator__input-operation-value-power'
);

var outputOperationValue = document.getElementById(
  'calculator__output-operation-value'
);

var displayValue = 0;
var pendingValue;
var calculationsZone = [];
var mathematicalOperation;
var resultOfTheAction;
var saveN;
var saveNSup;
var rootCalculationZone = [];
var rootA;
var rootON;
var squareRootON;
var saveX;
var powerY;
var powerCalculationZone = [];
var powerON;
var buttonValueSave;
var buttonValueSavePush = 'yes';
var pendingValuePush = 'no';
var calculationsZoneClean = 'yes';
var isEqualTo;
var equalLength;
var closingParenthesis = 'yes';

let loadDisplayValue = () => {
  outputOperationValue.innerHTML = displayValue;
};

loadDisplayValue();

let rootVal = () => {
  if (rootON === 'yes') {
    rootA = displayValue;
    outputOperationValue.innerHTML =
      saveNSup.replace('.', ',') + '√' + rootA.replace('.', ',');
    rootCalculationZone.push(rootA);
  }
};

let powerVal = () => {
  if (powerON === 'yes') {
    powerY = displayValue;
    outputOperationValue.innerHTML =
      saveX.replace('.', ',') + powerY.sup().replace('.', ',');
    powerCalculationZone.push(powerY);
  }
};

let checkIncludes = () => {
  if (isEqualTo === 'yes') {
    displayValue = 0;
    isEqualTo = 'no';
  }
};

let updateOutputOperationValue = itemClicked => {
  const buttonValue = itemClicked.target.innerText;

  checkIncludes();

  if (displayValue === 0) {
    displayValue = '';
  }

  displayValue += buttonValue;
  buttonValueSave = displayValue;
  if (calculationsZoneClean === 'yes') {
    calculationsZone = [];
  }
  displayValue = calculationsZone.join('') + displayValue;
  if (calculationsZoneClean === 'cc') {
    displayValue = buttonValueSave;
    calculationsZone = [];
    calculationsZone.push(displayValue);
  }
  outputOperationValue.innerHTML = displayValue
    .replace(/\./g, ',')
    .replace('=', '');
  calculationsZoneClean = 'yes';
  rootVal();
  powerVal();
};

let performOperation = itemClicked => {
  const operator = itemClicked.target.innerText;

  switch (operator) {
    case '+':
      pendingValue = buttonValueSave;
      if (pendingValuePush === 'yes') {
        pendingValue = '';
      }
      if (isEqualTo === 'yes') {
        calculationsZone = [];
        calculationsZone.push('+');
        const valueSplit = displayValue.split('');
        const slice = valueSplit.slice(-equalLength);
        displayValue = slice.join('');
        calculationsZone.splice(0, 0, displayValue);
        displayValue = calculationsZone.join('').replace('=', '');
        outputOperationValue.innerHTML = displayValue.replace(/\./g, ',');
      } else {
        if (closingParenthesis === 'yes') {
          calculationsZone.push(pendingValue);
        }
        calculationsZone.push('+');
        displayValue = calculationsZone.join('');
        outputOperationValue.innerHTML = displayValue.replace(/\./g, ',');
      }
      displayValue = 0;
      buttonValueSave = 0;
      buttonValueSavePush = 'yes';
      pendingValuePush = 'no';
      calculationsZoneClean = 'no';
      closingParenthesis = 'yes';

      break;

    case '-':
      pendingValue = buttonValueSave;
      if (pendingValuePush === 'yes') {
        pendingValue = '';
      }
      if (isEqualTo === 'yes') {
        calculationsZone = [];
        calculationsZone.push('-');
        const valueSplit = displayValue.split('');
        const slice = valueSplit.slice(-equalLength);
        displayValue = slice.join('');
        calculationsZone.splice(0, 0, displayValue);
        displayValue = calculationsZone.join('').replace('=', '');
        outputOperationValue.innerHTML = displayValue.replace(/\./g, ',');
      } else {
        if (closingParenthesis === 'yes') {
          calculationsZone.push(pendingValue);
        }
        calculationsZone.push('-');
        displayValue = calculationsZone.join('');
        outputOperationValue.innerHTML = displayValue.replace(/\./g, ',');
      }
      displayValue = 0;
      buttonValueSave = 0;
      buttonValueSavePush = 'yes';
      pendingValuePush = 'no';
      calculationsZoneClean = 'no';
      closingParenthesis = 'yes';

      break;

    case '*':
      pendingValue = buttonValueSave;
      if (pendingValuePush === 'yes') {
        pendingValue = '';
      }
      if (isEqualTo === 'yes') {
        calculationsZone = [];
        calculationsZone.push('*');
        const valueSplit = displayValue.split('');
        const slice = valueSplit.slice(-equalLength);
        displayValue = slice.join('');
        calculationsZone.splice(0, 0, displayValue);
        displayValue = calculationsZone.join('').replace('=', '');
        outputOperationValue.innerHTML = displayValue.replace(/\./g, ',');
      } else {
        if (closingParenthesis === 'yes') {
          calculationsZone.push(pendingValue);
        }
        calculationsZone.push('*');
        displayValue = calculationsZone.join('');
        outputOperationValue.innerHTML = displayValue.replace(/\./g, ',');
      }
      displayValue = 0;
      buttonValueSave = 0;
      buttonValueSavePush = 'yes';
      pendingValuePush = 'no';
      calculationsZoneClean = 'no';
      closingParenthesis = 'yes';

      break;

    case '/':
      pendingValue = buttonValueSave;
      if (pendingValuePush === 'yes') {
        pendingValue = '';
      }
      if (isEqualTo === 'yes') {
        calculationsZone = [];
        calculationsZone.push('/');
        const valueSplit = displayValue.split('');
        const slice = valueSplit.slice(-equalLength);
        displayValue = slice.join('');
        calculationsZone.splice(0, 0, displayValue);
        displayValue = calculationsZone.join('').replace('=', '');
        outputOperationValue.innerHTML = displayValue.replace(/\./g, ',');
      } else {
        if (closingParenthesis === 'yes') {
          calculationsZone.push(pendingValue);
        }
        calculationsZone.push('/');
        displayValue = calculationsZone.join('');
        outputOperationValue.innerHTML = displayValue.replace(/\./g, ',');
      }
      displayValue = 0;
      buttonValueSave = 0;
      buttonValueSavePush = 'yes';
      pendingValuePush = 'no';
      calculationsZoneClean = 'no';
      closingParenthesis = 'yes';

      break;

    case '(':
      pendingValue = buttonValueSave;
      if (pendingValuePush === 'yes') {
        pendingValue = '';
      }
      if (isEqualTo === 'yes') {
        calculationsZone = [];
        calculationsZone.push('(');
        const valueSplit = displayValue.split('');
        const slice = valueSplit.slice(-equalLength);
        displayValue = slice.join('');
        calculationsZone.splice(0, 0, displayValue);
        displayValue = calculationsZone.join('').replace('=', '');
        outputOperationValue.innerHTML = displayValue.replace(/\./g, ',');
      } else {
        calculationsZone.push('(');
        displayValue = calculationsZone.join('');
        outputOperationValue.innerHTML = displayValue.replace(/\./g, ',');
      }
      displayValue = 0;
      buttonValueSave = 0;
      buttonValueSavePush = 'no';
      pendingValuePush = 'no';
      calculationsZoneClean = 'no';

      break;

    case ')':
      pendingValue = buttonValueSave;
      if (pendingValuePush === 'yes') {
        pendingValue = '';
      }
      if (isEqualTo === 'yes') {
        calculationsZone = [];
        calculationsZone.push(')');
        const valueSplit = displayValue.split('');
        const slice = valueSplit.slice(-equalLength);
        displayValue = slice.join('');
        calculationsZone.splice(0, 0, displayValue);
        displayValue = calculationsZone.join('').replace('=', '');
        outputOperationValue.innerHTML = displayValue.replace(/\./g, ',');
      } else {
        calculationsZone.push(pendingValue);
        calculationsZone.push(')');
        displayValue = calculationsZone.join('');
        outputOperationValue.innerHTML = displayValue.replace(/\./g, ',');
        closingParenthesis = 'no';
      }
      displayValue = 0;
      buttonValueSave = 0;
      buttonValueSavePush = 'no';
      pendingValuePush = 'no';
      calculationsZoneClean = 'no';

      break;

    case '=':
      if (powerON === 'yes') {
        calculationsZone.push(
          Math.pow(
            powerCalculationZone[0],
            powerCalculationZone[powerCalculationZone.length - 1]
          )
        );
        mathematicalOperation = calculationsZone.join('').replace(/,/g, '.');
        resultOfTheAction = eval(mathematicalOperation);
        displayValue = resultOfTheAction + '';
        outputOperationValue.innerHTML = displayValue.replace('.', ',');
        calculationsZone = [];
        powerCalculationZone = [];
        powerON = 'no';
      } else if (rootON === 'yes') {
        calculationsZone.push(
          Math.pow(
            rootCalculationZone[rootCalculationZone.length - 1],
            1 / rootCalculationZone[0]
          )
        );
        mathematicalOperation = calculationsZone.join('').replace(/,/g, '.');
        resultOfTheAction = eval(mathematicalOperation);
        displayValue = resultOfTheAction + '';
        outputOperationValue.innerHTML = displayValue.replace('.', ',');
        calculationsZone = [];
        rootCalculationZone = [];
        rootON = 'no';
      } else if (squareRootON === 'yes') {
        mathematicalOperation = calculationsZone.join('').replace(/,/g, '.');
        resultOfTheAction = eval(mathematicalOperation);
        displayValue = resultOfTheAction + '';
        outputOperationValue.innerHTML = displayValue.replace('.', ',');
        calculationsZone = [];
        squareRootON = 'no';
      } else {
        if (buttonValueSavePush === 'yes') {
          calculationsZone.push(buttonValueSave);
        }
        mathematicalOperation = calculationsZone
          .join('')
          .replace(/,/g, '.')
          .replace('=', '');
        resultOfTheAction = eval(mathematicalOperation);
        displayValue =
          calculationsZone.join('').replace('=', '') + '=' + resultOfTheAction;
        const result = resultOfTheAction + '';
        equalLength = result.length;
        outputOperationValue.innerHTML = displayValue.replace(/\./g, ',');
        calculationsZone = [];
        buttonValueSave = '';
        buttonValueSavePush = 'yes';

        if (displayValue === '=undefined') {
          displayValue = 0;
          outputOperationValue.innerHTML = displayValue;
        }

        if (displayValue.includes('=')) {
          isEqualTo = 'yes';
        }
      }
      break;
  }
};

for (let i = 0; i < allNumbers.length; i += 1) {
  allNumbers[i].addEventListener('click', updateOutputOperationValue);
}

for (let i = 0; i < allOperators.length; i += 1) {
  allOperators[i].addEventListener('click', performOperation);
}

buttonPower.onclick = () => {
  isEqualTo = 'no';
  saveX = displayValue;
  powerY = 'y';
  powerY = powerY.sup();
  displayValue = saveX + powerY;
  outputOperationValue.innerHTML = displayValue.replace('.', ',');
  powerCalculationZone.push(saveX);
  displayValue = 0;
  powerON = 'yes';
};

buttonSquareRoot.onclick = () => {
  const saveA = displayValue;
  displayValue = '√' + saveA;
  outputOperationValue.innerHTML = displayValue.replace('.', ',');
  displayValue = saveA;
  const calculationSqrt = Math.sqrt(saveA);
  calculationsZone.push(calculationSqrt + '');
  squareRootON = 'yes';
};

buttonRoot.onclick = () => {
  isEqualTo = 'no';
  saveN = displayValue;
  saveNSup = saveN.sup();
  displayValue = saveNSup + '√';
  outputOperationValue.innerHTML = displayValue.replace('.', ',');
  rootCalculationZone.push(saveN);
  displayValue = 0;
  rootON = 'yes';
};

buttonComma.onclick = () => {
  isEqualTo = 'no';
  displayValue += '.';
  outputOperationValue.innerHTML = displayValue.replace(/\./g, ',');
  if (rootON === 'yes') {
    outputOperationValue.innerHTML =
      saveNSup.replace('.', ',') + '√' + displayValue.replace('.', ',');
  }
};

buttonBackspace.onclick = () => {
  if (displayValue !== 0) {
    if (displayValue.includes('=')) {
      isEqualTo = 'yes';
    } else {
      isEqualTo = 'no';
    }
  }

  const displayValueLength = displayValue.length;
  displayValue = displayValue.slice(0, displayValueLength - 1);
  outputOperationValue.innerHTML = displayValue.replace(/\./g, ',');
  calculationsZone = [];
  calculationsZone.push(displayValue.replace('=', ''));
  buttonValueSavePush = 'no';
  pendingValuePush = 'yes';
  calculationsZoneClean = 'cc';

  if (displayValue === '') {
    displayValue = 0;
    outputOperationValue.innerHTML = displayValue;
  } else if (displayValue === '-') {
    displayValue = 0;
    outputOperationValue.innerHTML = displayValue;
  }
};

buttonClear.onclick = () => {
  displayValue = 0;
  calculationsZone = [];
  rootCalculationZone = [];
  rootON = 'no';
  squareRootON = 'no';
  powerCalculationZone = [];
  powerON = 'no';
  buttonValueSavePush = 'yes';
  pendingValuePush = 'no';
  calculationsZoneClean = 'yes';
  outputOperationValue.innerHTML = displayValue;
};

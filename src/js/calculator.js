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

let updateOutputOperationValue = itemClicked => {
  let buttonValue = itemClicked.target.innerText;

  if (displayValue === 0) {
    displayValue = '';
  }

  displayValue += buttonValue;
  outputOperationValue.innerHTML = displayValue.replace('.', ',');
  rootVal();
  powerVal();
};

let performOperation = itemClicked => {
  let operator = itemClicked.target.innerText;

  switch (operator) {
    case '+':
      if (powerON === 'yes') {
        displayValue = 0;
        calculationsZone.push(
          Math.pow(
            powerCalculationZone[0],
            powerCalculationZone[powerCalculationZone.length - 1]
          ) + ''
        );
        calculationsZone.push('+');
        powerON = 'no';
      } else if (squareRootON === 'yes') {
        displayValue = 0;
        calculationsZone.push('+');
        squareRootON = 'no';
      } else if (rootON === 'yes') {
        displayValue = 0;
        calculationsZone.push(
          Math.pow(
            rootCalculationZone[rootCalculationZone.length - 1],
            1 / rootCalculationZone[0]
          ) + ''
        );
        calculationsZone.push('+');
        rootON = 'no';
      } else {
        pendingValue = displayValue;
        displayValue = 0;
        calculationsZone.push(pendingValue);
        calculationsZone.push('+');
      }
      break;

    case '-':
      if (powerON === 'yes') {
        displayValue = 0;
        calculationsZone.push(
          Math.pow(
            powerCalculationZone[0],
            powerCalculationZone[powerCalculationZone.length - 1]
          ) + ''
        );
        calculationsZone.push('-');
        powerON = 'no';
      } else if (squareRootON === 'yes') {
        displayValue = 0;
        calculationsZone.push('-');
        squareRootON = 'no';
      } else if (rootON === 'yes') {
        displayValue = 0;
        calculationsZone.push(
          Math.pow(
            rootCalculationZone[rootCalculationZone.length - 1],
            1 / rootCalculationZone[0]
          ) + ''
        );
        calculationsZone.push('-');
        rootON = 'no';
      } else {
        pendingValue = displayValue;
        displayValue = 0;
        calculationsZone.push(pendingValue);
        calculationsZone.push('-');
      }
      break;

    case '*':
      if (powerON === 'yes') {
        displayValue = 0;
        calculationsZone.push(
          Math.pow(
            powerCalculationZone[0],
            powerCalculationZone[powerCalculationZone.length - 1]
          ) + ''
        );
        calculationsZone.push('*');
        powerON = 'no';
      } else if (squareRootON === 'yes') {
        displayValue = 0;
        calculationsZone.push('*');
        squareRootON = 'no';
      } else if (rootON === 'yes') {
        displayValue = 0;
        calculationsZone.push(
          Math.pow(
            rootCalculationZone[rootCalculationZone.length - 1],
            1 / rootCalculationZone[0]
          ) + ''
        );
        calculationsZone.push('*');
        rootON = 'no';
      } else {
        pendingValue = displayValue;
        displayValue = 0;
        calculationsZone.push(pendingValue);
        calculationsZone.push('*');
      }
      break;

    case '/':
      if (powerON === 'yes') {
        displayValue = 0;
        calculationsZone.push(
          Math.pow(
            powerCalculationZone[0],
            powerCalculationZone[powerCalculationZone.length - 1]
          ) + ''
        );
        calculationsZone.push('/');
        powerON = 'no';
      } else if (squareRootON === 'yes') {
        displayValue = 0;
        calculationsZone.push('/');
        squareRootON = 'no';
      } else if (rootON === 'yes') {
        displayValue = 0;
        calculationsZone.push(
          Math.pow(
            rootCalculationZone[rootCalculationZone.length - 1],
            1 / rootCalculationZone[0]
          ) + ''
        );
        calculationsZone.push('/');
        rootON = 'no';
      } else {
        pendingValue = displayValue;
        displayValue = 0;
        calculationsZone.push(pendingValue);
        calculationsZone.push('/');
      }
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
        calculationsZone.push(displayValue);
        mathematicalOperation = calculationsZone.join('').replace(/,/g, '.');
        resultOfTheAction = eval(mathematicalOperation);
        displayValue = resultOfTheAction + '';
        outputOperationValue.innerHTML = displayValue.replace('.', ',');
        calculationsZone = [];
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
  let saveA = displayValue;
  displayValue = '√' + saveA;
  outputOperationValue.innerHTML = displayValue.replace('.', ',');
  displayValue = saveA;
  let calculationSqrt = Math.sqrt(saveA);
  calculationsZone.push(calculationSqrt + '');
  squareRootON = 'yes';
};

buttonRoot.onclick = () => {
  saveN = displayValue;
  saveNSup = saveN.sup();
  displayValue = saveNSup + '√';
  outputOperationValue.innerHTML = displayValue.replace('.', ',');
  rootCalculationZone.push(saveN);
  displayValue = 0;
  rootON = 'yes';
};

buttonComma.onclick = () => {
  if (!displayValue.includes('.')) {
    displayValue += '.';
    outputOperationValue.innerHTML = displayValue.replace('.', ',');
    if (rootON === 'yes') {
      outputOperationValue.innerHTML =
        saveNSup.replace('.', ',') + '√' + displayValue.replace('.', ',');
    }
  }
};

buttonBackspace.onclick = () => {
  let displayValueLength = displayValue.length;
  displayValue = displayValue.slice(0, displayValueLength - 1);
  outputOperationValue.innerHTML = displayValue.replace('.', ',');

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
  outputOperationValue.innerHTML = displayValue;
};

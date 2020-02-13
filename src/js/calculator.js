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
var saveDisplayValueForPowerXY;
var power = [];
var pendingPower = [];
var pendingValue = [];
var calculationsZone = [];

let loadDisplayResult = () => {
  outputOperationResult.innerHTML = displayResult;
};

loadDisplayResult();

let performOutputOperation = () => {
  outputOperationResult.innerHTML = displayResult;
  outputOperationValue.innerHTML = displayValue;
};

let performMathPowerAndPush = () => {
  if (savePower === 'true' && saveNumber === 'false') {
    calculationsZone = [];
    calculationsZone.push(
      Math.pow(saveDisplayValueForPowerXY, pendingPower.join(''))
    );
  } else if (savePower === 'true' && saveNumber === 'true') {
    calculationsZone.splice(-pendingValue.length);
    pendingValue.splice(-pendingPower.length);
    calculationsZone.push(
      Math.pow(pendingValue.join(''), pendingPower.join(''))
    );
    console.log(pendingValue);
    console.log(pendingPower);
    console.log(calculationsZone);
  }
};

let enterANumber = itemClicked => {
  const number = itemClicked.target.innerText;
  displayValue += number;
  calculationsZone.push(number);

  if (saveNumber === 'true') {
    pendingValue.push(number);
  }

  if (savePower === 'true') {
    displayValue = displayValue.slice(0, displayValue.length - 1);
    power.push(number);
    pendingPower.push(number);
    const savePendingPower = power;
    displayValue += savePendingPower.join('').sup();
    power = [];
  }
  outputOperationValue.innerHTML = displayValue;
};

let performOperation = itemClicked => {
  const operator = itemClicked.target.innerText;

  if (operator === '(' || operator === ')') {
    displayValue += operator;
    calculationsZone.push(operator);
  }

  if (
    operator === '*' ||
    operator === '/' ||
    operator === '+' ||
    operator === '-'
  ) {
    performMathPowerAndPush();
    pendingValue = [];
    pendingPower = [];
    saveNumber = 'true';
    savePower = 'false';
    displayValue += operator;
    calculationsZone.push(operator);
    console.log(calculationsZone);
  }

  if (operator === 'x2' && saveNumber === 'false') {
    const saveDisplayValueForPowerX2 = displayValue;
    displayValue += '2'.sup();
    calculationsZone = [];
    calculationsZone.push(Math.pow(saveDisplayValueForPowerX2, 2));
  } else if (operator === 'x2' && saveNumber === 'true') {
    displayValue += '2'.sup();
    calculationsZone.splice(-pendingValue.length);
    calculationsZone.push(Math.pow(pendingValue.join(''), 2));
  }

  if (operator === 'xy') {
    saveDisplayValueForPowerXY = displayValue;
    savePower = 'true';
    console.log("I'm clicked");
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
  displayValue = displayValue.slice(0, displayValue.length - 1);
  calculationsZone.pop();
  outputOperationValue.innerHTML = displayValue;
};

buttonClear.onclick = () => {
  displayResult = 0;
  displayValue = '';
  performOutputOperation();
  saveNumber = 'false';
  savePower = 'false';
  power = [];
  pendingValue = [];
  calculationsZone = [];
};

buttonEquals.onclick = () => {
  performMathPowerAndPush();
  let resultOfTheAction = eval(calculationsZone.join(''));
  displayValue += '=';
  displayResult = resultOfTheAction;
  performOutputOperation();
};

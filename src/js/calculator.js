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

var outputOperationValue = document.getElementById(
  'calculator__output-operation-value'
);

var displayValue = 0;
var pendingValue;
var calaculationsZone = [];

let loadDisplayValue = () => {
  outputOperationValue.innerHTML = displayValue;
};

loadDisplayValue();

let updateOutputOperationValue = itemClicked => {
  let buttonValue = itemClicked.target.innerText;

  if (displayValue === 0) {
    displayValue = '';
  }

  displayValue += buttonValue;
  outputOperationValue.innerHTML = displayValue.replace('.', ',');
};

let performOperation = itemClicked => {
  let operator = itemClicked.target.innerText;

  switch (operator) {
    case '+':
      pendingValue = displayValue;
      displayValue = 0;
      outputOperationValue.innerHTML = displayValue;
      calaculationsZone.push(pendingValue);
      calaculationsZone.push('+');
      console.log(calaculationsZone);
      break;

    case '-':
      pendingValue = displayValue;
      displayValue = 0;
      outputOperationValue.innerHTML = displayValue;
      calaculationsZone.push(pendingValue);
      calaculationsZone.push('-');
      break;

    case '*':
      pendingValue = displayValue;
      displayValue = 0;
      outputOperationValue.innerHTML = displayValue;
      calaculationsZone.push(pendingValue);
      calaculationsZone.push('*');
      break;

    case '/':
      pendingValue = displayValue;
      displayValue = 0;
      outputOperationValue.innerHTML = displayValue;
      calaculationsZone.push(pendingValue);
      calaculationsZone.push('/');
      break;

    case '=':
      calaculationsZone.push(displayValue);
      let test = calaculationsZone.join('').replace(/,/g, '.');
      console.log(test);
      let resultOfTheAction = eval(test);
      console.log(resultOfTheAction);
      displayValue = resultOfTheAction + '';
      outputOperationValue.innerHTML = displayValue.replace('.', ',');
      calaculationsZone = [];
      break;
  }
};

for (let i = 0; i < allNumbers.length; i += 1) {
  allNumbers[i].addEventListener('click', updateOutputOperationValue);
}

for (let i = 0; i < allOperators.length; i += 1) {
  allOperators[i].addEventListener('click', performOperation);
}

buttonBackspace.onclick = () => {
  let displayValueLength = displayValue.length;
  displayValue = displayValue.slice(0, displayValueLength - 1);
  outputOperationValue.innerHTML = displayValue.replace('.', ',');

  if (displayValue === '') {
    displayValue = 0;
    outputOperationValue.innerHTML = displayValue;
  }
};

buttonClear.onclick = () => {
  displayValue = 0;
  outputOperationValue.innerHTML = displayValue;
};

buttonComma.onclick = () => {
  if (!displayValue.includes(',')) {
    displayValue += ',';
    outputOperationValue.innerHTML = displayValue;
  }
};

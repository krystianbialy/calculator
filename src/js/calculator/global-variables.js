global.allNumbers = document.querySelectorAll(
  '.calculator__input-operation-value--number'
);
global.allOperators = document.querySelectorAll(
  '.calculator__input-operation-value--operator'
);
global.buttonBackspace = document.querySelector(
  '#calculator__input-operation-value-backspace'
);
global.buttonClear = document.querySelector(
  '#calculator__input-operation-value-clear'
);
global.buttonEquals = document.querySelector(
  '#calculator__input-operation-value-equals'
);
global.buttonExchangeRates = document.querySelector(
  '#calculator__input-operation-value-exchange-rates'
);

global.outputOperationValue = document.querySelector(
  '#calculator__output-operation-value'
);
global.outputOperationResult = document.querySelector(
  '#calculator__output-operation-result'
);

global.displayResult = 0;
global.displayValue = '';
global.saveNumber = 'false';
global.savePower = 'false';
global.saveRootNumber = 'false';
global.saveNAndRootNumber = 'false';
global.closingParenthesis = 'false';
global.equalsWasClicked = 'false';
global.performedMathPowerAndPushed = 'false';
global.performedSquareRootAndPushed = 'false';
global.valueToBeConverted = 'false';
global.openingParethesis = false;
global.saveDisplayValueForPowerYOrRootN = '';
global.rateMid = '';
global.powerOrRootNumber = [];
global.rootN = [];
global.pendingPowerOrRootNumber = [];
global.pendingValue = [];
global.calculationsZone = [];
global.powersX2orSquareRootsLengthMemory = [];
global.squareRootsNumberValueLengthMemory = [];
global.powersXYorRootsLengthMemory = [];
global.powersYorRootsNLengthMemory = [];
global.rootsNumberValueLengthMemory = [];

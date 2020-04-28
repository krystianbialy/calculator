const initialConfiguration = () => {
  displayResult = 0;
  displayValue = '';
  saveNumber = 'false';
  savePower = 'false';
  saveRootNumber = 'false';
  saveNAndRootNumber = 'false';
  closingParenthesis = 'false';
  equalsWasClicked = 'false';
  performedMathPowerAndPushed = 'false';
  performedSquareRootAndPushed = 'false';
  valueToBeConverted = 'false';
  openingParenthesis = false;
  saveDisplayValueForPowerYOrRootN = '';
  rateMid = '';
  powerOrRootNumber = [];
  rootN = [];
  pendingPowerOrRootNumber = [];
  pendingValue = [];
  calculationsZone = [];
  powersX2orSquareRootsLengthMemory = [];
  squareRootsNumberValueLengthMemory = [];
  powersXYorRootsLengthMemory = [];
  powersYorRootsNLengthMemory = [];
  rootsNumberValueLengthMemory = [];
};

export { initialConfiguration };

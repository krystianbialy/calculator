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
  openingParethesis = false;
  saveDisplayValueForPowerYOrRootN = '';
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

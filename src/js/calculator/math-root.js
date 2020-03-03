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

export { performMathRootAndPush };

const performMathPowerAndPush = () => {
  if (savePower === 'true' && saveNumber === 'false') {
    calculationsZone = [];
    openingParenthesis = saveDisplayValueForPowerYOrRootN.includes('(');
    if (openingParenthesis === true) {
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
    if (openingParenthesis === true) {
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

export { performMathPowerAndPush };

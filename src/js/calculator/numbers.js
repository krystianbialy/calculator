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
    displayValue += power.join('').sup() + '<powerxy>';
    powerOrRootNumber = [];
  }

  if (saveRootNumber === 'true' || saveNAndRootNumber === 'true') {
    displayValue = displayValue.slice(0, displayValue.length - 1);
    powerOrRootNumber.push(number);
    pendingPowerOrRootNumber.push(number);
    const rootNumber = powerOrRootNumber;
    if (saveRootNumber === 'true') {
      displayValue += rootNumber.join('') + '<squareroot>';
    } else if (saveNAndRootNumber === 'true') {
      displayValue += rootNumber.join('') + '<root>';
    }
    powerOrRootNumber = [];
  }
  outputOperationValue.innerHTML = displayValue;

  for (let i = 0; i < allOperators.length; i += 1) {
    allOperators[i].style.pointerEvents = 'auto';
  }
  buttonExchangeRates.style.pointerEvents = 'auto';
  buttonEquals.style.pointerEvents = 'auto';
};

for (let i = 0; i < allNumbers.length; i += 1) {
  allNumbers[i].addEventListener('click', enterANumber);
}

export { enterANumber };

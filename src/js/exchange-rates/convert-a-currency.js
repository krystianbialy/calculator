const convertACurrency = () => {
  if (valueToBeConverted === 'true' && saveNumber === 'false') {
    calculationsZone = [];
    openingParethesis = displayValue.slice(0, 1).includes('(');
    if (openingParethesis === true) {
      calculationsZone.push('(');
    }
    const valueEntered = displayValue.match(/[0-9.]/g).join('');
    calculationsZone.push('(' + rateMid * valueEntered + ')');
    if (openingParethesis === true) {
      calculationsZone.push(')');
    }
    console.log(valueEntered);
    console.log(calculationsZone);
  }

  if (valueToBeConverted === 'true' && saveNumber === 'true') {
    let test = displayValue.slice(-1);
    console.log(test);
    calculationsZone.splice(-pendingValue.length - 1);
    calculationsZone.push('(' + rateMid * pendingValue.join('') + ')');
    if (openingParethesis === true) {
      calculationsZone.push(')');
    }
    console.log(pendingValue);
    console.log(calculationsZone);
  }
};

export { convertACurrency };

import { performMathPowerAndPush } from './math-power.js';
import { performMathRootAndPush } from './math-root.js';
import { performOutputOperation } from './output-operation.js';

buttonEquals.onclick = () => {
  performMathPowerAndPush();
  performMathRootAndPush();
  console.log(calculationsZone);
  const resultOfTheAction = eval(calculationsZone.join(''));
  displayValue += '=';
  displayResult = resultOfTheAction;
  performOutputOperation();
  equalsWasClicked = 'true';
};

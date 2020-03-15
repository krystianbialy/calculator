import { initialConfiguration } from './initial-configuration.js';
import { performOutputOperation } from './output-operation.js';

buttonClear.onclick = () => {
  initialConfiguration();
  performOutputOperation();

  for (let i = 0; i < allNumbers.length; i += 1) {
    allNumbers[i].style.pointerEvents = 'auto';
  }
  for (let i = 0; i < allOperators.length; i += 1) {
    allOperators[i].style.pointerEvents = 'auto';
  }
  buttonExchangeRates.style.pointerEvents = 'auto';
  buttonEquals.style.pointerEvents = 'auto';
};

import { initialConfiguration } from './initial-configuration.js';
import { performOutputOperation } from './output-operation.js';

buttonClear.onclick = () => {
  initialConfiguration();
  performOutputOperation();
};

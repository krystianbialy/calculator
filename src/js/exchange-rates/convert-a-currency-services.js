export const convertACurrencyServices = () => {
  const closingParenthesisDetection = displayValue.slice(-1);
  const exchangeRatesTag = '<exchangeRates>';
  const exchangeRatesTagDetection = displayValue.slice(
    -exchangeRatesTag.length
  );
  if (
    closingParenthesisDetection !== ')' &&
    closingParenthesis === 'false' &&
    exchangeRatesTag !== exchangeRatesTagDetection
  ) {
    displayValue += ')' + exchangeRatesTag;
  }
};

const rate = 0.35;

export const getInitialSum = (initialValue, price) =>
  (initialValue / 100) * price;

export const getContractSum = (initialValue, months, monthlyPayment) =>
  initialValue + months * monthlyPayment;

export const getMonthlyPayment = (price, initialValue, months) =>
  (price - initialValue) *
  ((0.035 * (1 + 0.035) ** months) / ((1 + 0.035) ** months - 1));

const rate = 0.035;

export const getInitialSum = (initialValue, price) =>
  (initialValue / 100) * price;

export const getContractSum = (initialValue, months, monthlyPayment) =>
  initialValue + months * monthlyPayment;

export const getMonthlyPayment = (price, initialValue, months) =>
  (price - initialValue) *
  ((rate * (1 + rate) ** months) / ((1 + rate) ** months - 1));

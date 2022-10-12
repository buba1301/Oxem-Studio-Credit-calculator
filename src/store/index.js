import { getContractSum, getInitialSum, getMonthlyPayment } from '../utils';

export const getInitialState = (data) => {
  const [price, initial, months] = data;

  const initialPrice = price.maxValue / 2;
  const initialValue = ((initial.maxValue / 2 / 100) * price.maxValue) / 2;
  const initialMonths = months.maxValue / 2;
  const initialPercent = initial.maxValue / 2;
  const initialMonthlyPayment = getMonthlyPayment(
    initialPrice,
    initialValue,
    initialMonths
  );
  const initialContractSum = getContractSum(
    initialValue,
    initialMonths,
    initialMonthlyPayment
  );

  return {
    price: initialPrice,
    initial: initialValue,
    months: initialMonths,
    percent: initialPercent,
    contractSum: parseInt(initialContractSum, 10),
    monhtlyPayment: parseInt(initialMonthlyPayment, 10),
  };
};

export const reducer = (state, action) => {
  const initialValue = parseInt(getInitialSum(action.payload, state.price), 10);

  switch (action.type) {
    case 'price':
      return {
        ...state,
        price: action.payload,
        initial: parseInt((action.payload / 100) * state.percent, 10),
      };
    case 'initial':
      return { ...state, initial: initialValue };
    case 'months':
      return { ...state, months: action.payload };
    case 'percent':
      return {
        ...state,
        initial: initialValue,
        percent: action.payload,
      };
    case 'contractSum':
      return {
        ...state,
        contractSum: parseInt(
          getContractSum(state.initial, state.months, state.monhtlyPayment),
          10
        ),
      };
    case 'monhtlyPayment':
      return {
        ...state,
        monhtlyPayment: parseInt(
          getMonthlyPayment(state.price, state.initial, state.months),
          10
        ),
      };
    default:
      throw new Error();
  }
};

/* eslint-disable no-return-await */
import routes from './routs';

const fetchDataKeyes = {
  price: 'car_coast',
  initial: 'initail_payment',
  months: 'lease_term',
  percent: 'initail_payment_percent',
  contractSum: 'total_sum',
  monhtlyPayment: 'monthly_payment_from',
};

export const getDataForFetch = (state) =>
  Object.entries(fetchDataKeyes).reduce(
    (acc, [key, value]) => ({ ...acc, [value]: state[key] }),
    {}
  );

export const sendData = async (data, route) => {
  const serializeForm = JSON.stringify(getDataForFetch(data), null, ' ');

  const { method, url, headers } = routes[route];

  return await fetch(url, {
    method,
    headers,
    mode: 'no-cors',
    body: serializeForm,
  });
};

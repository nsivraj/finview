
export const fetch_prices = () => {
  return {
    type: "FETCH_PRICES"
  };
};

export const receive_prices = (prices:any) => {
  return {
    type: "RECEIVE_PRICES",
    data: prices
  };
};


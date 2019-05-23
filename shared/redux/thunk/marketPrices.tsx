
import store from "../store";
import { fetch_prices, receive_prices, receive_error } from "../actions/fetchMarketPrices";

export const market_prices_thunk = () => {
  const user = 'nsivraj';
  store.dispatch(fetch_prices());
  return function(dispatch:any, getState:any) {
    return fetch(`https://api.github.com/users/${user}`)
      .then(data => data.json())
      .then(data => {
        if (data.message === "Not Found") {
          throw new Error("No market prices found!!");
        } else dispatch(receive_prices([data]));
      })
      .catch(err => dispatch(receive_error()));
  };
};
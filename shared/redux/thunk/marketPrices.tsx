
import store from "../store";
import { fetch_prices, receive_prices } from "../actions/fetchMarketPrices";
import { receive_error } from "../actions/common";

export const market_prices_thunk = () => {
  store.dispatch(fetch_prices());
  return function(dispatch:any, getState:any) {
    const { app } = getState();
    const pairs = Object.keys(app.marketAssetPairs.result).toString();
    return fetch(`https://api.kraken.com/0/public/Ticker?pair=${pairs}`)
    .then(data => data.json())
      .then(data => {
        if (data.message === "Not Found") {
          throw new Error("No market prices found!!");
        } else dispatch(receive_prices(data));
      })
      .catch(err => dispatch(receive_error()));
  };
};
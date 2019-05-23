
import store from "../store";
import { fetch_trades, receive_trades } from "../actions/fetchTrades";
import { receive_error } from "../actions/common";

export const recent_trades_thunk = (tradeSymbol:any) => {
  store.dispatch(fetch_trades(tradeSymbol));
  return function(dispatch:any, getState:any) {
    const { app } = getState();
    return fetch(`https://api.kraken.com/0/public/Trades?pair=${tradeSymbol}`)
    .then(data => data.json())
      .then(data => {
        if (data.message === "Not Found") {
          throw new Error("No recent trades found!!");
        } else dispatch(receive_trades(data));
      })
      .catch(err => dispatch(receive_error()));
  };
};

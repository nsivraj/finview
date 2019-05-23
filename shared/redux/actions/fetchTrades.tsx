
export const set_trade_symbol = (symbol:any) => {
  return {
    type: "SET_TRADE_SYMBOL",
    symbol,
  };
};

export const fetch_trades = (symbol:any) => {
  return {
    type: "FETCH_TRADES",
    symbol,
  };
};

export const receive_trades = (trades:any) => {
  return {
    type: "RECEIVE_TRADES",
    data: trades
  };
};

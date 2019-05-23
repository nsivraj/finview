import { connect } from 'react-redux';

import Component from './Component';
import { market_prices_thunk } from '../../../../shared/redux/thunk/marketPrices';
import { set_trade_symbol } from '../../../../shared/redux/actions/fetchTrades';

const mapStateToProps = (state:any) => {
  return {
    prices: state.app.marketPrices,
    tradeSymbol: state.app.tradeSymbol,
  };
};

const mapDispatchToProps = (dispatch:any) => {
  return {
    fetchMarketPrices: () => dispatch(market_prices_thunk()),
    setSelectedSymbol: (symbol:any) => dispatch(set_trade_symbol(symbol))
  }
};

const homeContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Component);

export default homeContainer;

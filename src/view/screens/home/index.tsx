import { connect } from 'react-redux';

import Component from './Component';
import { market_prices_thunk } from '../../../../shared/redux/thunk/marketPrices';

const mapStateToProps = (state:any) => {
  return {
    prices: state.app.marketPrices
  };
};

const mapDispatchToProps = (dispatch:any) => {
  return {
    fetchMarketPrices: () => dispatch(market_prices_thunk()),
  }
};

const homeContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Component);

export default homeContainer;

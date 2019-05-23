import { connect } from 'react-redux';
import { recent_trades_thunk } from '../../../../shared/redux/thunk/trades'
import Component from './Component';

const mapStateToProps = (state:any) => {
  return {
    tradeSymbol: state.app.tradeSymbol,
    trades: state.app.recentTrades,
  };
};

const mapDispatchToProps = (dispatch:any) => {
  return {
    fetchRecentTrades: (symbol:any) => dispatch(recent_trades_thunk(symbol)),
  }
};


const tradesGraphContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Component);

export default tradesGraphContainer;

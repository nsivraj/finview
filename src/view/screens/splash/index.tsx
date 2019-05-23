import { connect } from 'react-redux';

import Component from './Component';
import { market_assets_thunk, market_assetpairs_thunk } from '../../../../shared/redux/thunk/assets';

const mapStateToProps = () => ({});

const mapDispatchToProps = (dispatch:any) => {
  return {
    fetchMarketAssets: () => dispatch(market_assets_thunk()),
    fetchMarketAssetPairs: () => dispatch(market_assetpairs_thunk()),
  }
};

const splashContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Component);

export default splashContainer;

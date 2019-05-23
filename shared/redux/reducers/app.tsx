import { ACTION_TYPES } from '../constants/actionTypes';

const initialState = {
  isLoading: false,
  isError: false,
  marketAssets: {},
  marketAssetPairs: {},
  marketPrices: {},
  tradeSymbol: '',
  recentTrades: {},
};

export default (state = initialState, action: any) => {
  switch (action.type) {
    case ACTION_TYPES.SPLASH_LAUNCHED:
      return {
        ...state,
      };
    case ACTION_TYPES.FETCH_PRICES:
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    case ACTION_TYPES.RECEIVE_PRICES:
      return {
        ...state,
        marketPrices: action.data,
        isLoading: false,
        isError: false,
      };
    case ACTION_TYPES.FETCH_ASSETS:
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    case ACTION_TYPES.RECEIVE_ASSETS:
      return {
        ...state,
        marketAssets: action.data,
        isLoading: false,
        isError: false,
      };
    case ACTION_TYPES.FETCH_ASSETPAIRS:
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    case ACTION_TYPES.RECEIVE_ASSETPAIRS:
      return {
        ...state,
        marketAssetPairs: action.data,
        isLoading: false,
        isError: false,
      };
    case ACTION_TYPES.RECEIVE_ERROR:
      return {
        ...state,
        isError: true,
        isLoading: false
      };
    case ACTION_TYPES.SET_TRADE_SYMBOL:
      return {
        ...state,
        tradeSymbol: action.symbol,
      };
    case ACTION_TYPES.FETCH_TRADES:
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    case ACTION_TYPES.RECEIVE_TRADES:
      return {
        ...state,
        recentTrades: action.data,
        isLoading: false,
        isError: false,
      };

    default:
      return state;
  }
};

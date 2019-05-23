import { ACTION_TYPES } from '../constants/actionTypes';

const initialState = {
  isLoading: false,
  isError: false,
  marketPrices: [],
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
        marketPrices: action.data,
        isLoading: false,
        isError: false,
      };
    case ACTION_TYPES.RECEIVE_ERROR:
      return {
        ...state,
        isError: true,
        isLoading: false
      };
    default:
      return state;
  }
};


import store from "../store";
import { fetch_assets, receive_assets, fetch_assetpairs, receive_assetpairs } from "../actions/fetchAssets";
import { receive_error } from "../actions/common";

let _ASSETS_CACHE:any = undefined;
let _ASSETPAIRS_CACHE:any = undefined;

export const market_assets_thunk = () => {
  store.dispatch(fetch_assets());
  return function(dispatch:any, getState:any) {
    if(_ASSETS_CACHE) {
      dispatch(receive_assets(_ASSETS_CACHE));
    } else {
      console.log("Going to server to get assets");
      return fetch(`https://api.kraken.com/0/public/Assets`)
        .then(data => data.json())
        .then(data => {
          if (data.message === "Not Found") {
            throw new Error("No market assets found!!");
          } else {
            _ASSETS_CACHE = data;
            dispatch(receive_assets(data));
          }
        })
        .catch(err => dispatch(receive_error()));
    }
  };
};

export const market_assetpairs_thunk = () => {
  store.dispatch(fetch_assetpairs());
  return function(dispatch:any, getState:any) {
    if(_ASSETPAIRS_CACHE) {
      dispatch(receive_assetpairs(_ASSETPAIRS_CACHE));
    } else {
      console.log("Going to server to get assetpairs");
      return fetch(`https://api.kraken.com/0/public/AssetPairs`)
        .then(data => data.json())
        .then(data => {
          if (data.message === "Not Found") {
            throw new Error("No market assetpairs found!!");
          } else {
            _ASSETPAIRS_CACHE = data;
            dispatch(receive_assetpairs(data));
          }
        })
        .catch(err => dispatch(receive_error()));
    }
  };
};

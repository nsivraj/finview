
export const fetch_assets = () => {
  return {
    type: "FETCH_ASSETS"
  };
};

export const receive_assets = (assets:any) => {
  return {
    type: "RECEIVE_ASSETS",
    data: assets
  };
};

export const fetch_assetpairs = () => {
  return {
    type: "FETCH_ASSETPAIRS"
  };
};

export const receive_assetpairs = (assets:any) => {
  return {
    type: "RECEIVE_ASSETPAIRS",
    data: assets
  };
};

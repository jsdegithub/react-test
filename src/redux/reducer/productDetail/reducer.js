const defaultState = {
  loading: true,
  error: null,
  product: null,
};

export const productDetailReducer = (state = defaultState, action) => {
  switch (action.type) {
    case "getProductDetailStart":
      return { ...state, loading: true };
    case "getProductDetailSuccess":
      return { ...state, loading: false, product: action.payload };
    case "getProductDetailFailed":
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

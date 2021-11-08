const defaultState = {
  loading: true,
  error: null,
  recommendProductList: [],
};

export const recommendProductReducer = (state = defaultState, action) => {
  switch (action.type) {
    case "getRecommendProductListStart":
      return { ...state, loading: true };
    case "getRecommendProductListSuccess":
      return { ...state, loading: false, recommendProductList: action.payload };
    case "getRecommendProductListFailed":
      return { ...state, loading: false, error: action.message };
    default:
      return state;
  }
};

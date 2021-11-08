import axios from "axios";

const defaultState = {
  loading: true,
  error: null,
  product: [],
};

export const getShoppingCartProductActionCreator =
  (jwt) => async (dispatch, getState) => {
    dispatch({
      type: "fetchShoppingCartProductStart",
    });
    try {
      const { data } = await axios.get("http://123.56.149.216:8080/api/shoppingCart", {
        headers: {
          "x-icode": "79123EA2741006E2",
          Authorization: `bearer ${jwt}`,
        },
      });
      console.log(data);
      dispatch({
        type: "fetchShoppingCartProductSuccess",
        payload: data.shoppingCartItems,
      });
    } catch (e) {
      dispatch({
        type: "fetchShoppingCartProductFailed",
      });
    }
  };

export const shoppingCartReducer = (state = defaultState, action) => {
  switch (action.type) {
    case "fetchShoppingCartProductStart":
      return { ...state, loading: true };
    case "fetchShoppingCartProductSuccess":
      return { ...state, loading: false, product: action.payload };
    case "fetchShoppingCartProductFailed":
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

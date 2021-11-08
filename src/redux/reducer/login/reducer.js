const defaultState = {
  loading: false,
  error: null,
  jwt: null,
};

export const loginReducer = (state = defaultState, action) => {
  switch (action.type) {
    case "loginStart":
      return {
        ...state,
        loading: true,
      };

    case "loginSuccess":
      return {
        ...state,
        loading: false,
        jwt: action.payload,
      };

    case "loginFailed":
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case "logout":
      return {
        ...state,
        loading: false,
        error: null,
        jwt: null,
      };

    default:
      return state;
  }
};

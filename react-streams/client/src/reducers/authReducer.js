import types from "../actions/types";

const INITIAL_STATE = {
  isSignedIn: null,
  userId: null,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.SIGN_OUT:
      return {
        ...state,
        isSignedIn: false,
        userId: null,
      };
    case types.SIGN_IN:
      return {
        ...state,
        isSignedIn: true,
        userId: action.payload,
      };
    default:
      return state;
  }
};

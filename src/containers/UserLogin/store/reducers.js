import * as actions from "./actions";

export const initialState = {
  user: {},
  error: {},
  isLoading: true
};

const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.LOGIN_USER_REQUEST:
      return { ...state, error: {} };

    case actions.LOGIN_USER_SUCCESS:
      return {
        ...state,
        user: action.payload.data,
        error: {},
        isLoading: false
      };

    case actions.LOGIN_USER_FAILURE:
      return { ...state, error: action.payload.error, user: {} };

    default:
      return state;
  }
};

export default loginReducer;

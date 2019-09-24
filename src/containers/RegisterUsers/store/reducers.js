import * as actions from './actions';

export const initialState = {
  user: {},
  error: {},
  isLoading: true
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.POST_USER_REQUEST:
      return { ...state, isLoading: false };

    case actions.POST_USER_SUCCESS:
      return {
        ...state,
        user: action.payload.user,
        isLoading: false,
        error: {}
      };

    case actions.POST_USER_FAILURE:
      return {
        ...state,
        error: action.payload.error,
        isLoading: false,
        user: {}
      };
    default:
      return initialState;
  }
};

export default userReducer;

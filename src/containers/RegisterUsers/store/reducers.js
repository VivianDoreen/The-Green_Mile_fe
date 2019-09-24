import * as actions from './actions';

export const initialState = {
  user: {},
  error: {},
  isLoading: true
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.POST_USER_REQUEST:
      return { ...state, user: action.payload.data, isLoading: true };

    case actions.POST_USER_SUCCESS:
      return { ...state, user: action.payload.user, isLoading: false };

    case actions.POST_USER_FAILURE:
      return { ...state, error: action.payload.error, isLoading: false };
    default:
      return initialState;
  }
};

export default userReducer;

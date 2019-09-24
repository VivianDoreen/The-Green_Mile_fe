export const POST_USER_REQUEST = 'POST_USER_REQUEST';
export const POST_USER_SUCCESS = 'POST_USER_SUCCESS';
export const POST_USER_FAILURE = 'POST_USER_FAILURE';

export const postUserRequest = (data) => {
  return {
    type: POST_USER_REQUEST,
    payload: { data }
  };
};
export const postUserSuccess = (user) => {
  return {
    type: POST_USER_SUCCESS,
    payload: { user }
  };
};

export const postUserFailure = (error) => {
  return {
    type: POST_USER_FAILURE,
    payload: { error }
  };
};

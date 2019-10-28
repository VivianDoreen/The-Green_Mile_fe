export const POST_PACKAGE_REQUEST = "POST_PACKAGE_REQUEST";
export const POST_PACKAGE_SUCCESS = "POST_PACKAGE_SUCCESS";
export const POST_PACKAGE_FAILURE = "POST_PACKAGE_FAILURE";

export const postPackageRequest = packages => {
  return {
    type: POST_PACKAGE_REQUEST,
    payload: { packages }
  };
};

export const postPackageSuccess = packages => {
  return {
    type: POST_PACKAGE_SUCCESS,
    payload: packages
  };
};
export const postPackageFailure = error => {
  return {
    type: POST_PACKAGE_FAILURE,
    payload: { error }
  };
};

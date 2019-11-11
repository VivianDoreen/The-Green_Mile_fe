//action types
export const FETCH_SINGLE_PACKAGE_REQUEST = "FETCH_SINGLE_PACKAGE_REQUEST";
export const FETCH_SINGLE_PACKAGE_SUCCESS = "FETCH_SINGLE_PACKAGE_SUCCESS";
export const FETCH_SINGLE_PACKAGE_FAILURE = "FETCH_SINGLE_PACKAGE_FAILURE";

//actions
export const fetchSinglePackageRequest = package_id => {
  return {
    type: FETCH_SINGLE_PACKAGE_REQUEST,
    payload: { package_id }
  };
};

export const fetchSinglePackageSuccess = singlePackage => {
  return {
    type: FETCH_SINGLE_PACKAGE_SUCCESS,
    payload: { singlePackage }
  };
};

export const fetchSinglePackageFailure = error => {
  return {
    type: FETCH_SINGLE_PACKAGE_FAILURE,
    payload: { error }
  };
};

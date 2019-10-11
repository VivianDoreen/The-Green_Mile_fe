import React from "react";

export const FETCH_PACKAGES_REQUEST = "FETCH_PACKAGES_REQUEST";
export const FETCH_PACKAGES_SUCCESS = "FETCH_PACKAGES_SUCCESS";
export const FETCH_PACKAGES_FAILURE = "FETCH_PACKAGES_FAILURE";

export const fetchPackagesRequest = () => {
  return {
    type: FETCH_PACKAGES_REQUEST
  };
};

export const fetchPackagesSuccess = packages => {
  return {
    type: FETCH_PACKAGES_SUCCESS,
    payload: packages
  };
};

export const fetchPackagesFailure = error => {
  return {
    type: FETCH_PACKAGES_FAILURE,
    payload: { error }
  };
};

import React from "react";

export const FETCH_PACKAGES_REQUEST = "FETCH_PACKAGES_REQUEST";
export const FETCH_PACKAGES_SUCCESS = "FETCH_PACKAGES_SUCCESS";
export const FETCH_PACKAGES_FAILURE = "FETCH_PACKAGES_FAILURE";

//package type action types
export const ADD_PACKAGE_TYPE_REQUEST = "ADD_PACKAGE_TYPE_REQUEST";
export const ADD_PACKAGE_TYPE_SUCCESS = "ADD_PACKAGE_TYPE_SUCCESS";
export const ADD_PACKAGE_TYPE_FAILURE = "ADD_PACKAGE_TYPE_FAILURE";

export const fetchPackagesRequest = () => {
  console.log(localStorage.getItem('token'), 'inActions');

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

export const addPackageTypeRequest = packageType => {
  return {
    type: ADD_PACKAGE_TYPE_REQUEST,
    payload: { packageType }
  };
};

export const addPackageTypeSuccess = packageTypeResult => {
  return {
    type: ADD_PACKAGE_TYPE_SUCCESS,
    payload: packageTypeResult
  };
};

export const addPackageTypeFailure = error => {
  return {
    type: ADD_PACKAGE_TYPE_FAILURE,
    payload: { error }
  };
};

//initialstate
import { initialState } from "../../../store/initialState";

//action types
import * as types from "./actions";

const singlePackageReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_SINGLE_PACKAGE_REQUEST:
      return { ...state, isLoading: true };
    case types.FETCH_SINGLE_PACKAGE_SUCCESS:
      return {
        ...state,
        isLoading: false,
        singlePackage: action.payload.singlePackage
      };
    case types.FETCH_SINGLE_PACKAGE_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload.error
      };
    default:
      return state;
  }
};
export default singlePackageReducer;

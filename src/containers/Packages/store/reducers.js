import * as types from "./actions";
import { initialState } from "../../../store/initialState";

const packageReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_PACKAGES_REQUEST:
      return { ...initialState, isLoading: true };

    case types.FETCH_PACKAGES_SUCCESS:
      return {
        ...initialState,
        isLoading: false,
        packages: action.payload
      };
    case types.FETCH_PACKAGES_FAILURE:
      return {
        ...initialState,
        isLoading: false,
        error: action.payload.error
      };
    default:
      return state;
  }
};

export default packageReducer;

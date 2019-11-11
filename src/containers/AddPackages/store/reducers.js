//actions
import * as actions from "./actions";

//initialState
import { initialState } from "../../../store/initialState";

const addPackagesReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.POST_PACKAGE_REQUEST:
      return {
        ...state,
        isLoading: true
      };
    case actions.POST_PACKAGE_SUCCESS:
      return {
        ...state,
        isLoading: false,
        packages: action.payload
      };
    case actions.POST_PACKAGE_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload
      };

    default:
      return state;
  }
};

export default addPackagesReducer;

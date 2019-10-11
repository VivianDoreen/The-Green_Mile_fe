export const getUser = ({ loginReducer }) => loginReducer.user;
export const getError = ({ loginReducer }) => loginReducer.error;
export const getIsLoading = ({ loginReducer }) => loginReducer.isLoading;

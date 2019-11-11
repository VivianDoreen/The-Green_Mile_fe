export const fetchPackages = ({ packageReducer }) => packageReducer.packageList;
export const getIsLoading = ({ packageReducer }) => packageReducer.isLoading;
export const fetchPackagesError = ({ packageReducer }) => packageReducer.error;
export const fetchPackageType = ({ packageReducer }) =>
  packageReducer.packageType;

function createAxiosAuthMiddleware() {
  return ({ getState }) => next => (action) => {
    const { token } = getState().auth.authData.token;
    global.axios.defaults.headers.common.Authorization = token ? `Bearer ${token}` : null;

    return next(action);
  };
}

const axiosAuth = createAxiosAuthMiddleware();

export default axiosAuth;
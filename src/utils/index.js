const API_ROOT = "http://localhost:5000/user/";

export const API_URLS = {
  login: () => `${API_ROOT}createSession`,
  signIn: () => `${API_ROOT}create`,
  getAllUsers: () => `${API_ROOT}getAllUser`,
};

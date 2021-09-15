import { useState } from "react";

//state will be managed by useProviderAuth
//when user login will set user in user proprty ,it will be called in Authprovider and our app will rerender where we will be using user from auth global context
export const useProviderAuth = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const login = (email, password) => {};
  const logout = () => {};

  return {
    user,
    login,
    logout,
    loading,
  };
};

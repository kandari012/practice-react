import { useContext, useState, useEffect } from "react";
import { AuthContext } from "./../providers/AuthProvider";
import { login as UserLogin } from "../api";
import jwt from "jwt-decode";
import {
  LOCALSTORAGE_TOKEN_KEY,
  removeItemFromLocalStorage,
  setItemInLocalStorage,
  getItemFromLocalStorage,
} from "../utils";

//no need to call use context again in all fxn
// to read data from AuthContext we will use usecontext hook
export const useAuth = () => {
  return useContext(AuthContext);
};

// will have all authetication realted data
//state will be managed by useProviderAuth
//when user login will set user in user proprty ,it will be called in Authprovider and our app will rerender where we will be using user from auth global context
export const useProviderAuth = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // on app first load or reload will check token in store and update user with that
  useEffect(() => {
    const UserToken = getItemFromLocalStorage(LOCALSTORAGE_TOKEN_KEY);

    if (UserToken) {
      const user = jwt(UserToken);
      setUser(user);
    }
  }, []);

  const login = async (email, password) => {
    const response = await UserLogin(email, password);

    if (response.success) {
      setUser(response.data.user);
      setItemInLocalStorage(
        LOCALSTORAGE_TOKEN_KEY,
        response.data.token ? response.data.token : null
      );
      return {
        success: true,
      };
    } else {
      return {
        success: false,
        message: response.message,
      };
    }
  };
  const logout = () => {
    setUser(null);
    removeItemFromLocalStorage(LOCALSTORAGE_TOKEN_KEY);
  };

  return {
    user,
    login,
    logout,
    loading,
  };
};

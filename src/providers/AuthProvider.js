import { createContext } from "react";

import { useProviderAuth } from "../hooks";

const initialState = {
  user: null,

  login: () => {},
  signIn: () => {},
  logout: () => {},
  loadung: true,
  updateUser:()=>{}
};

//creating context
export const AuthContext = createContext(initialState);

// will let our app and all its decendent use context data
export const AuthProvider = ({ children }) => {
  const auth = useProviderAuth(); // will grab the current state and pass to provider ,auth state is available to all children

  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
};

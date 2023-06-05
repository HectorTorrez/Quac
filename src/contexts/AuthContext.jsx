import { createContext, useState } from "react";
import { auth } from "../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";

export const authContext = createContext();
// eslint-disable-next-line react/prop-types
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState('')

  const singup = (email, password) => {
    signInWithEmailAndPassword(auth, email, password);
    
  };

  return <authContext.Provider>{children}</authContext.Provider>;
};

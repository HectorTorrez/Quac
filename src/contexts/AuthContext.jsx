import { createContext, useState } from "react";
import { auth } from "../firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

export const authContext = createContext();
// eslint-disable-next-line react/prop-types
export const AuthProvider = ({ children }) => {
  // const [user, setUser] = useState("");
  const [loading, setLoading] = useState(true);

  const singup = (email, password) => {
    createUserWithEmailAndPassword(auth, email, password);
  };

  const login = (email, password) => {
    signInWithEmailAndPassword(auth, email, password);
  };

  return (
    <authContext.Provider value={{ singup, login, loading }}>
      {children}
    </authContext.Provider>
  );
};

import { collection, onSnapshot, query } from "firebase/firestore";
import { createContext, useEffect, useState } from "react";
import { db } from "../firebase";

export const quackContext = createContext();
// eslint-disable-next-line react/prop-types
export const QuacProvider = ({ children }) => {
  const [data, setData] = useState([]);
  console.log(data);
  useEffect(() => {
    const q = query(collection(db, "quacs"));
    const unsubcribe = onSnapshot(q, (quacSnapshot) => {
      const messages = [];
      quacSnapshot.forEach((quac) => {
        messages.push({ ...quac.data(), id: quac.id });
      });
      setData(messages);
    });

    return () => unsubcribe();
  }, []);

  return (
    <quackContext.Provider value={{ data }}>{children}</quackContext.Provider>
  );
};

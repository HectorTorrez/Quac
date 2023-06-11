import {
  collection,
  deleteDoc,
  doc,
  onSnapshot,
  orderBy,
  query,
} from "firebase/firestore";
import { createContext, useEffect, useState } from "react";
import { db } from "../firebase";

export const quackContext = createContext();
// eslint-disable-next-line react/prop-types
export const QuacProvider = ({ children }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const q = query(collection(db, "quacs"), orderBy("createAt"));
    const unsubcribe = onSnapshot(q, (quacSnapshot) => {
      const messages = [];
      quacSnapshot.forEach((quac) => {
        messages.push({ ...quac.data(), id: quac.id });
      });
      setData(messages);
    });

    return () => unsubcribe();
  }, []);

  const handleDelete = async (id) => {
    // data.map((d) => {
    //   setUserQuac(d.userId);
    // });

    // if (user !== userQuac) return;
    const confirmQuac = confirm("Are you sure you want to delete this quac?");
    if (!confirmQuac) return;
    try {
      await deleteDoc(doc(db, "quacs", id));
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <quackContext.Provider value={{ data, handleDelete }}>
      {children}
    </quackContext.Provider>
  );
};

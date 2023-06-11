import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { Navbar } from "../../components/Navbar";
import { auth, db } from "../../firebase";
import { useState } from "react";
import { useQuacProvider } from "../../hooks/useQuacProvider";
import { QuacText } from "./components/QuacText";

export const Home = () => {
  const [message, setMessage] = useState("");

  const { data } = useQuacProvider();

  const handleEnter = async (event) => {
    if (event.key === "Enter") {
      await addMessage();
    }
  };

  const addMessage = async () => {
    if (message === "") return;

    try {
      await addDoc(collection(db, "quacs"), {
        createAt: serverTimestamp(),
        text: message,
        user: auth.currentUser.displayName,
        userId: auth.currentUser.uid,
        likes: {},
      });
    } catch (error) {
      console.log(error);
    }
    setMessage("");
  };

  return (
    <section className="flex flex-col items-center  h-screen  ">
      <Navbar
        user={auth.currentUser.displayName}
        img={auth.currentUser.photoURL}
      />
      <section className="max-w-md w-full  mt-8">
        <section className="flex w-full">
          <input
            value={message}
            type="text"
            className="w-full border border-gray-300 rounded-l-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="Add a quac"
            onChange={(e) => setMessage(e.target.value)}
            onKeyDown={handleEnter}
          />
          <button
            onClick={addMessage}
            className="bg-buttons hover:bg-button-600 text-black font-semibold rounded-r-md py-2 px-4 ml-2"
          >
            POST
          </button>
        </section>
      </section>
      <section className="flex flex-col-reverse gap-10  mt-10 items-center align-middle w-full md:w-1/2 p-5 md:p-0 max-w-3xl">
        {data?.map((d) => (
          <QuacText
            key={d.id}
            d={d}
            img={auth.currentUser.photoURL}
            userId={auth.currentUser.email}
          />
        ))}
      </section>
    </section>
  );
};

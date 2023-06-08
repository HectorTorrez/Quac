import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { Navbar } from "../../components/Navbar";
import { auth, db } from "../../firebase";
import { useState } from "react";
import { useQuacProvider } from "../../hooks/useQuacProvider";
import { QuacText } from "./components/QuacText";

export const Home = () => {
  const [message, setMessage] = useState("");

  const { data } = useQuacProvider();

  const addMessage = async () => {
    try {
      await addDoc(collection(db, "quacs"), {
        createAt: serverTimestamp(),
        text: message,
        user: auth.currentUser.displayName,
      });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <section className="flex flex-col items-center  h-screen  ">
      <Navbar />
      <section className="mt-20 flex w-full p-5 md:p-0 md:w-1/2 justify-center max-w-3xl">
        <input
          className="  w-full outline-none border-none lg:text-xl  "
          type="text"
          placeholder="Write your Quac"
          onChange={(e) => setMessage(e.target.value)}
          maxLength={144}
        />
        <button
          onClick={addMessage}
          className="bg-buttons text-xl py-2 rounded-md hover:opacity-70 px-5 lg:px-10"
        >
          POST
        </button>
      </section>
      <section className="flex mt-10 items-center align-middle w-full md:w-1/2 p-5 md:p-0 max-w-3xl">
        {data?.map((d) => (
          <QuacText key={d.id} d={d} img={auth.currentUser.photoURL} />
        ))}
      </section>
    </section>
  );
};

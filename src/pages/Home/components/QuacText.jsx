import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useQuacProvider } from "../../../hooks/useQuacProvider";
import { faFeather, faTrash } from "@fortawesome/free-solid-svg-icons";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "../../../firebase";

// eslint-disable-next-line react/prop-types
export const QuacText = ({ d, img }) => {
  // eslint-disable-next-line react/prop-types
  const { text, user, id, quacs, like } = d;

  console.log(d);
  const { handleDelete } = useQuacProvider();

  const handleLike = async (id) => {
    try {
      if (like === false) {
        await updateDoc(doc(db, "quacs", id), {
          like: true,
        });
      } else {
        await updateDoc(doc(db, "quacs", id), {
          like: false,
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section className="max-w-md  bg-white shadow-md rounded-md p-4 w-full">
      <section className="flex space-x-4  ">
        <img src={img} alt="photo" className="w-12 h-12 rounded-full" />
        <section className="flex justify-between w-full items-center">
          <section className="flex flex-col">
            <p className="font-bold">{user}</p>
          </section>
          <section>
            <button
              className="text-red-500 font-bold"
              onClick={() => handleDelete(id)}
            >
              <FontAwesomeIcon icon={faTrash} /> Delete
            </button>
          </section>
        </section>
      </section>
      <p className="mt-4 break-words">{text}</p>
      <section className="flex items-center space-x-2 mt-4">
        <button
          onClick={() => handleLike(id)}
          className="flex items-center gap-1 outline-none border-none"
        >
          <FontAwesomeIcon
            icon={faFeather}
            className={`${like ? "text-secondary h-5" : "text-black h-5"}`}
          />
          <p
            className={`${
              like
                ? "text-secondary font-medium self-end h-5"
                : "text-transparent font-medium self-end"
            }`}
          >
            {like ? "Quac" : "     "}
          </p>
        </button>
        {/* <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 text-gray-500"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path d="M10 3a1 1 0 0 0-1 1v2H6a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-7a2 2 0 0 0-2-2h-3V4a1 1 0 0 0-1-1z" />
        </svg>
        <p className="text-gray-500">456</p> */}
      </section>
    </section>
  );
};
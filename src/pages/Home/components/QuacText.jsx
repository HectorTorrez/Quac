import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useQuacProvider } from "../../../hooks/useQuacProvider";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

// eslint-disable-next-line react/prop-types
export const QuacText = ({ d, img }) => {
  // eslint-disable-next-line react/prop-types
  const { text, user, id } = d;

  const { handleDelete } = useQuacProvider();

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
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 text-gray-500"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path d="M10 3c-3.866 0-7 3.134-7 7s3.134 7 7 7 7-3.134 7-7-3.134-7-7-7zm0 12.754V12c2.9 0 5.35-1.722 6.497-4.204C15.197 5.869 13.827 5 12 5c-2.761 0-5 2.239-5 5v.754l-1.25-1.25-1.414 1.414L10 16.618l3.664-3.664-1.414-1.414L10 13.754z" />
        </svg>
        <p className="text-gray-500">123</p>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 text-gray-500"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path d="M10 3a1 1 0 0 0-1 1v2H6a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-7a2 2 0 0 0-2-2h-3V4a1 1 0 0 0-1-1z" />
        </svg>
        <p className="text-gray-500">456</p>
      </section>
    </section>
  );
};

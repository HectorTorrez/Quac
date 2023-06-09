import { useNavigate } from "react-router";
import { useAuthProvider } from "../hooks/useAuthProvider";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightFromBracket } from "@fortawesome/free-solid-svg-icons";

// eslint-disable-next-line react/prop-types
export const Navbar = ({ user, img }) => {
  const { Logout } = useAuthProvider();

  const navigate = useNavigate();
  const handleLogout = async () => {
    try {
      await Logout();
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <nav className="bg-white mt-3 max-w-md lg:w-1/2 ">
      <section className="max-w-7xl mx-auto   ">
        <section className="flex items-center justify-between h-16">
          <section className="flex items-center">
            <img src={img} alt="photo" className="w-10 h-10 rounded-full" />
            <span className="ml-2 text-black font-semibold text-lg">
              {user}
            </span>
          </section>
          <section>
            <button
              onClick={handleLogout}
              className="text-red-600 hover:text-red-700 text-lg font-semibold px-4 py-2 rounded flex gap-2 items-center"
            >
              <FontAwesomeIcon icon={faRightFromBracket} />
            </button>
          </section>
        </section>
      </section>
    </nav>
  );
};

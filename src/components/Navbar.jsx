import { useNavigate } from "react-router";
import { useAuthProvider } from "../hooks/useAuthProvider";

export const Navbar = () => {
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
    <header className="flex w-full items-center p-5 md:p-0 mt-5 justify-between  max-w-3xl lg:w-1/2">
      <section className="flex align-middle">
        <img src="#" alt="#" />
        <h2>name</h2>
      </section>
      <section>
        <button onClick={handleLogout}>Logout</button>
      </section>
    </header>
  );
};

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
    <header className="flex w-full items-center  p-5 justify-between">
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

/* eslint-disable react/no-unescaped-entities */
import { Link, useNavigate } from "react-router-dom";
import { useAuthProvider } from "../../hooks/useAuthProvider";
import { useState } from "react";

export const Login = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const { login, loginWithGoogle } = useAuthProvider();

  const navigate = useNavigate();

  const handleSubmit = async () => {
    try {
      await login(user.email, user.password);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  const handleLoginWithGoogle = async () => {
    try {
      await loginWithGoogle();
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = ({ target: { name, value } }) => {
    setUser({ ...user, [name]: value });
  };

  return (
    <section className="h-screen  flex items-center justify-center">
      <section className="flex flex-col text-center lg:w-1/2 w-auto  justify-center items-center align-middle  bg-indigo-50 py-10 lg:py-32 max-w-3xl  rounded-md">
        <section className="pb-10 px-10">
          <h2 className="font-bold text-3xl lg:text-7xl mb-4">Welcome Back</h2>
          <p className="text-xl text-slate-400">
            Enter your credentials to access your account
          </p>
        </section>

        <section className="flex  flex-col gap-10 w-4/5 ">
          <label
            htmlFor="email"
            className=" bg-white rounded-md flex items-center justify-center pl-2"
          >
            👀
            <input
              className="p-2  w-full outline-none border-none lg:text-xl"
              type="email"
              placeholder="Enter your email"
              name="email"
              onChange={handleChange}
            />
          </label>
          <label
            htmlFor="password"
            className="bg-white rounded-md flex items-center justify-center pl-2"
          >
            👀
            <input
              className="p-2  w-full outline-none border-none lg:text-xl "
              type="password"
              placeholder="Enter your password"
              name="password"
              onChange={handleChange}
            />
          </label>

          <section className="flex flex-col gap-5">
            <button
              onClick={handleSubmit}
              className="bg-buttons text-xl py-2 rounded-md hover:opacity-70 "
            >
              Sign In
            </button>
            <button
              onClick={handleLoginWithGoogle}
              className="bg-white  hover:opacity-70 text-xl py-2 rounded-md"
            >
              Login with Google
            </button>
          </section>
        </section>
        <Link className="mt-3 text-blue-700" to="/reset-password">
          <p>Forgot your password?</p>
        </Link>

        <section className="mt-10 flex justify-end w-4/5 ">
          <p className=" text-slate-400">
            Don't have an Account? {""}
            <Link className="text-blue-700" to="/register">
              Register
            </Link>
          </p>
        </section>
      </section>
    </section>
  );
};

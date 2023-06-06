/* eslint-disable react/no-unescaped-entities */
import { Link } from "react-router-dom";

export const Login = () => {
  return (
    <section className="h-screen  flex items-center justify-center">
      <form className="flex flex-col text-center lg:w-1/2 w-auto  justify-center items-center align-middle  bg-indigo-50 py-10 lg:py-32 max-w-3xl  rounded-md">
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
            />
          </label>

          <button className="bg-buttons text-xl py-2 rounded-md hover:opacity-70 ">
            Sign In
          </button>
        </section>

        <section className="mt-10 flex justify-end w-4/5 ">
          <p className=" text-slate-400">
            Don't have an Account? {""}
            <Link className="text-blue-700" to="/register">
              Register
            </Link>
          </p>
        </section>
      </form>
    </section>
  );
};

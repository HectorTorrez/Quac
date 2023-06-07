import { Navbar } from "../../components/Navbar";

export const Home = () => {
  return (
    <section className="flex flex-col items-center  h-screen  ">
      <Navbar />
      <section className="mt-20 flex w-full p-5 md:w-1/2 justify-center">
        <input
          className="p-2  w-full outline-none border-none lg:text-xl max-w-3xl "
          type="text"
          placeholder="Write your Quac"
          maxLength={144}
        />
        <button className="bg-buttons text-xl py-2 rounded-md hover:opacity-70 px-5 lg:px-10">
          POST
        </button>
      </section>
      <section className="flex mt-10 items-center align-middle w-full md:w-1/2 p-5 max-w-3xl">
        <section>
          <img src="#" alt="#" />
        </section>
        <section className="">
          <p>QUAC TWEET</p>
        </section>
      </section>
    </section>
  );
};

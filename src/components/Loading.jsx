import { SkewLoader } from "react-spinners";

export const Loading = () => {
  return (
    <section className="h-screen w-screen flex justify-center items-center">
      <SkewLoader color="#36d7b7" size={50} />
    </section>
  );
};

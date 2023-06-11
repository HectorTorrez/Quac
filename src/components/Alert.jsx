// eslint-disable-next-line react/prop-types
export const Alert = ({ message }) => {
  return (
    <section className="border border-red-800 w-screen">
      <h3 className="text-lg text-red-800 font-semibold">{message}</h3>
    </section>
  );
};

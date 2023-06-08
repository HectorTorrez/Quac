// eslint-disable-next-line react/prop-types
export const QuacText = ({ d, img }) => {
  const { text, user } = d;

  return (
    <>
      <section>
        <img src={img} alt="#" />
      </section>
      <section className="">
        <p>{user}</p>
        <p>{text}</p>
      </section>
    </>
  );
};

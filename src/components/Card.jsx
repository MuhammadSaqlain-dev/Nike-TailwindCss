const Card = ({ shoe }) => {
  return (
    <div
      className={`${shoe.className} max-w-xl cursor-pointer transform transition hover:scale-105`}
    >
      <div className="p-8">
        <div className="text-2xl font-bold">{shoe.title}</div>
        <div className="mt-8 text-xl font-semibold underline underline-offset-4">
          <a href="#">SHOP NOW +</a>
        </div>
      </div>
      <img
        src={shoe.src}
        className="absolute h-40 w-56 inset-0 top-5 left-[40%]"
      />
    </div>
  );
};

export default Card;

import Card from "./Card";

const NewArrivalSection = ({ shoes }) => {
  return (
    <div className="mt-20">
      <div className="flex-center">
        <div className="text-4xl font-extrabold bg-[url('./assets/lines.png')] bg-center">
          New Arrivals
        </div>
      </div>
      {/* card grids */}
      <div className="mt-10 grid grid-cols-1 gap-y-24 gap-x-6 justify-between md:grid-cols-2 xl:grid-cols-[repeat(3,25%)]">
        {shoes.map((shoe) => (
          <Card key={shoe.id} shoe={shoe} />
        ))}
      </div>
    </div>
  );
};

export default NewArrivalSection;

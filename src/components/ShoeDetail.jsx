import shoe1 from "../assets/n1-min.png";
import { QTY, SIZE } from "../constants";
import Select from "./Select";

const ShoeDetail = () => {
  return (
    <div className="flex flex-col lg:flex-row-reverse space-y-4">
      {/* shoe image */}
      <div className=" flex-1 lg:-mt-32 lg:ml-28">
        <div className=" h-full flex-center bg-gradient-to-br from-[#F637CF] from-5% via-[#E3D876] via-40% to-[#4DD4C6]">
          <img className="animate-float" src={shoe1} />
        </div>
      </div>
      <div className="flex-1 space-y-6">
        {/* shoe text details */}
        <div className="text-5xl font-black md:text-9xl">Nike Air Max 270</div>
        <div className="font-medium md:text-xl">
          The Nike Air Max 270 is a lifestyle shoe that's sure to turn heads
          with its vibrant color gradient.
        </div>

        <div className="flex space-x-6 items-center">
          <div className="font-extrabold text-3xl md:text-6xl">160 $</div>
          <Select title={"QTY"} options={QTY} />
          <Select title={"SIZE"} options={SIZE} />
        </div>

        {/* shoe add-to-cart + link buttons */}
        <div className="space-x-10">
          <button className="h-14 w-44 bg-black text-white active-btn-anim">
            Add to bag
          </button>
          <a href="#" className="font-semibold underline underline-offset-4">
            View details
          </a>
        </div>
      </div>
    </div>
  );
};

export default ShoeDetail;

import { useState } from "react";
import { QTY, SIZE } from "../constants";
import Select from "./Select";
import { useEffect } from "react";

const ShoeDetail = ({ shoe, addToCart }) => {
  const [form, setForm] = useState({ qty: null, size: null });

  useEffect(() => {
    setForm({ qty: null, size: null });
  }, [shoe.id]);

  return (
    <div className="dark:text-white flex flex-col lg:flex-row-reverse space-y-4">
      {/* shoe image */}
      <div className=" flex-1 lg:-mt-32 lg:ml-28">
        <div className=" h-full flex-center bg-gradient-to-br from-[#F637CF] from-5% via-[#E3D876] via-40% to-[#4DD4C6]">
          <img className="animate-float" src={shoe.src} />
        </div>
      </div>
      <div className="flex-1 space-y-6">
        {/* shoe text details */}
        <div className="text-5xl font-black md:text-9xl">{shoe.title}</div>
        <div className="font-medium md:text-xl">{shoe.description}</div>

        <div className="flex space-x-6 items-center">
          <div className="font-extrabold text-3xl md:text-6xl">
            {shoe.price} $
          </div>
          <Select
            title={"QTY"}
            options={QTY}
            onChange={(qty) => setForm({ ...form, qty })}
            value={form.qty}
          />
          <Select
            title={"SIZE"}
            options={SIZE}
            onChange={(size) => setForm({ ...form, size })}
            value={form.size}
          />
        </div>

        {/* shoe add-to-cart + link buttons */}
        <div className="space-x-10">
          <button
            onClick={() => addToCart(shoe, form.qty, form.size)}
            className="h-14 w-44 bg-black text-white active-btn-anim dark:bg-white dark:text-black"
          >
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

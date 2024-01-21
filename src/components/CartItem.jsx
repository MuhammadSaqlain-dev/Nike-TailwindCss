import Select from "./Select";
import { CiTrash } from "react-icons/ci";
import { QTY, SIZE } from "../constants";

const CartItem = ({ shoe: { product, qty, size } }) => {
  return (
    <div className="bg-gray-50 hover:bg-[#DAFFA2] p-2 space-y-2 dark:hover:bg-night-50 dark:bg-transparent">
      <div className="flex space-x-2">
        <img src={product.src} className="h-24" />
        <div className="flex flex-col space-y-2">
          <div className="font-bold dark:text-white">{product.title}</div>
          <div className="text-sm text-gray-400">{product.description}</div>
        </div>
        <div className="font-bold text-black dark:text-white">
          {product.price}$
        </div>
      </div>
      <div className="flex justify-between items-center">
        <div className="flex pl-32 space-x-6">
          <div>
            <div className="font-bold dark:text-white">QTY</div>
            <Select
              title={""}
              options={QTY}
              className="w-16 p-1 pl-2"
              defaultValue={qty}
            />
          </div>
          <div>
            <div className="font-bold dark:text-white">Size</div>
            <Select
              title={""}
              options={SIZE}
              className={"w-16 p-1 pl-2"}
              defaultValue={size}
            />
          </div>
        </div>
        <div className="">
          <CiTrash size={25} className="text-black dark:text-white" />
        </div>
      </div>
    </div>
  );
};

export default CartItem;

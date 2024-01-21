import { IoIosArrowDown } from "react-icons/io";
import { twMerge } from "tw-merge";

const Select = ({ title, options, className, defaultValue }) => {
  return (
    <div className="relative">
      <select
        defaultValue={defaultValue || ""}
        className={twMerge(
          `border border-gray-300 w-24 p-4 bg-white appearance-none ${className}`
        )}
      >
        <option value="" disabled hidden>
          {title}
        </option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
      <div className="absolute inset-y-0 right-0 flex-center pr-3">
        <IoIosArrowDown />
      </div>
    </div>
  );
};

export default Select;

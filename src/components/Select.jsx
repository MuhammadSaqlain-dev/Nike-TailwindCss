import { IoIosArrowDown } from "react-icons/io";
import { twMerge } from "tw-merge";

const Select = ({ title, options, className, onChange, value }) => {
  return (
    <div className="relative">
      <select
        onChange={(e) => onChange(e.target.value)}
        value={value || ""}
        className={twMerge(
          `border border-gray-300 w-24 p-4 bg-white appearance-none dark:text-black ${className}`
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
      <div className="absolute inset-y-0 right-0 flex-center pr-3 dark:text-black">
        <IoIosArrowDown />
      </div>
    </div>
  );
};

export default Select;

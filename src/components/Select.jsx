import { IoIosArrowDown } from "react-icons/io";

const Select = ({ title, options }) => {
  return (
    <div className="relative">
      <select
        defaultValue={""}
        className="border border-gray-300 w-24 p-4 bg-white appearance-none"
      >
        <option value="" disabled hidden>
          {title}
        </option>
        {options.map((option) => (
          <option value={option}>{option}</option>
        ))}
      </select>
      <div className="absolute inset-y-0 right-0 flex-center pr-3">
        <IoIosArrowDown />
      </div>
    </div>
  );
};

export default Select;

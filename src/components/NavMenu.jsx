import { useState } from "react";
import NikeLogo from "../assets/nike-logo.svg?react";
import { RxHamburgerMenu } from "react-icons/rx";
import { TbShoppingBag } from "react-icons/tb";

const NavMenu = () => {
  const [isMobileMenuShown, setIsMobileMenuShown] = useState(false);

  const MENUS = ["Home", "About", "Services", "Pricing", "Contact"];
  return (
    <nav className="flex flex-wrap items-center justify-between z-10 relative">
      {/* Nike logo */}
      <a href="#">
        <NikeLogo className="h-20 w-20" />
      </a>

      {/* Hamburger Menu */}
      <button
        onClick={() => setIsMobileMenuShown(!isMobileMenuShown)}
        className="cursor-pointer rounded p-2 hover:bg-gray-100 focus:ring-gray-300 focus:ring-1 focus:bg-gray-100 lg:hidden"
      >
        <RxHamburgerMenu size={25} />
      </button>

      {/* Nav Menu List */}
      <div
        className={`w-full text-lg bg-gray-100 rounded-lg lg:w-auto lg:bg-transparent ${!isMobileMenuShown && "hidden"} lg:block`}
      >
        <ul className="flex flex-col lg:flex-row lg:space-x-4 p-4">
          {MENUS.map((menu, i) => (
            <li
              key={i}
              className={`px-3 py-2 lg:px-4 rounded cursor-pointer ${i === 0 ? "bg-blue-500 text-white lg:text-blue-600 lg:bg-transparent" : "hover:bg-gray-200 lg:hover:bg-transparent lg:hover:text-blue-600"} ${(i === 3 || i === 4) && "text-white"}`}
            >
              <a href="#">{menu}</a>
            </li>
          ))}
        </ul>
      </div>

      {/* cart icon */}
      <div className="fixed bottom-2 left-4 lg:static cursor-pointer lg:mr-5">
        <div className="p-4 bg-white shadow-md rounded-full">
          <TbShoppingBag size={22} />
        </div>
      </div>
    </nav>
  );
};

export default NavMenu;

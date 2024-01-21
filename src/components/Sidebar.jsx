import { useState } from "react";

const Sidebar = ({ children, isSidebarOpen, closeSidebar }) => {
  return (
    <div>
      <div
        className={`overflow-y-scroll fixed w-full h-full bg-white z-50 top-0 right-0 p-5 transition transform delay-300 shadow-lg md:w-[50%] lg:w-[35%] dark:bg-night ${isSidebarOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <button
          onClick={closeSidebar}
          className="text-black font-extrabold absolute right-4 top-4 p-2 cursor-pointer dark:text-white"
        >
          X
        </button>
        {children}
      </div>
      {/* gray-overlay */}
      {isSidebarOpen && (
        <div className="fixed top-0 left-0 bg-black opacity-[0.5] w-full h-full z-20" />
      )}
    </div>
  );
};

export default Sidebar;

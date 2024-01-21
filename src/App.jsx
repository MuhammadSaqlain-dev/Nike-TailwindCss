import { useState } from "react";
import NavMenu from "./components/NavMenu";
import NewArrivalsSection from "./components/NewArrivalsSection";
import ShoeDetail from "./components/ShoeDetail";
import Sidebar from "./components/Sidebar";
import { SHOE_LIST } from "./constants";
import Cart from "./components/Cart";
import { BiSun, BiMoon } from "react-icons/bi";
import { useEffect } from "react";

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    const darkMode = localStorage.getItem("darkMode");

    darkMode === "true"
      ? window.document.documentElement.classList.add("dark")
      : "";
  }, []);

  const handleDarkMode = () => {
    window.document.documentElement.classList.toggle("dark");
    localStorage.setItem(
      "darkMode",
      window.document.documentElement.classList.contains("dark")
    );
  };

  const FAKE_SHOES = SHOE_LIST.map((shoe) => {
    return {
      product: shoe,
      qty: 1,
      size: 44,
    };
  });

  return (
    <div className="animate-fadeIn p-10 xl:px-24">
      <NavMenu openSidebar={() => setIsSidebarOpen(true)} />
      <ShoeDetail />
      <NewArrivalsSection shoes={SHOE_LIST} />
      <Sidebar
        isSidebarOpen={isSidebarOpen}
        closeSidebar={() => setIsSidebarOpen(false)}
      >
        <Cart FAKE_SHOES={FAKE_SHOES} />
      </Sidebar>

      {/* turn-on dark mode */}
      <div className="fixed bottom-4 right-4">
        <button
          onClick={handleDarkMode}
          className="py-2 px-4 bg-night text-white rounded-full shadow-lg dark:bg-white dark:text-night"
        >
          <BiSun className="hidden dark:block" />
          <BiMoon className="dark:hidden" />
        </button>
      </div>
    </div>
  );
}

export default App;

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
  const [currentShoe, setCurrentShoe] = useState(SHOE_LIST[0]);
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const darkMode = localStorage.getItem("darkMode");

    darkMode === "true"
      ? window.document.documentElement.classList.add("dark")
      : "";
  }, []);

  const removeFromCart = (productId) => {
    const updatedCartItems = [...cartItems];

    const findIndex = cartItems.findIndex(
      (shoe) => shoe.product.id === productId
    );

    if (findIndex > -1) {
      updatedCartItems.splice(findIndex, 1);
    }

    setCartItems(updatedCartItems);
  };

  const handleAddToCart = (product, qty, size) => {
    const updatedCartItems = [...cartItems];

    if (qty && size) {
      const findIndex = cartItems.findIndex(
        (shoe) => shoe.product.id === product.id
      );

      if (findIndex > -1) {
        updatedCartItems[findIndex].qty = qty;
        updatedCartItems[findIndex].size = size;
      } else {
        updatedCartItems.push({ product, qty, size });
      }

      setCartItems(updatedCartItems);
    }
  };

  const handleDarkMode = () => {
    window.document.documentElement.classList.toggle("dark");
    localStorage.setItem(
      "darkMode",
      window.document.documentElement.classList.contains("dark")
    );
  };

  return (
    <div className="animate-fadeIn p-10 xl:px-24 dark:bg-night">
      <NavMenu openSidebar={() => setIsSidebarOpen(true)} />
      <ShoeDetail shoe={currentShoe} addToCart={handleAddToCart} />
      <NewArrivalsSection shoes={SHOE_LIST} handleClick={setCurrentShoe} />
      <Sidebar
        isSidebarOpen={isSidebarOpen}
        closeSidebar={() => setIsSidebarOpen(false)}
      >
        <Cart items={cartItems} itemToRemove={removeFromCart} />
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

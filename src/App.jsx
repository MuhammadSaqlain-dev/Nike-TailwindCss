import { useState } from "react";
import NavMenu from "./components/NavMenu";
import NewArrivalsSection from "./components/NewArrivalsSection";
import ShoeDetail from "./components/ShoeDetail";
import Sidebar from "./components/Sidebar";
import { SHOE_LIST } from "./constants";
import Cart from "./components/Cart";

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

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
    </div>
  );
}

export default App;

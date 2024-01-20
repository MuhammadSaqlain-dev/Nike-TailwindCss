import { useState } from "react";
import Card from "./components/Card";
import NavMenu from "./components/NavMenu";
import NewArrivalsSection from "./components/NewArrivalsSection";
import ShoeDetail from "./components/ShoeDetail";
import Sidebar from "./components/Sidebar";
import { SHOE_LIST } from "./constants";

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="animate-fadeIn p-10 xl:px-24">
      <NavMenu openSidebar={() => setIsSidebarOpen(true)} />
      <ShoeDetail />
      <NewArrivalsSection shoes={SHOE_LIST} />
      <Sidebar
        isSidebarOpen={isSidebarOpen}
        closeSidebar={() => setIsSidebarOpen(false)}
      />
    </div>
  );
}

export default App;

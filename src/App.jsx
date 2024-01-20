import Card from "./components/Card";
import NavMenu from "./components/NavMenu";
import NewArrivalsSection from "./components/NewArrivalsSection";
import ShoeDetail from "./components/ShoeDetail";
import { SHOE_LIST } from "./constants";

function App() {
  return (
    <div className="animate-fadeIn p-10 xl:px-24">
      <NavMenu />
      <ShoeDetail />
      <NewArrivalsSection shoes={SHOE_LIST} />
    </div>
  );
}

export default App;

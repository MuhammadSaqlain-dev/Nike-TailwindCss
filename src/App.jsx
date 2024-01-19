import Card from "./components/Card";
import NavMenu from "./components/NavMenu";
import ShoeDetail from "./components/ShoeDetail";
import { SHOE_LIST } from "./constants";

function App() {
  return (
    <div className="animate-fadeIn p-10 xl:px-24">
      {/* <NavMenu />
      <ShoeDetail /> */}
      <Card shoe={SHOE_LIST[0]} />
    </div>
  );
}

export default App;

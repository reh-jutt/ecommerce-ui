import Sidebar from "../components/herosection/Sidebar";
import Hero from "./herosection/Hero";
import Offers from "../components/herosection/offers";

function App() {
  return (
    <div className="bg-gray-100 p-4">
      <div className="flex justify-center">
        <div className="flex jusify-center w-[80%] bg-white px-4">
          <Sidebar />
          <div className="flex-1 px-4">
            <Hero />
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <Offers />
      </div>
    </div>
  );
}

export default App;

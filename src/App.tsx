import Navbar from "@/components/Navbar";
import { Outlet } from "react-router-dom";

const App = () => {
  return (
    <div className="flex flex-col h-screen">
      <div className="w-full flex shadow-2xl bg-secondary justify-between p-3 px-5 items-center dark:bg-secondary fixed top-0 z-50">
        <h1 className="font-semibold text-2xl bg-gradient-to-tr from-orange-400 from-0% via-orange-800 via-50% to-orange-400 to-100% bg-clip-text text-transparent">
          Welcome to My Portfolio!
        </h1>
        <Navbar />
      </div>
      <div className="flex flex-1 justify-center py-14">
        <div className="w-[90%]">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default App;

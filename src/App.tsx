import Navbar from "@/components/Navbar";
import { Outlet } from "react-router-dom";

const App = () => {
  return (
    <>
      <div className="w-screen flex shadow-md fixed bg-secondary justify-between h-15 px-5 items-center dark:bg-secondary">
        <h1 className="font-semibold text-xl">My Portfolio</h1>
        <Navbar />
      </div>

      <div className="flex w-full justify-center">
        <div className="flex w-[90%]">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default App;

import Navbar from "@/components/Navbar";
import { FaCode } from "react-icons/fa";
import { Outlet } from "react-router-dom";

const App = () => {
  return (
    <div className="flex flex-col h-screen">
      <div className="w-full flex shadow-2xl bg-secondary justify-between p-3 px-5 items-center dark:bg-secondary fixed top-0 z-50">
        <h1 className="font-semibold text-2xl flex place-items-center gap-2">
          <FaCode
            size={35}
            className="p-1 rounded bg-secondary-foreground text-secondary"
          />
          ML
          <span className="bg-clip-text text-shadow-md text-shadow-primary text-secondary-foreground md:hidden lg:block">
            LAWIS
          </span>
        </h1>
        <Navbar />
      </div>
      <div className="flex flex-1 justify-center pt-14">
        <div className="w-[90%]">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default App;

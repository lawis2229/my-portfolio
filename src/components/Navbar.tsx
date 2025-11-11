import { Link, useLocation } from "react-router-dom";
import { Menu } from "lucide-react";
import { ModeToggle } from "./mode-toggle";
import { navItems } from "@/config/navItems";
import { useState } from "react";

function Navbar() {
  const { pathname } = useLocation();
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="hidden md:flex items-center gap-4">
        {navItems.map((nav) => {
          const active = pathname === nav.to;
          return (
            <Link
              key={nav.title}
              to={nav.to}
              className={`relative flex items-center gap-1 transition-all after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-full after:scale-x-0 after:bg-primary hover:after:scale-x-100 ${
                active
                  ? "text-primary font-semibold after:scale-x-100"
                  : "text-neutral hover:text-primary"
              }`}
            >
              {nav.icon}
              {nav.title}
            </Link>
          );
        })}
        <ModeToggle />
      </div>

      <button
        onClick={() => setOpen(true)}
        className="md:hidden p-2 rounded-md hover:bg-muted transition"
      >
        <Menu size={24} />
      </button>

      {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 bg-black/50 z-40 transition-opacity duration-300 ease-out md:hidden"
        ></div>
      )}

      <div
        className={`fixed top-0 left-0 h-full w-64 bg-secondary shadow-lg transform duration-300 ease-out z-50 md:hidden ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center p-4 border-b">
          <ModeToggle />

          <h1 className="font-semibold text-lg">My Portfolio</h1>
          <button onClick={() => setOpen(false)}>✕</button>
        </div>

        <div className="flex flex-col p-4 gap-2">
          {navItems.map((nav) => {
            const active = pathname === nav.to;
            return (
              <Link
                key={nav.title}
                to={nav.to}
                onClick={() => setOpen(false)}
                className={`flex items-center gap-2 p-2 rounded-md ${
                  active
                    ? "bg-primary/10 text-primary font-semibold"
                    : "hover:bg-muted text-neutral"
                }`}
              >
                {nav.icon}
                {nav.title}
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Navbar;

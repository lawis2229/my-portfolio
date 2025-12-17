import { FileUser, FolderKanban, Home, Info, Contact } from "lucide-react";

export const navItems = [
  {
    title: "Home",
    icon: <Home className="text-neutral" />,
    to: "/home",
  },
  {
    title: "About",
    icon: <Info className="text-neutral" />,
    to: "/about",
  },
  {
    title: "Projects",
    icon: <FolderKanban className="text-neutral" />,
    to: "/projects",
  },
  {
    title: "Resume/CV",
    icon: <FileUser className="text-neutral" />,
    to: "/resume",
  },

  {
    title: "Contact",
    icon: <Contact className="text-neutral" />,
    to: "/contact",
  },
];

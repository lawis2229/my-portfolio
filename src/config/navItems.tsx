import { FileUser, FolderKanban, Home, Info } from "lucide-react";

export const navItems = [
  {
    title: "Home",
    icon: <Home className="text-neutral" />,
    to: "/home",
  },
  {
    title: "About Me",
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
];

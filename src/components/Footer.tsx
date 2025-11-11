import { Button } from "@/components/ui/button";
import { Facebook, Github, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <>
      <div className="w-full flex shadow-lg fixed bg-secondary justify-end lg:justify-between h-13 items-center dark:bg-secondary bottom-0 px-5">
        <h6 className="hidden lg:block">
          © Designed & Developed by Mark Laurence Lawis. Built with ❤️ using
          React & Tailwind x shadcn.
        </h6>

        <div className="flex gap-1 items-center">
          <a
            href="https://www.facebook.com/profile.php?id=100015197490575"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button size="sm">
              <Facebook />
            </Button>
          </a>

          <a
            // href="https://www.facebook.com/profile.php?id=100015197490575"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button size="sm">
              <Instagram />
            </Button>
          </a>

          <a
            href="https://github.com/lawis2229"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button size="sm">
              <Github />
            </Button>
          </a>
        </div>
      </div>
    </>
  );
};

export default Footer;

import TextType from "@/components/TextType";
import { Button } from "@/components/ui/button";
import { Facebook, Github, Instagram } from "lucide-react";
// import DarkVeil from "@/components/DarkVeil";

const Home = () => {
  return (
    <>
      <div className="flex flex-col justify-center h-screen w-full items-center gap-2">
        <div className="flex gap-1">
          <a
            href="https://www.facebook.com/profile.php?id=100015197490575"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button>
              <Facebook />
            </Button>
          </a>

          <a
            // href="https://www.facebook.com/profile.php?id=100015197490575"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button>
              <Instagram />
            </Button>
          </a>

          <a
            href="https://github.com/lawis2229"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button>
              <Github />
            </Button>
          </a>
        </div>

        <h1 className="font-bold text-6xl text-center">
          <TextType
            text={[
              "Hi! I'm Mark Laurence Lawis!",
              "Truly want to become a web developer.",
              "Feel free to explore my portfolio to get to know me better.",
            ]}
            typingSpeed={90}
            pauseDuration={2000}
            showCursor={true}
            cursorCharacter="|"
          />
        </h1>

        <div className="absolute w-full h-[100%] -z-10"></div>
      </div>
    </>
  );
};

export default Home;

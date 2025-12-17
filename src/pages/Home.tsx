// import Footer from "@/components/Footer";
import TextType from "@/components/TextType";
import { BackgroundGradient } from "@/components/ui/background-gradient";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
// import DarkVeil from "@/components/DarkVeil";

const Home = () => {
  return (
    <>
      <div className="flex justify-center min-h-full gap-10">
        <div className="justify-center items-center flex">
          <BackgroundGradient className="py-2 px-4 bg-secondary rounded-xl shadow-xl flex relative">
            <div className="absolute-classes">
              <h1 className="flex absolute right-20 -top-6 text-[#033476] font-bold [text-shadow:_-1px_-1px_0_white,_1px_-1px_0_white,_-1px_1px_0_white,_1px_1px_0_white]">
                Opol Community College
              </h1>
              <img
                className="h-[150px] absolute -right-17 -top-17"
                src="/logo.png"
                alt="my_logo"
                onContextMenu={(e) => e.preventDefault()}
              />
            </div>

            <img
              className="h-[400px] md:h-[560px] object-contain rounded-lg mix-blend-multiply dark:mix-blend-normal"
              src="/graduation_pic.png"
              alt="my_profile_pic"
              onContextMenu={(e) => e.preventDefault()}
            />
            <div className="flex flex-col items-center justify-center pr-4">
              <h4 className="bg-[#033476] rounded-2xl h-9 w-45 flex justify-center items-center text-white text-shadow-md mb-2">
                Web Developer
              </h4>

              <h1 className="font-bold text-2xl md:text-6xl mb-3 text-shadow-[#033476] text-shadow-lg">
                Hi, I'm Mark Laurence!
              </h1>
              <p className="text-xl">
                <TextType
                  className="text-shadow-[#033476] text-shadow-md"
                  text={[
                    "Truly want to become a web developer.",
                    "Feel free to explore my portfolio to get to know me better.",
                  ]}
                  typingSpeed={90}
                  pauseDuration={2000}
                  showCursor={true}
                  cursorCharacter="|"
                />
              </p>
              <div className="flex gap-1.5 mt-6">
                <a href="/Mark_Lawis_CV.pdf" download>
                  <Button
                    size="sm"
                    className="bg-accent-foreground text-secondary"
                  >
                    Download CV
                  </Button>
                </a>
                <Link to="/contact">
                  <Button size="sm" className="bg-muted-foreground">
                    Contact Me!
                  </Button>
                </Link>
              </div>
            </div>
          </BackgroundGradient>
        </div>
      </div>
      {/* <div className="mt-15 flex justify-between items-center">

      </div> */}
    </>
  );
};

export default Home;

{
  /* <div className="flex md:flex-row items-center justify-center md:justify-between h-full gap-8 relative">
  <div className="flex justify-center md:justify-center w-full md:w-[500px]">
    <img
      className="h-[300px] md:h-[648px] object-contain rounded-lg mix-blend-multiply dark:mix-blend-normal"
      src="/profile_pic.png"
      alt="my_profile_pic"
      onContextMenu={(e) => e.preventDefault()}
    />
  </div>

  <div className="flex-1 justify-center items-center md:w-3/4 text-center md:text-center">
    <h1 className="font-bold text-2xl md:text-6xl mb-3">
      Hi, I'm Mark Laurence!
    </h1>
    <p className="text-xl">
      <TextType
        text={[
          "Truly want to become a web developer.",
          "Feel free to explore my portfolio to get to know me better.",
        ]}
        typingSpeed={90}
        pauseDuration={2000}
        showCursor={true}
        cursorCharacter="|"
      />
    </p>
  </div>
</div>; */
  // <div className="flex flex-col items-center justify-center">
  //   <h1 className="font-bold text-2xl md:text-6xl mb-3">
  //     Hi, I'm Mark Laurence!
  //   </h1>
  //   <p className="text-xl">
  //     <TextType
  //       text={[
  //         "Truly want to become a web developer.",
  //         "Feel free to explore my portfolio to get to know me better.",
  //       ]}
  //       typingSpeed={90}
  //       pauseDuration={2000}
  //       showCursor={true}
  //       cursorCharacter="|"
  //     />
  //   </p>
  // </div>
}

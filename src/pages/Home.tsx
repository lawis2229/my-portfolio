// import Footer from "@/components/Footer";
import TextType from "@/components/TextType";
import { BackgroundGradient } from "@/components/ui/background-gradient";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { FaLaravel, FaReact, FaVuejs } from "react-icons/fa";
import { DiJavascript } from "react-icons/di";
import { SiShadcnui, SiTypescript } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { SiMysql } from "react-icons/si";

const techStack = [
  {
    description: "Laravel",
    value: "laravel",
    icon: <FaLaravel />,
    classType:
      "data-[state=on]:bg-transparent data-[state=on]:*:[svg]:fill-orange-600 data-[state=on]:*:[svg]:fill-orange-600",
  },
  {
    description: "React",
    value: "react",
    icon: <FaReact />,
    classType:
      "data-[state=on]:bg-transparent data-[state=on]:*:[svg]:fill-blue-400 data-[state=on]:*:[svg]:fill-blue-400",
  },
  {
    description: "Vue JS",
    value: "vuejs",
    icon: <FaVuejs />,
    classType:
      "data-[state=on]:bg-transparent data-[state=on]:*:[svg]:fill-green-400 data-[state=on]:*:[svg]:fill-green-400",
  },
  {
    description: "Tailwind CSS",
    value: "tailwindcss",
    icon: <RiTailwindCssFill />,
    classType:
      "data-[state=on]:bg-transparent data-[state=on]:*:[svg]:fill-blue-400 data-[state=on]:*:[svg]:fill-blue-400",
  },
  {
    description: "MySQL",
    value: "mysql",
    icon: <SiMysql />,
    classType:
      "data-[state=on]:bg-transparent data-[state=on]:*:[svg]:fill-yellow-600 data-[state=on]:*:[svg]:fill-yellow-600",
  },
  {
    description: "Shadcn UI",
    value: "shadcnui",
    icon: <SiShadcnui />,
    classType:
      "data-[state=on]:bg-transparent data-[state=on]:*:[svg]:fill-black data-[state=on]:*:[svg]:fill-black",
  },
  {
    description: "Javascript",
    value: "javascript",
    icon: <DiJavascript />,
    classType:
      "data-[state=on]:bg-transparent data-[state=on]:*:[svg]:fill-yellow-500 data-[state=on]:*:[svg]:fill-yellow-500",
  },
  {
    description: "Typescript",
    value: "typescript",
    icon: <SiTypescript />,
    classType:
      "data-[state=on]:bg-transparent data-[state=on]:*:[svg]:fill-blue-400 data-[state=on]:*:[svg]:fill-blue-400",
  },
];

const Home = () => {
  return (
    <>
      <div className="flex justify-center min-h-full gap-10">
        <div className="justify-center items-center flex mt-6">
          <BackgroundGradient className="py-2 px-4 bg-secondary rounded-xl shadow-xl w-full flex flex-col md:flex md:flex-row">
            <div className="flex flex-col justify-center items-center">
              <img
                className="h-[300px] md:h-[560px] lg:h-[560px] object-contain rounded-lg mix-blend-multiply dark:mix-blend-normal"
                src="/graduation_pic.png"
                alt="my_profile_pic"
                onContextMenu={(e) => e.preventDefault()}
              />
            </div>

            <div className="flex flex-col items-center justify-center pr-4">
              <label className="bg-[#033476] tracking-widest rounded-2xl h-9 w-auto px-4 flex justify-center items-center text-white text-shadow-md mt-2">
                Web Developer
              </label>

              <h3 className="font-bold text-center text-3xl md:text-5xl mb-3 text-shadow-lg italic tracking-wide">
                Hi, I'm Mark Laurence!
              </h3>
              <div className="text-xl text-justify min-h-[5.5rem]">
                <TextType
                  className="text-shadow-[#033476] text-shadow-md inline-block"
                  text={[
                    "Truly want to become a web developer.",
                    "Feel free to explore my portfolio to get to know me better.",
                  ]}
                  typingSpeed={90}
                  pauseDuration={2000}
                  showCursor={true}
                  cursorCharacter="|"
                />
              </div>
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

              <div className="flex flex-col mt-4 sm:mt-12 w-full items-center">
                <h6 className="font-bold mb-3 text-shadow-lg flex gap-2 italic tracking-wide">
                  Technologies I Work With
                </h6>

                <div className="flex flex-col gap-4">
                  <ToggleGroup
                    type="multiple"
                    variant="outline"
                    spacing={2}
                    size="sm"
                    defaultValue={techStack.map((s) => s.value)}
                    className="grid grid-cols-2 lg:grid-cols-3"
                  >
                    {techStack.map((stack) => (
                      <ToggleGroupItem
                        key={stack.value}
                        value={stack.value}
                        aria-label={`Toggle ${stack.value}`}
                        className={stack.classType}
                      >
                        {stack.icon}
                        {stack.description}
                      </ToggleGroupItem>
                    ))}
                  </ToggleGroup>
                </div>
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

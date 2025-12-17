import CircularGallery from "@/components/CircularGallery";
import Marquee from "react-fast-marquee";
import { DiJavascript, DiMysql } from "react-icons/di";
import { FaLaravel, FaReact, FaVuejs } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiShadcnui, SiTypescript } from "react-icons/si";
import { BackgroundGradient } from "@/components/ui/background-gradient";
import { FocusCards } from "@/components/ui/focus-cards";

const logos = [
  {
    src: <FaLaravel size={120} />,
    label: "Laravel",
  },
  {
    src: <FaReact size={120} />,
    label: "React",
  },
  {
    src: <FaVuejs size={120} />,
    label: "Vue JS",
  },
  {
    src: <DiMysql size={120} />,
    label: "MySQL",
  },
  {
    src: <SiShadcnui size={120} />,
    label: "Shadcn",
  },
  {
    src: <RiTailwindCssFill size={120} />,
    label: "Tailwind",
  },
  {
    src: <SiTypescript size={120} />,
    label: "Typescript",
  },
  {
    src: <DiJavascript size={120} />,
    label: "Javascript",
  },
];

const cards = [
  {
    title: "Basketball",
    src: "https://i.pinimg.com/originals/dd/f7/35/ddf7350e9d263f9b4e971958760bf471.gif",
    video: "/my_videos/LAWIS_BASKETBALL_PE-4.mp4",
    description:
      "This is my project during 2nd year college. Our teacher said, make a video of what sports you played most.",
  },
  {
    title: "Playing Guitar",
    src: "https://mir-s3-cdn-cf.behance.net/project_modules/hd/b9461a76289325.5c651812bdd2e.gif",
    video: "/my_videos/PE-3_VideoPresentation1.mp4",
    description: `During the pandemic or coronavirus time, our teacher had a project to make a video and compose a song inspired by the pandemic. This song, entitled "Suriv or Reversed word of Virus"`,
  },
  {
    title: "Riding Motorcycle",
    src: "https://i.pinimg.com/originals/a8/28/c6/a828c60c48a3ae6b200615f0f198bbf7.gif",
    video: "Facebook.mp4",
  },
  {
    title: "Coding",
    src: "/my_images/coding.gif",
    video: "Facebook.mp4",
  },
];

const About = () => {
  return (
    <>
      <div className="py-8">
        <div className="flex flex-col gap-10">
          <BackgroundGradient className="block bg-secondary rounded-xl p-6 shadow-xl">
            <h5 className="font-semibold">
              👋 From Graduate to Aspiring Web Developer
            </h5>

            <h6 className="text-[15px] py-3 text-justify px-10">
              Hi! 👋 I'm Mark Laurence Lawis, 26 year's old and dreaming to
              become a Web Developer someday! 🙏 I graduated a Bachelor's Degree
              in Information Technology at Opol Community College, Year 2023. 💻
              I'm the programmer during my Capstone Project using HTML, Laravel
              (Backend) and MySQL, from now on I currently studying Javascript
              Frontend Frameworks and I love doing it especially when combining
              it to Laravel (Backend). I learned a lot of those frameworks
              because when I graduated I got a capstone project to my previous
              batchmates and that time they wanna used Vue for (Frontend) and
              Laravel (Backend) because of job pressure and rejected multiple
              times, I accepted the project without thinking what will be the
              outcome. At first, it's difficult because I never experience Vue
              during schooling but the advantage during that time is I have no
              works to do or school projects. Until, I slowly learned the
              algorithm of vue, the problem are also improving and adding
              because one of the panelist wants to add mobile application and
              that's why, I proceed to learn again a new frameworks and I chose
              Ionic Framework because it has vue also that can relate to my web
              application. To make the story short, my batchmates studied my
              works and defended their capstone project and by the way their
              capstone title is "Laundry Booking System". I got second project
              also given to my batchmates and I made it this year entitled
              "Local Youth Development Office Management System with Attendance
              QR Code" was made by Vue (Frontend) and Laravel (Backend) and this
              time I made it from Web Application only and they successfully
              defended as well. I am here now seeking for an entry job and ready
              to showcase my dedication to becoming a productive Web Developer.
              😇
            </h6>

            <div className="flex h-90">
              <CircularGallery
                bend={0}
                textColor="text-transparent"
                borderRadius={0.05}
                scrollEase={0.02}
              />
            </div>
          </BackgroundGradient>

          <BackgroundGradient className="py-8 bg-secondary rounded-xl p-6 shadow-xl">
            <h5 className="font-semibold">💻 Tech Stack & Tools I Use</h5>
            <h6 className="text-[15px] py-3 text-justify px-10">
              The Infinite Scrolling Logos says that those are the Tech Stack I
              used.
            </h6>

            <div className="py-5">
              <Marquee gradient={false} speed={70} pauseOnHover={true}>
                {[...logos, ...logos].map((item, i) => (
                  <div
                    key={i}
                    className="flex flex-col items-center mx-10 text-primary"
                  >
                    <div className="h-30 flex items-center justify-center">
                      {item.src}
                    </div>
                    <label className="text-sm font-semibold mt-3 uppercase">
                      {item.label}
                    </label>
                  </div>
                ))}
              </Marquee>
            </div>
          </BackgroundGradient>

          <BackgroundGradient className="py-8 bg-secondary rounded-xl p-6 shadow-xl">
            <h5 className="font-semibold">💯 Hobbies and Interests</h5>
            <h6 className="text-[15px] py-3 text-justify px-10">
              You can click the images! 😁
            </h6>

            <FocusCards cards={cards} />

            {/* <div className="py-5 px-10 grid grid-cols-4 justify-items-center gap-3"> */}

            {/* <div className="card border-2 h-70 w-60 rounded-xl"></div> */}

            {/* </div> */}
          </BackgroundGradient>
        </div>
      </div>
    </>
  );
};

export default About;

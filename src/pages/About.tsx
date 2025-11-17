import CircularGallery from "@/components/CircularGallery";
import Marquee from "react-fast-marquee";
import { DiMysql } from "react-icons/di";
import { FaLaravel, FaReact, FaVuejs } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiShadcnui } from "react-icons/si";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { BackgroundGradient } from "@/components/ui/background-gradient";
import { FocusCards } from "@/components/ui/focus-cards";

const logos = [
  {
    src: <FaLaravel size={120} />,
    label: "Laravel",
  },
  {
    src: <FaVuejs size={120} />,
    label: "Vue JS",
  },
  {
    src: <RiTailwindCssFill size={120} />,
    label: "Tailwind",
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
    src: <FaReact size={120} />,
    label: "React",
  },
];

const cards = [
  {
    title: "Basketball",
    src: "https://i.pinimg.com/originals/dd/f7/35/ddf7350e9d263f9b4e971958760bf471.gif",
  },
  {
    title: "Valley of life",
    src: "https://images.unsplash.com/photo-1600271772470-bd22a42787b3?q=80&w=3072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Sala behta hi jayega",
    src: "https://images.unsplash.com/photo-1505142468610-359e7d316be0?q=80&w=3070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

const About = () => {
  return (
    <>
      <div className="py-8">
        <div className="flex flex-col gap-6">
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
              outcome. At first it's difficult because I never experience Vue
              during schooling but the advantage during that time is I have no
              works to do or school projects. Until, I slowly learned the
              algorithm of vue, the problem are also improving and adding
              because one of the panelist wants to add mobile application and
              that's why I proceed to learn again a new frameworks and I chose
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
            <h6 className="text-[15px] py-3 text-justify px-10">Heads up!</h6>

            <FocusCards cards={cards} />

            {/* <div className="py-5 px-10 grid grid-cols-4 justify-items-center gap-3"> */}

            {/* <div className="card border-2 h-70 w-60 rounded-xl"></div> */}
            {/* <Dialog>
                <DialogTrigger>
                  <img
                    className="h-50 w-50 object-contain"
                    src="/my_images/1.jpg"
                    alt="My_image1"
                  />
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Are you absolutely sure?</DialogTitle>
                    <DialogDescription>
                      This action cannot be undone. This will permanently delete
                      your account and remove your data from our servers.
                    </DialogDescription>
                  </DialogHeader>
                </DialogContent>
              </Dialog> */}
            {/* </div> */}
          </BackgroundGradient>
        </div>
      </div>
    </>
  );
};

export default About;

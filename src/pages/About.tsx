import CircularGallery from "@/components/CircularGallery";
import Marquee from "react-fast-marquee";

const logos = [
  "https://www.fullstackpython.com/img/logos/react.png",
  "https://logowik.com/content/uploads/images/laravel8530.jpg",
  "https://images.icon-icons.com/2699/PNG/512/vuejs_logo_icon_169247.png",
  "https://getlogovector.com/wp-content/uploads/2021/01/tailwind-css-logo-vector.png",
  "https://cdn.prod.website-files.com/66754aa69a5d872183713f9c/672dfced5422c158fb5a6002_mysql%20logo.png",
  "https://blog.nashtechglobal.com/wp-content/uploads/2025/07/ee358d91675104492e67ab441cb3898b.png",
];

const About = () => {
  return (
    <>
      <div className="py-8">
        <div className="flex flex-col gap-6">
          <div className="block bg-secondary rounded-xl p-6">
            <h5 className="font-semibold">👋 Who I Am</h5>

            <h6 className="text-[15px] py-3 text-justify px-10">
              Hi! 👋 I'm Mark Laurence Lawis. 26 year's old and dreaming to
              become a Web Developer someday! 🙏 I graduated a Bachelor's Degree
              in Information Technology at Opol Community College, School Year
              2023. 💻 I'm the programmer during my Capstone Project using HTML,
              Laravel (Backend) and MySQL, from now on I currently studying
              Javascript Frontend Frameworks and I love doing it especially when
              I'm using Laravel for Backend. I learned a lot of those frameworks
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
          </div>

          <div className="py-8 bg-secondary rounded-xl p-6">
            <h5 className="font-semibold">💡 What I Do</h5>
            <h6 className="text-[15px] py-3 text-justify px-10">
              The Infinite Scrolling Logos says that those are the frameworks I
              used.
            </h6>

            <div className="py-5">
              <Marquee gradient={false} speed={70} pauseOnHover={true}>
                {[...logos, ...logos, ...logos].map((src, i) => (
                  <img
                    key={i}
                    src={src}
                    alt={`logo-${i}`}
                    className="h-30 mx-12 object-contain"
                  />
                ))}
              </Marquee>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;

import CircularGallery from "@/components/CircularGallery";

// const techLogos = [
//   "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Laravel.svg/1969px-Laravel.svg.png",
//   "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png",
//   "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/1184px-Vue.js_Logo_2.svg.png",
//   "https://blog.nashtechglobal.com/wp-content/uploads/2025/07/ee358d91675104492e67ab441cb3898b.png",
// ];

const About = () => {
  return (
    <>
      <div className="py-4">
        <div className="flex flex-col">
          <div className="block">
            <h5 className="font-semibold">👋 Who I Am</h5>

            <h6 className="text-[15px] font-semibold text-center py-3">
              Hi! 👋 I'm Mark Laurence Lawis. Dreaming to become a Web Developer
              someday! 🙏 I graduated a Bachelor's Degree in Information
              Technology and seeking for an entry job opportunities. 💻
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

          <div className="py-8">
            <h5 className="font-semibold">💡 What I Do</h5>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;

// import Footer from "@/components/Footer";
import TextType from "@/components/TextType";
// import DarkVeil from "@/components/DarkVeil";

const Home = () => {
  return (
    <>
      <div className="flex flex-col md:flex-row items-center justify-center md:justify-between w-full mt-10 md:mt-20 gap-8">
        <div className="flex justify-center md:justify-center w-full md:w-[500px] card border-8">
          <img
            className="h-[300px] md:h-[500px] object-contain bg-white rounded-lg"
            src="/profile_pic.png"
            alt="my_profile_pic"
          />
        </div>

        <div className="flex-1 justify-center items-center md:w-3/4 text-center md:text-center card border-8">
          <h1 className="font-bold text-2xl md:text-5xl mb-3">
            Hi! I'm Mark Laurence G. Lawis
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
      </div>

      {/* <div className="mt-15 flex justify-between items-center">

      </div> */}
    </>
  );
};

export default Home;

//  <div className="flex flex-col mt-20 h-screen gap-2">
//   <h1 className="font-bold text-center -z-10">
//     <TextType
//       text={[
//         "Hi! I'm Mark Laurence Lawis!",
//         "Truly want to become a web developer.",
//         "Feel free to explore my portfolio to get to know me better.",
//       ]}
//       typingSpeed={90}
//       pauseDuration={2000}
//       showCursor={true}
//       cursorCharacter="|"
//     />
//   </h1>

//   <div className="flex px-50">
//     <img src="/profile_pic.png" alt="my_profile_pic" />
//   </div>

//   <div className="absolute w-full h-[100%] -z-10"></div>
// </div>

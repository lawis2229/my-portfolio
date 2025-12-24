import { BackgroundGradient } from "@/components/ui/background-gradient";
import { Button } from "@/components/ui/button";

const Resume = () => {
  return (
    <div className="py-5">
      <div className="flex justify-end">
        <a href="/Mark_Laurence_CV.pdf" download>
          <Button size="sm">Download CV</Button>
        </a>
      </div>
      <div className="flex w-full justify-center py-4">
        <div className="sm:w-[60%]">
          <BackgroundGradient>
            <img
              src="/Mark_Laurence_CV.jpg"
              alt="My_Resume"
              onContextMenu={(e) => e.preventDefault()}
              className="shadow-2xl rounded-lg"
            />
          </BackgroundGradient>
        </div>
      </div>
    </div>
  );
};

export default Resume;

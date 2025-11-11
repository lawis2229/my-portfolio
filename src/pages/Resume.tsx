import { Button } from "@/components/ui/button";

const Resume = () => {
  return (
    <div className="py-20">
      <div>
        <a href="/Mark_Lawis_CV.pdf" download>
          <Button size="sm">Download CV</Button>
        </a>
      </div>
      <div className="w-full justify-items-center mt-8">
        <div className="w-[60%]">
          <img
            src="/Mark_Lawis_CV.jpg"
            alt="My_Resume"
            onContextMenu={(e) => e.preventDefault()}
          />
        </div>
      </div>
    </div>
  );
};

export default Resume;

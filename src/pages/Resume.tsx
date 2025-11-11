import { Button } from "@/components/ui/button";

const Resume = () => {
  return (
    <div className="py-5">
      <div className="flex justify-end">
        <a href="/Mark_Lawis_CV.pdf" download>
          <Button size="sm">Download CV</Button>
        </a>
      </div>
      <div className="flex w-full justify-center py-4">
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

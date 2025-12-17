import { Input } from "@/components/ui/input";
import { FaLocationArrow } from "react-icons/fa";
import { FaComputer } from "react-icons/fa6";
import { MdContactPhone } from "react-icons/md";
import { MdEmail } from "react-icons/md";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { IoIosSend } from "react-icons/io";

const Contact = () => {
  return (
    <>
      <div className="py-8 flex h-full">
        <div className="w-[50%] h-full overflow-hidden relative bg-secondary">
          <div className="absolute top-4 w-full h-full left-2">
            <h1 className="text-secondary-foreground font-semibold ml-3.5">
              Contact Me
            </h1>
            <div className="grid grid-cols-3 h-[190px] mt-4 gap-1">
              <div className="flex-col px-7">
                <div className="flex font-medium items-center gap-1">
                  <MdEmail size={20} />
                  Email
                </div>
                <label>lawis32918@gmail.com</label>
                <div className="flex font-medium items-center gap-1 mt-2">
                  <MdContactPhone size={20} />
                  Contact
                </div>
                <label>+63 975 846 9156</label>
              </div>
              <div className="flex-col px-7">
                <div className="flex font-medium items-center gap-1">
                  <FaLocationArrow size={15} /> Location
                </div>
                <label>
                  Citihomes Subdivision, Brgy. Malanang, Opol, Misamis Oriental,
                  9016, Philippines
                </label>
              </div>
              <div className="flex-col px-7">
                <div className="flex font-medium items-center gap-1">
                  <FaComputer size={20} /> Social Media
                </div>
                <div className="flex-col flex">
                  <label>
                    <a
                      href="https://www.instagram.com/mlawiszxc/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="transition-all duration-300 hover:bg-gradient-to-r hover:from-[#F58529] hover:via-[#DD2A7B] hover:to-[#8134AF] hover:bg-clip-text hover:text-transparent"
                    >
                      Instagram
                    </a>
                  </label>
                  <label>
                    <a
                      href="https://www.facebook.com/profile.php?id=100015197490575"
                      target="_blank"
                      className="transition-all duration-300 hover:text-[#1877F2]"
                    >
                      Facebook
                    </a>
                  </label>
                  <label>
                    <a
                      href="https://github.com/lawis2229"
                      target="_blank"
                      className="transition-all duration-300 hover:text-black"
                    >
                      Github
                    </a>
                  </label>
                </div>
              </div>
            </div>
          </div>
          <iframe
            title="location-map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3946.391787071424!2d124.568936!3d8.488322!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32fff5a953b141a7:0x7c5320c7f68918b9!2sCitihomes%20Bus%20Station!5e0!3m2!1sen!2sph!4v1700000000000"
            className="w-full h-[67%] border-0 bottom-2 absolute left-2 rounded-lg"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          ></iframe>
        </div>

        <div className="w-[50%] flex items-center justify-center bg-secondary">
          <div className="h-[600px] w-[650px] flex justify-center items-center">
            <div className="flex-col py-7 px-6 w-full">
              <h1 className="text-secondary-foreground font-semibold">
                Send Message
              </h1>

              <div className="grid grid-cols-2 gap-2 mt-5">
                <div className="grid w-full max-w-sm items-center gap-3">
                  <Label htmlFor="name">Name*</Label>
                  <Input type="text" id="name" placeholder="Name" />
                </div>
                <div className="grid w-full max-w-sm items-center gap-3">
                  <Label htmlFor="email">Email*</Label>
                  <Input type="email" id="email" placeholder="Email" />
                </div>
              </div>

              <div className="grid w-full items-center gap-3 mt-4">
                <Label htmlFor="subject">Subject*</Label>
                <Input type="text" id="subject" placeholder="Subject" />
              </div>

              <div className="grid w-full items-center gap-3 mt-4">
                <Label htmlFor="message">Message*</Label>
                <Textarea id="message" className="h-50" placeholder="Message" />
              </div>

              <div className="flex mt-3 justify-center">
                <Button variant="outline" size="lg">
                  <IoIosSend />
                  Send Message
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;

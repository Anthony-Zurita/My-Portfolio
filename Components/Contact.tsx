import {
  BriefcaseIcon,
  DevicePhoneMobileIcon,
  EnvelopeIcon,
} from "@heroicons/react/24/solid";

const Contact = () => {
  return (
    <div id="contact" className="bg-slate-900 pb-[4rem] pt-[4rem] md:pt-[8rem]">

      <div className="grid grid-cols-1 md:grid-cols-2 w-[80%] mx-auto gap-[3rem] items-center">
        <div>
          <h1 className="text-[20px] font-bold uppercase text-[#55e6a5] mb-[1rem] pb-[4rem]">
            Contact Me
          </h1>
        </div>
      </div>

      <div className="grid border-b-[1px] pb-[6rem] border-gray-400 grid-cols-1 lg:grid-cols-3 md:grid-cols-2 w-[80%] mx-auto gap-[3rem]">
        <div className="flex items-center space-x-6">
          <div className="md:w-[6.5rem] md:h-[6.5rem] w-[5rem] h-[5rem] flex items-center justify-center rounded-full bg-[#55e6a5]">
            <DevicePhoneMobileIcon className="w-[3.5rem] md:w-[4rem] md:h-[4rem] h-[3.5rem] text-slate-900"></DevicePhoneMobileIcon>
          </div>
          <div>
            <h1 className="text-white text-[25px] font-semibold mb-[0.2rem]">
              Phone
            </h1>
            <p className="text-white">(561) 325-0422</p>
          </div>
        </div>

        <div className="flex items-center space-x-6">
          <div className="md:w-[6.5rem] md:h-[6.5rem] w-[5rem] h-[5rem] flex items-center justify-center rounded-full bg-[#55e6a5]">
            <EnvelopeIcon className="w-[3.5rem] md:w-[4rem] md:h-[4rem] h-[3.5rem] text-slate-900"></EnvelopeIcon>
          </div>
          <div>
            <h1 className="text-white text-[25px] font-semibold mb-[0.2rem]">
              Email
            </h1>
            <p className="text-white">anthonyy.zurita@gmail.com</p>
          </div>
        </div>

        <div className="flex items-center space-x-6">
          <div className="md:w-[6.5rem] md:h-[6.5rem] w-[5rem] h-[5rem] flex items-center justify-center rounded-full bg-[#55e6a5]">
            <BriefcaseIcon className="w-[3.5rem] md:w-[4rem] md:h-[4rem] h-[3.5rem] text-slate-900"></BriefcaseIcon>
          </div>
          <div>
            <h1 className="text-white text-[25px] font-semibold mb-[0.2rem]">
              LinkedIn
            </h1>
            {/* https://www.w3schools.com/html/html_links.asp link to how to make an external link work */}
            <p className="text-white">
              Link to Profile{" "}
              <a
                href="https://www.linkedin.com/in/zurita-anthony"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white underline"
              >
                Here
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

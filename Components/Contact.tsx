import { DevicePhoneMobileIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
import Image from "next/image";

const Contact = () => {
  return (
    <div className="bg-slate-900 pb-[3rem] pt-[4rem] md:pt-[8rem]">
      <div className="w-[80%] mx-auto items-center">
        <h1 className="text-[20px] font-bold uppercase text-[#55e6a5] mb-[1rem]">
          Contact Me
        </h1>
        <div className="grid grid-cols-3 gap-[3rem] items-center">
          
          <div className="flex items-center">
            <DevicePhoneMobileIcon className="w-[100px] md:w-[75px] h-[200px] bg-slate-900 text-white rounded-sm"></DevicePhoneMobileIcon>
            <div className="text-white"> Phone number: 561-325-0422</div>
          </div>

          

          <div className="flex items-center">
            <EnvelopeIcon className="w-[50px] md:w-[75px] h-[100px] bg-slate-900 text-white rounded-sm"></EnvelopeIcon>
            <div className="text-white"> Email: anthonyy.zurita@gmail.com</div>
          </div>

          

          <div className="flex items-center">
            <div className="w-[75px] h-[100px] bg-slate-900 text-white rounded-sm relative">
            <Image src = "/images/linkedin.jpg"
            alt="LinkedIn"
            layout="fill"
            objectFit="contain"
            className="object-contain"></Image>
            </div>
            
            <div className="text-white"> Link: www.linkedin.com/in/zurita-anthony</div>
          </div>

          
        </div>
      </div>
    </div>
  );
};

export default Contact;

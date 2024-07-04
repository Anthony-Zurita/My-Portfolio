import { ArrowDownTrayIcon } from "@heroicons/react/24/solid";
import React from "react";
import Image from "next/image";

/*
    the overall div tag has the following classes:
    --- bg-[#121121] to make the background color a dark black color,
    --- pb-[3rem] to make the padding bottom 3rem,
    --- pt-[4rem] to make the padding top 4rem,
    --- md:pt-[8rem] to make the padding top 8rem when the screen size is medium.
*/

/*
    the second div tag is used to position the about me and has the following classes:
    --- grid to make the div tag a grid,
    --- grid-cols-1 to make the div tag a grid with 1 column,
    --- md:grid-cols-2 to make the div tag a grid with 2 columns when the screen size is medium,
    --- w-[80%] to make the width of the div tag 80% of the screen,
    --- mx-auto to make the div tag center horizontally,
    --- gap-[3rem] to make the gap between the columns 3rem apart,
    --- and items-center to make the content of the div tag center vertically.
*/

/*
    the h1 tag has the following classes:
    --- text-[20px] to make the text size 20px,
    --- font-bold to make the text bold,
    --- uppercase to make the text uppercase,
    --- text-[#55e6a5] to make the text color a greenish color,
    --- and mb-[1rem] to make the margin bottom 1rem.

*/

/*
    the h2 tag has the following classes:
    --- text-[35px] to make the text size 35px,
    --- md:leading-[3rem] to make the line height 3rem when the screen size is medium,
    --- leading-[2rem] to make the line height 2rem,
    --- mb-[3rem] to make the margin bottom 3rem,
    --- text-white to make the text color white,
    --- and font-bold to make the text bold.

*/

/*
    the div tag to style the about me text has the following classes:
    --- mb-[3rem] to make the margin bottom 3rem,
    --- flex to make the div tag a flex container,
    --- items-center to make the content of the div tag center vertically,
    --- md:space-x-10 to make the space between the elements 10px apart when the screen size is medium.
*/

/*
    the span tag to make the little bar before the about me description has the following classes:
    --- w-[100px] to make the width of the span tag 100px,
    --- hidden to hide the span tag when the screen size is small,
    --- md:block to make the span tag visible when the screen size is medium,
    --- h-[5px] to make the height of the span tag 5px,
    --- bg-slate-400 to make the background color a dark gray color,
    --- and rounded-sm to make the border radius small.
*/

/*
    the p tag has the following classes:
    --- text-[19px] to make the text size 19px,
    --- text-slate-300 to make the text color a light gray color,
    --- w-[80%] to make the width of the p tag 80% of the screen.
*/

/*
  The button to download the CV is the same one we used in the greeting component
*/

/*
    the div tag to style the image of the user has the following classes:
    --- lg:w-[500px] to make the width of the div tag 500px when the screen size is large,
    --- mx-auto to make the div tag center horizontally,
    --- md:mx-0 to make the div tag not center horizontally when the screen size is medium,
    --- mt-[2rem] to make the margin top 2rem,
    --- lg:mt-0 to make the margin top 0px when the screen size is large,
    --- lg:h-[500px] to make the height of the div tag 500px when the screen size is large,
    --- w-[300px] to make the width of the div tag 300px,
    --- h-[300px] to make the height of the div tag 300px,
    --- and relative to make the div tag relative.
*/

/*
    the image tag has the following classes:
    --- relative to make the image tag relative,
    --- z-[11] to make the z-index 11,
    --- w-[100%] to make the width of the image tag 100%,
    --- h-[100%] to make the height of the image tag 100%,
    --- object-contain to make the image fit inside the div tag.
    --- layout="fill" to make the image fill the div tag.
*/

const About = () => {
  return (
    <div className="bg-[#121121] pb-[3rem] pt-[4rem] md:pt-[8rem]">
      <div className="grid grid-cols-1 md:grid-cols-2 w-[80%] mx-auto gap-[3rem] items-center">
        <div>
          <h1 className="text-[20px] font-bold uppercase text-[#55e6a5] mb-[1rem]">
            ABOUT ME
          </h1>
          <h2 className="text-[40px] md:leading-[3rem] leading-[2rem] mb-[3rem] text-white font-bold">
            An Aspiring Software Engineer
          </h2>
          <div className="mb-[3rem] flex items-center md:space-x-10">
            <span className="w-[100px] hidden md:block h-[5px] bg-slate-400 rounded-sm"></span>
            <p className="text-[19px] text-slate-300 w-[80%]">
              This is a description about me I go to UF. I study comp sci blah
              blah blah. I am a software engineer. I am a mobile app. YEAH
            </p>
          </div>
          <button
            className="px-[2rem] hover:bg-yellow-400 transition-all duration-200 py-[1rem] text-[18px] font-bold 
            uppercase bg-[#55e6a5] text-black flex items-center space-x-2"
          >
            <p>Dowload CV</p>
            <ArrowDownTrayIcon className="w-[1.6rem] h-[1.7rem] text-black" />
          </button>
        </div>
        <div className="lg:w-[500px] mx-auto md:mx-0 mt-[2rem] lg:mt-0 lg:h-[500px] w-[300px] h-[300px] relative">
          <Image
            src="/images/placeholder-face.jpg"
            alt="user"
            layout="fill"
            objectFit="contain"
            className="relative z-[11] w-[100%] h-[100%] object-contain"
          />
          <div className="absolute w-[100%] h-[100%] z-[10] bg-[#55e6a5] top-[-2rem] right-[-2rem]"></div>
        </div>
      </div>
    </div>
  );
};

export default About;

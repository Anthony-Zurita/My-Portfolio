import React from "react";

/*
    the first div tag has the following classes:
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
    the h2 tag has the following classes:
    --- text-[35px] to make the text size 35px,
    --- text-white to make the text color white,
    --- and font-bold to make the text bold.
*/

const About = () => {
  return (
    <div className="bg-[#121121] pb-[3rem] pt-[4rem] md:pt-[8rem]">
      <div className="grid grid-cols-1 md:grid-cols-2 w-[80%] mx-auto gap-[3rem] items-center">
        <div>
          <h1 className="text-[20px] font-bold uppercase text-[#55e6a5] md-[1rem]">
            ABOUT ME
          </h1>
          <h2 className= "pt-[1rem] text-[35px] text-white font-bold">An Aspiring Software Engiener</h2>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default About;

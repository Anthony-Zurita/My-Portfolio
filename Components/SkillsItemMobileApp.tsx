import React from "react";

/*
    The SkillsItem component is a subcomponent of the skills component. It helps break up the skills component into smaller components for better readability.
    I pass in the title and year as props to the SkillsItem component within the Skills component. The props are stored in an interface which can then be called
    in {} and styled more easily.
*/

/*
    The SkillsItem component has the following props:
    --- title which is a string to display the position of a time skill was being gained,
    --- year which is a string to display the time frame in which a skill was gained.
*/

/*
    The overall div tag has the following classes:
    --- mb-[4rem] to give margin bottom of 4rem,
    --- md:mb-[8rem] to give margin bottom of 8rem when the screen size is medium.
*/

/*
    The span tag has the following classes:
    --- px-[2rem] to give padding left and right of 2rem,
    --- text-[#55e6a5] to give the text color a green color,
    --- py-[0.9rem] to give padding top and bottom of 0.9rem,
    --- font-bold to make the text bold,
    --- text-[18px] to make the text size 18px,
    --- border-[2px] to give a border of 2px,
    --- and border-[#55e6a5] to give the border color a green color.
*/

/*
    The h1 tag has the following classes:
    --- mt-[2rem] to give margin top of 2rem,
    --- uppercase to make the text uppercase,
    --- font-semibold to make the text semi-bold,
    --- mb-[1rem] to give margin bottom of 1rem,
    --- text-[20px] to make the text size 20px,
    --- sm:text-[25px] to make the text size 25px when the screen size is small,
    --- md:text-[30px] to make the text size 30px when the screen size is medium,
    --- and text-white to make the text color white.
*/


interface Props {
  title: string;
  year: string;
}

const SkillsItemMobileApp = ({ title, year }: Props) => {
  return (
    <div className="mb-[4rem] md:mb-[8rem]">
      <span className="px-[2rem] text-[#55e6a5] py-[0.9rem] font-bold text-[18px] border-[2px] border-[#55e6a5]">
        {year}
      </span>
      <h1 className="mt-[2rem] uppercase font-semibold mb-[1rem] text-[20px] sm:text-[25px] md:text-[30px] text-white">{title}</h1>
      <p className="text-slate-300 w-[80%]">
        I started off as a developer in 2023 for SHPE when they atarted their mobile app projects. After a semester, I was promoted to being
        the lead for the mobile app team. I lead the Andriod team that is currently working on the mobile app using
        Kotlin.
      </p>
    </div>
  );
};

export default SkillsItemMobileApp;

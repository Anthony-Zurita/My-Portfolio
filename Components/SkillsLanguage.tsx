import React from "react";

/*
    The SkillsLanguage component is a subcomponent of the skills component. It helps break up the skills component into smaller components for better readability.
    The SkillsLanguage component is to display the type and experience level with a progress bar.
*/

/*
    The SkillsLanguage component has the following props:
    --- skill1 which is a string to display the first skill,
    --- skill2 which is a string to display the second skill,
    --- skill3 which is a string to display the third skill,
    --- level1 which is a string to display the level of experience with the first skill,
    --- level2 which is a string to display the level of experience with the second skill,
    --- level3 which is a string to display the level of experience with the third skill.
*/

/*
    The overall div tag has the following classes:
    --- relative to make the div tag relative to the parent div.
    --- mb-[3rem] to give margin bottom of 3rem.
*/

/*
    The h1 tag has the following classes:
    --- p-5 to give padding of 5px,
    --- w-[100%] to make the width of the h1 tag 100%,
    --- uppercase to make the text uppercase,
    --- bg-gray-800 to give the background color a dark gray color,
    --- rounded-sm to give the border radius a small value,
    --- text-white to make the text color white,
    --- text-[20px] to make the text size 20px,
    --- and font-bold to make the text bold.
*/

/*
    The span tag has the following classes:
    --- ${level1} to give the width of the span tag a value based on the level of experience with the skill passed in from the props,
    --- bottom-0 to make the span tag stick to the bottom of the parent div,
    --- h-[6px] to make the height of the span tag 6px,
    --- absolute to make the span tag absolute to the parent div,
    --- bg-[#55e6a5] to give the background color a light green color.
*/

interface Props {
  skill1: string;
  skill2: string;
  skill3: string;
  level1: string;
  level2: string;
  level3: string;
}

const SkillsLanguage = ({
  skill1,
  skill2,
  skill3,
  level1,
  level2,
  level3,
}: Props) => {
  return (
    <div className="relative mb-[3rem] ">
      <h1 className="p-5 w-[100%] uppercase bg-gray-800 rounded-sm text-white text-[20px] font-bold">
        {skill1}
      </h1>
      <span
        className={`${level1} bottom-0 h-[6px] absolute bg-[#55e6a5]`}
      ></span>

      <h1 className="p-5 w-[100%] uppercase bg-gray-800 rounded-sm text-white text-[20px] font-bold">
        {skill2}
      </h1>
      <span
        className={`${level2} bottom-0 h-[6px] absolute bg-[#55e6a5]`}
      ></span>

      <h1 className="p-5 w-[100%] uppercase bg-gray-800 rounded-sm text-white text-[20px] font-bold">
        {skill3}
      </h1>
      <span
        className={`${level3} bottom-0 h-[6px] absolute bg-[#55e6a5]`}
      ></span>
    </div>
  );
};

export default SkillsLanguage;

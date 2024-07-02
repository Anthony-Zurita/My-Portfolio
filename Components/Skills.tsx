import React from "react";
import SkillsItem from "./SkillsItem";
import SkillsLanguage from "./SkillsLanguage";

/*
    This is the Skills component. This component is used to display the my education and skills on the portfolio website.
*/

/*
    The overall div tag has the following classes:
    --- pt-[4rem] to give padding top of 4rem,
    --- pb-[5rem] to give padding bottom of 5rem,
    --- and bg-slate-900 to give the background color a dark gray color.
*/  

/*
    The h1 tag has the following classes from the global styles.css file:
    --- text-[35px] to make the text size 35px,
    --- md:text-[50px] to make the text size 50px when the screen size is medium,
    --- text-white to make the text color white,
    --- and font-bold to make the text bold.
*/

/*
    The div tag has the following classes:
    --- w-[80%] to make the width of the div tag 80% of the screen,
    --- mx-auto to make the div tag center horizontally,
    --- pt-[4rem] to give padding top of 4rem,
    --- md:pt-[8rem] to give padding top of 8rem when the screen size is medium,
    --- grid to make the div tag a grid,
    --- grid-cols-1 to make the div tag a grid with 1 column,
    --- md:grid-cols-2 to make the div tag a grid with 2 columns when the screen size is medium,
    --- and gap-[2rem] to make the gap between the columns 2rem apart.
*/



const Skills = () => {
  return (
    <div className="pt-[4rem] md:pt-[8rem] pb-[5rem] bg-slate-900">
      <h1 className="heading">Education & Skills</h1>
      <div
        className="w-[80%] mx-auto pt-[4rem] md:pt-[8rem] grid grid-cols-1 md:grid-cols-2 gap-[2rem]
            items-center"
      >
        <div>
          <SkillsItem title="Mobile App Developer" year="2023 - 2024" />
          <SkillsItem title="Web App Developer" year="2024 - 2025" />
          <SkillsLanguage
            skill1="html"
            skill2="css"
            skill3="javascript"
            level1="w-[91%]"
            level2="w-[88%]"
            level3="w-[80%]"
          />
        </div>
        <div>
          <SkillsItem title="Next Js App Developer" year="2022 - 2024"/>
          <SkillsItem title="React Developer" year="2021 - 2026"/>
          <SkillsLanguage 
          skill1="ReactJS"
          skill2="css"
          skill3="tailwindcss"
          level1="w-[96%]"
          level2="w-[85%]"
          level3="w-[74%]"
          />
        </div>
      </div>
    </div>
  );
};

export default Skills;

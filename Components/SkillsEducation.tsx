import React from "react";
import SkillsItemMobileApp from "./SkillsItemMobileApp";
import SkillsLanguage from "./SkillsLanguage";
import Image from "next/image";
import SkillsItemWebDev from "./SkillsItemWebDev";

/*
    This is the Skills component. This component is used to display the my education and skills on the portfolio website.
*/

/*
    The overall div tag is used to encase the Skills and Education title, the skill items, 
    and the skill language bars and has the following classes:
    --- pt-[4rem] to give padding top of 4rem,
    --- pb-[5rem] to give padding bottom of 5rem,
    --- and bg-slate-900 to give the background color a dark gray color.
*/

/*
    The h1 tag has the following classes from the global styles.css file to style the Heading for the Skills and Education section:
    --- text-[35px] to make the text size 35px,
    --- md:text-[50px] to make the text size 50px when the screen size is medium,
    --- text-white to make the text color white,
    --- and font-bold to make the text bold.
*/

/*
    The div tag (line 41) for creates a two column layout w padding and spacing for the skill items and has the following classes:
    --- w-[80%] to make the width of the div tag 80% of the screen,
    --- mx-auto to make the div tag center horizontally,
    --- pt-[4rem] to give padding top of 4rem,
    --- md:pt-[8rem] to give padding top of 8rem when the screen size is medium,
    --- grid to make the div tag a grid,
    --- grid-cols-1 to make the div tag a grid with 1 column,
    --- md:grid-cols-2 to make the div tag a grid with 2 columns when the screen size is medium,
    --- and gap-[2rem] to make the gap between the columns 2rem apart.
*/

const SkillsEducation = () => {
  return (
    <div className="pt-[4rem] md:pt-[8rem] pb-[5rem] bg-slate-900">

      <h1 className="heading">Education & Skills</h1>
      <div className="w-[80%] mx-auto pt-[3rem] md:pt-[6rem] grid grid-cols-[25%_75%] items-center">
        <div className="lg:w-[250px] mx-auto md:mx-0 mt-[2rem] lg:mt-0 lg:h-[250px] w-[150px] h-[150px] relative">
          <Image
            src="/images/UF_picture.jpg"
            alt="UF"
            layout="fill"
            objectFit="contain"
            className=" w-[100%] h-[100%] relative z-[11] object-contain"
          />
          <div className="absolute w-[100%] h-[100%] z-[10] bg-[#55e6a5] top-[-2rem] right-[-2rem]"></div>
        </div>

        <div className="flex items-center">
          <span className="w-[150px] hidden md:block h-[5px] bg-slate-400 rounded-sm"></span>
          <p className="text-white pl-[1.75rem] lg:pl-[3.5rem] text-[19px]">
            Pursuing a B.S. degree in Computer Science at the College of Herbet
            Wertheim College of Engineering at the University of Florida.
            Additionally, I am pursuing an AI Fundamentals and Applications
            certificate. I have an expected graduation date of May 2026.
          </p>
        </div>
      </div>

      <div className="w-[80%] mx-auto pt-[4rem] md:pt-[8rem] grid grid-cols-1 md:grid-cols-2 gap-[2rem] items-center">
        <div>
          <SkillsItemMobileApp title="mobile app developer" year="2023 - 2024"/>
          <SkillsItemWebDev title="Filler Developer" year="2025 - 2026" />
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
          <SkillsItemWebDev title="Web App Developer" year="Summer 2024" />
          <SkillsItemWebDev title="Filler Developer" year="2025 - 2026" />
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

export default SkillsEducation;

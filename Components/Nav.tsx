import React from "react";

import { Link } from "react-scroll";

// https://www.npmjs.com/package/react-scroll link to react-scroll documentation

const Nav = () => {

/* 
The first div the whole component is wrapped in has the following classes:
 --- class name w-[100%] to make the width of the component 100% of the screen, 
 --- fixed to make the nav bar component fixed to the screen,
 --- z-[10000] to make the z-index of the component 10000,
 --- top-0 to make the component stick to the top of the screen, 
 --- h-[12vh] to make the height of the component 12% of the screen height, 
 --- bg-lime-700 to give the component a background color of lime-700, 
 --- and shadow-md to give the component a shadow effect.
*/

/* 
The second div the whole component is wrapped in has the following classes: 
 --- flex items-center to make the children of the div, like AZ, HOME, ABOUT ME, etc., flex and align them in the center, 
 --- justify-between to make the children of the div, like AZ, HOME, ABOUT ME, etc., justify space evenly between them, 
 --- w-[80%] to make the width of the div 80% of the screen, 
 --- mx-auto to make the div center horizontally, 
 --- and h-[100%] to make the height of the div 100% of the screen height.
*/

/*
The h1 element has the following classes: 
 --- flex-[0.6] to make the element take 60% of the available space, 
 --- cursor-pointer to make the element a pointer when hovered over, 
 --- text-[25px] to make the text size 25px, 
 --- text-white to make the text color white, 
 --- and font-bold to make the text bold.
*/

/*
Note: the <span> tag is used to style the letter Z in the AZ text. It gives control over the style of the letter Z, 
while keeping AZ as a single text.
*/

    return (<div className="w-[100%] fixed z-[10000] top-0 h-[12vh] bg-[#55e6a5] shadow-md">
        <div className="flex items-center justify-between w-[80%] mx-auto h-[100%]">
            <h1 className= "flex-[0.6] cursor-pointer text-[25px] text-white font-bold ">
                ANTHONY
                <span className="text-gray-800">ZURITA</span>
            </h1>
            <Link className= "nav-link" to="home" smooth={true} duration={500}>HOME</Link>
            <Link className= "nav-link" to="about" smooth={true} duration={500}> ABOUT</Link>
            <Link className= "nav-link" to="projects" smooth={true} duration={500}>PROJECTS</Link>
            <Link className= "nav-link" to="contact" smooth={true} duration={500}>CONTACT</Link>
        </div>
    </div>
);
}

export default Nav;
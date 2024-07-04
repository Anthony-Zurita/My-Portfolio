import React from "react";
import TypingAnimation from "./TypingAnimation";
import Image from "next/image";
import { ArrowDownTrayIcon } from "@heroicons/react/24/solid";

/*
The hello components is a a component that goes under the navbar. It is a component that will have a background image 
of a green background. It will also contain the component that has the text animation. It will say Hello, I am Anthony Zurita! 
with a text animation changing with adding on coder, web developer, mobile app developer, etc.
*/

/*
  The first div wrapping the whole component has the following classes:
  --- h-[88vh] to make the height of the component 88% of the screen height,
  --- bg-[url('/images/green-background.jpg')] to give the component a background image green-background.jpg from the images folder,
  --- bg-cover to make the background image cover the whole component,
  --- mt-[12vh] to make the margin top 12% of the screen height,
  --- and bg-center to make the background image center inside the component.
*/

/* 
  The second div tag has the following classes:
  --- w-[80%] to make the width of the h1 tag 80% of the screen,
  --- grid-cols-1 to make the h1 tag a grid with 1 column,
  --- mx-auto to make the h1 tag center horizontally,
  --- grid to make the h1 tag a grid,
  --- lg:grid-cols-2 to make the h1 tag a grid with 2 columns when the screen size is large,
  --- gap-[3rem] to make the gap between the columns 3rem apart,
  --- h-[100%] to make the height of the h1 tag 100% of the screen height,
  --- and items-center to make the content of the h1 tag center vertically.
*/

/*
  The h1 tag has the following classes:
  --- text-[35px] to make the text size 35px,
  --- md:text-[50px] to make the text size 50px when the screen size is medium,
  --- text-white to make the text color white,
  --- and font-bold to make the text bold.
*/

/*
  The span tag has the following classes:
  --- text-yellow-400 to make the text color yellow-400.
*/

/*
  The p tag has the following classes:
  --- mt-[2rem] to make the margin top 2rem,
  --- text-[20px] to make the text size 20px,
  --- text-[#ffffff92] to make the text color a light gray color.
*/

/*
  The div tag styling the download CV button has the following classes:
  --- mt-[2rem] to make the margin top 2rem,
  --- flex-col to make the div tag a flex column,
  --- space-y-6 to make the space between the elements 6px apart,
  --- sm:space-y-0 to make the space between the elements 0px apart when the screen size is small,
  --- sm:flex-row to make the div tag a flex row when the screen size is small,
  --- items-center to make the content of the div tag center vertically,
  --- sm:space-x-6 to make the space between the elements 6px apart when the screen size is small.
*/

/*
  The button styling the download CV button has the following classes:
  --- px-[2rem] to make the padding left and right 2rem,
  --- hover:bg-yellow-400 to make the background color yellow-400 when the button is hovered,
  --- transition-all to make the transition of all properties smooth,
  --- duration-200 to make the transition duration 200ms,
  --- py-[1rem] to make the padding top and bottom 1rem,
  --- text-[18px] to make the text size 18px,
  --- font-bold to make the text bold,
  --- uppercase to make the text uppercase,
  --- bg-[#55e6a5] to make the background color a light green color,
  --- text-black to make the text color black,
  --- flex to make the button a flex,
  --- items-center to make the content of the button center vertically,
  --- space-x-2 to make the space between the elements 2px apart.
*/

/*
  The styling of the array-drop-down hero icon has the following classes:
  --- w-[1.6rem] to make the width of the icon 1.6rem,
  --- h-[1.7rem] to make the height of the icon 1.7rem,
  --- and text-black to make the color of the icon black.
*/

/*
  The fourth div tag has the following classes:
  --- w-[250px] to make the width of the div tag 250px,
  --- hidden to hide the div tag,
  --- bg-[#55e6a5] to make the background color a light green color,
  --- relative to make the div tag a relative position,
  --- lg:flex to make the div tag a flex when the screen size is large,
  --- items-center to make the content of the div tag center vertically,
  --- rounded-full to make the div tag a circle,
  --- and h-[250px] to make the height of the div tag 250px.
*/

/*
  The styling in the Image tag has the following properties:
  --- src="/images/placeholder-face.jpg" to give the image a source of placeholder-face.jpg from the images folder,
  --- alt="user" to give the image an alternative text of user,
  --- layout="fill" to make the image cover the whole div tag,
  --- className="object-cover rounded-full" to make the image cover the whole div tag and make it a circle.
*/

const Home = () => {
  return (
    <div className="h-[88vh] bg-[url('/images/green-background.jpg')] mt-[12vh] bg-cover bg-center">
      <div className="w-[80%] grid-cols-1 mx-auto grid lg:grid-cols-2 gap-[3rem] h-[100%] items-center">
        <div>
          <h1 className="text-[35px] md:text-[50px] text-white font-bold ">
            HI, I&apos;M <span className="text-yellow-400 ">ANTHONY!</span>
          </h1>
          <TypingAnimation />
          <p className="mt-[1.5rem] text-[18px] text-white">
            Here is a description of what I do. I am a web developer, mobile app
            developer, and a coder. I am a blah blah. I am a blah blah. I make
            cool stuff. Here I am making a personal portfolio.
          </p>
          <div className="mt-[2rem] flex-col space-y-6 sm:space-y-0 sm:flex-row items-center sm:space-x-6">
            <button className="px-[2rem] hover:bg-yellow-400 transition-all duration-200 py-[1rem] text-[18px] font-bold 
            uppercase bg-[#55e6a5] text-black flex items-center space-x-2">
              <p>Dowload CV</p>
              <ArrowDownTrayIcon className="w-[1.6rem] h-[1.7rem] text-black" />
            </button>
          </div>
        </div>
        <div className="w-[500px] hidden bg-[#55e6a5] relative lg:flex items-center rounded-full h-[500px]">
          <Image
            src="/images/placeholder-face.jpg"
            alt="user"
            layout="fill"
            className="object-cover rounded-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;

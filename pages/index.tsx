import About from "@/Components/About";
import Home from "@/Components/Home";
import Nav from "@/Components/Nav";
import SkillsEducation from "@/Components/SkillsEducation";
import React from "react";

/*
This HomePage function is for the HomePage component. Inside it will have other nested components like the nav bar
contents of the page and so on for the portfolio website. This will be the main page of the website.
*/ 
const HomePage = () => {

// overflow-x-hidden is used in css to hide the horizontal scrollbar.
  return <div className="overflow-x-hidden">
    <div>
      {/* Narbar component section */}
      <Nav />
      {/* Gretting component section */}
      <Home />
      <div>
        {/* About section */}
        <About />
        {/* Skills section */}
        <SkillsEducation />
      </div>
    </div>
    
    </div>;
};

export default HomePage;

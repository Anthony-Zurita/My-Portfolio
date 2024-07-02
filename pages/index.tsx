import About from "@/Components/About";
import Greeting from "@/Components/Greeting";
import Nav from "@/Components/Nav";
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
      <Greeting />
      <div>
        {/* About section */}
        <About />
      </div>
    </div>
    
    </div>;
};

export default HomePage;

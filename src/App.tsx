import { useState, useEffect } from "react";
// import viteLogo from "/vite.svg";
import "./App.css";
// import WorkExperience from "./WorkExperience";
// import ExtraActivities from "./WorkExperience";
import {
  WorkExperience,
  ExtraActivities,
  TechSkills,
  VolunteerExperience,
  GradientMaker,
} from "./Components/ResumeComponents";

function App() {
  // Add useEffect here
  useEffect(() => {
    // Dynamically load the Twitter widget script
    const script = document.createElement("script");
    script.src = "https://platform.twitter.com/widgets.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);
  const handleLinkClick = (caseNumber) => {
    switch (caseNumber) {
      case 0:
        window.location.href = "https://www.linkedin.com/in/ahlink";

        break;
      case 1:
        window.location.href = "https://github.com/Shred-Cruz";
        break;
      case 2:
        window.location.href =
          "https://apps.apple.com/us/app/acellus-learning/id1065550816?mt=12";
        break;
      case 3:
        window.location.href = "https://x.com/Shred1Cruz";
        break;
      case 4:
        window.location.href = "https://tailwindcss.com/";
        break;
      case 5:
        window.location.href =
          "https://punchthrough.com/core-bluetooth-basics/";
        break;
      case 6:
        window.location.href =
          "https://swiftsenpai.com/development/web-view-javascript-injection/";
        break;
      case 7:
        window.location.href =
          "https://about.gitlab.com/images/press/git-cheat-sheet.pdf";
        break;
      default:
        console.error("Invalid case number. Use a number between 0 and 3.");
    }
  };

  return (
    <>
      <div className="flex justify-center items-center text-center text-[#80f603] fixed top-0 left-0 w-full h-16 bg-[#1a1a1a]">
        <img
          src="/src/assets/images/firegamma.png"
          className="logo-earth h-11 w-11 mr-2"
          alt="Logo"
        />
        <div>
          <h1 className="text-2xl font-bold #80f603">Alex Hernandez</h1>
          <p>MacOS | iOS | React | Developer</p>
        </div>
      </div>

      {/* Sidebar added inside the rectangle */}
      <div className="content-container h-full pt-5 mr-64 flex items-stretch gap-5 ml-28">
        <div className="w-[275px] h-full bg-[#1a1a1a] text-white flex flex-col items-center flex-shrink-0">
          <h2 className="text-xl pt-[55px] text-[#80f603] mb-[15px] font-bold text-center">
            Programming Powertools
          </h2>{" "}
          <button
            onClick={() => handleLinkClick(4)}
            className="flex items-center hover:border-[#80f603] space-x-2 p-2 text-white rounded-lg transition "
          >
            {" "}
            <img
              src="/src/assets/images/tailwindClear.png"
              alt="Linkedin"
              className="w-3 h-2 md:w-6 md:h-3 pr-2 shadow-lg hover:opacity-80 transition duration-200"
            />
            Tailwind CSS
          </button>
          <button
            onClick={() => handleLinkClick(5)}
            className="flex items-center  hover:border-[#80f603] space-x-2 p-2 text-white rounded-lg transition"
          >
            {" "}
            <img
              src="/src/assets/images/bleClear.png"
              alt="Linkedin"
              className="w-3 h-2 md:w-7 md:h-5 pr-1 rounded-lg shadow-lg hover:opacity-80 transition duration-200 "
            />
            BLE Guide for iOS
          </button>
          <button
            onClick={() => handleLinkClick(6)}
            className="flex items-center  hover:border-[#80f603] space-x-2 p-2 text-white rounded-lg transition"
          >
            {" "}
            <img
              src="/src/assets/images/jsClear.png"
              alt="Linkedin"
              className="w-4 h-3 pr-1 shadow-lg hover:opacity-80 transition duration-200 "
            />
            JavaScript in WkWebView
          </button>
          <button
            onClick={() => handleLinkClick(7)}
            className="flex items-center  hover:border-[#80f603] space-x-2 p-2 text-white rounded-lg transition"
          >
            {" "}
            <img
              src="/src/assets/images/glClear.png"
              alt="Linkedin"
              className="w-3 h-2 md:w-6 md:h-4 pr-2 shadow-lg hover:opacity-80 transition duration-200 "
            />
            Git Cheat Sheet
          </button>
          <h2 className="text-xl pt-5 text-[#80f603] mb-[15px] font-bold text-center">
            Socials & Projects
          </h2>
          <button
            onClick={() => handleLinkClick(0)}
            className="flex items-center hover:border-[#80f603] space-x-2 p-2 text-white rounded-lg transition"
          >
            {" "}
            <img
              src="/src/assets/images/linkClear.png"
              alt="Linkedin"
              className="w-3 h-2 md:w-6 md:h-5 pr-1 rounded-lg shadow-lg hover:opacity-80 transition duration-200 "
            />
            Linkedin
          </button>
          <button
            onClick={() => handleLinkClick(1)}
            className="flex items-center hover:border-[#80f603] space-x-2 p-2 text-white rounded-lg transition"
          >
            <img
              src="/src/assets/images/gitClear.png"
              alt="GitHub"
              className="w-3 h-2 md:w-7 md:h-4 rounded-lg shadow-lg hover:opacity-80 transition duration-200 "
            />
            GitHub
          </button>
          <button
            onClick={() => handleLinkClick(3)}
            className="flex items-center hover:border-[#80f603] space-x-2 p-2 text-white rounded-lg transition"
          >
            {" "}
            <img
              src="/src/assets/images/twitterLogo.png"
              alt="MacOS"
              className="w-3 h-2 md:w-6 md:h-6 pr-1 rounded-lg shadow-lg hover:opacity-80 transition duration-200 "
            />
            Twitter
          </button>
          <button
            onClick={() => handleLinkClick(2)}
            className="flex items-center hover:border-[#80f603] space-x-2 p-2 text-white rounded-lg transition"
          >
            {" "}
            <img
              src="/src/assets/images/acellusIconClean.png"
              alt="MacOS"
              className="w-3 h-2 md:w-6 md:h-6 pr-1 rounded-lg shadow-lg hover:opacity-80 transition duration-200 "
            />
            Acellus
          </button>
          {/* Twitter Feed */}
          <div className="twitter-feed">
            <a
              className="twitter-timeline"
              data-theme="dark"
              data-height="850"
              data-width="270"
              data-chrome=" noheader nofooter noborders noscrollbar"
              href="https://twitter.com/software_daily"
            ></a>
          </div>
        </div>
        <div className="content mt-3 text-wrap flex-grow">
          <h1 className="flex flex-col items-start justify-start text-left mt-[50px] mb-[10px] gap-[10px] text-[#80f603]">
            Hello, World!
          </h1>
          <Bio />
        </div>
      </div>

     
    </>
  );
}

export default App;
function Bio() {
  return (
    <div>
      {/* <h1 className="title-bio">Hello, World!</h1> */}
      
      <p className="bio mb-2">
        I am a software developer specializing in designing and optimizing
        efficient solutions for macOS and iOS applications, alongside developing
        modern web experiences in React using Tailwind and TanStack. My
        expertise lies in crafting intuitive, high-performance applications that
        seamlessly blend functionality with user-centric design.
        <br />
        <br />
        Here is a collection of resources that I have found useful in my journey
        of becoming an effective programmer, as well as things I have
        accomplished so far in my career.{" "}
      </p>
      {/* <a href="https://www.linkedin.com/in/ahlink" target="_blank" rel="noopener noreferrer">
        <img src={viteLogo} className="logo" alt="Vite logo" />
      </a> */}

      <hr className="mb-2" />

      <h2 className="text-2xl text-[#80f603] mb-2">Education</h2>
      <p>
        <strong> Northwest Missouri State University:</strong> Bachelor’s Degree
        in Computer Science and Information Systems
      </p>
      {/* <p>Northwest Missouri State University</p> */}

      <hr className="mb-2 mt-2" />
      <WorkExperience />
      <hr className="mb-2" />

      <ExtraActivities />
      <hr className="mb-2" />

      <TechSkills />
      <hr className="mb-2" />

      <VolunteerExperience />
      <hr className="mb-2" />

      {/* Add GradientMaker Below Volunteer Experience */}
      <h2 className="text-2xl text-[#80f603] mb-2 mt-6">Create Your Custom Gradient</h2>
      <GradientMaker /> {/* Your GradientMaker component */}
      
    </div>
  );
}

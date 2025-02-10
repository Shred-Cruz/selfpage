// import { useState } from "react";
import React, { useState } from 'react';


const WorkExperience = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleExperience = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <h2 className="text-2xl text-[#80f603] mb-2">Work Experience</h2>

      <button
        onClick={toggleExperience}
        className="bg-transparent text-[#80f603] mb-2 cursor-pointer text-[16px] py-[10px] px-[15px] rounded-md transition-all duration-300 ease-in-out  hover:border-[#80f603] hover:scale-105"
      >
        <span className="mr-2.5">{isOpen ? "▲" : "▼"}</span>
        {isOpen ? "Show Less" : "Show More"}
      </button>

      <div
        className={`overflow-hidden transition-all duration-500 ease-in-out ${
          isOpen ? "opacity-100 max-h-[1000px]" : "opacity-0 max-h-0"
        }`}
      >
        <h3>
          <strong>Software Engineer</strong> - International Institute of Science & Technology
          (Feb 2024 – Current)
        </h3>
        <ul className="list-disc list-inside pl-5 mb-4 mt-3">
          <li>
            Developed a comprehensive desktop and mobile application for iOS and
            macOS, enabling students, parents, and teachers to enhance and
            streamline the homeschooling experience.
          </li>
          <li>
            Engaged in the complete development lifecycle, from initial planning
            and design to deployment and release.
          </li>
          <li>
            Leveraged the power of WkWebView for the main view of the
            application.
          </li>
          <li>
            Utilized Swift and powerful Javascript injections to create a
            seamless user experience.
          </li>
          <li>
            Leveraged Bluetooth Low Energy (BLE) technology to seamlessly
            connect students with advanced coding robots, enhancing interactive
            learning experiences.
          </li>
          <li>
            Developed the web application supporting the Acellus app,
            utilizing React with TanStack for state management and Tailwind CSS
            for modern, responsive styling.
          </li>
          <li>
            Worked with{" "}
            <strong>
              Swift, Objective-C, JavaScript, React.js, and Tailwind CSS
            </strong>
            .
          </li>
        </ul>

        <h3>
          Cerner – Software Intern (May 2020 – August 2020)
        </h3>
        <ul className="list-disc list-inside pl-5 mb-4">
          <li>
            Updated Cerner applications to meet{" "}
            <strong>Veterans Association guidelines</strong> for government
            contracts.
          </li>
          <li>
            Improved accessibility for{" "}
            <strong>users with disabilities</strong>.
          </li>
          <li>
            Created a <strong>settings analyzer</strong> to help teams understand
            application usage and allocate resources.
          </li>
          <li>
            Worked with{" "}
            <strong>JavaScript, HTML, Angular, React.js, and CSS</strong>.
          </li>
        </ul>

        <h3>
          Cerner – Hardware & Logistics Intern (May 2019 – August 2019)
        </h3>
        <ul className="list-disc list-inside pl-5 mb-4">
          <li>
            Cleaned up <strong>device data</strong> to save resources and
            organize inventory.
          </li>
          <li>
            Managed <strong>Cerner associate devices</strong> and handled
            security issues.
          </li>
          <li>
            Tracked inventory data to prevent <strong>missing devices</strong>.
          </li>
          <li>
            Worked with a team to ensure{" "}
            <strong>devices were ready for deployment</strong>.
          </li>
        </ul>

        <h3>
          Tiger Pool & Patio – Pool Associate (May 2023 – August 2023)
        </h3>
        <ul className="list-disc list-inside pl-5">
          <li>
            Measured <strong>depth and dimensions</strong> of pool dig sites.
          </li>
          <li>
            Managed <strong>chemical levels</strong> for safety and quality.
          </li>
          <li>
            Worked with customers to{" "}
            <strong>upsell accessories and manage their pools</strong>.
          </li>
          <li>
            Led a crew to complete pool construction tasks.
          </li>
        </ul>
      </div>
    </div>
  );
};


const ExtraActivities = () => {
  const [isOpen2, setIsOpen2] = useState(false);

  const toggleExperience = () => {
    setIsOpen2(!isOpen2);
  };

  return (
    <div>
      <h2 className="text-2xl text-[#80f603] mb-2">
        Leadership & Extracurricular Activities
      </h2>

      <button
        onClick={toggleExperience}
        className="bg-transparent border-1 border-transparent mb-2 text-[#80f603] cursor-pointer text-base py-[10px] px-[15px] transition-all duration-300 ease-in-out hover:scale-105 hover:border-[#80f603]"
      >
        <span className="mr-[10px]">{isOpen2 ? "▲" : "▼"}</span>
        {isOpen2 ? "Show Less" : "Show More"}
      </button>

      <div
        className={`overflow-hidden transition-all duration-500 ease-in-out ${
          isOpen2 ? "opacity-100 max-h-[1000px]" : "opacity-0 max-h-0"
        }`}
      >
        <ul  className="list-disc list-inside pl-5 mb-4">
          <li>
            <strong>Executive Philanthropy Director</strong> – Alpha Kappa
            Lambda (Spring 2022 – Fall 2023)
          </li>
          <li>
            <strong>VP of Risk Management</strong> – Alpha Kappa Lambda (Fall
            2021 – Fall 2022)
          </li>
          <li>
            <strong>Brotherhood Development Chair</strong> – Alpha Kappa Lambda
            (Fall 2021 – Fall 2022)
          </li>
          <li>
            <strong>Executive House Manager</strong> – Alpha Kappa Lambda
            (Spring 2021 – Fall 2021)
          </li>
          <li>
            <strong>Public Relations Chair</strong> – Alpha Kappa Lambda (Fall
            2020 – Fall 2021)
          </li>
          <li>
            <strong>Website Chair</strong> – Alpha Kappa Lambda (Fall 2020 –
            Fall 2021)
          </li>
        </ul>
      </div>
    </div>
  );
};


const TechSkills = () => {
  const [isOpen3, setIsOpen3] = useState(false);

  const toggleExperience = () => {
    setIsOpen3(!isOpen3);
  };
  return (
    <div>
      <h2 className="text-2xl text-[#80f603] mb-2">
        Technical Skills & Projects
      </h2>
  
      <button
        onClick={toggleExperience}
        className="bg-transparent border-1 border-transparent mb-2 text-[#80f603] cursor-pointer text-base py-[10px] px-[15px] transition-all duration-300 ease-in-out hover:scale-105 hover:border-[#80f603]"
      >
        <span className="mr-[10px]">{isOpen3 ? "▲" : "▼"}</span>
        {isOpen3 ? "Show Less" : "Show More"}
      </button>
  
      <div
        className={`overflow-hidden transition-all duration-500 ease-in-out ${
          isOpen3 ? "opacity-100 max-h-[1000px]" : "opacity-0 max-h-0"
        }`}
      >
        <h3>Technical Skills</h3>
        <ul className="list-disc list-inside pl-5 mb-4">
          <li>
            <strong>Programming Languages:</strong> Swift, Objective-C, Python,
            JavaScript, HTML, React.js, CSS, C++
          </li>
          <li>
            <strong>Software:</strong> Github, Excel, Tableau, Office,
            QuickBooks
          </li>
        </ul>
  
        <h3>Projects</h3>
        <ul className="list-disc list-inside pl-5 mb-4">
          <li>
            <strong>Screen Search:</strong> Developed an iOS app that allows users
            to select actors and genres of interest. Utilized an algorithm to
            generate movie recommendations and display available streaming
            platforms.
          </li>
          <li>
            <strong>Godot Engine – Video Game:</strong> Developed a strategy horror
            game using the Godot engine. Created custom artwork and music using
            open-source tools.
          </li>
          <li>
            <strong>Greenhouse Project:</strong> Developed a mesh network of
            microcontrollers using C++ to monitor campus greenhouse temperature,
            humidity, and light levels, replacing outdated systems.
          </li>
        </ul>
      </div>
    </div>
  );
      };
  

      const VolunteerExperience = () => {
        const [isOpen4, setIsOpen4] = useState(false);
      
        const toggleExperience = () => {
          setIsOpen4(!isOpen4);
        };
      
        return (
          <div>
            <h2 className="text-2xl text-[#80f603] mb-2">Volunteer Experience</h2>
            
            <button
              onClick={toggleExperience}
              className="bg-transparent border-1 border-transparent mb-2 text-[#80f603] cursor-pointer text-base py-[10px] px-[15px] transition-all duration-300 ease-in-out hover:scale-105 hover:border-[#80f603]"
            >
              <span className="mr-[10px]">{isOpen4 ? "▲" : "▼"}</span>
              {isOpen4 ? "Show Less" : "Show More"}
            </button>
            
            <div
              className={`overflow-hidden transition-all duration-500 ease-in-out ${
                isOpen4 ? "opacity-100 max-h-[1000px]" : "opacity-0 max-h-0"
              }`}
            >
              <ul className="list-disc list-inside pl-5 mb-4">
                <li>
                  <strong>These Hands Don’t Hurt Foundation:</strong> Managed and organized a sexual assault and domestic abuse prevention fundraiser.
                </li>
                <li>
                  <strong>St. Jude Up Til Dawn Foundation:</strong> Participated in yearly fundraisers to support families of children with cancer.
                </li>
              </ul>
            </div>
          </div>
        );
      };

     
    const GradientMaker = () => {
  const [color1, setColor1] = useState("#06c119");
  const [color2, setColor2] = useState("#ffffff");
  const [color3, setColor3] = useState("#333333");
  const [copied, setCopied] = useState(false);

  // Handles both color picker and text input changes
  const handleColorChange = (value, setColor) => {
    // Only update the color if it's a valid hex color
    if (/^#[0-9A-Fa-f]{6}$/i.test(value) || value === "") {
      setColor(value); // Allow empty input for manual corrections
    }
  };

  // Gradient CSS
  const gradientStyle = {
    background: `linear-gradient(to right, ${color1}, ${color2}, ${color3})`,
  };

  // Copy to clipboard function
  const copyToClipboard = () => {
    const cssCode = `background: linear-gradient(to right, ${color1}, ${color2}, ${color3});`;
    navigator.clipboard.writeText(cssCode).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <div className="p-6 flex flex-col items-center space-y-6">
      {/* Gradient Display Box */}
      <div className="w-full h-40 rounded-lg border shadow-md" style={gradientStyle}></div>

      {/* Color Pickers & Text Inputs */}
      <div className="w-full items-center max-w-md flex flex-col space-y-4">
        {[color1, color2, color3].map((color, index) => {
          const setColor = index === 0 ? setColor1 : index === 1 ? setColor2 : setColor3;
          return (
            <div key={index} className="flex items-center space-x-4">
              {/* Color Picker */}
              <input
                type="color"
                value={color}
                onChange={(e) => setColor(e.target.value)} // Update the state on color picker change
                className="w-10 h-10 border rounded-lg cursor-pointer"
              />
              {/* Hex Input */}
              <input
                type="text"
                value={color}
                onChange={(e) => handleColorChange(e.target.value, setColor)} // Update the state on text input change
                className="p-2 border-2 border-gray-300 rounded w-32 text-center"
                placeholder="Enter hex (e.g., #ff0000)"
              />
            </div>
          );
        })}
      </div>

      {/* Export Button */}
      <button
        onClick={copyToClipboard}
        className=" text-white px-4 pb-6 rounded-lg shadow-md bg-[#1a1a1a]  hover:border-[#80f603] transition duration-200"
      >
        Copy CSS
      </button>

      {/* Copied Message */}
      {copied && <p className="text-green-500 text-sm">Copied to clipboard!</p>}
    </div>
  );
};

      
      
      
      

      
      

export { WorkExperience, ExtraActivities, TechSkills, VolunteerExperience, GradientMaker };

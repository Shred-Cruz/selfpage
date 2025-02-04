import { useState } from "react";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const handleLinkClick = (caseNumber) => {
    switch (caseNumber) {
      case 0:
        window.location.href = "https://www.linkedin.com/in/ahlink";
        break;
      case 1:
        window.location.href = "https://github.com/Shred-Cruz";
        break;
      case 2:
        window.location.href = "https://apps.apple.com/us/app/acellus-learning/id1065550816?mt=12";
        break;
      case 3:
        window.location.href = "https://x.com/Shred1Cruz";
        break;
      default:
        console.error("Invalid case number. Use a number between 0 and 3.");
    }
  };

  return (
    <>
      <div className="title-bar">
        <div className="title-content">
          <img
            src="/src/assets/images/firegamma.png"
            className="logo-earth"
            alt="Logo"
          />
          <div className="title-text">
            <h1>Alex Hernandez</h1>
            <p>MacOS | iOS | React | Developer</p>
          </div>
          </div>
        </div>

        {/* Sidebar added inside the rectangle */}
        <div className="content-container">
          <div className="green-rectangle">
           <h2 className="sidebar-title">Programming Powertools</h2>
           <button onClick={() => handleLinkClick(0)} className="link-button"> <img src="/src/assets/images/linkClear.png" alt="Linkedin" className="button-icon1" />Tailwind CSS</button>
           <button onClick={() => handleLinkClick(0)} className="link-button"> <img src="/src/assets/images/linkClear.png" alt="Linkedin" className="button-icon1" />BLE Guide for iOS</button>
           <button onClick={() => handleLinkClick(0)} className="link-button"> <img src="/src/assets/images/linkClear.png" alt="Linkedin" className="button-icon1" />Leveraging JavaScript in WkWebView</button>
           <button onClick={() => handleLinkClick(0)} className="link-button"> <img src="/src/assets/images/linkClear.png" alt="Linkedin" className="button-icon1" />Git Cheat Sheet</button>

            <h2 className="sidebar-title1">Socials & Projects</h2>
            <button onClick={() => handleLinkClick(0)} className="link-button"> <img src="/src/assets/images/linkClear.png" alt="Linkedin" className="button-icon1" />Linkedin</button>
            <button onClick={() => handleLinkClick(1)} className="link-button">
            <img src="/src/assets/images/gitClear.png" alt="GitHub" className="button-icon" />GitHub</button> 
            <button onClick={() => handleLinkClick(3)} className="link-button"> <img src="/src/assets/images/twitterLogo.png" alt="MacOS" className="button-icon2" />Twitter</button>
            <button onClick={() => handleLinkClick(2)} className="link-button"> <img src="/src/assets/images/acellusIconClean.png" alt="MacOS" className="button-icon2" />Acellus</button>
        {/* Twitter Feed */}
      <div className="twitter-feed">
        <a
        className="twitter-timeline"
        data-theme="dark"
        data-height="1000"
        data-width="275"
        data-chrome="noheader nofooter noborders"
        href="https://twitter.com/Shred1Cruz"
        >
      </a>
    </div>
  </div>
          <div className="content">
            <h1 className="title-bio">Hello, World!</h1>
          <Bio />
        </div>
      </div>

      <div className="card">
        <button onClick={handleLinkClick}>Check out my LinkedIn here.</button>
        <p>Something good here</p>
      </div>

      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}



export default App;
function Bio() {
  return (
    <div>
      {/* <h1 className="title-bio">Hello, World!</h1> */}
      <p className="bio">
      I am a software developer with a focus on curating efficient solutions for macOS and iOS applications, as well as building modern web projects using Tailwind and Tanstack. I am passionate about delivering intuitive, high-performance applications that seamlessly integrate functionality with user-friendly design.       </p>
      {/* <a href="https://www.linkedin.com/in/ahlink" target="_blank" rel="noopener noreferrer">
        <img src={viteLogo} className="logo" alt="Vite logo" />
      </a> */}

      <hr/>

      <h2 className="header-text">Education</h2>
      <p><strong> Northwest Missouri State University:</strong> Bachelor’s Degree in Computer Science and Information Systems</p>
      {/* <p>Northwest Missouri State University</p> */}

      <hr />

      <h2 className="header-text">Work Experience</h2>

      <h3>Software Engineer - International Institute of Science & Technology (Feb 2024 – Current)</h3>
      <ul>
        <li>Developed a comprehensive desktop and mobile application for iOS and macOS, enabling students, parents, and teachers to enhance and streamline the homeschooling experience.</li>
        <li>Engaged in the complete development lifecycle, from initial planning and design to deployment and release.</li>
        <li>Leveraged the power of WkWebView for the main view of the application</li>
        <li>Utilized Swift and powerful Javascript injections to create a seamless user experience</li>
        <li>Leveraged Bluetooth Low Energy (BLE) technology to seamlessly connect students with advanced coding robots, enhancing interactive learning experiences.</li>
        <li>Developed the web application supporting the Acellus app, utilizing React with TanStack for state management and Tailwind CSS for modern, responsive styling.</li>
        <li>Worked with <strong>Swift, Objective-C, JavaScript, React.js, and Tailwind CSS</strong>.</li>
      </ul>

      <h3>Cerner – Software Intern (May 2020 – August 2020)</h3>
      <ul>
        <li>Updated Cerner applications to meet <strong>Veterans Association guidelines</strong> for government contracts.</li>
        <li>Improved accessibility for <strong>users with disabilities</strong>.</li>
        <li>Created a <strong>settings analyzer</strong> to help teams understand application usage and allocate resources.</li>
        <li>Worked with <strong>JavaScript, HTML, Angular, React.js, and CSS</strong>.</li>
      </ul>

      <h3>Cerner – Hardware & Logistics Intern (May 2019 – August 2019)</h3>
      <ul>
        <li>Cleaned up <strong>device data</strong> to save resources and organize inventory.</li>
        <li>Managed <strong>Cerner associate devices</strong> and handled security issues.</li>
        <li>Tracked inventory data to prevent <strong>missing devices</strong>.</li>
        <li>Worked with a team to ensure <strong>devices were ready for deployment</strong>.</li>
      </ul>

      <h3>Tiger Pool & Patio – Pool Associate (May 2023 – August 2023)</h3>
      <ul>
        <li>Measured <strong>depth and dimensions</strong> of pool dig sites.</li>
        <li>Managed <strong>chemical levels</strong> for safety and quality.</li>
        <li>Worked with customers to <strong>upsell accessories and manage their pools</strong>.</li>
        <li>Led a crew to complete pool construction tasks.</li>
      </ul>

      <hr />

      <h2 className="header-text">Leadership & Extracurricular Activities</h2>
      <ul>
        <li><strong>Executive Philanthropy Director</strong> – Alpha Kappa Lambda (Spring 2022 – Fall 2023)</li>
        <li><strong>VP of Risk Management</strong> – Alpha Kappa Lambda (Fall 2021 – Fall 2022)</li>
        <li><strong>Brotherhood Development Chair</strong> – Alpha Kappa Lambda (Fall 2021 – Fall 2022)</li>
        <li><strong>Executive House Manager</strong> – Alpha Kappa Lambda (Spring 2021 – Fall 2021)</li>
        <li><strong>Public Relations Chair</strong> – Alpha Kappa Lambda (Fall 2020 – Fall 2021)</li>
        <li><strong>Website Chair</strong> – Alpha Kappa Lambda (Fall 2020 – Fall 2021)</li>
      </ul>

      <hr />

      <h2 className="header-text">Technical Skills & Projects</h2>
      <h3>Technical Skills</h3>
      <ul>
        <li><strong>Programming Languages:</strong> Swift, Objective-C, Python, JavaScript, HTML, React.js, CSS, C++</li>
        <li><strong>Software:</strong> Github, Excel, Tableau, Office, QuickBooks</li>
      </ul>

      <h3>Projects</h3>
      <ul>
      <li> <strong>Screen Search:</strong> Developed an iOS app that allows users to select actors and genres of interest. Utilized an algorithm to generate movie recommendations and display available streaming platforms.</li>
      <li> <strong>Godot Engine – Video Game:</strong> Developed a strategy horror game using the Godot engine. Created custom artwork and music using open-source tools.</li>
      <li> <strong>Greenhouse Project:</strong> Developed a mesh network of microcontrollers using C++ to monitor campus greenhouse temperature, humidity, and light levels, replacing outdated systems.</li>
      </ul>
      <hr />

      <h2 className="header-text">Volunteer Experience</h2>
      <ul>
        <li><strong>These Hands Don’t Hurt Foundation:</strong> Managed and organized a sexual assault and domestic abuse prevention fundraiser.</li>
        <li><strong>St. Jude Up Til Dawn Foundation:</strong> Participated in yearly fundraisers to support families of children with cancer.</li>
      </ul>
    </div>
  );
}
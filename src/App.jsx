import  VidyaProfileImg  from "./assets/vidya profile img.png"
import Skills from "./Components/Skills";
import Socials from "./Components/Socials";
import Box from "./Components/Box";
import "./App.css";
import Navbar from "./Components/Navbar";
import { useState } from "react";

function App() {

  const [darkMode , setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  }

  return (
    <>
      <div className="md:w-1/3 m-auto">

        {/* Have to implement the dark mode navbar */}
        {/* <div className="my-3">
         <Navbar darkMode={darkMode} toggleDarkMode= {toggleDarkMode}></Navbar>
        </div> */}
        <div className="mt-2 w-96 sm:w-3/4 md:w-full m-auto rounded bg-sky-500 hover:bg-sky-600 hover:text-white cursor-pointer">
          <h1 className="text-2xl py-5 px-5  text-center">Hello I'm Vidya Sagar</h1>
        </div>

        <div className="mt-2 flex justify-between">
          <div className="pt-4 ml-1">
            <h1 className="text-2xl font-semibold">Vidya Sagar Hansda</h1>
            <h2 className="text-xl py-2">Aspiring <span className="bg-green-700 px-2 text-white rounded text-center">MERN</span> stack developer</h2>
          </div>
          <div className="w-32 mr-1">
            <img src={VidyaProfileImg} alt="Vidya profile pic" />
          </div>
        </div>

        <div>
          <h1 className="text-2xl mt-2 underline decoration-solid">About</h1>
          <p className="pt-2 text-lg">Hello! 👋 I am Vidya Sagar a 2nd year undergrad at Marwari College Ranchi , Ranchi Jharkhand. I enjoy making a simple yet beautiful webpages. I also love designing.When I’m not coding , you’ll find me creating UI designs.</p>
        </div>

        <div className="mt-10">
          <h1 className="text-2xl mt-2 underline decoration-solid">Skills</h1>
          <div className="flex flex-wrap p-1 mt-2">
            <Skills skills={"Javascript"}></Skills>
            <Skills skills={"Tailwindcss"}></Skills>
            <Skills skills={"React.js"}></Skills>
            <Skills skills={"Node.js"}></Skills>
            <Skills skills={"Express.js"}></Skills>
            <Skills skills={"MongoDB"}></Skills>
          </div>
        </div>

        <div className="mt-2 ml-2 sm:ml-2 md:ml-2 lg:ml-0 flex flex-wrap gap-2 justify-center">
          <Box  inputs="Projects"></Box>
          <Box inputs="Resume"></Box>
        </div>

        <div className="mt-4">
          <h1 className="text-2xl underline decoration-solid">Socials</h1>
          <Socials links={"https://github.com/Vidya4sure"} socials={"Github"}></Socials>
          <Socials links={"https://www.linkedin.com/in/vidya4sure/"} socials={"LinkedIn"}></Socials>
          <Socials links={"https://x.com/vidya4sure"} socials={"X"}></Socials>
        </div>

       
        <footer className="mt-4 text-center text-lg font-medium opacity-50">
          © 2024 vidya4sure. All Rights Reserved.
        </footer>
      </div>
    </>
  )
}

export default App;

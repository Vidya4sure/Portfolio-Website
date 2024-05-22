import  VidyaProfileImg  from "./assets/vidya profile img.png"
import Skills from "./Skills";
import Socials from "./Socials";
import Box from "./Box";
import "./App.css";

function App() {

  return (
    <>
      <div className="md:w-1/3 m-auto">
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

        <div>
          <h1 className="text-2xl mt-2 underline decoration-solid">Skills</h1>
          <div className="flex flex-wrap p-1">
            <Skills skills={"Javascript"}></Skills>
            <Skills skills={"Tailwindcss"}></Skills>
            <Skills skills={"React.js"}></Skills>
            <Skills skills={"Node.js"}></Skills>
            <Skills skills={"Express.js"}></Skills>
            <Skills skills={"MongoDB"}></Skills>
          </div>
        </div>

        <div className="ml-2 sm:ml-2 md:ml-2 lg:ml-0">
          <Box  inputs="Projects"></Box>
        </div>

        <div>
        <h1 className="text-2xl underline decoration-solid">Socials</h1>
          <Socials links={"https://github.com/Vidya4sure"} socials={"Github"}></Socials>
          <Socials links={"https://www.linkedin.com/in/vidya4sure/"} socials={"LinkedIn"}></Socials>
          <Socials links={"https://x.com/vidya4sure"} socials={"X"}></Socials>
        </div>

        <div className="ml-2 sm:ml-2 md:ml-2 lg:ml-0">
          <Box inputs="Resume"></Box>
        </div>
      </div>
    </>
  )
}

export default App;

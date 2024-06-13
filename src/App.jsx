
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import { Outlet } from "react-router-dom";

function App() {

  return (
   <div className="mt-2">
      <Header/>
      <Outlet/>
   </div>
  )
}

export default App;

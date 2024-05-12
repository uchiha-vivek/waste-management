import { Route, Routes } from "react-router-dom"
import Navbar from "./components/Navbar"
import Home from "./Pages/Home"
import Resource from "./Pages/Resource"
import Project from "./Pages/Project"

 

function App() {
 

  return (
    <>
  <Navbar/>
     <Routes>

       
      <Route exact path="/"  element={<Home/>} ></Route>
      <Route path="/resources" element={<Resource/>}></Route>
      <Route path="/projects" element={<Project/>}></Route>
     </Routes>

    </>
  )
}

export default App

import { Route, Routes } from "react-router-dom"
import Navbar from "./components/Navbar"
import Home from "./Pages/Home"
import Resource from "./Pages/Resource"
import Project from "./Pages/Project"
import Header from "./components/Header"
import Hero from "./components/Hero"
import Footer from "./components/Footer"

 

function App() {
 

  return (
    <>
  {/* <Navbar/>
     <Routes>

       
      <Route exact path="/"  element={<Home/>} ></Route>
      <Route path="/resources" element={<Resource/>}></Route>
      <Route path="/projects" element={<Project/>}></Route>
     </Routes> */}

     <Header/>
     <Routes>
     <Route exact path="/" element={<Hero/>} ></Route>
     <Route path="/resources" element={<Resource/>} ></Route>
     <Route path="/projects" element={<Project/>} ></Route>

     </Routes>
      <Footer/>
    </>
  )
}

export default App

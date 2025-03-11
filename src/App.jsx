import {  BrowserRouter, Route, Routes } from "react-router-dom"
import Footer from "./Componets/Footer"
import Navbar from "./Componets/Navbar"
import Home from "./Routes/Home/Home"
import Login from "./Componets/Login"

function App() {

  return (
    <div className="bg-gray-100">
      <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="login" element={<Login/>}/>
    </Routes>
    <Footer/>
    </BrowserRouter>
    </div>
  )
}

export default App

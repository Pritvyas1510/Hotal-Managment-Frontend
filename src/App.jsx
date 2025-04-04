import {  BrowserRouter, Route, Routes } from "react-router-dom"
import Footer from "./Componets/Footer"
import Navbar from "./Componets/Navbar"
import Home from "./Routes/Home/Home"
import Login from "./Routes/Login/Login"
import Register from "./Routes/Login/Register"
import Booking from "./Routes/Booking/Booking"

function App() {

  return (
    <div className="bg-gray-100">
      <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="login" element={<Login/>}/>
      <Route path="/register" element={<Register/>}/>
      {/* <Route path="/booking" element={<Booking/>}/> */}
    </Routes>
    <Footer/>
    </BrowserRouter>
    </div>
  )
}

export default App

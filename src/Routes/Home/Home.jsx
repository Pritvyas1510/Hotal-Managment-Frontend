import React, { useEffect, useState } from "react";
import Divesion from "../../Componets/Divesion";
import Booking from "../Booking/Booking";

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = ["Slider1.jpg", "Slider2.jpg", "Slider3.jpg"];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);
  return (
    <div className="font-sans">
      {/* Hero Section */}
      <div className="hero min-h-screen bg-[url('https://c4.wallpaperflare.com/wallpaper/451/186/556/best-hotels-booking-pool-vacation-wallpaper-preview.jpg')] bg-cover bg-center relative">

        <div className="absolute inset-0  bg-opacity-100"></div>
        <div className="hero-content text-center text-white relative z-10">
          <div className="p-10 bg-white opacity-75 backdrop-blur-lg rounded-3xl shadow-lg">
            <h1 className="text-6xl font-semibold text-black ">
              Welcome to Luxury Stay
            </h1>
            <p className="mt-4 text-xl text-black font-light">
              Experience world-class hospitality in the heart of the city.
            </p>
            <button className="btn btn-outline btn-primary mt-6 px-6 py-3 text-lg rounded-full shadow-md transition-transform hover:scale-105">
              Book Now
            </button>
          </div>
        </div>
      </div>

      <Booking/>

      <div className=" pt-10 content-center justify-self-center w-full text-center">
        <p className="text-5xl text-extrabold text-black justify-self-center font-serif">HOTEL LAYOUT</p>
      </div>


      {/* Image Slider */}
      <div className="relative w-full h-[500px] mt-10 shadow-lg rounded-lg overflow-hidden">
        {slides.map((img, index) => (
          <img
            key={index}
            src={`/Public/Image/${img}`}
            className={`w-full h-full object-cover absolute transition-opacity duration-1000 ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
            alt="Luxury Hotel"
          />
        ))}
      </div>
      <div className=" pt-10 content-center justify-self-center w-full text-center">
        <p className="text-5xl text-extrabold text-black justify-self-center font-serif uppercase">Our Facilites</p>
      </div>
      <div className="py-10">
        <Divesion/>
        </div>
      {/* Testimonials Section */}
      <div className="bg-gradient-to-r mt-5 from-blue-700 to-pink-100 py-15 text-center">
        <h2 className="text-4xl py-5 font-bold">What Our Guests Say</h2>
        <div className="mt-8 max-w-2xl mx-auto p-1  shadow-xl rounded-lg">
          <p className="text-lg italic text-black">
          <textarea placeholder="Guests Say" className="textarea textarea-lg bg-gray-50 w-[660px] h-[200px]"></textarea> 
          <button className="btn btn-primary my-5">Submit</button>
          </p>
         
        </div>
      </div>
   

      {/* Call to Action */}
      <div className="text-center py-2">
        <h2 className="text-4xl font-bold">Book Your Stay Today!</h2>
   
      </div>
    </div>
  );
};

export default Home;

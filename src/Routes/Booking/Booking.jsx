import React from "react";
import { cardcomponets } from "../../Constant";

const Booking = ({ img, title }) => {
  return (
    <div>
      <div className="justify-self-center  grid grid-cols-3 grid-rows-1 gap-10 py-20">
        {cardcomponets.map((item) => (
          <div className="booking-from-container  bg-neutral-500 rounded-xl p-2 cursor-pointer">
            <p className="text-base-100 justify-self-center font-bold font-serif text-2xl py-2 ">
              {item.title}
            </p>

            <img src={item.img} className="w-[250px] rounded-2xl" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Booking;

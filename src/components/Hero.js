import React from "react";
import { ReactTyped } from "react-typed";

export default function Hero() {
  return (
    <div className="bg-[#2699fb] w-full py-32">
      <div className="mx-w-[1240px] text-center text-white my-5 font-bold mx-auto">
        <div className="text-black text-xl md:text-2xl">Learn With Us</div>
        <h2 className="md:text-6xl text-4xl py-4">Grow With Us.</h2>
        <div className="md:text-5xl text-2xl">
          Learn
          <ReactTyped
            className="pl-3"
            strings={[
              " Web Developer",
              "Frontend Developer",
              "backend Developer",
              "MERN Stack",
            ]}
            typeSpeed={150}
            loop={true}
            backSpeed={50}
          />
        </div>
        <button className="bg-black mt-10 text-white p-3 rounded text-md">
          Get Started
        </button>
      </div>
    </div>
  );
}

import React from "react";
import img from "../Assets/about.png";
export default function Expert() {
  return (
    <div className="max-w-[1240px] mx-auto p-2 md:grid md:grid-cols-2 mt-20">
      <div>
        <img src={img} alt="" />
      </div>
      <div className="flex flex-col justify-center">
        <h1 className="text-[#00df9a] text-md font-bold">Learn From Expert</h1>
        <p className="my-3 text-justify">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae
          harum quaerat obcaecati? Laudantium ullam a doloremque dolorum dolores
          molestiae nesciunt.
        </p>
        <button className="w-32 bg-black text-white p-3 rounded text-md">
          Get Started
        </button>
      </div>
    </div>
  );
}

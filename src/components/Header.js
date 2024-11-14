import React, { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";

export default function Header() {
  const [toggle, setToggle] = useState(false);
  return (
    <>
      <div className="bg-[#2699fb] p-4">
        <div className="mx-w-[1240px] md:px-11 px-3 py-5 items-center mx-auto flex justify-between">
          <div className="text-3xl font-bold">WsCube Tech.</div>
          {!toggle ? (
            <AiOutlineMenu
              onClick={() => setToggle(!toggle)}
              className="text-white text-2xl md:hidden block"
            />
          ) : (
            <AiOutlineClose
              onClick={() => setToggle(!toggle)}
              className="text-white text-2xl md:hidden block"
            />
          )}

          <ul className=" hidden md:flex text-white gap-9 items-center">
            <li>Home</li>
            <li>Company</li>
            <li>Resource</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
          {/* Responsive */}
          <ul
            className={`duration-700 md:hidden block w-full text-center h-screen text-white fixed ${
              toggle ? "left-[0]" : "left-[-100%]"
            }  bg-black top-[107px] items-center`}
          >
            <li className="p-4">Home</li>
            <li className="p-4">Company</li>
            <li className="p-4">Resource</li>
            <li className="p-4">About</li>
            <li className="p-4">Contact</li>
          </ul>
        </div>
      </div>
    </>
  );
}

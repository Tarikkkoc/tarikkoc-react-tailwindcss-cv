import React from "react";
import "../App.css";
const Navbar = () => {
  return (
    <div className="w-full z-10 h-20 flex bg-zinc-200/80 justify-between hover:bg-sky-800/90 text-black hover:text-white opacity-80">
      <div className="flex justify-start items-center h-16 w-2/6 pl-5 pt-3">
        <p className="border-none text-2xl bg-transparent ml-4 hover:cursor-pointer hover:-translate-y-2 hover:duration-700 hover:text-green-500">
          <a>Home</a>
        </p>
      </div>
      <div className="hidden md:flex items-center">
        <ul className="flex items-center font-sans text-xl">
          <li className="pr-4 cursor-pointer">
            <p className="border-none text-xl bg-transparent ml-4 hover:cursor-pointer hover:-translate-y-2 hover:duration-700 hover:text-green-500">
              <a>About</a>
            </p>
          </li>
          <li className="pr-4 cursor-pointer">
            <p className="border-none text-xl bg-transparent ml-4 hover:cursor-pointer hover:-translate-y-2 hover:duration-700 hover:text-green-500">
              <a>Portfolio</a>
            </p>
          </li>
          <li className="pr-4 cursor-pointer">
            <p className="border-none text-xl bg-transparent ml-4 hover:cursor-pointer hover:-translate-y-2 hover:duration-700 hover:text-green-500">
              <a>Hire</a>
            </p>
          </li>
          <li className="pr-4 cursor-pointer">
            <p className="border-none text-xl bg-transparent ml-4 hover:cursor-pointer hover:-translate-y-2 hover:duration-700 hover:text-green-500">
              <a>Contact</a>
            </p>
          </li>
        </ul>
      </div>
      {/* <img className="" src={Menu} alt="" /> */}
    </div>
  );
};

export default Navbar;

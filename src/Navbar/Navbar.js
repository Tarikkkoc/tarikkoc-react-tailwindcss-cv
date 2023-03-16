import React from "react";
import "../App.css";
import Home from "../Img/home.png";
import About from "../Img/about.png";
import Works from "../Img/portfolio.png";
import Hire from "../Img/hire.png";
import Contact from "../Img/contact.png";

const Navbar = () => {
  return (
    <div className="w-full fixed top-o z-10 h-20 flex bg-zinc-400 justify-between hover:bg-sky-800/90 text-black hover:text-white opacity-80 max max-[640px]:hidden ">
      <div className="flex justify-start items-center h-16 w-auto pl-5 pt-3">
        <p className="border-none text-2xl bg-transparent ml-4 hover:cursor-pointer hover:-translate-y-2 hover:duration-700 hover:text-green-500">
          <a>Home</a>
        </p>
      </div>
      <div className="flex items-center">
        <ul className="flex items-center font-sans text-xl shrink-1">
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
        {/* <ul className="hidden max-[640px]:items-center font-sans text-xl max-[640px]:flex">
          <li className="pr-4 cursor-pointer">
            <img className="w-14 h-16" src={About} alt="" />
          </li>
          <li className="pr-4 cursor-pointer">
            <img className="w-14 h-16" src={Works} alt="" />
          </li>
          <li className="pr-4 cursor-pointer">
            <img className="w-14 h-16" src={Hire} alt="" />
          </li>
          <li className="pr-4 cursor-pointer">
            <img className="w-14 h-16" src={Contact} alt="" />
          </li>
        </ul> */}
      </div>
      {/* <img className="" src={Menu} alt="" /> */}
    </div>
  );
};

export default Navbar;

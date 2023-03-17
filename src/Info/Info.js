import React from "react";
import "../App.css";

const Info = () => {
  return (
    <div className="info w-full h-screen grid place-items-center bg-stone-300">
      <div className="p-4">
        <h1 className="text-6xl font-bold text-gray-200 font-serif my-2">
          Hi!
        </h1>
        <h1 className="text-4xl font-bold text-slate-400 font-serif ">
          I am Ahmet Tarık Koç
        </h1>{" "}
        <br />
        <p className="text-4xl text-slate-200 font-thin">
          FRONTEND WEB DEVELOPER
        </p>
        <br />
        <a
          className="bg-white h-12 rounded-3xl sm:w-32 hover:bg-stone-800 hover:text-white bg-blue-600 text-white"
          href="https://github.com/Tarikkkoc"
          target="_blank"
        >
          <button className="w-full gitBtn h-12 rounded-3xl sm:w-32 hover:bg-stone-800 hover:text-white bg-blue-600 text-white">
            Github
          </button>
        </a>
      </div>
    </div>
  );
};

export default Info;

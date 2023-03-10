import React from "react";
import Photo from "../Img/InfoPhoto.jpeg";

const AboutMe = () => {
  return (
    <div className="w-full h-full md:grid md:grid-cols-2 p-4 gap-2 bg-blue-300 bg-cover">
      <div className="flex justify-center items-center">
        <img className=" h-[60%] rounded-full" src={Photo} alt="" />
      </div>
      <div className="flex justify-center flex-col">
        <h1 className="text-5xl font-serif font-bold pb-5 text-slate-900">
          Who am I?
        </h1>{" "}
        <br />
        <p className="text-2xl font-serif text-slate-700">
          Hi, I'm Tarık Koç, I'm a graduated of BSc of Industrial Engineering at
          Karabuk University. Works in the software engineering field.
          Experienced in web design, software design & Front-end Developer. He
          is interested in diverse css frameworks. He has experience in
          Javascript, React.js, HTML and CSS frameworks.
        </p>
        <br />
        <a href="" target="_blank">
          <button className="w-full h-12 rounded-3xl sm:w-32 hover:bg-stone-800 hover:text-white bg-blue-600 text-white">
            CV
          </button>
        </a>
      </div>
    </div>
  );
};

export default AboutMe;

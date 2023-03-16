import React from "react";

const AboutMe = () => {
  return (
    <div className="w-full h-full md:grid md:grid-cols-2 p-4 gap-2 bg-blue-300 bg-cover">
      <div className="flex justify-center items-center">
        <img
          className=" h-[60%] rounded-3xl"
          src="https://media.licdn.com/dms/image/C4D03AQGpl3XKiIB-6A/profile-displayphoto-shrink_800_800/0/1658919175458?e=1684368000&v=beta&t=dWEidpUeIeQUGwh61hbZKlVSdk5_A2wAFJR-WMT1sS0"
          alt=""
        />
      </div>
      <div className="flex justify-center flex-col">
        <h1 className="text-5xl mt-5 font-serif font-bold pb-5 text-slate-900">
          Who am I?
        </h1>{" "}
        <br />
        <p className="text-xl font-serif text-slate-700">
          Hi, I'm Tarık Koç, I'm a graduated of BSc of Industrial Engineering at
          Karabuk University. Works in the software engineering field.
          Experienced in web design, software design & Front-end Developer. He
          is interested in diverse css frameworks. He has experience in
          Javascript, React.js, HTML and CSS frameworks.
        </p>
        <br />
        <a
          className="w-full grid place-items-center"
          href="../docs/TkCv.pdf"
          download
          target="_blank"
        >
          <button className="cvBtn h-12 rounded-3xl sm:w-32 hover:bg-stone-800 hover:text-white bg-blue-600 text-white">
            CV
          </button>
        </a>
      </div>
    </div>
  );
};

export default AboutMe;

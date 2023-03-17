import React from "react";
import SampleInstagram from "../Img/sampleInstagram.jpg";
import MagicCard from "../Img/magicCard.jpg";
import Github from "../Img/github.png";

const Portfolio = () => {
  return (
    <div className="w-full portfolio h-auto flex justify-evenly gap-6 pt-4 pb-4">
      <div className="flex flex-col gap-3 text-center">
        <div className=" p-0.5 rounded-xl grid place-items-center">
          <a target="_blank" href="https://tarikkoc-instagram.netlify.app">
            <img
              className="w-36 h-48 rounded-xl hover:scale-110 hover:ease-in-out hover:duration-700"
              src={SampleInstagram}
              alt=""
            />
          </a>
        </div>
        <a
          href="https://tarikkoc-instagram.netlify.app"
          target="_blank"
          className="font-sans text-blue-700 font-semibold"
        >
          Clone Instagram
        </a>
        <div>
          <span className="font-medium">Includes:</span>
          <ul className="pt-2 text-stone-700">
            <li>React</li>
            <li>Router DOM</li>
            <li>Tailwind</li>
            <li>Json</li>
          </ul>
        </div>
      </div>
      <div className="flex flex-col gap-3 text-center">
        <div className="p-0.5 rounded-xl grid place-items-center">
          <a href="https://tarikkoc-magic-card.netlify.app" target="_blank">
            <img
              className="w-36 h-48 rounded-xl hover:scale-110 hover:ease-in-out hover:duration-700"
              src={MagicCard}
              alt=""
            />
          </a>
        </div>
        <a
          href="https://tarikkoc-magic-card.netlify.app"
          target="_blank"
          className="font-sans text-blue-700 font-semibold"
        >
          Magic Card
        </a>
        <div>
          <span className="font-medium">Includes:</span>
          <ul className="pt-2 text-stone-700">
            <li>React</li>
            <li>Shuffle cards function</li>
            <li>Card matching function</li>
            <li>Css</li>
          </ul>
        </div>
      </div>
      <div className="flex flex-col gap-3 text-center">
        <div className="p-0.5 rounded-xl grid place-items-center">
          <a href="https://github.com/Tarikkkoc" target="_blank">
            <img
              className="w-36 h-48 rounded-xl hover:scale-110 hover:ease-in-out hover:duration-700"
              src={Github}
              alt=""
            />
          </a>
        </div>
        <a
          href="https://github.com/Tarikkkoc"
          target="_blank"
          className="font-sans text-blue-700 font-semibold"
        >
          More Projects
        </a>
        <p className="text-clip">You can visit my github.</p>
      </div>
    </div>
  );
};

export default Portfolio;

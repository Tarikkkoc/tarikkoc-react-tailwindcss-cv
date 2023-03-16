import React from "react";

const Footer = () => {
  return (
    <div className="w-full h-12  left-0 bottom-0 bg-stone-400 flex align-center justify-around">
      <div className="flex items-center justify-around">
        <a href="https://github.com/Tarikkkoc">
          <img
            src="https://icon-library.com/images/github-icon-png/github-icon-png-5.jpg"
            alt="github"
            className="w-8 h-8"
          />
        </a>
        <a href="https://www.linkedin.com/in/ahmet-tarık-koç-3b952a193/">
          <img
            src="https://icon-library.com/images/linkedin-icon-png-black/linkedin-icon-png-black-12.jpg"
            alt="linkedin"
            className="w-10 h-10"
          />
        </a>
        <a href="mailto:ahmettarikkoc@gmail.com">
          <img
            src="https://icon-library.com/images/mail-icon-black-and-white/mail-icon-black-and-white-0.jpg"
            alt="e-mail"
            className="w-9 h-9"
          />
        </a>
        <a href="https://www.instagram.com/ahmet_tarik/">
          <img
            src="https://icon-library.com/images/instagram-icon-logo/instagram-icon-logo-29.jpg"
            alt="instagram"
            className="w-9 h-8"
          />
        </a>
      </div>
    </div>
  );
};

export default Footer;

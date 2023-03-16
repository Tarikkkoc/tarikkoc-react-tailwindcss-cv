import React from "react";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const HireMe = () => {
  const xSwal = withReactContent(Swal);

  const clickHandler = () => {
    xSwal.fire({
      icon: "info",
      title: "Contact me",
      text: "ahmettarikkoc@gmail.com | 0 (536) 741 3765",
      confirmButtonColor: "blue",
      showConfirmButton: true,
    });
  };

  return (
    <div className="h-full w-full hireMe flex bg-blue-500 pl-7 pr-7">
      <div className="w-1/2 grid hire1 place-items-center ">
        <p className="font-serif text-3xl pt-2 text-white font-semibold">
          Want to work with me?
        </p>
        <p className="font-sans text-2xl text-zinc-100">You can contact me</p>
      </div>
      <div className="w-1/2 grid hire2 place-items-center">
        <button
          className="rounded-xl border-solid bg-white w-24 h-12 font-bold text-xl text-zinc-600 hover:bg-zinc-600 hover:text-white"
          onClick={clickHandler}
        >
          Hire Me
        </button>
      </div>
    </div>
  );
};

export default HireMe;

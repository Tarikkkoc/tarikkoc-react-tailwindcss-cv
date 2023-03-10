import React, { useState } from "react";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const ContactMe = () => {
  const contactSwal = withReactContent(Swal);
  const [name, setName] = useState();
  const [text, setText] = useState("");
  const [isValid, setIsValid] = useState(false); //input boş
  const myMail = "ahmettarikkoc@gmail.com";
  const subject = "İşe Alım Bilgilendirmesi";

  const nameHandler = (event) => {
    event.preventDefault();

    setName(event.target.value);
  };

  const textHandler = (event) => {
    event.preventDefault();

    setText(event.target.value);
    if (event.target.value !== "") {
      setIsValid(true); // input dolu oldu
    }
  };

  const submitHandler = (event) => {
    event.preventDefault();
  };

  const clickHandler = (event) => {
    event.preventDefault();

    if (text === "") {
      contactSwal.fire({
        icon: "error",
        title: "Hata",
        text: "Lütfen Boş Alan Bırakmayınız.",
        confirmButtonColor: "blue",
        showConfirmButton: true,
      });
    }
  };

  return (
    <div className="bg-stone-200 w-full h-full flex justify-center items-center">
      <div className="mt-5 text-6xl w-1/2 grid place-items-center font-bold text-gray-600 font-sans my-2">
        <h1>Contact</h1>
      </div>
      <form className="w-1/2" onSubmit={clickHandler}>
        <div className="mt-2 grid place-items-center">
          <input
            className="h-60 bg-stone-100 w-3/5 text-base placeholder:px-2 placeholder:italic placeholder:text-xl border-2 rounded-lg outline-zinc-400 outline-1 mt-3"
            id="text"
            onChange={textHandler}
            onBlur={clickHandler}
            type="text"
            placeholder="Write something"
          />
          <textarea
            class="
        form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
      "
            id="exampleFormControlTextarea1"
            rows="3"
            placeholder="Your message"
          ></textarea>
        </div>
        <div className="mt-5 grid place-items-center">
          <button className="rounded-xl border-solid hover:bg-white w-2/12 h-12 font-bold text-xl hover:text-zinc-600 bg-zinc-600 text-white">
            <a
              style={isValid ? {} : { pointerEvents: "none" }}
              href={`mailto:${myMail}?subject=${subject || ""}&body=${
                text || ""
              }`}
            >
              Send email
            </a>
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactMe;

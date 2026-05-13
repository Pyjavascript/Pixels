import React, { useState } from "react";
import logo from "../assets/imgs/logo.svg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="
      fixed
      bottom-[10%]
      left-1/2
      -translate-x-1/2
      flex
      flex-col
      justify-center
      items-center
      gap-2
    ">

      <div
        className={`
          w-[322.56px] md:w-[462px]
          bg-[hsla(238,78%,16%,1)]
          rounded-2xl
          transition-all
          duration-500
          overflow-hidden
          ${
            isOpen
              ? "h-[250px] opacity-100 p-4"
              : "h-0 opacity-0"
          }
        `}
      >
        <div className="text-white">
          Menu Content
        </div>
      </div>


      <div className="
        w-[322.56px] md:w-[462px]
        h-[61.64px] md:h-[81px]
        bg-white
        py-[8.99px]
        px-[11.24px]
        rounded-3xl
        flex
        items-center
        justify-between
      ">

        <div className="
          w-[51.36px] md:w-[61.64px]
          h-[51.36px] md:h-[62px]
          bg-[hsla(211,100%,98%,1)]
          rounded-2xl
          flex
          justify-center
          items-center
        ">
          <img src={logo} alt="logo" />
        </div>

        <div className="
          h-[52.65px] md:h-[63px]
          w-[193.13px] md:w-[299px]
          bg-[hsla(238,78%,16%,1)]
          rounded-2xl
          flex
          justify-center
          items-center
        ">
            <h1 className="text-white text-sm md:text-[17.5px] text-center font-manrope">[ Get free consultation ]</h1>
        </div>

        <div
          onClick={() => setIsOpen(!isOpen)}
          className="
            w-[51.36px] md:h-[63px]
            h-[51.36px] md:w-[63px]
            bg-[hsla(211,100%,98%,1)]
            rounded-2xl
            text-4xl
            text-[hsla(238,78%,16%,1)]
            flex
            justify-center
            items-center
            cursor-pointer
          "
        >
          <ion-icon name={isOpen ? "close-sharp" : "menu-sharp"}></ion-icon>
        </div>

      </div>
    </div>
  );
};

export default Navbar;
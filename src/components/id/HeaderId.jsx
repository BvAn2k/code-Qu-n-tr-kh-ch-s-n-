import React, { useState } from "react";
import logo from "../../assets/logo.png";
import vn from "../../assets/ic_vietnam.png";
import { CSSTransition } from "react-transition-group";
import More from "./More";
import Tabar from "./tabar";
import Tabar2 from "./tabar2";

const HeaderId = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isVisible2, setIsVisible2] = useState(true);
  const [isVisible3, setIsVisible3] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };
  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };
  const toggleVisibility2 = () => {
    setIsVisible2(!isVisible2);
  };
  const toggleVisibility3 = () => {
    setIsVisible3(!isVisible3);
  };

  const textNull = "";
  return (
    <div>
      <div className="flex flex-row justify-end bg-white shadow-md">
      <div className="flex w-full flex-row justify-between bg-white shadow-md">
        <img className="w-[150px] h-[30px] m-3" src={logo} alt="" />
        <div className="flex flex-row justify-center">
          <button>
            <img
              className="w-[20px] h-[20px] mr-3"
              onClick={toggleVisibility}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              src={
                isHovered
                  ? "https://cdn-icons-png.flaticon.com/128/747/747496.png"
                  : "https://cdn-icons-png.flaticon.com/128/747/747327.png"
              }
              alt=""
            />
            {textNull}
          </button>
          <button>
            <img
              onClick={toggleVisibility2}
              className="w-[30px] h-[30px] mr-3"
              src={vn}
              alt=""
            />
            {textNull}
          </button>
          <button>
            <img
              onClick={toggleVisibility3}
              className="w-[40px] h-[40px] mr-3"
              src="https://cdn-icons-png.flaticon.com/128/847/847969.png"
              alt=""
            />
            {textNull}
          </button>
        </div>
    </div>
        <div className="z-10 flex items-start absolute h-auto  w-auto border-t-[1.5px] border-blue-300 shadow-md mt-[60px]">

        <CSSTransition
        in={isVisible2}
        timeout={300}
        classNames="popup"
        unmountOnExit
      >
        <div className="bg-white mt-2 w-full flex justify-end items-end">
          <Tabar2 />
        </div>
      </CSSTransition>
        </div>
      </div>

      {/* <CSSTransition
        in={isVisible2}
        timeout={300}
        classNames="popup"
        unmountOnExit
      >
        <div className="bg-white mt-2 w-full flex justify-end items-end">
          <Tabar2 />
        </div>
      </CSSTransition>
      <CSSTransition
        in={isVisible3}
        timeout={300}
        classNames="popup"
        unmountOnExit
      >
        <div className="bg-white mt-2 w-full flex justify-end items-end">
          <Tabar />
        </div>
      </CSSTransition>
      <CSSTransition
        in={isVisible}
        timeout={300}
        classNames="popup"
        unmountOnExit
      >
        <div className="bg-white mt-2 w-full flex justify-end items-end">
          <More />
        </div>
      </CSSTransition> */}
    </div>
  );
};

export default HeaderId;

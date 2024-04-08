import React from "react";
import { IconName } from "react-icons/ri";
import { RiAccountBoxFill } from "react-icons/ri";
import { RiLock2Line } from "react-icons/ri";
import { LuKey } from "react-icons/lu";
import { IoPower } from "react-icons/io5";
import { GoPerson } from "react-icons/go";
const Tabar = () => {
  return (
    <div>
      <div className="h-[170px] w-[250px] bg-white m-auto flex flex-col shadow-lg " style={{border:''}}>
        <div className="h-[20%]  flex flex-row justify items-center mt-2 hover:bg-blue-200">
          <GoPerson className="text-blue-800 mr-2 ml-4 "/>
          <p className="text-blue-800">My Profile </p>
        </div>
        <div className="h-[20%]  flex flex-row justify items-center hover:bg-blue-200">
          <RiLock2Line  className="text-blue-800 mr-2 ml-4 "/><p className="text-blue-800">Two factor authentication{" "}</p> 
        </div>
        <div className="h-[20%]  flex flex-row justify items-center hover:bg-blue-200">
          <LuKey  className="text-blue-800 mr-2 ml-4 "/>
          <p className="text-blue-800"> Change password</p>
         
        </div>
        <div className="h-[10%]  w-[100%] flex justify items-center">
          <div className="h-[1px] w-[100%] m-auto bg-gray-400"></div>
        </div>
        <div className="h-[20%]  flex flex-row justify items-center hover:bg-blue-200">
          <IoPower  className="text-blue-800 mr-2 ml-4 "/>
          <p className="text-blue-800"> Sign out</p>
         
        </div>
      </div>
    </div>
  );
};
export default Tabar;

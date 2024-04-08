import React, { useState } from "react";
import HeaderId from "../../components/id/HeaderId";
import SiderBar from "../../components/id/SiderBar";
import IdContent from "../../components/id/IdContent";

const HomeId = () => {


  
  const [width1, setWidth1] = useState('w-[5%]');
  const [width2, setWidth2] = useState('w-[95%]');

  const onMouseEnter = () => {
    setWidth1('w-[20%]');
    setWidth2('w-[80%]');
    console.log('Function called from child component!');
    // Perform any desired actions in the parent component
  };

  const onMouseLeave = () => {
    console.log('Function called from child component!');
    setWidth1('w-[5%]');
    setWidth2('w-[95%]');
    // Perform any desired actions in the parent component
  };
  //onMouseEnter={() => handleHover("w-full")}
  //onMouseLeave={() => handleHover("w-full")}
  return (
    <div>
      <HeaderId />
      <div className="flex h-screen flex-row justify-start">
        <div className={` ${width1} h-full`}>
          <SiderBar menu="tab1" onMouseEnter = {onMouseEnter} onMouseLeave = {onMouseLeave}/>
        </div>
        <div className={` ${width2} h-full`}>
          <IdContent />
        </div>
      </div>
    </div>
  );
};

export default HomeId;

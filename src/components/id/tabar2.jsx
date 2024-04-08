import React from "react";
const Tabar2 = () => {
  return (
    <div className="flex flex-col h-[100px] w-[150px] bg-white shadow-lg">
      <div className="flex flex-row  h-[50%] w-[100%] justify-center items-center hover:bg-blue-200">
        <img
          className="h-[18px] w-[20px] mr-2"
          src="https://cdn.pixabay.com/photo/2012/04/10/23/04/vietnam-26834_640.png"
          alt=""
        />
        <p className="text-blue-700">Tiếng Việt </p>
      </div>
      <div className="flex flex-row  h-[50%] w-[100%] justify-center items-center hover:bg-blue-200">
        <img
          className="h-[18px] w-[20px] mr-2"
          src="https://tse4.mm.bing.net/th?id=OIP.rJ-CLSd9oQKSx0lz8INqzgAAAA&pid=Api&P=0&h=220"
          alt=""
        />
        <p className="text-blue-700">English </p>
      </div>
    </div>
  );
};
export default Tabar2;

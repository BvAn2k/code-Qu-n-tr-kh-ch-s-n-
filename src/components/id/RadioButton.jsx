import React, { useState } from "react";
import OtpInput from "./OtpInput";

const RadioButton = () => {
  const [isOpen, setisOpen] = useState(true);
  const [selectedOption, setSelectedOption] = useState("option1");

  const toggleDiv = () => {
    setisOpen(!isOpen);
  };

  const handleOptionClick = (option) => {
    console.log("option", option);
    setSelectedOption(option);
  };

  return (
    <div className="w-full h-full flex flex-col items-center justify-center bg-gray-200">
      <div className="w-[700px] h-auto rounded-md shadow-md  flex flex-col space-y-4  p-2 bg-white">
        <div className="font-bold text-2xl">Bảo mật hai lớp </div>
        <div className="text-gray-500  ">
          Bổ sung thêm một tầng bảo mật khi bạn đăng nhập
        </div>
        <label htmlFor="option1" class="inline-flex items-center ">
          {/* onClick={toggleDiv} */}
          <input
            onClick={() => handleOptionClick("option1")}
            id="option1"
            value="option1"
            checked={selectedOption === "option1"}
            type="radio"
            class="form-radio text-blue-500"
            name="radio"
          />

          <span class=" text-gray-500">
            Xác thực qua email
            
          </span>
        </label>
        <div>
        <p className="text-gray-500 ">
              Sau khi đăng nhập , một email chứa mã xác thực gồm 6 chữ số sẽ
              được gửi đến Email của bạn. Nhập mã xác thực này để tiếp tục đăng
              nhập.
            </p>
        </div>
        <label htmlFor="option2" class="inline-flex items-center">
          <input
            onClick={() => handleOptionClick("option2")}
            id="option2"
            value="option2"
            checked={selectedOption === "option2"}
            type="radio"
            class="form-radio text-blue-500"
            name="radio"
          />
          <span class="ml-2 text-gray-500">Tắt mã bảo mật hai lớp </span>
        </label>
        <br></br>
        <div class="border-b border-gray-500"></div>
        <br></br>
        <br></br>
        <div>
          {selectedOption === "option1" ? (
            <OtpInput />
          ) : (
            <div className="mt-6 ml-5"></div>
          )}

          {/* <div>
          <OtpInput />
        </div>{" "} */}
        </div>
      </div>
    </div>
  );
};

export default RadioButton;

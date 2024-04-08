import React, { useState } from "react";

const OtpInput = () => {
  const [otp, setOtp] = useState("");

  const handleChange = (e) => {
    setOtp(e.target.value);
  };

  return (
    <div class="max-w-4xl mx-auto w-full flex flex-col justify-center  ">
      <div className="text-gray-500 ">
        Chúng tôi đã gửi một mã xác thực đến tài khoản của bạn. Nhập mã xác thực
        vào ô phía dưới để bật chế độ xác thực hai nhân tố cho tài khoản của
        bạn.
      </div>
      <div className="flex space-x-2 mt-10">
        {Array.from({ length: 6 }, (_, index) => (
          <input
            key={index}
            className="w-10 h-10 text-3xl text-center border border-gray-300 rounded "
            type="text"
            maxLength="1"
            value={otp[index] || ""}
            onChange={handleChange}
          />
        ))}
        <button
            className="bg-blue-950 hover:bg-blue-950 text-white font-bold py-1 px-4 rounded-md w-auto justify-center mg-10 "
            type="submit"
          >
            Xác nhận Email
          </button>
      </div>
      <div className="">
        Không nhận được mã xác nhận
        <button
          className="  text-blue-400  py-1 px-4 rounded-md w-[30%] justify-center mg-10 "
          type="submit"
        >
          Gửi lại Email
        </button>
      </div>
    </div>
  );
};

export default OtpInput;

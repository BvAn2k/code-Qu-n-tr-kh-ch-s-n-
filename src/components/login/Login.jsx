import React, { useState } from "react";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    content: "",
  });

  const handleChange = (e) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can perform form submission or any other logic here
    console.log(formData);
  };

  return (
    <div className="w-full h-screen flex justify-center items-center bg-gradient-to-br from-[#020C59] via-[#04115D] to-[#1A4F96]">
      <form
        onSubmit={handleSubmit}
        className="max-w-sm mx-auto mt-[5%] w-[64%] flex flex-col justify-center items-center"
      >
        <div className="mb-2 before:font-normal items-center bg-white text-sm  w-full p-4 border border-gray-300 rounded-2xl focus:outline-none focus:ring-blue-500 focus:border-blue-500 flex flex-col">
          <div>
            <img src="https://id.ezcloud.vn/images/ezCloud3.svg" alt="logo" />
          </div>
          <div className="text-center mt-5">
            <h1 className="text-2xl font-bold"> Đăng Nhập</h1>{" "}
          </div>

          <div className="justify-center flex flex-col w-full h-full">
            <div>
              {" "}
              <h1 className="font-bold ml-2">Email</h1>
            </div>

            <div className="flex flex-row mb-4 font-normal text-sm w-full px-3 py-2 border border-gray-300 rounded-2xl focus:outline-none focus:ring-blue-500 focus:border-blue-500">
              <input
                className="w-full px-3 py-2 rounded-2xl focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
              />
            </div>
          </div>

          <div className="flex flex-col w-full ">
            <div className="flex flex-row justify-between">
              <div className="flex flex-col ml-2 font-bold"> Mật khẩu </div>
              <div className="flex flex-col mg-2 text-blue-500">
                {" "}
                Quên mật khẩu{" "}
              </div>
            </div>

            <div className="mb-4 font-normal bg-white text-sm flex flex-row w-full px-3 py-2 border border-gray-300 rounded-2xl focus:outline-none focus:ring-blue-500 focus:border-blue-500 ">
              <input
                className="w-full px-3 py-2 rounded-2xl focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                placeholder="Mật khẩu"
                type="text"
                id="pass"
                name="pass"
                value={formData.name}
                onChange={handleChange}
              />
            </div>
          </div>

          <button
            className="bg-[#114A9F] hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-md m-5 w-full"
            type="submit"
          >
            Đăng Nhập
          </button>
          <button
            className=" text-blue font-bold py-1 px-4 rounded-2xl m-3 w-full"
            type="submit"
          >
            Đăng ký
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;

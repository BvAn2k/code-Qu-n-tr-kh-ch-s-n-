import React, { useState } from 'react';
import ReCAPTCHA from "react-google-recaptcha";

import { FaUser } from 'react-icons/fa';
import { FaPhone } from 'react-icons/fa';
import { FiMail} from 'react-icons/fi';







const onChange= () =>{};
const SimpleForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    content: ''
  });

  const handleChange = (e) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can perform form submission or any other logic here
    console.log(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto w-[80%] flex flex-col justify-center">
      <div className='text-center mt-5'>Bắt đầu dùng thử </div>
      <div className='w-full flex flex-row justify-between mb-2'>
        <div className='w-[50%] rounded-2xl bg-blue-200 text-sm font-normal py-2 text-center'> 7 ngày dùng thử miễn phí </div>
        <div className='w-[40%] rounded-2xl bg-green-200 text-sm font-normal py-2 text-center'> Không cần thanh toán</div>
      </div>
      <div className="mb-4 font-normal bg-white text-sm flex flex-row w-full px-3 py-2 border border-gray-300 rounded-2xl focus:outline-none focus:ring-blue-500 focus:border-blue-500 ">
        <div>
          <FaUser className="text-2xl text-blue-500 mt-1" />
        </div>
        <input
          className="w-full px-3 py-2 rounded-2xl focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          placeholder='Họ tên'
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
      </div>
      <div className="mb-4 font-normal text-sm w-full px-3 py-2 border border-gray-300 rounded-2xl focus:outline-none focus:ring-blue-500 focus:border-blue-500 flex flex-row">
        <FaPhone className="text-2xl text-green-500 mt-1" />
        <input
          className="w-full px-3 py-2 rounded-2xl focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          type="text"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          placeholder='Số điện thoại'
        />
      </div>
      <div className="flex flex-row mb-4 font-normal text-sm w-full px-3 py-2 border border-gray-300 rounded-2xl focus:outline-none focus:ring-blue-500 focus:border-blue-500">
      <FiMail className="text-4xl text-blue-500" />    
      <input
          className="w-full px-3 py-2 rounded-2xl focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder='Email'
        />
</div>
<ReCAPTCHA
    sitekey="6LfjAi8pAAAAAD953FCzLTqiHoapW4jvR6w4TLUG"
    onChange={onChange}
  />

  <div></div>



      <button
        className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-2xl m-5"
        type="submit"
      >
        Đăng ký dùng thử
      </button>
      
    </form>
    
  );
};

export default SimpleForm;
import React, { useState } from 'react';
import ReCAPTCHA from "react-google-recaptcha";
import { FaUser } from 'react-icons/fa';
import { FaPhone } from 'react-icons/fa';
import { FiMail, FiMapPin} from 'react-icons/fi';
import { MdHotel } from 'react-icons/md';




const onChange= () =>{};
const TuVan = () => {
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
        <form onSubmit={handleSubmit} className="max-w-md mx-auto w-[80%] flex flex-col justify-center ">
          <div className='text-center mt-5'>Đăng ký tư vấn  </div>
          <div className='w-full flex flex-row justify-between mb-2'>
            
          </div>
          <div className="mb-4 font-normal bg-white text-sm flex flex-row w-full px-3 py-2 border border-gray-300 rounded-2xl focus:outline-none focus:ring-blue-500 focus:border-blue-500 ">
            <div>
              <FaUser className="text-2xl text-gray-500"  />
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
            <FaPhone className="text-2xl text-gray-500"  />
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
          <FiMail className="text-4xl text-gray-500" />    
          <input
              className="w-full px-3 py-2 rounded-2xl focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder='Email'
            /></div>


<div className="flex flex-row mb-4 font-normal text-sm w-full px-3 py-2 border border-gray-300 rounded-2xl focus:outline-none focus:ring-blue-500 focus:border-blue-500">
<MdHotel className="w-6 h-6 text-gray-500" />
          <input
              className="w-full px-3 py-2 rounded-2xl focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              type="Hotel"
              id="Hotel"
              name="Hotel"
              value={formData.email}
              onChange={handleChange}
              placeholder='Khách sạn '
            />
        
    </div>

<div className="flex flex-row mb-4 font-normal text-sm w-full px-3 py-2 border border-gray-300 rounded-2xl focus:outline-none focus:ring-blue-500 focus:border-blue-500">
          <FiMapPin className="w-6 h-6 text-gray-500" />   
          <input
              className="w-full px-3 py-2 rounded-2xl focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              type="Andress"
              id="Anderess"
              name="Anderess"
              value={formData.email}
              onChange={handleChange}
              placeholder='Địa chỉ '
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
           Nhận tư vấn miễn phí 
          </button>
          
        </form>
        
      );
    };
    

export default TuVan;

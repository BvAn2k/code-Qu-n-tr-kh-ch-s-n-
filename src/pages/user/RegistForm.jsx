import React, { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { FaUser } from "react-icons/fa";
import { FaPhone } from "react-icons/fa";
import { FiMail, FiMapPin } from "react-icons/fi";
import { MdHotel } from "react-icons/md";

const onChange = () => {};
const RegistForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
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
    <div className=" flex flex-row  bg-[#E6F2FF] ">
      <form 
        onSubmit={handleSubmit} className="max-w-md mx-auto w-[80%] flex rounded-md bg-white p-5 mt-[5%] mb-[2%] flex-col justify-center m-100 ml-20 "
      >
        <div className="text-center mt-5  text-xl">Bắt đầu dùng thử </div>
        <div className='w-full flex flex-row justify-between mb-2'>
        <div className='w-[50%] rounded-2xl bg-blue-200 text-sm font-normal py-2 text-center'> 7 ngày dùng thử miễn phí </div>
        <div className='w-[40%] rounded-2xl bg-green-200 text-sm font-normal py-2 text-center'> Không cần thanh toán</div>
      </div>
        <div className="w-full flex flex-row justify-between mb-2"></div>
        <div className="mb-4 font-normal bg-white text-sm flex flex-row w-full px-3 py-2 border border-gray-300 rounded-2xl focus:outline-none focus:ring-blue-500 focus:border-blue-500 ">
          <div>
            <FaUser className="text-2xl text-gray-500" />
          </div>
          <input
            className="w-full px-3 py-2 rounded-2xl focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            placeholder="Họ tên"
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </div>

        <div className="mb-4 font-normal bg-white text-sm flex flex-row w-full px-3 py-2 border border-gray-300 rounded-2xl focus:outline-none focus:ring-blue-500 focus:border-blue-500 ">
          <FaPhone className="text-2xl text-gray-500" />
          <input
            className="w-full px-3 py-2 rounded-2xl focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            type="text"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Số điện thoại"
          />
        </div>

        <div className="mb-4 font-normal bg-white text-sm flex flex-row w-full px-3 py-2 border border-gray-300 rounded-2xl focus:outline-none focus:ring-blue-500 focus:border-blue-500 ">
          <FiMail className="text-4xl text-gray-500" />
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
        <ReCAPTCHA
    sitekey="6LfjAi8pAAAAAD953FCzLTqiHoapW4jvR6w4TLUG"
    onChange={onChange}
  />

        

        <button
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-2xl m-5"
          type="submit"
        >
          Nhận tư vấn miễn phí
        </button>
      </form>
      <div className="flex flex-col items-center">
        <div className=" justify-items-center flex-col m-2 flex">
          <h1 className="text-center text-4xl text-black-500 font-bold">
            Đối tác & Khách hàng tiêu biểu
          </h1>
        </div>

        <div></div>

        <div className="w-[80%] flex flex-col justify-center justify-items-center items-center">
          <div className="flex-row flex justify-center justify-items-center">
            <div className="flex flex-col m-1 w-[15%]">
              <img
                src="https://ezcloud.vn/wp-content/uploads/2023/06/khach-hang-ezcloud-google.png"
                alt=""
              />
            </div>

            <div className="flex flex-row m-1 w-[15%] ">
              <img
                src="https://ezcloud.vn/wp-content/uploads/2023/06/khach-hang-ezcloud-sun-group.png"
                alt=""
              />
            </div>

            <div className="flex flex-row m-1 w-[15%]">
              <img
                src="https://ezcloud.vn/wp-content/uploads/2023/06/khach-hang-ezcloud-tng.png"
                alt=""
              />
            </div>

            <div className="flex flex-row m-1 w-[15%]">
              <img
                src="https://ezcloud.vn/wp-content/uploads/2023/06/khach-hang-ezcloud-tc-group.png"
                alt=""
              />
            </div>

            <div className="flex flex-row m-1 w-[15%]">
              <img
                src="https://ezcloud.vn/wp-content/uploads/2023/06/khach-hang-ezcloud-geleximco.png"
                alt=""
              />
            </div>

            <div className="flex flex-row m-1 w-[15%]">
              <img
                src="https://ezcloud.vn/wp-content/uploads/2023/06/khach-hang-ezcloud-nova-group.png"
                alt=""
              />
            </div>
          </div>

          <div className="flex-row flex justify-center justify-items-center">
            <div className="flex flex-col m-1 w-[15%]">
              <img
                src="https://ezcloud.vn/wp-content/uploads/2023/06/khach-hang-ezticket-sunworld.png"
                alt=""
              />
            </div>

            <div className="flex flex-row m-1 w-[15%] ">
              <img
                src="https://ezcloud.vn/wp-content/uploads/2023/06/khach-hang-ezticket-son-tien.png"
                alt=""
              />
            </div>

            <div className="flex flex-row m-1 w-[15%]">
              <img
                src="https://ezcloud.vn/wp-content/uploads/2023/06/khach-hang-ezticket-doi-rong-do-son.png"
                alt=""
              />
            </div>

            <div className="flex flex-row m-1 w-[15%]">
              <img
                src="https://ezcloud.vn/wp-content/uploads/2023/06/khach-hang-ezticket-asia-park.png"
                alt=""
              />
            </div>

            <div className="flex flex-row m-1 w-[15%]">
              <img
                src="https://ezcloud.vn/wp-content/uploads/2023/06/khach-hang-ezticket-baden.png"
                alt=""
              />
            </div>

            <div className="flex flex-row m-1 w-[15%]">
              <img
                src="https://ezcloud.vn/wp-content/uploads/2023/06/khach-hang-ezticket-nova-world.png"
                alt=""
              />
            </div>
          </div>

          <div className="flex-row flex justify-center justify-items-center">
            <div className="flex flex-col m-1 w-[15%]">
              <img
                src="https://ezcloud.vn/wp-content/uploads/2023/06/khach-hang-ezcloud-vnpay.png"
                alt=""
              />
            </div>

            <div className="flex flex-row m-1 w-[15%] ">
              <img
                src="https://ezcloud.vn/wp-content/uploads/2023/06/khach-hang-ezpayment-napas.png"
                alt=""
              />
            </div>

            <div className="flex flex-row m-1 w-[15%]">
              <img
                src="https://ezcloud.vn/wp-content/uploads/2023/06/khach-hang-ezpayment-viettel-money.png"
                alt=""
              />
            </div>

            <div className="flex flex-row m-1 w-[15%]">
              <img
                src="https://ezcloud.vn/wp-content/uploads/2023/06/khach-hang-ezcmt-megapay.png"
                alt=""
              />
            </div>

            <div className="flex flex-row m-1 w-[15%]">
              <img
                src="https://ezcloud.vn/wp-content/uploads/2023/06/khach-hang-ezcmt-onepay.png"
                alt=""
              />
            </div>

            <div className="flex flex-row m-1 w-[15%]">
              <img
                src="https://ezcloud.vn/wp-content/uploads/2023/06/khach-hang-ezcloud-momo.png"
                alt=""
              />
            </div>
          </div>

          <div className="flex-row flex justify-center justify-items-center">
            <div className="flex flex-col m-1 w-[15%]">
              <img
                src="https://ezcloud.vn/wp-content/uploads/2023/06/khach-hang-ezcloud-bo-thong-tin-va-truyen-thong.png"
                alt=""
              />
            </div>

            <div className="flex flex-row m-1 w-[15%] ">
              <img
                src="https://ezcloud.vn/wp-content/uploads/2023/06/khach-hang-ezfolio-truong-cao-dang-nghe-du-lich-vung-tau.png"
                alt=""
              />
            </div>

            <div className="flex flex-row m-1 w-[15%]">
              <img
                src="https://ezcloud.vn/wp-content/uploads/2023/06/khach-hang-ezfolio-trung-tam-hoi-nghi-quoc-gia.png"
                alt=""
              />
            </div>

            <div className="flex flex-row m-1 w-[15%]">
              <img
                src="https://ezcloud.vn/wp-content/uploads/2023/06/khach-hang-ezfolio-cong-doan-ha-noi.png"
                alt=""
              />
            </div>

            <div className="flex flex-row m-1 w-[15%]">
              <img
                src="https://ezcloud.vn/wp-content/uploads/2023/06/khach-hang-ezcmt-cao-dang-nghe-thuong-mai-du-lich-nghe-an.png"
                alt=""
              />
            </div>

            <div className="flex flex-row m-1 w-[15%]">
              <img
                src="https://ezcloud.vn/wp-content/uploads/2023/06/khach-hang-ezcmt-cao-dang-viet-my.png"
                alt=""
              />
            </div>
          </div>

          <div className="flex-row flex justify-center justify-items-center">
            <div className="flex flex-col m-1 w-[15%]">
              <img
                src="https://ezcloud.vn/wp-content/uploads/2023/06/khach-hang-ezcmt-vietravel.png"
                alt=""
              />
            </div>

            <div className="flex flex-row m-1 w-[15%] ">
              <img
                src="https://ezcloud.vn/wp-content/uploads/2023/06/khach-hang-ezcmt-hanoitourist.png"
                alt=""
              />
            </div>

            <div className="flex flex-row m-1 w-[15%]">
              <img
                src="https://ezcloud.vn/wp-content/uploads/2023/06/khach-hang-ezcmt-hanoitourist.png"
                alt=""
              />
            </div>

            <div className="flex flex-row m-1 w-[15%]">
              <img
                src="https://ezcloud.vn/wp-content/uploads/2023/06/khach-hang-ezcmt-du-lich-tam-nhin-viet.png"
                alt=""
              />
            </div>

            <div className="flex flex-row m-1 w-[15%]">
              <img
                src="https://ezcloud.vn/wp-content/uploads/2023/06/logo-ben-thanh-tourist.png"
                alt=""
              />
            </div>

            <div className="flex flex-row m-1 w-[15%]">
              <img
                src="https://ezcloud.vn/wp-content/uploads/2023/06/metatrip.png"
                alt=""
              />
            </div>
          </div>

          <div className="flex-row flex justify-center justify-items-center mb-5">
            <div className="flex flex-col m-1 w-[15%]">
              <img
                src="https://ezcloud.vn/wp-content/uploads/2023/06/khach-hang-ezcloud-trip.com_.png"
                alt=""
              />
            </div>

            <div className="flex flex-row m-1 w-[15%] ">
              <img
                src="https://ezcloud.vn/wp-content/uploads/2023/06/khach-hang-ezcloud-hotelbeds.png"
                alt=""
              />
            </div>

            <div className="flex flex-row m-1 w-[15%]">
              <img
                src="https://ezcloud.vn/wp-content/uploads/2023/06/khach-hang-ezcloud-sabre.png"
                alt=""
              />
            </div>

            <div className="flex flex-row m-1 w-[15%]">
              <img
                src="https://ezcloud.vn/wp-content/uploads/2023/06/khach-hang-ezcloud-booking.com_.png"
                alt=""
              />
            </div>

            <div className="flex flex-row m-1 w-[15%]">
              <img
                src="https://ezcloud.vn/wp-content/uploads/2023/06/khach-hang-ezcloud-agoda.png"
                alt=""
              />
            </div>

            <div className="flex flex-row m-1 w-[15%]">
              <img
                src="https://ezcloud.vn/wp-content/uploads/2023/06/khach-hang-ezcloud-200-ota.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default RegistForm;

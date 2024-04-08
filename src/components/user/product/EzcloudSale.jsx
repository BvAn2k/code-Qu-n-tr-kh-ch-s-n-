import React from "react";
import { FaGem } from "react-icons/fa";
const EzcloudSale = () => {
  return (
    <div className="w-full h-auto flex flex-col justify-items-center">
      <div className="w-full h-auto flex flex-row mt-40">
        <div className="w-full h-auto flex flex-col ml-40">
          <div className="mt-20 w-[350px] h-auto text-3xl font-bold text-blue-700">
            Quản lý bán hàng thông minh, kết nối mọi điểm bán hàng
          </div>

          <div className="flex flex-row m-3">
            <div className="w-[20px] h-[10px] ">
              <img
                className="object-cover"
                src="https://hieumobile.com/wp-content/uploads/tich-xanh.png"
                alt=""
              />
            </div>
            <div className=" w-[60%] text-l  ">
              Quản lý mọi giao dịch tại quầy Minibar, cộng hoá đơn vào tiền
              phòng khách sạn, tiện lợi cho khách chỉ cần thanh toán 1 lần khi
              check out
            </div>
          </div>

          <div className="flex flex-row m-3">
            <div className="w-[20px] h-[10px] ">
              <img
                className="object-cover"
                src="https://hieumobile.com/wp-content/uploads/tich-xanh.png"
                alt=""
              />
            </div>
            <div className=" w-[95%] text-l  ">
              Liên tục nâng cấp các tính năng miễn phí đáp ứng mọi nhu cầu quản
              trị
            </div>
          </div>

          <button className="bg-blue-600 rounded-full text-white w-[200px] h-full mt-4 mr-14 mb-14 ml-4 flex flex-row">
            <FaGem className="w-[20px] h-[20px] mt-3 ml-2" />
            <p className="m-2">Dùng thử miễn phí</p>
          </button>
        </div>
        <img
          src="https://ezcloud.vn/wp-content/uploads/2023/05/Frame-68708-1.png"
          alt="p1"
          className="w-[700px] h-[400px] mr-5"
        />
      </div>
    </div>
  );
};

export default EzcloudSale;

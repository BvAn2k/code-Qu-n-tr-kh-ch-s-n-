import React from "react";
import { FaGem } from "react-icons/fa";
const EzcloudBusiness = () => {
  return (
    <div className="w-full h-auto flex flex-col">
      <div className="w-[80%] h-auto justify-center ml-36">
        <div className="w-full h-auto flex flex-row">
          <img
            src="https://ezcloud.vn/wp-content/uploads/2023/05/Frame-68710.png"
            alt="p1"
            className="w-[700px] h-[400px] mr-5"
          />

          <div className="w-full h-auto flex flex-col ">
            <div className="mt-20 w-[350px] h-auto text-3xl font-bold text-blue-700">
              Hỗ trợ kinh doanh tối đa
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
              Kết nối trực tiếp với 200+ kênh OTAs toàn cầu và hệ thống tìm kiếm Google Hotel tăng công suất bán phòng tối đa
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
              Tự động đồng bộ phòng trống lên tất cả các kênh OTA được kết nối mà không cần truy cập vào từng trang để thao tác
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
              Dữ liệu luôn được lưu giữ trên đám mây đảm bảo tính an toàn và bảo mật cao
              </div>
            </div>

            <button className="bg-blue-600 rounded-full text-white w-[200px] h-full mt-4 mr-14 mb-14 ml-4 flex flex-row">
              <FaGem className="w-[20px] h-[20px] mt-3 ml-2" />
              <p className="m-2">Dùng thử miễn phí</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EzcloudBusiness;

import React from "react";
// Mr. Nam
const Trial = () => {
  return (
    <div className="w-20px h-[50%] flex flex-col bg-[#deedfa]">
      <div className="h-[4px] w-full gradient-container mt-20 mb-10"></div>

      <div className="flex items-center justify-center mt-10 mr-20 mb-5">
        <div className="flex flex-row justify-end w-full h-full mt-5 mb-5">
          <div className=" w-[50%] flex flex-col  text-white">
            <p className="font-bold text-4xl bg-gray-1000  text-blue-500">
              Nền tảng quản trị khách sạn
            </p>
            <p className="font-bold text-4xl bg-gray-1000  text-blue-500">
              thị phần số 1 Việt Nam
            </p>
            <p className="text-black w-[50%] text-xl mt-5"> ezCloud là công ty Việt Nam đầu tiên cung cấp giải pháp phần mềm quản lý khách sạn ra nước ngoài với sự có mặt ở 80 tỉnh thành phố và 5 quốc gia trên thế giới.</p>
            <div className="mt-5 w-[200px] rounded-xl font-bold flex justify-center items-center h-[35px] px-3 py-2 bg-blue-600">
              <p className="text-center">Đăng ký dùng thử</p>

            </div>

          </div>
         
          <img
            className="w-[600px] h-[300px] "
            src="https://ezcloud.vn/wp-content/uploads/2023/06/ezcloudhotel-da-man-hinh.webp"
            alt="anh "
          />
        </div>
      </div>
    </div>
  );
};

export default Trial;

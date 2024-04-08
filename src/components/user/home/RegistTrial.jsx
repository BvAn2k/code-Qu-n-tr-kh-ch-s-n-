import React from "react";
import SimpleForm from "./SimpleForm";
// Mr. Toan
const RegistTrial = () => {
  return (
    <div className="flex w-full mt-[60px] bg-blue-50 justify-center">
     <div className="w-[80%] mt-5 mb-5 flex flex-row">
          <div className="w-[55%] flex flex-col m-5">
            <div className=" w-[90%] flex flex-col text-3xl font-bold text-blue-700 m-5">
              Bắt đầu dùng thử giải pháp phần mềm của EzCloud
            </div>
            <div className="flex flex-row m-3">
              <div className="w-[20px] h-[10px]">
                <img
                  className="object-cover"
                  src="https://hieumobile.com/wp-content/uploads/tich-xanh.png"
                  alt=""
                />
              </div>
              <div className=" w-[95%] text-xl  ">Không Hợp Đồng</div>
            </div>

            <div className="flex flex-row m-3">
              <div className="w-[20px] h-[10px] ">
                <img
                  className="object-cover"
                  src="https://hieumobile.com/wp-content/uploads/tich-xanh.png"
                  alt=""
                />
              </div>
              <div className=" w-[95%] text-xl  ">Không rủi ro</div>
            </div>

            <div className="flex flex-row m-3">
              <div className="w-[20px] h-[10px]">
                <img
                  className="object-cover"
                  src="https://hieumobile.com/wp-content/uploads/tich-xanh.png"
                  alt=""
                />
              </div>
              <div className=" w-[95%] text-xl  ">Hoàn toàn miễn phí </div>
            </div>

            <div className=" w-[95%] text-xl  ">
              Tích hợp tất cả các ứng dụng doanh nghiệp của bạn đang cần trên
              cùng một nền tảng duy nhất . Được tin dùng bởi những đối tác hàng
              đầu{" "}
            </div>
          </div>

          <div className="w-[45%] flex flex-col text-2xl font-bold shadow-2xl shadow-black-500 rounded-xl bg-white">
            <SimpleForm />
          </div>
        </div>

     
    </div>
  );
};

export default RegistTrial;

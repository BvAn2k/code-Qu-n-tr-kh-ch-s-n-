
import React from "react";
//Mr. Duong
const Product = () => {
  return (
    <div className="w-full h-auto flex justify-center">
      <div className="w-[80%] flex flex-col justify-center">
        <div className="w-full h-[100px] flex flex-col">
          <div className="w-full flex justify-center items-center text-4xl font-bold text-blue-700">
            Sản Phẩm
          </div>

          <div className="w-full flex justify-center items-center font-bold text-blue-700 text-3xl">
            ---------------{" "}
          </div>
        </div>

        <div class="flex overflow-x-auto w-full mx-auto  ">
          <div class="w-full flex justify-center">
           
            <img
              class="w-64 mr-3"
              src="https://ezcloud.vn/wp-content/uploads/2023/04/logo-ezticket.svg"
              alt="Image 2"
            />
            <img
              class="w-64 mr-3"
              src="https://ezcloud.vn/wp-content/uploads/2023/04/logo-ezticket.svg"
              alt="Image 3"
            />
            <img
              class="w-64 mr-3"
              src="https://ezcloud.vn/wp-content/uploads/2023/04/logo-ezticket.svg"
              alt="Image 4"
            />
            <img
              class="w-64 mr-3"
              src="https://ezcloud.vn/wp-content/uploads/2023/04/logo-ezticket.svg"
              alt="Image 5"
            />
            <img
              class="w-64 mr-3"
              src="https://ezcloud.vn/wp-content/uploads/2023/04/logo-ezfolio.svg"
              alt="Image 6"
            />
     
          </div>
        </div>

        <div className="w-[100%] h-auto flex flex-row  mt-[100px]  ml-20">
          <div className="h-[500px] flex flex-col w-[50%]">
            <div className="w-[600px] h-100px text-5xl font-bold text-blue-700 ">
              Khách hàng thành công với sản phẩm ezCloud
            </div>
            <div className="w-full h-[150px] flex flex-row mt-10">
              <div className="w-[40%] h-[100px] text-8xl text-blue-700 font-bold">
                900+
              </div>

              <div className="w-[300px] h-[300px] text-xl text-blue-700 font-bold">
                Doanh nghiệp lớn nhỏ tại Việt Nam và Đông Nam Á sử dụng sản phẩm
                của ezCloud
              </div>
            </div>

            <div className="w-auto h-[50px] text-xl text-blue-700 font-bold">
              ---------
            </div>

            <div className="w-full h-auto flex flex-row">
              <div className="w-full h-auto flex flex-col">
                <div className="w-[100px] h-[70px] text-center font-bold text-l text-blue-700">
                  Vận hành tối ưu
                </div>
                <div className="w-[50px] h-[50px] flex justify-center items-center ml-5">
                  <img src="https://ezcloud.vn/wp-content/uploads/2023/06/operating-system.png" />
                </div>
              </div>

              <div className="w-full h-auto flex flex-col">
                <div className="w-[100px] h-[70px] text-center font-bold text-l text-blue-700">
                  Kinh doanh hiệu quả
                </div>
                <div className="w-[50px] h-[50px] flex justify-center items-center ml-5">
                  <img src="https://ezcloud.vn/wp-content/uploads/2023/06/operating-system.png" />
                </div>
              </div>

              <div className="w-full h-auto flex flex-col">
                <div className="w-[100px] h-[70px] text-center font-bold text-l text-blue-700">
                  Phân phối thông minh
                </div>
                <div className="w-[50px] h-[50px] flex justify-center items-center ml-5">
                  <img src="https://ezcloud.vn/wp-content/uploads/2023/06/operating-system.png" />
                </div>
              </div>

              <div className="w-full h-auto flex flex-col">
                <div className="w-[100px] h-[70px] text-center font-bold text-l text-blue-700">
                  Công nghệ mới nhất
                </div>
                <div className="w-[50px] h-[50px] flex justify-center items-center ml-5">
                  <img src="https://ezcloud.vn/wp-content/uploads/2023/06/operating-system.png" />
                </div>
              </div>
            </div>
          </div>

          <div className=" items-center w-[50%]">
            <img alt="abc" src="https://ezcloud.vn/wp-content/uploads/2023/04/Frame-68376.png " />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;

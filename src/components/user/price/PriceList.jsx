import React, { useState } from "react";
// import BackgroundImage from "../../../assets/backgound-pricelist.png";
// Mr. Khoa
const PriceList = () => {
  const [isOpen, setisOpen] = useState(true);
  const [isOpen2, setisOpen2] = useState(true);
  const [isOpen3, setisOpen3] = useState(true);
  const [isOpen4, setisOpen4] = useState(true);
  const [isOpen5, setisOpen5] = useState(true);
  const [isOpen6, setisOpen6] = useState(true);

  const [selectedOption, setSelectedOption] = useState("option1");

  const toggleDiv = () => {
    setisOpen(!isOpen);
  };
  const toggleDiv2 = () => {
    setisOpen2(!isOpen2);
  };
  const toggleDiv3 = () => {
    setisOpen3(!isOpen3);
  };
  const toggleDiv4 = () => {
    setisOpen4(!isOpen4);
  };
  const toggleDiv5 = () => {
    setisOpen5(!isOpen5);
  };
  const toggleDiv6 = () => {
    setisOpen6(!isOpen6);
  };

  const handleOptionClick = (option) => {
    console.log("option", option);
    setSelectedOption(option);
  };
  const textNull = "";

  return (
    <div className="flex flex-col justify-center w-full h-full">
      <div className="flex flex-row justify-center">
        <div className="flex flex-col justify-center h-full w-[35%] m-10">
          <div className="font-bold text-3xl">
            Lựa chọn báo giá phù hợp với bạn!
          </div>
          <br />
          <div className="flex flex-col  w-full h-full bg-cover bg-center">
            <div>
              <button
                className={`flex  text-black font-bold text-lg 
            focus:outline-none w-full`}
                onClick={toggleDiv}
              >
                <span className=" flex justify-start items-start w-[80%]">
                  Khách sạn từ 0 - 2 sao
                </span>
                <div className="font-bold text-2xl flex justify-end items-end w-[20%]">
                  -
                </div>
              </button>
              <div
                className={` overflow-hidden transition-max-height duration-500 bg-white ${
                  isOpen ? "max-h-0" : "max-h-60"
                }`}
              >
                <div className="w-full text-justify">
                  <p>
                    Bộ phần mềm ezCloudhotel, ezCloudhotel Manager, ezInvoice,
                    ezCrs, ezCms Leo, ezRms, ezWeb, ezBe, ezPayment cung cấp đầy
                    đủ các tính năng cần thiết nhằm hỗ trợ hoạt động quản lý
                    toàn diện cho mô hình khách sạn vừa và nhỏ như: vận hành tối
                    ưu, quản lý phân phối, đặt phòng thông minh…
                  </p>
                </div>
              </div>
            </div>

            <div>
              <button
                className={`flex mt-5 text-black font-bold text-lg 
            focus:outline-none w-full`}
                onClick={toggleDiv2}
              >
                <span className="flex justify-start items-start w-[80%]">
                  Khách sạn từ 3 - 5 sao
                </span>
                <div className="font-bold text-2xl flex justify-end items-end w-[20%]">
                  -
                </div>
              </button>
              <div
                className={`overflow-hidden transition-max-height duration-500 bg-white ${
                  isOpen2 ? "max-h-0" : "max-h-60"
                }`}
              >
                <div className="w-full text-justify">
                  <p>
                    Bộ phần mềm ezFolio, ezPos, ezBac, ezInvoice, ezBi,
                    ezAccounting, ezCrs, ezCms Leo, ezRms được nhiều hệ thống
                    khách sạn 3-5 sao tin dùng với các tính năng ưu việt: đồng
                    bộ dữ liệu, bán phòng trên các kênh OTA, quản lý bán hàng
                    trên đa dạng nền tảng
                  </p>
                </div>
              </div>
            </div>

            <div>
              <button
                className={`flex mt-5 text-black font-bold text-lg 
            focus:outline-none w-full`}
                onClick={toggleDiv3}
              >
                <span className="flex justify-start items-start w-[80%]">
                  Khu vui chơi
                </span>
                <div className="font-bold text-2xl flex justify-end items-end w-[20%]">
                  -
                </div>
              </button>
              <div
                className={`overflow-hidden transition-max-height duration-500 bg-white ${
                  isOpen3 ? "max-h-0" : "max-h-60"
                }`}
              >
                <div className="w-full text-justify">
                  <p>
                    Bộ phần mềm ezTicket, ezPos, ezBac, ezPayment, ezBi,
                    OneInventory ezCms Leo, ezWeb, ezBe mang đến các giải pháp
                    tích hợp hỗ trợ đặt vé, bán vé trực tuyến, quản lý hoạt động
                    toàn bộ hệ thống, thanh toán trực tuyến và tối ưu website
                    hiệu quả phù hợp với hầu hết các loại hình vui chơi
                  </p>
                </div>
              </div>
            </div>

            <div>
              <button
                className={`flex mt-5 text-black font-bold text-lg 
            focus:outline-none w-full`}
                onClick={toggleDiv4}
              >
                <span className="flex justify-start items-start w-[80%]">
                  Quản lý sân Golf
                </span>
                <div className="font-bold text-2xl flex justify-end items-end w-[20%]">
                  -
                </div>
              </button>
              <div
                className={`overflow-hidden transition-max-height duration-500 bg-white ${
                  isOpen4 ? "max-h-0" : "max-h-60"
                }`}
              >
                <div className="w-full text-justify">
                  <p>
                    Bộ phần mềm ezGolf, ezPos, ezBac, ezInvoice, ezBi, ezWen,
                    ezBo, ezPayment là giải pháp tổng thể tích hợp đầy đủ mọi
                    tính năng liên quan đến quản lý vận hành sân Golf tổng thể,
                    tối ưu hóa quy trình trên nền tảng công nghệ mới, báo cáo
                    trực quan, giao diện thân thiện dành cho mô hình kinh doanh
                    Golf hiện đại
                  </p>
                </div>
              </div>
            </div>

            <div>
              <button
                className={`flex mt-5 text-black font-bold text-lg 
            focus:outline-none w-full`}
                onClick={toggleDiv5}
              >
                <span className=" flex justify-start items-start w-[80%]">
                  Homestay, Hotel
                </span>
                <div className="font-bold text-2xl flex justify-end items-end w-[20%]">
                  -
                </div>
              </button>
              <div
                className={`overflow-hidden transition-max-height duration-500 bg-white ${
                  isOpen5 ? "max-h-0" : "max-h-60"
                }`}
              >
                <div className="w-full text-justify">
                  <p>
                    Bộ phần mềm ezCloudhotel, ezInvoice , ezCloudhotel Manager,
                    ezCms Leo, ezRms, ezWeb, ezBe, ezPayment là mô hình nền tảng
                    phù hợp với nhu cầu quản lý và vận hành của Homestay/ Hotel/
                    Cơ sở lưu trú. Là giải pháp hữu hiệu kết hợp đa dạng các
                    chức năng hỗ trợ như đồng bộ dữ liệu giúp quản lý từ xa mọi
                    lúc, mọi nơi, cập nhật hoạt động booking nhanh chóng, tối ưu
                    công suất làm việc và chi phí nhân sự
                  </p>
                </div>
              </div>
            </div>

            <div>
              <button
                className={`flex mt-5  text-black font-bold text-lg 
            focus:outline-none w-full`}
                onClick={toggleDiv6}
              >
                <span className=" flex justify-start items-start w-[80%]">
                  Khách sạn nghỉ giờ
                </span>
                <div className="font-bold text-2xl flex justify-end items-end w-[20%]">
                  -
                </div>
              </button>
              <div
                className={`overflow-hidden transition-max-height duration-500 bg-white ${
                  isOpen6 ? "max-h-0" : "max-h-60"
                }`}
              >
                <div className="w-full text-justify">
                  <p>
                    Bộ phần mềm ezCloudhotel, ezCloudhotel Manager, ezCms Leo,
                    ezRms, ezWeb, ezBe, ezPayment cung cấp đầy đủ các tính năng
                    liên quan đến hệ thống booking phòng cập nhật theo giờ, đồng
                    bộ dữ liệu và kinh doanh hiệu quả. Mô hình phù hợp cho các
                    khách sạn nghỉ giờ
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center w-[35%] m-10">
          <button
            className={`w-full h-16 bg-white text-black text-lg rounded-lg border-2  
          flex flex-row justify-start shadow-md
          ${
            selectedOption === "option1" ? "border-blue-500" : "border-gray-100"
          }`}
            onClick={() => handleOptionClick("option1")}
          >
            {textNull}
            <input
              type="radio"
              id="option1"
              value="option1"
              checked={selectedOption === "option1"}
              onChange={() => {}}
              className="mt-6 ml-5"
            />
            <div className="mt-4 ml-3">Miễn phí dùng thử 7 ngày</div>
          </button>
          <br />
          <button
            className={`w-full h-16 bg-white text-black text-lg rounded-lg border-2 
          flex flex-row justify-start shadow-md
          ${
            selectedOption === "option2" ? "border-blue-500" : "border-gray-100"
          }`}
            onClick={() => handleOptionClick("option2")}
          >
            {textNull}

            <input
              type="radio"
              id="option2"
              value="option2"
              checked={selectedOption === "option2"}
              onChange={() => {}}
              className="mt-6 ml-5"
            />
            <div className="mt-4 ml-3">Nhận báo giá chi tiết theo nhu cầu</div>
          </button>
          <br />
          <div className="flex flex-col justify-center bg-white border-2 border-gray-100 rounded-2xl shadow-md">
            <div className="flex flex-row justify-start border-2 border-gray-100 rounded-full mt-5 ml-5 mr-5">
              <img
                className="w-[15px] h-[15px] m-3"
                src="https://cdn-icons-png.flaticon.com/128/456/456212.png"
                alt=""
              />
              <input
                type="text"
                placeholder="Họ và tên"
                className="w-[200px] focus:outline-none"
              />
            </div>
            <div className="flex flex-row justify-start border-2 border-gray-100 rounded-full ml-5 mr-5 mt-3">
              <img
                className="w-[15px] h-[15px] m-3"
                src="https://cdn-icons-png.flaticon.com/128/597/597177.png"
                alt=""
              />
              <input
                type="text"
                placeholder="Số điện thoại"
                className="w-[200px] focus:outline-none"
              />
            </div>
            <div className="flex flex-row justify-start border-2 border-gray-100 rounded-full ml-5 mr-5 mt-3">
              <img
                className="w-[15px] h-[15px] m-3"
                src="https://cdn-icons-png.flaticon.com/128/2099/2099199.png"
                alt=""
              />
              <input
                type="text"
                placeholder="Email"
                className="w-[200px] focus:outline-none"
              />
            </div>
            <div className="flex flex-row justify-start border-2 border-gray-100 rounded-full ml-5 mr-5 mt-3">
              <img
                className="w-[15px] h-[15px] m-3"
                src="https://cdn-icons-png.flaticon.com/128/795/795521.png"
                alt=""
              />
              <input
                type="text"
                placeholder="Tên khách sạn"
                className="w-[200px] focus:outline-none"
              />
            </div>
            <div className="flex flex-row justify-start border-2 border-gray-100 rounded-full ml-5 mr-5 mt-3">
              <img
                className="w-[15px] h-[15px] m-3"
                src="https://cdn-icons-png.flaticon.com/128/484/484167.png"
                alt=""
              />
              <input
                type="text"
                placeholder="Địa chỉ"
                className="w-[200px] focus:outline-none"
              />
            </div>
            <div>
              <div className="mb-5">
                <button className="bg-blue-500 rounded-full mt-3 w-[93%]">
                  <p className="m-3 text-white">Gửi thông tin</p>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-row justify-center w-full h-full bg-blue-800">
        <div className="font-bold text-white text-3xl m-14">
          Đăng ký nhận tin miễn phí từ ezCloud
        </div>
        <div className="flex flex-row justify-cente border-2 border-gray-300 rounded-full w-[300px] h-full mt-14 ml-14 mb-14">
          <img
            className="w-[20px] h-[20px] m-2 mt-2.5 ml-2.5"
            src="https://cdn-icons-png.flaticon.com/128/526/526901.png"
            alt=""
          />
          <input
            type="email"
            className="bg-blue-800 m-1 text-white focus:outline-none"
            placeholder="Email"
          ></input>
        </div>
        <button className="bg-white rounded-full text-blue-500 w-[150px] h-full mt-14 mr-14 mb-14 ml-10">
          <p className="m-2">Đăng ký ngay</p>
        </button>
      </div>
    </div>
  );
};

export default PriceList;

import React, { useState } from "react";
import Nav from "./Nav";
import RegistHeader from "./RegistHeader";
import logoEz from "../../assets/logo.png";
import ezBe from "../../assets/ezBe.png";
import ezBl from "../../assets/ezBl.png";
import ezCmt from "../../assets/ezCmt.png";
import ezCmsLeo from "../../assets/ezCmsLeo.png";
import ezCloudhotel from "../../assets/ezCloudhotel.png";
import ezCrs from "../../assets/ezCrs.png";
import ezFolio from "../../assets/ezFolio.png";
import ezGolf from "../../assets/ezGolf.png";
import ezInvoice from "../../assets/ezInvoice.png";
import ezPayment from "../../assets/ezPayment.png";
import ezRms from "../../assets/ezRms.png";
import ezTicket from "../../assets/ezTicket.png";
import OneInventory from "../../assets/OneInventory.png";
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMenuOpen2, setIsMenuOpen2] = useState(false);

  const [popupContent, setPopupContent] = useState(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleMenu2 = () => {
    setIsMenuOpen2(!isMenuOpen2);
  };

  const handleMouseEnter = (content) => {
    setPopupContent(content);
  };

  const handleMouseLeave = () => {
    setPopupContent(null);
  };
  return (
    <div className="w-full h-[90px] bg-white flex flex-row justify-center">
      <div className="w-[80%]  flex flex-row justify-between">
        <div className="flex flex-row items-center">
          <img src={logoEz} className="w-[146px] h-[27px]" alt="logo-ezcloud" />
          <Nav
          isMenuOpen={isMenuOpen}
            toggleMenu={toggleMenu}
            toggleMenu2={toggleMenu2}
            handleMouseEnter={handleMouseEnter}
            handleMouseLeave={handleMouseLeave}
          />
        </div>
        <div>
          <RegistHeader />
        </div>
      </div>
      {isMenuOpen && (
        <div   onMouseLeave={toggleMenu}
        className="z-10 absolute h-[400px] bg-white w-full border-t-[1.5px] border-blue-300 shadow-md mt-[60px]">
        <div className="p-4 flex flex-row justify-center ml-20 mr-20">
          <div className="w-[15%]">
            <p className="text-blue-500 font-bold m-1">MÔ HÌNH</p>
            <p className="font-bold ml-2 mt-1">Khách sạn từ 0-2 sao</p>
            <p className="font-bold ml-2 mt-1">Khách sạn từ 3-5 sao</p>
            <p className="font-bold ml-2 mt-1">Khu vui chơi</p>
            <p className="font-bold ml-2 mt-1">Quản lý sân Golf</p>
            <p className="font-bold ml-2 mt-1">Homestay, Hotel</p>
            <p className="font-bold ml-2 mt-1">Khách sạn nghỉ giờ</p>
          </div>
          <div className="flex flex-col justify-center items-start h-full w-[25%] ml-5">
            <div className="text-blue-500 font-bold m-1">VẬN HÀNH</div>
            <div className="flex flex-row justify-center items-center hover:bg-[#E6F9FE]">
              <img className="w-[20px] h-[20px] m-2" src={ezCloudhotel} alt="" />
              <div>
                <p className="font-bold">ezCloudhotel</p>
                <p className="text-sm italic">
                  Vận hành khách sạn / chuỗi khách sạn nhỏ, homestay,
                  farmstay, nghỉ giờ
                </p>
              </div>
            </div>
            <div className="flex flex-row justify-center items-center mt-1.5 hover:bg-[#E6F9FE]">
              <img className="w-[20px] h-[20px] m-2" src={ezFolio} alt="" />
              <div>
                <p className="font-bold">ezFolio</p>
                <p className="text-sm italic">Vận hành khách sạn / chuỗi khách sạn 3-5*, Resort</p>
              </div>
            </div>
            <div className="flex flex-row justify-center items-center mt-1.5 hover:bg-[#E6F9FE]">
              <img className="w-[20px] h-[20px] m-2" src={ezTicket} alt="" />
              <div>
                <p className="font-bold">ezTicket</p>
                <p className="text-sm italic">Vận hành khu vui chơi, Điểm check-in</p>
              </div>
            </div>
            <div className="flex flex-row justify-center items-center mt-1.5 hover:bg-[#E6F9FE]">
              <img className="w-[20px] h-[20px] m-2" src={ezGolf} alt="" />
              <div>
                <p className="font-bold">ezGolf</p>
                <p className="text-sm italic">Vận hành sân Golf</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-center items-start h-full w-[25%] ml-5">
            <div className="text-blue-500 font-bold m-1">
              PHÂN PHỐI DỊCH VỤ & DOANH THU
            </div>
            <div className="flex flex-row justify-center items-center hover:bg-[#E6F9FE]">
              <img className="w-[20px] h-[20px] m-2" src={ezCmt} alt="" />
              <div>
                <p className="font-bold">ezCmt</p>
                <p className="text-sm italic">Phân phối vé vui chơi</p>
              </div>
            </div>
            <div className="flex flex-row justify-center items-center mt-1.5 hover:bg-[#E6F9FE]">
              <img className="w-[20px] h-[20px] m-2" src={ezCmsLeo} alt="" />
              <div>
                <p className="font-bold">ezCms Leo</p>
                <p className="text-sm italic">Phân phối phòng khách sạn trên các kênh OTA, GDS…</p>
              </div>
            </div>
            <div className="flex flex-row justify-center items-center mt-1.5 hover:bg-[#E6F9FE]">
              <img className="w-[20px] h-[20px] m-2" src={OneInventory} alt="" />
              <div>
                <p className="font-bold">OneInventory</p>
                <p className="text-sm italic">Phân phối B2B, B2B2C và B2C dịch vụ du lịch</p>
              </div>
            </div>
            <div className="flex flex-row justify-center items-center mt-1.5 hover:bg-[#E6F9FE]">
              <img className="w-[20px] h-[20px] m-2" src={ezRms} alt="" />
              <div>
                <p className="font-bold">ezRms</p>
                <p className="text-sm italic">Phân tích và tối ưu hóa doanh thu</p>
              </div>
            </div>
            <div className="flex flex-row justify-center items-center mt-1.5 hover:bg-[#E6F9FE]">
              <img className="w-[20px] h-[20px] m-2" src={ezCrs} alt="" />
              <div>
                <p className="font-bold">ezCrs</p>
                <p className="text-sm italic">Đặt phòng tập trung khách sạn / chuỗi khách sạn</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-center items-start h-full w-[15%] ml-5">
            <div className="text-blue-500 font-bold m-1">TIẾP THỊ BÁN HÀNG</div>
            <div className="flex flex-row justify-center items-center hover:bg-[#E6F9FE]">
              <img className="w-[20px] h-[20px] m-2" src={ezBe} alt="" />
              <div>
                <p className="font-bold">ezBe</p>
                <p className="text-sm italic">Công cụ đặt phòng trực tuyến</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-center items-start h-full w-[15%] ml-5">
            <div className="text-blue-500 font-bold m-1">KẾT NỐI VẬN HÀNH</div>
            <div className="flex flex-row justify-center items-center hover:bg-[#E6F9FE]">
              <img className="w-[20px] h-[20px] m-2" src={ezInvoice} alt="" />
              <div>
                <p className="font-bold">ezInvoice</p>
                <p className="text-sm italic">Kết nối hệ thống hóa đơn điện tử</p>
              </div>
            </div>
            <div className="flex flex-row justify-center items-center mt-1.5 hover:bg-[#E6F9FE]">
              <img className="w-[20px] h-[20px] m-2" src={ezPayment} alt="" />
              <div>
                <p className="font-bold">ezPayment</p>
                <p className="text-sm italic">Kết nối cổng thanh toán</p>
              </div>
            </div>
            <div className="flex flex-row justify-center items-center mt-1.5 hover:bg-[#E6F9FE]">
              <img className="w-[20px] h-[20px] m-2" src={ezBl} alt="" />
              <div>
                <p className="font-bold">ezBI</p>
                <p className="text-sm italic">Báo cáo vận hành bằng Power BI</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      )}
      {
        isMenuOpen2 && (
          <div    onMouseLeave={toggleMenu2}
          className="z-10 absolute h-[300px] bg-white w-full   mt-[60px] flex justify-center  ">
          <div className="flex flex-row w-[80%] h-auto  ">
            <div className="w-[50%] h-auto ">
              <div className="flex flex-row  mt-5">
                <p className="text-xl text-blue-500">Tầm Nhìn</p>
              </div>
              <div className="text-xl w-[430px]">
                {" "}
                ezCloud đặt mục tiêu trở thành nền tảng công nghệ du lịch hàng
                đầu Việt Nam và Đông Nam Á.
              </div>
            </div>

            <div className="w-[20%] h-auto ">
              <div className="flex flex-row  mt-5">
                <p className="text-blue-500">CÔNG TY</p>
              </div>
              <div className="mt-2 font-bold"> Ebooks</div>
              <div className="mt-2 font-bold"> Liên HỆ</div>
              <div className="mt-2 font-bold"> Về Chúng Tôi </div>
              <div className="mt-2 font-bold"> Tuyển Dụng </div>
              <div className="mt-2 font-bold"> Lịch sử hình thành</div>
            </div>

            <div className="w-[50%] ">
              <img
                alt=""
                className="w-[458px]"
                src="	https://ezcloud.vn/wp-content/uploads/2023/03/ezcms-leo-he-thong-hoat-dong.png"
              ></img>
            </div>
          </div>
        </div>
        )
      }
      
    </div>
  );
};

export default Header;

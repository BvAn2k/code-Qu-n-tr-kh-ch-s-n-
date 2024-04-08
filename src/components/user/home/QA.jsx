import React, { useState } from "react";
import { ChevronDown } from "heroicons-react";
import { ChevronUp } from "heroicons-react";
// Mr Khoa
const QA = () => {
  const [isOpen, setisOpen] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const [isExpand, setIsExpand] = useState(false);
  const [isSeen, setIsSeen] = useState(false);
  const [isClick, setIsClick] = useState(false);

  const [isOpen2, setisOpen2] = useState(false);
  const [isActive2, setIsActive2] = useState(false);
  const [isExpand2, setIsExpand2] = useState(false);
  const [isSeen2, setIsSeen2] = useState(false);
  const [isClick2, setIsClick2] = useState(false);

  const [isOpen3, setisOpen3] = useState(false);
  const [isActive3, setIsActive3] = useState(false);
  const [isExpand3, setIsExpand3] = useState(false);
  const [isSeen3, setIsSeen3] = useState(false);
  const [isClick3, setIsClick3] = useState(false);

  const [isOpen4, setisOpen4] = useState(false);
  const [isActive4, setIsActive4] = useState(false);
  const [isExpand4, setIsExpand4] = useState(false);
  const [isSeen4, setIsSeen4] = useState(false);
  const [isClick4, setIsClick4] = useState(false);

  const [isOpen5, setisOpen5] = useState(false);
  const [isActive5, setIsActive5] = useState(false);
  const [isExpand5, setIsExpand5] = useState(false);
  const [isSeen5, setIsSeen5] = useState(false);
  const [isClick5, setIsClick5] = useState(false);

  const toggleDiv = () => {
    setisOpen(!isOpen);
    setIsActive(!isActive);
    setIsExpand(!isExpand);
    setIsSeen(!isSeen);
    setIsClick(!isClick);
  };
  const toggleDiv2 = () => {
    setisOpen2(!isOpen2);
    setIsActive2(!isActive2);
    setIsExpand2(!isExpand2);
    setIsSeen2(!isSeen2);
    setIsClick2(!isClick2);
  };
  const toggleDiv3 = () => {
    setisOpen3(!isOpen3);
    setIsActive3(!isActive3);
    setIsExpand3(!isExpand3);
    setIsSeen3(!isSeen3);
    setIsClick3(!isClick3);
  };
  const toggleDiv4 = () => {
    setisOpen4(!isOpen4);
    setIsActive4(!isActive4);
    setIsExpand4(!isExpand4);
    setIsSeen4(!isSeen4);
    setIsClick4(!isClick4);
  };
  const toggleDiv5 = () => {
    setisOpen5(!isOpen5);
    setIsActive5(!isActive5);
    setIsExpand5(!isExpand5);
    setIsSeen5(!isSeen5);
    setIsClick5(!isClick5);
  };
  return (
    <div className="flex flex-col justify-center items-center w-full h-full bg-[#F9FAFF]">
      <div className="flex flex-row justify-center w-[60%]">
        <div className="text-blue-800 w-[40%] mt-28  mr-20">
          <p className="font-bold text-5xl">Câu hỏi thường gặp</p>
          <br />
          <p>
            Danh sách câu hỏi mà bạn có thể quan tâm. Vui lòng gọi Hotline nếu
            bạn cần hỗ trợ:
          </p>
          <br />
          <p>
            <span className="inline-block w-1 h-1 rounded-full bg-blue-800 mb-1 mr-2"></span>
            <span>Kinh doanh Miền Bắc & Miền trung: 0983 039 419</span>
          </p>
          <br />
          <p>
            <span className="inline-block w-1 h-1 rounded-full bg-blue-800 mb-1 mr-2"></span>
            <span>Kinh doanh Miền Nam: 0904 171 080</span>
          </p>
          <br />
          <p>
            <span className="inline-block w-1 h-1 rounded-full bg-blue-800 mb-1 mr-2"></span>
            <span>Hỗ trợ kỹ thuật: 1900 6159</span>
          </p>
        </div>
        <div className="flex flex-col justify-center w-[60%] mt-28  mb-20">
          {/* Button1 */}
          <button
            className={`flex items-center text-black hover:text-blue-600 font-bold text-lg 
            focus:outline-none border-2 rounded-md border-gray-300 bg-white
            ${isActive ? "text-black" : "text-blue-500"}
          ${isExpand ? "border-b-2" : "border-b-0"}
          ${isSeen ? "rounded-bl" : "rounded-bl-none"}
          ${isClick ? "rounded-br" : "rounded-br-none"}`}
            onClick={toggleDiv}
          >
            <span className="m-3 ml-5 flex justify-start items-start w-[80%]">
              1. Chuyển đổi số trong ngành du lịch là gì?
            </span>
            <span className="flex justify-end items-end w-[20%] m-3">
              {isOpen ? (
                <ChevronDown className="w-6 h-6 mr-1" />
              ) : (
                <ChevronUp className="w-6 h-6 mr-1" />
              )}
            </span>
          </button>
          <div
            className={`overflow-hidden transition-max-height duration-500 bg-white ${
              isOpen ? "max-h-0" : "max-h-40"
            }`}
          >
            <div className="border-l-2 border-r-2 border-b-2 border-gray-300 p-4 rounded-br rounded-bl shadow">
              <span className="font-bold">
                Chuyển đổi số trong ngành du lịch{" "}
              </span>
              <span>
                là quá trình doanh nghiệp phải thích ứng với công nghệ kỹ thuật
                số nhằm điều chỉnh và thay đổi các quy trình kinh doanh ở thời
                điểm hiện tại. Cụ thể là thay thế những quy trình thủ công bằng
                các quy trình kỹ thuật số. Nằm trong xu thế đó, ezCloud là nền
                tảng cung cấp các giải pháp toàn diện tới khách sạn giúp chuyển
                đổi số thành công.{" "}
              </span>
            </div>
          </div>
          <br />

          {/* Button2 */}
          <button
            className={`flex items-center text-black hover:text-blue-600 font-bold text-lg 
            focus:outline-none border-2 rounded-md border-gray-300 bg-white
            ${isActive2 ? "text-black" : "text-blue-500"}
          ${isExpand2 ? "border-b-2" : "border-b-0"}
          ${isSeen2 ? "rounded-bl" : "rounded-bl-none"}
          ${isClick2 ? "rounded-br" : "rounded-br-none"}`}
            onClick={toggleDiv2}
          >
            <span className="m-3 ml-5 flex justify-start items-start w-[80%]">
              2. ezCloud có trụ sở tại đâu?
            </span>
            <span className="flex justify-end items-end w-[20%] m-3">
              {isOpen2 ? (
                <ChevronDown className="w-6 h-6 mr-1" />
              ) : (
                <ChevronUp className="w-6 h-6 mr-1" />
              )}
            </span>
          </button>
          <div
            className={`overflow-hidden transition-max-height duration-500 bg-white ${
              isOpen2 ? "max-h-0" : "max-h-40"
            }`}
          >
            <div className="border-l-2 border-r-2 border-b-2 border-gray-300 p-4 rounded-br rounded-bl shadow">
              <p>
                <span className="font-bold">Trụ sở chính: </span>
                <span>
                  531 Upper Cross Street, #02-11 – Hong Lim Complex – Singapore{" "}
                </span>
              </p>
              <br />
              <p>
                <span className="font-bold">Trụ sở Hà Nội: </span>
                <span>
                  Tầng 8, Tòa nhà LADECO, Số 266 Đội Cấn, Q. Ba Đình, TP. Hà
                  Nội, Việt Nam.{" "}
                </span>
              </p>
            </div>
          </div>
          <br />

          {/* Button3 */}
          <button
            className={`flex items-center text-black hover:text-blue-600 font-bold text-lg 
            focus:outline-none border-2 rounded-md border-gray-300 bg-white
            ${isActive3 ? "text-black" : "text-blue-500"}
          ${isExpand3 ? "border-b-2" : "border-b-0"}
          ${isSeen3 ? "rounded-bl" : "rounded-bl-none"}
          ${isClick3 ? "rounded-br" : "rounded-br-none"}`}
            onClick={toggleDiv3}
          >
            <span className="m-3 ml-5 flex justify-start items-start w-[80%]">
              3. Điểm khác biệt so với các nền tảng khác?
            </span>
            <span className="flex justify-end items-end w-[20%] m-3">
              {isOpen ? (
                <ChevronDown className="w-6 h-6 mr-1" />
              ) : (
                <ChevronUp className="w-6 h-6 mr-1" />
              )}
            </span>
          </button>
          <div
            className={`overflow-hidden transition-max-height duration-500 bg-white ${
              isOpen3 ? "max-h-0" : "max-h-[500px]"
            }`}
          >
            <div className="border-l-2 border-r-2 border-b-2 border-gray-300 p-4 rounded-br rounded-bl shadow">
              <p>
                <span className="inline-block w-1 h-1 rounded-full bg-black mb-1 mr-2"></span>
                <span className="font-bold">Công nghệ điện toán đám mây </span>
                <p>
                  Tất cả các sản phẩm của ezCloud đều hoạt động và vận hành dựa
                  trên công nghệ cloud-based, hỗ trợ triển khai dễ dàng, thuận
                  tiện.
                </p>
              </p>
              <p>
                <span className="inline-block w-1 h-1 rounded-full bg-black mb-1 mr-2"></span>
                <span className="font-bold">
                  Nghiên cứu chuyên sâu, tiêu chuẩn quốc tế{" "}
                </span>
                <p>
                  Bộ sản phẩm được nghiên cứu và phát triển bởi các chuyên gia
                  đầu ngành, có nhiều kinh nghiệm trong lĩnh vực công nghệ và
                  vận hành. Đây là phần mềm đầu tiên tại Việt Nam đáp ứng các
                  chuẩn nghiệp vụ quản trị khách sạn, khu vui chơi, sân Golf
                  theo tiêu chuẩn quốc tế. Trong quá trình vận hành, sản phẩm
                  được cải tiến liên tục, đáp ứng mọi thay đổi của theo thị trị
                  hoặc nhu cầu quản lý & kinh doanh.
                </p>
              </p>
              <p>
                <span className="inline-block w-1 h-1 rounded-full bg-black mb-1 mr-2"></span>
                <span className="font-bold">Tùy chỉnh linh hoạt</span>
                <p>
                  Hệ thống đáp ứng các tùy chỉnh linh hoạt tùy theo mong muốn
                  của khách hàng về nhu cầu quản trị, mô hình, mục đích kinh
                  doanh của khách sạn, resort, khu vui chơi.
                </p>
              </p>
              <p>
                <span className="inline-block w-1 h-1 rounded-full bg-black mb-1 mr-2"></span>
                <span className="font-bold">Sở hữu hệ sinh thái đa dạng</span>
                <p>
                  ezCloud sở hữu và phát triển một hệ sinh thái đa dạng với hơn
                  20 sản phẩm công nghệ khách sạn du lịch, hỗ trợ tất cả các
                  điểm chạm khách hàng từ tìm kiếm cho đến chăm sóc hậu bán
                  hàng.
                </p>
              </p>
              <p>
                <span className="inline-block w-1 h-1 rounded-full bg-black mb-1 mr-2"></span>
                <span className="font-bold">Cập nhật nhanh chóng</span>
                <p>
                  Cập nhật tính năng nhanh chóng, linh hoạt nhờ quy trình quản
                  trị chuyên nghiệp và công nghệ hiện đại.
                </p>
              </p>
            </div>
          </div>
          <br />

          {/* Button4 */}
          <button
            className={`flex items-center text-black hover:text-blue-600 font-bold text-lg 
            focus:outline-none border-2 rounded-md border-gray-300 bg-white
            ${isActive4 ? "text-black" : "text-blue-500"}
          ${isExpand4 ? "border-b-2" : "border-b-0"}
          ${isSeen4 ? "rounded-bl" : "rounded-bl-none"}
          ${isClick4 ? "rounded-br" : "rounded-br-none"}`}
            onClick={toggleDiv4}
          >
            <span className="m-3 ml-5 flex justify-start items-start w-[80%]">
              4. Mục tiêu và sứ mệnh của ezCloud
            </span>
            <span className="flex justify-end items-end w-[20%] m-3">
              {isOpen ? (
                <ChevronDown className="w-6 h-6 mr-1" />
              ) : (
                <ChevronUp className="w-6 h-6 mr-1" />
              )}
            </span>
          </button>
          <div
            className={`overflow-hidden transition-max-height duration-500 bg-white ${
              isOpen4 ? "max-h-0" : "max-h-60"
            }`}
          >
            <div className="border-l-2 border-r-2 border-b-2 border-gray-300 p-4 rounded-br rounded-bl shadow">
              <p>
                Với mục tiêu xây dựng sản phẩm “Make in Việt Nam” người Việt Nam
                tự kiến tạo các Nền tảng số cho doanh nghiệp Việt Nam, ezCloud
                đã ra đời và xác định tầm nhìn cho toàn bộ tổ chức là xây dựng
                ezCloud trở thành Nền tảng Quản trị và Kinh doanh Du lịch hàng
                đầu Việt Nam giúp cho việc quản trị hoạt động du lịch được hiệu
                quả và tối ưu hơn.
              </p>
              <br />
              <p>
                Sứ mệnh của ezCloud là nỗ lực sáng tạo, phát triển các sản phẩm
                và dịch vụ, giúp cho việc kinh doanh du lịch trở nên dễ dàng,
                hiệu quả và tiết kiệm hơn.
              </p>
            </div>
          </div>
          <br />

          {/* Button5 */}
          <button
            className={`flex items-center text-black hover:text-blue-600 font-bold text-lg 
            focus:outline-none border-2 rounded-md border-gray-300 bg-white
            ${isActive5 ? "text-black" : "text-blue-500"}
          ${isExpand5 ? "border-b-2" : "border-b-0"}
          ${isSeen5 ? "rounded-bl" : "rounded-bl-none"}
          ${isClick5 ? "rounded-br" : "rounded-br-none"}`}
            onClick={toggleDiv5}
          >
            <span className="m-3 ml-5 flex justify-start items-start w-[80%]">
              5. Nền tảng chuyển đổi số của ezCloud là gì?
            </span>
            <span className="flex justify-end items-end w-[20%] m-3">
              {isOpen ? (
                <ChevronDown className="w-6 h-6 mr-1" />
              ) : (
                <ChevronUp className="w-6 h-6 mr-1" />
              )}
            </span>
          </button>
          <div
            className={`overflow-hidden transition-max-height duration-500 bg-white ${
              isOpen5 ? "max-h-0" : "max-h-[600px]"
            }`}
          >
            <div className="border-l-2 border-r-2 border-b-2 border-gray-300 p-4 rounded-br rounded-bl shadow">
              <p>
                ezCloud cung cấp đa dạng giải pháp công nghệ hiện đại và toàn
                diện trong quản lý khách sạn.
              </p>
              <br />
              <p className="font-bold">Vận hành tối ưu</p>
              <br />
              <p>
                <span className="inline-block w-1 h-1 rounded-full bg-black mb-1 mr-2"></span>
                <span>Tiết kiệm thời gian, ngân sách</span>
              </p>
              <p>
                <span className="inline-block w-1 h-1 rounded-full bg-black mb-1 mr-2"></span>
                <span>Kết nối thiết bị ngoại vi</span>
              </p>
              <p>
                <span className="inline-block w-1 h-1 rounded-full bg-black mb-1 mr-2"></span>
                <span>Hoạt động đa nền tảng</span>
              </p>
              <p>
                <span className="inline-block w-1 h-1 rounded-full bg-black mb-1 mr-2"></span>
                <span>Hỗ trợ kinh doanh tối đa</span>
              </p>
              <br />
              <p className="font-bold">Hệ thống phân phối đa kênh</p>
              <br />
              <p>
                <span className="inline-block w-1 h-1 rounded-full bg-black mb-1 mr-2"></span>
                <span>Tối ưu quản lý</span>
              </p>
              <p>
                <span className="inline-block w-1 h-1 rounded-full bg-black mb-1 mr-2"></span>
                <span>Đồng bộ dữ liệu thông minh</span>
              </p>
              <br />
              <p className="font-bold">
                Hệ thống hỗ trợ tăng trưởng kinh doanh tối đa
              </p>
              <br />
              <p>
                <span className="inline-block w-1 h-1 rounded-full bg-black mb-1 mr-2"></span>
                <span>Hoạt động đa nền tảng</span>
              </p>
              <p>
                <span className="inline-block w-1 h-1 rounded-full bg-black mb-1 mr-2"></span>
                <span>Dễ dàng tích hợp</span>
              </p>
              <p>
                <span className="inline-block w-1 h-1 rounded-full bg-black mb-1 mr-2"></span>
                <span>Lưu trữ thông tin</span>
              </p>
              <p>
                <span className="inline-block w-1 h-1 rounded-full bg-black mb-1 mr-2"></span>
                <span>Dễ dàng tạo ưu đãi</span>
              </p>
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

export default QA;

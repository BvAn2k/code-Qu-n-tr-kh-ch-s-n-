import React from "react";
import ReCAPTCHA from "react-google-recaptcha";

const EzPaymentHeader = () => {
  const onChange = () => {};
  const Img1 = {
    src: "https://th.bing.com/th/id/OIP.8yWjBxKYDMpdGs9t6vOC-wHaHa?rs=1&pid=ImgDetMain",
    alt: "",
  };
  return (
    <div className="flex flex-col w-full h-auto justify items-center">
      <div className=" flex flex-col  w-[100%] h-[650px] bg-gradient-to-t from-[#cae8f9] to-[#dcecf9] ">
        <div className="absolute flex flex-cow w-[85%] h-[auto] ml-[200px] ">
          <div className=" flex flex-col h-auto w-[50%]  mt-12 mr-5">
            <div className="flex flex-row justify items-center mt-5">
              <img
                className="h-[15px] w-[15px] mr-3 "
                src="https://th.bing.com/th/id/R.42b411b25d61dee3b58d0eec37aa9a0c?rik=kIstx0uqMD8%2bVw&riu=http%3a%2f%2fuploads.webflow.com%2f56f40819eac1afae405cf309%2f56f4081aeac1afae405cf333_icon-home-black.png&ehk=oCzDpuIFdWP8P2z856OnyeEBHYTOgHQJhxx1zqjGpbY%3d&risl=&pid=ImgRaw&r=0"
                alt=""
              />
              <p className="mr-3 ml-3">/</p>
              <p className="text-ellipsis text-sm text-blue-600 hover:text-blue-800  mr-3">
                Sản phẩm{" "}
              </p>
              <p className="mr-3">/</p>
              <p className="text-ellipsis text-sm text-blue-600 hover:text-blue-800  mr-3">
                ezPayment
              </p>
            </div>
            <div className="flex  mt-5">
              <h1 className="text-blue-800 font-bold text-[35px] text-ellipsis">
                ezPayment - Trung tâm thanh toán tích hơp{" "}
              </h1>
            </div>
            <div className="flex  mt-5">
              <p className="text-black text-lg">
                ezPayment - Trung tâm thanh toán kết nối với mọi cổng thanh toán
                phổ biến trên thị trường Việt Nam{" "}
              </p>
            </div>
            <div>
              <img
                className=""
                src="https://thirdeyeblindproductions.com/wp-content/uploads/2021/08/Peer-to-Peer-Marketing.jpg"
                alt=""
              />
            </div>
          </div>
          <div className=" flex flex-row h-auto w-[33%]  mt-10 ml-5 mr-5 ">
            <form
              action=""
              className="rounded-xl bg-white h-auto w-[100%] flex flex-col justify items-center shadow-xl"
            >
              <h1 className="text-black mt-5 font-bold text-xl">
                Đăng kí tư vấn
              </h1>
              <div
                className="h-[40px] w-[80%] rounded-3xl mt-5 flex flex-row justify items-center px-5 "
                style={{ border: "solid 1px gray" }}
              >
                <img
                  className="h-[20px] w-[20px]"
                  src="https://moranandsonsbingo.com/content/uploads/2015/08/icon-person.jpg"
                  alt=""
                />
                <input
                  className="h-[100%] w-[100%] "
                  style={{ border: " white" }}
                  type="text"
                  placeholder=" Ho va ten "
                />
              </div>
              <div
                className="h-[40px] w-[80%] rounded-3xl mt-5 flex flex-row justify items-center px-5 "
                style={{ border: "solid 1px gray" }}
              >
                <img
                  className="h-[20px] w-[20px]"
                  src="https://bookvexe.vn/wp-content/uploads/2023/04/tong-hop-25-logo-dien-thoai-dep-nhat_8.jpg"
                  alt=""
                />
                <input
                  className=" h-[100%] w-[100%]"
                  type="number"
                  placeholder="SDT cua ban "
                />
              </div>
              <div
                className="h-[40px] w-[80%] rounded-3xl mt-5 flex flex-row justify items-center px-5 "
                style={{ border: "solid 1px gray" }}
              >
                <img
                  className="h-[30px] w-[30px]"
                  src="https://i.pinimg.com/originals/58/0d/61/580d618d9ec250a13f3cba959d48e3af.jpg"
                  alt=""
                />
                <input
                  className=" h-[100%] w-[100%]"
                  type="Email"
                  placeholder="Email "
                />
              </div>
              <div
                className="h-[40px] w-[80%] rounded-3xl mt-5 flex flex-row justify items-center px-5 "
                style={{ border: "solid 1px gray" }}
              >
                <img
                  className="h-[30px] w-[30px]"
                  src="https://th.bing.com/th/id/OIP.11ek2eukL0hJrRfy5HkrTAAAAA?rs=1&pid=ImgDetMain"
                  alt=""
                />
                <input
                  className=" h-[100%] w-[100%]"
                  type="text"
                  placeholder="dia chi cua ban "
                />
              </div>
              <div
                className="h-[40px] w-[80%] rounded-3xl mt-5 flex flex-row justify items-center px-5 "
                style={{ border: "solid 1px gray" }}
              >
                <img
                  className="h-[30px] w-[30px]"
                  src="https://thumbs.dreamstime.com/b/hotel-icon-vector-sign-symbol-isolated-white-background-logo-concept-your-web-mobile-app-design-134169343.jpg"
                  alt=""
                />
                <input
                  className="h-[100%] w-[100%] "
                  style={{ border: " white" }}
                  type="text"
                  placeholder=" your Hotel  "
                />
              </div>
              <div
                className="flex flex-row justify items-center bg-slate-300 rounded-md mt-5"
                style={{ border: "solid 1px gray" }}
              >
                <ReCAPTCHA
                  sitekey="6LfjAi8pAAAAAD953FCzLTqiHoapW4jvR6w4TLUG"
                  onChange={onChange}
                  className="h-[100%] w-[100%] rounded-md"
                />
              </div>
              <button className="bg-blue-700 rounded-3xl h-[50px] w-[80%] text-white mt-5 font-bold">
                Nhận tư vấn miễn phí
              </button>
            </form>
          </div>
        </div>
      </div>
      <div className="flex flex-col bg-white w-full h-[auto] justify items-center">
        <div className="flex w-[80%] h-auto mt-5">
          <h1 className=" text-4xl text-blue-800 text-center text-clip font-bold">
            Đơn giản hóa tự động hóa quy trình thanh toán của bạn - Được tích
            hợp liên mạch với hệ thống khách sản của ezCloud{" "}
          </h1>
        </div>
        <div className=" flex flex-row h-auto w-[80%] mt-16">
          <div className="flex flex-col w-[20%] h-auto m-auto">
            <img
              className="h-[50px] w-[50px]"
              src="https://ezcloud.vn/wp-content/uploads/2023/06/hand_cc_icon.svg"
              alt=""
            />
            <p className="text-lg text-blue-500 mt-5">Tinh giản vận hành </p>
            <p className="mt-5 text-gray ">
              Tiết kiệm thời gian và giảm lỗi nhập thủ công với các khoản thanh
              toán và giao dịch tập trung trên một nền tảng
            </p>
          </div>
          <div className="flex flex-col w-[20%] h-auto m-auto">
            <img
              className="h-[50px] w-[50px]"
              src="https://ezcloud.vn/wp-content/uploads/2023/06/icn_auto.svg"
              alt=""
            />
            <p className="text-lg text-blue-500 mt-5">Tinh giản vận hành </p>
            <p className="mt-5 text-gray ">
              Tiết kiệm thời gian và giảm lỗi nhập thủ công với các khoản thanh
              toán và giao dịch tập trung trên một nền tảng
            </p>
          </div>
          <div className="flex flex-col w-[20%] h-auto m-auto">
            <img
              className="h-[50px] w-[50px]"
              src="https://ezcloud.vn/wp-content/uploads/2023/06/terminal.svg"
              alt=""
            />
            <p className="text-lg text-blue-500 mt-5">Tinh giản vận hành </p>
            <p className="mt-5 text-gray ">
              Tiết kiệm thời gian và giảm lỗi nhập thủ công với các khoản thanh
              toán và giao dịch tập trung trên một nền tảng
            </p>
          </div>
          <div className="flex flex-col w-[20%] h-auto m-auto">
            <img
              className="h-[50px] w-[50px]"
              src="https://ezcloud.vn/wp-content/uploads/2023/06/person.svg"
              alt=""
            />
            <p className="text-lg text-blue-500 mt-5">Tinh giản vận hành </p>
            <p className="mt-5 text-gray ">
              Tiết kiệm thời gian và giảm lỗi nhập thủ công với các khoản thanh
              toán và giao dịch tập trung trên một nền tảng
            </p>
          </div>
        </div>
        <div className="w-[80%] h-[auto] flex flex-row mt-10 mb-10">
          <div className="w-[40%] h-[auto] bg-white flex flex-col mt-5 ">
            <p className="text-3xl text-blue-500 font-bold m-5">
              PHƯƠNG THỨC THANH TOÁN MỚI {" "}
            </p>
            <div className="flex flex-row justify items-center ml-5 ">
              <img className="h-[20px] w-[20px]" src="https://th.bing.com/th/id/OIP.qcbLH5ITI3_Xjb6sWblFeAHaHa?w=828&h=828&rs=1&pid=ImgDetMain" alt="" />
               <p className=" m-5 text-gray">
              Cung cấp 1 phương thức thanh toán mới, phù hợp với xu thế thị
              trường, đáp ứng thanh toán mọi lúc mọi nơi với chi phí rẻ nhất
            </p>
            </div>
           <div className="flex flex-row justify items-center ml-5">
<img className="h-[20px] w-[20px]" src="https://th.bing.com/th/id/OIP.qcbLH5ITI3_Xjb6sWblFeAHaHa?w=828&h=828&rs=1&pid=ImgDetMain" alt="" />
            <p className=" m-5 text-gray">
              Cho phép khách hàng thanh toán nhanh chóng các hóa đơn khách sạn,
              giảm tỷ lệ thu tiền mặt, quẹt thẻ, chuyển khoản, giảm công sức của
              nhân viên khách sạn khi thu tiền của khách…
            </p>
           </div>
           <button className="flex flex-row h-[40px] w-[50%] px-4  rounded-3xl bg-blue-700 justify-center items-center ml-5 mb-5 ">
            <img className="h-[30px] w-[30px] " src="https://th.bing.com/th/id/OIP.SFMNsGaix3ppQXN2tlCevQHaFC?w=1000&h=680&rs=1&pid=ImgDetMain" alt="" /><p className="text-center text-white"> Dùng thử miễn phí </p>
           </button>
          </div>
          <div className="w-[60%] h-[auto] bg-slate-500 mt-5">
            <img className="h-[100%] w-[100%]" src="https://ezcloud.vn/wp-content/uploads/2023/05/OBJECT.png" alt="" />
          </div>
        </div>
      </div>
      <div className="flex flex-row bg-white w-[80%] h-[auto] justify items-center mt-10">
        <div className="h-auto w-[60%]">
          <img src="https://ezcloud.vn/wp-content/uploads/2023/06/ezpayment-thanh-toan.png" alt="" />
        </div>
        <div className="h-auto w-[40%] ">
        <div className="w-[100%] h-[auto] bg-white flex flex-col mt-5 ">
            <p className="text-3xl text-blue-500 font-bold m-5">
              PHƯƠNG THỨC THANH TOÁN MỚI {" "}
            </p>
            <div className="flex flex-row justify items-center ml-5 ">
              <img className="h-[20px] w-[20px]" src="https://th.bing.com/th/id/OIP.qcbLH5ITI3_Xjb6sWblFeAHaHa?w=828&h=828&rs=1&pid=ImgDetMain" alt="" />
               <p className=" m-5 text-gray">
              Cung cấp 1 phương thức thanh toán mới, phù hợp với xu thế thị
              trường, đáp ứng thanh toán mọi lúc mọi nơi với chi phí rẻ nhất
            </p>
            </div>
           <div className="flex flex-row justify items-center ml-5">
<img className="h-[20px] w-[20px]" src="https://th.bing.com/th/id/OIP.qcbLH5ITI3_Xjb6sWblFeAHaHa?w=828&h=828&rs=1&pid=ImgDetMain" alt="" />
            <p className=" m-5 text-gray">
              Cho phép khách hàng thanh toán nhanh chóng các hóa đơn khách sạn,
              giảm tỷ lệ thu tiền mặt, quẹt thẻ, chuyển khoản, giảm công sức của
              nhân viên khách sạn khi thu tiền của khách…
            </p>
           </div>
           <div className="flex flex-row justify items-center ml-5">
<img className="h-[20px] w-[20px]" src="https://th.bing.com/th/id/OIP.qcbLH5ITI3_Xjb6sWblFeAHaHa?w=828&h=828&rs=1&pid=ImgDetMain" alt="" />
            <p className=" m-5 text-gray">
              Cho phép khách hàng thanh toán nhanh chóng các hóa đơn khách sạn,
              giảm tỷ lệ thu tiền mặt, quẹt thẻ, chuyển khoản, giảm công sức của
              nhân viên khách sạn khi thu tiền của khách…
            </p>
           </div>
           <button className="flex flex-row h-[40px] w-[50%] px-4  rounded-3xl bg-blue-700 justify-center items-center ml-5 mb-5 ">
            <img className="h-[30px] w-[30px] " src="https://th.bing.com/th/id/OIP.SFMNsGaix3ppQXN2tlCevQHaFC?w=1000&h=680&rs=1&pid=ImgDetMain" alt="" /><p className="text-center text-white"> Dùng thử miễn phí </p>
           </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default EzPaymentHeader;

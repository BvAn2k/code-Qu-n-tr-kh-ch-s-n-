import React from "react";
import logoEz from "../../assets/logo.png";

function Footer() {
  return (
    <div className=" flex flex-col">
      <div className="flex flex-row bg-white h-[auto]">
        <div className="flex flex-col bg-white w-[30%] h-[auto] ml-[150px]">
          <div className="flex flex-col ml-7 mb-7 mt-[50px]">
          <img src={logoEz} className="w-[293px] h-[54px]" alt="logo-ezcloud" />

            <button className="mt-4 bg-blue-600 rounded-full w-[170px] h-[50px] text-white font-bold">Yêu cầu tư vấn </button>
            </div>
            <div className="flex flex-col ml-7">
              <h3 className="mb-4">CÔNG TY TNHH EZCLOUD TOÀN CẦU </h3>
              <p className="font-bold">Tư vấn giải pháp</p>
              <p>Hotline Miền Bắc & Miền Trung :19009090</p>
              <p>Hotline Miền Name :19009090</p>
              <p className="mb-4">Email:Ezcloud@gmail.com</p>
              <p className="mb-4 font-bold">Hỗ trợ sử dụng :19002023</p>
              <p className="mb-4 font-bold">Hỗ trợ truyền thông :19002023</p>
              <p className="mb-4">Email:maketing@ezcloud.vn</p>
              <p className="mb-4">Chính sách bảo mật | Chính sách thanh toán </p>
              <p>Hướn dẫn sử dụng </p>
           
          </div>
          <div className="flex flex-row justify-around w-[200px] m-auto ml-7 mt-11">
<img className="h-[30px] w-[30px] rounded-full" src="https://png.pngtree.com/element_our/png_detail/20181011/facebook-social-media-icon-design-template-vector-png_126986.jpg" alt="logo face book" />
<img className="h-[30px] w-[30px] rounded-full" src="https://png.pngtree.com/element_origin_min_pic/16/11/15/cab79da7fe08727d08c3a3f317e9ccac.jpg" alt="logo witter" />
<img className="h-[30px] w-[30px] rounded-full" src="https://www.pngkey.com/png/full/2-27646_twitter-logo-png-transparent-background-logo-twitter-png.png" alt="" />
<img className="h-[30px] w-[30px] rounded-full" src="https://th.bing.com/th/id/OIP.CQ2uozzQ1H2rBlgA2eVTNAHaHa?w=512&h=512&rs=1&pid=ImgDetMain" alt="logo youtobe" />
          </div>
          <div className="flex flex-col ml-7 mt-5 mb-5">
            <p>Copyright © 2023 ezCloud</p>
          <p>All Rights Reserved.</p>
          </div>
          
        </div>
        <div className="flex flex-col bg-white w-[15%] h-[auto] text-base">
            <div className="mr-auto ml-6 mt-12 flex flex-col">
               <h2 className="font-bold text-blue-600 mb-2 text-lg">Sản phẩm </h2>
            <p className="mt-3">ezCloudHotel</p>
            <p className="mt-3">ezFilio</p>
            <p className="mt-3">ezGolf</p>
            <p className="mt-3">ezInvoice</p>
            <p className="mt-3">ezTicket</p>
            <p className="mt-3">ezCmsLeo</p>
            <p className="mt-3">ezRms</p>
            <p className="mt-3">ezEmt</p>
            <p className="mt-3">ezBe</p>
            <p className="mt-3">ezCrs</p>
            <p className="mt-3">ezBl</p>
           
            </div>
            
        </div>
        <div className="flex flex-col bg-white w-[15%] h-[500px]">
            <div className="mr-auto ml-6 mt-12 flex flex-col">
                <h3 className="font-bold text-blue-600 mb-2 text-lg">Mô hình </h3>
                <p className="mt-3">Khách sản 3 sao </p>
                <p className="mt-3">Khách sạn 5 sao </p>
                <p className="mt-3">Hotel/Homestay</p>
                <p className="mt-3">Khách sạn nghỉ giờ </p>
                <p className="mt-3">Khu vui chơi</p>
                <p className="mt-3">Quản lí sân Golf</p>
            </div>
        </div>
        <div className="flex flex-col bg-white w-[20%] h-[500px] ">
            <div className="mr-auto ml-6 mt-12 flex flex-col">
                <h3 className="font-bold text-blue-600 mb-2 text-lg">Công ty </h3>
                <p className="mt-3">Liên hệ </p>
                <p className="mt-3">Về chúng tôi </p>
                <p className="mt-3">Kết nối </p>
                <p className="mt-3">Đối tác </p>
                <p className="mt-3">Đại lí </p>
                <p className="mt-3">Tuyển dụng</p>
                <p className="mt-3">Giới thiệu khách hàng </p>
            </div>
            <div className="flex flex-row mt-9">
<img className="h-[40px] w-[70px] m-auto" src="https://img.freepik.com/premium-vector/secure-payment-credit-card-icon-with-shield-secure-transaction-vector-stock-illustration_100456-11325.jpg" alt="logo scure" />
<img className="h-[40px] w-[65px] m-auto" src="https://logodix.com/logo/2033040.png" alt="logo PCI dss" />
<img className="h-[60px] w-[65px] m-auto" src="https://www.bsm.ac.th/wp-content/uploads/2020/07/pentest.png" alt="logo penstest" />
            </div>
            <div className="flex justify-center m-auto">
                <img className="h-[25px] w-[120px]" src="https://th.bing.com/th/id/OIP.sqw-Gm4pkhhr5SHTnTX5QwAAAA?rs=1&pid=ImgDetMain" alt="" />
            </div>
        </div>
      </div>
    </div>
  );
}
export default Footer;

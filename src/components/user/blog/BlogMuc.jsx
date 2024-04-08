import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import MyComponent from "./slider";
import Scrollbar from "./scollBar";

function BlogMuc() {
  const image1 = {
    src: "https://bigtop.vn/blog/wp-content/uploads/2021/11/phao-hoa-giay-iphone.jpg",
    alt: "Image 1",
  };

  return (
    <div className="flex flex-col items-center h-[auto] w-[full] ">
      <div className="flex flex-row justify-between h-[100px] w-[80%]">
        <h1 className="font-bold text-ellipsis text-4xl mt-3 ">
          Chuyên Mục
        </h1>
        <p className="font-bold text-base text-ellipsis mt-3">
          Quản lí khách sạn
        </p>
      </div>

      <div className="h-[auto] w-[80%] m-auto bg-white flex flex-row ">
        <img
          className="rounded-xl"
          src="https://ezcloud.vn/wp-content/uploads/2023/12/glamping-la-gi-600x325.webp"
          alt="anh camping"
        />
        <div className=" flex flex-col h-[auto] w-[auto] ml-5">
          <h1 className="text-[30px] font-bold text-ellipsis">
            Glamping là gì? Xu hướng cắm trại độc đáo nhất hiện nay
          </h1>
          <p className="text-base text-gray-500">30/11/2023</p>
          <p className="text-base text-gray-500">
            Mô hình Glamping là gì? Glamping và camping có giống nhau không?
            Tham khảo bài viết sau để có câu trả lời chính xác nhất. Trong những
            năm trở lại đây, glamping đã nhận được sự quan tâm vô cùng lớn từ
            giới trẻ. Vậy bạn có biết glamping là gì? Tại sao mô hình lưu trú
            này lại được yêu thích đến thế? Hãy cùng ezCloud giải đáp các thắc
            mắc này trong bài viết sau. 1. Glamping là gì?Nội dung1. Glamping là
            gì?2. Các yếu tố tạo nên loại hình lưu trú glamping 2.1 Vị trí, địa
            điểm nghỉ
          </p>
        </div>
      </div>
      <div className="h-[auto] w-[80%] bg-white flex flex-row m-auto">
        <div className=" flex flex-col h-[auto] w-[63%]">
          <div className="flex flex-row bg-white mt-20">
            <img
              className="h-[] w-[250px] rounded-2xl"
              src="https://ezcloud.vn/wp-content/uploads/2023/12/trekking-la-gi-390x220.webp"
              alt=""
            />
            <div className="flex flex-col m-auto ml-5">
              <h1 className="font-bold text-lg text-ellipsis">
                Trekking là gì? Loại hình du lịch mạo hiểm ‘hot’ nhất
              </h1>
              <p className="text-gray-500">20/12/2023</p>
              <p className="text-gray-500">
                Bạn có biết Trekking là gì? Cần lưu ý những gì khi đi Trekking?
                Nên lựa chọn địa điểm Trekking nào để có chuyến hành
              </p>
            </div>
          </div>
          <div className="flex flex-row bg-white mt-5">
            <img
              className="h-[] w-[250px] rounded-2xl"
              src="https://ezcloud.vn/wp-content/uploads/2023/07/top-10-cong-vien-390x220.webp"
              alt=""
            />
            <div className="flex flex-col m-auto ml-5">
              <h1 className="font-bold text-lg text-ellipsis">
                TOP 10 công viên giải trí hấp dẫn nhất Việt Nam
              </h1>
              <p className="text-gray-500">20/12/2023</p>
              <p className="text-gray-500">
                Tổng hợp danh sách 10 công viên giải trí thú vị tại Việt Nam,
                thu hút được lượng lớn khách du lịch ghé đến mỗi
              </p>
            </div>
          </div>
          <div className="flex flex-row bg-white mt-5">
            <img
              className="h-[] w-[250px] rounded-2xl"
              src="https://ezcloud.vn/wp-content/uploads/2022/05/dat-phong-tren-agoda-390x220.webp"
              alt=""
            />
            <div className="flex flex-col m-auto ml-5">
              <h1 className="font-bold text-lg text-ellipsis">
                Đặt phòng trên Agoda siêu dễ cho người mới sử dụng
              </h1>
              <p className="text-gray-500">20/12/2023</p>
              <p className="text-gray-500">
                6 bước đơn giản sau đây sẽ giúp bạn dễ dàng hơn trong việc đặt
                phòng khách sạn phù hợp nhất với bản thân trên
              </p>
            </div>
          </div>
          <div className="flex flex-row bg-white mt-5">
            <img
              className="h-[] w-[250px] rounded-2xl"
              src="https://ezcloud.vn/wp-content/uploads/2019/06/nen-di-da-lat-thang-nao-390x220.webp"
              alt=""
            />
            <div className="flex flex-col m-auto ml-5">
              <h1 className="font-bold text-lg text-ellipsis">
                Nên đi du lịch Đà Lạt tháng nào, mùa nào đẹp nhất 2023
              </h1>
              <p className="text-gray-500">20/12/2023</p>
              <p className="text-gray-500">
                Giải đáp thắc mắc “Nên đi du lịch Đà Lạt vào tháng nào?” để có
                một chuyến đi thật trọn vẹn và ý nghĩa tại
              </p>
            </div>
          </div>
        </div>
        <div className=" flex flex-col  w-[37%] h-[500px] mt-[80px] ml-4" style={{border:'solid 1px gray'}}>
          <div className="w-[auto] h-[30%] bg-white">
          <div className="absolute flex flex-col w-[400px]">
            <div className="mb-11">
              <img className="h-[60px] w-[60px] border-solid-1-white bg-gray-400" src="https://th.bing.com/th/id/OIP.URWLNI8WVZXhu05q5ARecQAAAA?w=180&h=180&rs=1&pid=ImgDetMain" alt="logo" />
            </div>
            <div className="flex flex-row justify-between">
              <div className="flex flex-row  h-[35px] w-[130px] bg-slate-500 justify-center items-center rounded-sm border-solid"><img className="h-[30px] w-[30px]" src="https://clipart.info/images/ccovers/1509135366facebook-symbol-png-logo.png" alt="" /> Flow Page</div>
              <div className="flex flex-row h-[35px] w-[120px]  bg-slate-400 rounded-sm justify-items-center justify-center"> <img className="h-[30px] w-[30px]" src="https://png.pngtree.com/png-clipart/20220612/original/pngtree-envelope-mail-icon-letter-flat-png-image_7972631.png" alt="" />Contact us</div>
            </div>
          </div>
         
            <img className="h-[100%] w-[95%]"  src="https://th.bing.com/th/id/R.dc03064f8eba46771244db50ce4f5560?rik=QcfQTUQvgVzOUQ&riu=http%3a%2f%2fsmartcitiesvietnam.com%2fwp-content%2fuploads%2f2020%2f12%2fez2.png&ehk=4BYUXQKNb%2fIVgNExdY5zFzatHntXuUJI5mQCltkkhqo%3d&risl=&pid=ImgRaw&r=0" alt="" />
          </div>
          <div className="w-[100%] h-[70%] bg-whites " >
            <Scrollbar>
              <div className="flex flex-col mx-auto">
                <div>
                  <img
                    className="h-[400px] w-[100%] "
                    src="https://th.bing.com/th/id/R.03664be1e94688be17e9b0fabf917951?rik=hufCb6p4RskTIQ&riu=http%3a%2f%2fmedia.doisongphapluat.com%2f277%2f2014%2f7%2f16%2fgiaitri-doisongphapluat-7.jpg&ehk=cDWE3eIFWm3Tc3RkW95p9IPD1s2iR2kREaPmACJbOW0%3d&risl=&pid=ImgRaw&r=0"
                    alt=""
                  />
                </div>
                <div>
                  <div className="flex flex-row justify-between mt-5">
                    <div className="flex flex-row ">
                      <img
                        className="h-[50px] m-auto w-[50px] rounded-full"
                        src="https://th.bing.com/th/id/OIP.l-4kk-kk3R40K29oT0i8eAHaF7?rs=1&pid=ImgDetMain"
                        alt="logo"
                      />
                      <div className="flex flex-col ml-2 ">
                        <h1 className="font-bold text-ellipsis text-gray-900">
                          ezCloud
                        </h1>
                        <p className="text-gray-500 text-ellipsis text-xs">
                          21 giờ trước
                        </p>
                      </div>
                    </div>

                    <img
                      className="h-[30px] w-[30px] rounded-full"
                      src="https://th.bing.com/th/id/OIP.QHODby_bS81-x2of8vCIhgAAAA?rs=1&pid=ImgDetMain"
                      alt="logoface"
                    />
                  </div>
                  <div className="flex flex-col">
                    <h1 className="text-gray-800 text-ellipsis">
                      {" "}
                      8 XU HƯỚNG NGÀNH KHÁCH SẠN NĂM 2024
                    </h1>
                    <p className="text-gray-600 text-sm flex flex-row text-center">
                      <img
                        className="h-[30px] w-[30px] rounded-full mr-2"
                        src="https://bigtop.vn/blog/wp-content/uploads/2021/11/phao-hoa-giay-iphone.jpg"
                        alt=""
                      />{" "}
                      Hàng loạt tín hiệu phục hồi mạnh mẽ sau dịch cho thấy{" "}
                   
                    </p>
                    <p className="text-gray-600 text-sm">
                      {" "}
                      khách sạn đang trên đà chuyển đổi. Đi kèm với đó là tình
                      trạng cạnh tranh gay gắt và sự xuất hiện của nhiều xu
                      hướng kinh doanh mới, độc đáo và sáng tạo. Trong khi,
                      ngành kinh doanh du lịch, khách sạn luôn đi đầu trong việc
                      thích ứng với các xu hướng mới cũng như đáp ứng nhu cầu
                      của khách hàng.
                    </p>
                    <br />
                    <p className="text-gray-700 flex flex-row"><img className="h-[50px] w-[50px]" src="https://th.bing.com/th/id/OIP.4e-WZvY9-7MBkt9LOSkvFgHaHa?w=500&h=500&rs=1&pid=ImgDetMain" alt="" />
                      Những biến đổi nhanh chóng của thị trường kinh doanh du
                      lịch và khách sạn{" "}
                    </p>
                  </div>
                </div>
                <div className="flex flex-col">
                  <img className="h-[400px] w-[100%]" src="https://th.bing.com/th/id/OIP.wNpcApt5IJrozq8EBi2YsQHaFi?rs=1&pid=ImgDetMain" alt="" />
                  <img className="h-[400px] w-[100%]" src="https://th.bing.com/th/id/OIP.zJmZhT7H231XgdqECepx4gHaEV?rs=1&pid=ImgDetMain" alt="" />
                </div>
                <div className="flex flex-row justify-between mt-5">
                    <div className="flex flex-row ">
                      <img
                        className="h-[50px] m-auto w-[50px] rounded-full"
                        src="https://th.bing.com/th/id/OIP.l-4kk-kk3R40K29oT0i8eAHaF7?rs=1&pid=ImgDetMain"
                        alt="logo"
                      />
                      <div className="flex flex-col ml-2 ">
                        <h1 className="font-bold text-ellipsis text-gray-900">
                          ezCloud
                        </h1>
                        <p className="text-gray-500 text-ellipsis text-xs">
                          21 giờ trước
                        </p>
                      </div>
                    </div>

                    <img
                      className="h-[30px] w-[30px] rounded-full"
                      src="https://th.bing.com/th/id/OIP.QHODby_bS81-x2of8vCIhgAAAA?rs=1&pid=ImgDetMain"
                      alt="logoface"
                    />
                    
                  </div>
                  <div className="flex flex-col">
                    <h1 className="text-gray-800 text-ellipsis">
                      {" "}
                      8 XU HƯỚNG NGÀNH KHÁCH SẠN NĂM 2024
                    </h1>
                    <p className="text-gray-600 text-sm flex flex-row text-center">
                      <img
                        className="h-[30px] w-[30px] rounded-full mr-2"
                        src="https://bigtop.vn/blog/wp-content/uploads/2021/11/phao-hoa-giay-iphone.jpg"
                        alt=""
                      />{" "}
                      Hàng loạt tín hiệu phục hồi mạnh mẽ sau dịch cho thấy{" "}
                   
                    </p>
                    <p className="text-gray-600 text-sm">
                      {" "}
                      khách sạn đang trên đà chuyển đổi. Đi kèm với đó là tình
                      trạng cạnh tranh gay gắt và sự xuất hiện của nhiều xu
                      hướng kinh doanh mới, độc đáo và sáng tạo. Trong khi,
                      ngành kinh doanh du lịch, khách sạn luôn đi đầu trong việc
                      thích ứng với các xu hướng mới cũng như đáp ứng nhu cầu
                      của khách hàng.
                    </p>
                  <div className="flex flex-col">
                    <img className="h-[400px] w-[100%]" src="https://th.bing.com/th/id/OIP.xav722LZKWoX4RzclyR8SAHaE4?w=1600&h=1056&rs=1&pid=ImgDetMain" alt="" />
                    <img className="h-[400px] w-[100%]" src="https://th.bing.com/th/id/OIP.4PlHcDCVTxH-J5UJCa9MHwAAAA?w=271&h=316&rs=1&pid=ImgDetMain" alt="" />
                  </div>
                  </div>
              </div>
            </Scrollbar>
          </div>
        </div>
      </div>
      <div className="h-[auto] w-[60%] ml-20 bg-white flex flex-row justify-around mt-7 ">
        <div className="flex flex-col bg-white h-[200px] w-[200px] rounded-xl ml-8">
          <img className="h-[50%] w-[100%] rounded-xl" src="https://ezcloud.vn/wp-content/uploads/2019/06/nen-di-da-lat-thang-nao-390x220.webp" alt="" />
          <p className="text-ellipsis text-gray-600 text-base font-bold m-auto">Nên đi du lịch Đà Lạt tháng nào, mùa nào đẹp nhất 2023</p>
        </div>
        <div className="flex flex-col bg-whiteh-[200px] w-[200px] rounded-xl">
          <img className="h-[50%] w-[100%] rounded-xl" src="https://ezcloud.vn/wp-content/uploads/2023/07/dia-diem-du-lich-ha-giang-390x220.webp" alt="" />
          <p className="text-ellipsis text-gray-600 text-base font-bold m-auto">Top 15 địa điểm du lịch Hà Giang nổi tiếng “đẹp quên lối về”</p>
        </div>
        <div className="flex flex-col bg-white h-[200px] w-[200px] rounded-xl">
          <img className="h-[50%] w-[100%] rounded-xl" src="https://ezcloud.vn/wp-content/uploads/2019/11/mon-ngon-phu-quoc-390x220.webp" alt="" />
          <p className="text-ellipsis text-gray-600 text-base font-bold m-auto">20 món ngon Phú Quốc mà bạn nhất định không thể bỏ qua</p>
        </div>
        <div className="flex flex-col bg-white h-[200px] w-[200px] rounded-xl">
          <img className="h-[50%] w-[100%] rounded-xl" src="https://ezcloud.vn/wp-content/uploads/2019/08/dac-san-sapa-390x220.webp" alt="" />
          <p className="text-ellipsis text-gray-600 text-base font-bold m-auto">Khám phá 10 đặc sản Sapa nên mua làm quà chuẩn vị núi rừng Tây Bắc 2023</p>
        </div>
      </div>
    </div>
  );
}
export default BlogMuc;

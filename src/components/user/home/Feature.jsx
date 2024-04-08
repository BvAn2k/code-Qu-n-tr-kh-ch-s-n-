import React from 'react';

const Feature = () => {
  return (
    <div className='flex flex-col'>
      <div>
        <p className='text-center text-4xl text-blue-800 font-bold mt-10'>
          Nền tảng quản trị khách sạn toàn diện
        </p>
      </div>
      <div className='flex flex-col w-full h-[500px] mt-[70px]  '>
        <div className='h-[33%]  flex flex-row items-center justify-center' >
          <div className='w-[35%] h-full  flex flex-row mr-[150px]'>
            <div >
              <p className='text-blue-800 font-bold'>Nền tảng vận hành khách sạn 0-2 *</p>
              <p>Đơn giản chỉ cần một thiết bị điện tử có kết nối Internet là bạn có thể quản lý,
                điều hành khách sạn với phần mềm quản lý khách sạn ezCloudhotel</p>
            </div>
            <div className='w-[280px] h-[280px]' >
              <img src="https://ezcloud.vn/wp-content/uploads/2023/06/ezCloudhotel-logo-homepage.jpg" alt="" />
            </div>
          </div>
          <div className='w-[35%] h-full  flex flex-row'>
            <div className='w-[170px] h-[170px]' >
              <img src="https://ezcloud.vn/wp-content/uploads/2023/06/ezBe-logo-homepage.jpg" alt="" />
            </div>
            <div >
              <p className='text-blue-800 font-bold'>Công cụ đặt phòng trực tuyến</p>
              <p>Tăng 23% doanh thu cho khách sạn với công cụ đặt phòng trực tuyến trên website/fanpage của khách sạn</p>
            </div>
          </div>
        </div>

        <div className='h-[33%]  flex flex-row items-center justify-center' >
          <div className='w-[35%] h-full  flex flex-row '>
            <div >
              <p className='text-blue-800 font-bold'>Nền tảng vận hành khách sạn 3-5 *</p>
              <p>Giải pháp quản lý chuỗi khách sạn/resort tổng thể ezFolio
                được thiết kế đáp ứng đầy đủ tính năng cho khách sạn quy mô từ 3 đến 5 sao</p>
            </div>
            <div className='w-[280px] h-[280px]' >
              <img src="https://ezcloud.vn/wp-content/uploads/2023/06/ezfolio-logo-homepage.jpg" alt="" />
            </div>
          </div>
          <div className='w-[200px] h-[200px] mr-[80px] ml-[80px]'>
            <img src="https://ezcloud.vn/wp-content/uploads/2023/06/ezcloud-homepage.jpg" alt="" />

          </div>
          <div className='w-[35%] h-full  flex flex-row'>
            <div className='w-[270px] h-[270px]' >
              <img src="https://ezcloud.vn/wp-content/uploads/2023/06/ezCms-logo-homepage.jpg" alt="" />
            </div>
            <div >
              <p className='text-blue-800 font-bold'>Phần mềm quản lý kênh phân phối</p>
              <p>Kết nối hơn 200 kênh OTAs, gia tăng công suất phòng lên đến 22%-35%. Hạn chế tối đa các thao tác thủ công,
                thay đổi giá tự động và so sánh với các đối thủ</p>
            </div>
          </div>
        </div>

        <div className='h-[33%]  flex flex-row items-center justify-center mt-[45px]' >
          <div className='w-[35%] h-full  flex flex-row mr-[150px]'>
            <div >
              <p className='text-blue-800 font-bold'>Nền tảng đặt phòng tập trung​</p>
              <p>Hệ thống đặt phòng tập trung, giúp quản lý toàn bộ thông tin đặt phòng từ nhiều nguồn, kênh phân phối bán phòng​ từ B2C, B2B và B2B2C</p>
            </div>
            <div className='w-[280px] h-[280px]' >
              <img src="https://ezcloud.vn/wp-content/uploads/2023/06/ezCrs-logo-homepage.jpg" alt="" />
            </div>
          </div>
          <div className='w-[35%] h-full  flex flex-row'>
            <div className='w-[170px] h-[170px]' >
              <img src="https://ezcloud.vn/wp-content/uploads/2023/06/ezRms-logo-homepage.jpg" alt="" />
            </div>
            <div >
              <p className='text-blue-800 font-bold'>Nền tảng tối ưu quản lý doanh thu</p>
              <p>Giải pháp tối ưu giúp gia tăng doanh thu bán phòng dựa trên các chính sách bán hàng linh hoạt</p>
            </div>
          </div>
        </div>
      </div>


    </div>
  );
};

export default Feature;
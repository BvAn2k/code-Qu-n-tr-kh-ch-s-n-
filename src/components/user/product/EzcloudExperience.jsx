import React from 'react'

const Page8 = () => {
  return (
    <div className='w-full flex flex-col justify-center items-center '>
        <div className='text-center text-4xl text-blue-800 font-bold mt-10 mb-5'>
            <p>ezCloudhotel Manager - Ứng dụng quản lýdành cho chủ khách sạn</p>
        </div>
        <div className= 'rounded-full flex h-[5px] w-[80px] bg-blue-500 mb-5 mt-5  '></div>
        <div className='w-full flex flex-row ]'>
            <div className='w-[33%] h-full ml-20 '>
                <img src="https://ezcloud.vn/wp-content/uploads/2023/05/Frame-Price.png" alt="" />
                <p className= 'text-2xl font-bold text-blue-800 text-center'>Tự động thay đổi chính sách giá bán linh hoạt</p>
                <p>Giá bán phòng khách sạn sẽ tự động thay đổi theo nhu cầu và công suất phòng khách sạn nhằm tăng doanh thu</p>

            </div>
            <div className='w-[33%] h-full mx-10'>
                <img src="https://ezcloud.vn/wp-content/uploads/2023/05/Frame-68711-1.png" alt="" />
                <p className= 'text-2xl font-bold text-blue-800 mt-4 text-center'>Email Marketing chăm sóc khách hàng hiệu quả</p>
                <p>Tự động trả lời các email xác nhận đặt phòng, gửi thư mừng sinh nhật, thư quảng cáo… đơn giản và nhanh chóng</p>

            </div>
            <div className='w-[33%] h-full mr-20  '>
                <img src="https://ezcloud.vn/wp-content/uploads/2023/05/Frame-68714.png" alt="" />
                <p className= 'text-2xl font-bold text-blue-800 mt-8 text-center'>Kết nối đa thiết bị ngoại vi tiết kiệm chi phí</p>
                <p>Khóa từ và hệ thống điện thông minh giúp chủ khách sạn tiết kiệm 25% chi phí điện năng mỗi tháng</p>

            </div>
        </div>
    </div>
  )
}

export default Page8
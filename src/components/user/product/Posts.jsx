import React from 'react'

const Posts = () => {
    return (
        <div className='flex justify-center w-full'>
            <div className='h-auto flex flex-col justify-center items-center my-auto w-[80%]'>

                {/* Tieu de */}
                <div className='flex w-full justify-center text-4xl font-bold text-blue-800 p-8'>
                    Bài viết liên quan
                </div>
                <div className='flex bg-[#2A85FF] w-[5%] h-[4px] rounded-full'></div>

                {/* grid */}
                <div className="w-full flex grid-col-4 gap-4 h-auto py-6">
                    {/* <Slider {...settings}> */}
                    <div className="flex flex-col mx-auto">
                        <div className='w-full h-[50%] flex items-center mb-auto'>
                            <img src="https://ezcloud.vn/wp-content/uploads/2023/12/gelatin-la-gi-270x140.webp" alt="ezcloud_photo" className="object-cover w-full h-full rounded-xl" />
                        </div>
                        <div className='w-full h-[50%]'>
                            <p className='flex text-md font-bold text-blue-700'>
                            Gelatin là gì? Bí quyết tạo nên những món trang miệng tuyệt đỉnh
                            </p>
                            <p className='text-md font-normal text-gray-500'>
                            Gelatin là gì? Gelatin có công dụng tuyệt vời gì mà lại được sử dụng rộng rãi trong nhiều lĩnh vực khác nhau. Cùng ezCloud
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-col mx-auto">
                        <div className='w-full h-[50%] flex items-center mb-auto'>
                            <img src="https://ezcloud.vn/wp-content/uploads/2023/12/chi-phi-bien-doi-270x140.webp" alt="ezcloud_photo" className="object-cover w-full h-full rounded-xl" />
                        </div>
                        <div className='w-full h-[50%]'>
                            <p className='flex text-md font-bold text-blue-700'>
                            Chi phí biến đổi là gì? Chiến lược và mẹo quản lý hiệu quả
                            </p>
                            <p className='text-md font-normal text-gray-500'>
                            Chi phí biến đổi cần được kiểm soát và tối ưu hóa để giảm thiểu tối đa chi phí không cần thiết và tăng doanh
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-col mx-auto">
                        <div className='w-full h-[50%] flex items-center mb-auto'>
                            <img src="https://ezcloud.vn/wp-content/uploads/2023/12/syrup-la-gi-270x140.webp" alt="ezcloud_photo" className="object-cover w-full h-full rounded-xl" />
                        </div>
                        <div className='w-full h-[50%]'>
                            <p className='flex text-md font-bold text-blue-700'>
                            Syrup là gì? Nguyên liệu phổ biến trong pha chế đồ uống
                            </p>
                            <p className='text-md font-normal text-gray-500'>
                            Giải đáp syrup là gì? Nguồn gốc, quy trình sản xuất, ứng dụng của syrup cùng những công thức làm syrup cực đơn giản tại
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-col mx-auto">
                        <div className='w-full h-[50%] flex items-center mb-auto'>
                            <img src="https://ezcloud.vn/wp-content/uploads/2023/12/booking-bar-la-gi-270x140.webp" alt="ezcloud_photo" className="object-cover w-full h-full rounded-xl" />
                        </div>
                        <div className='w-full h-[50%]'>
                            <p className='flex text-md font-bold text-blue-700'>
                            Booking Bar là gì? Những điều thú vị cần biết về nghề Booking Bar
                            </p>
                            <p className='text-md font-normal text-gray-500'>
                            Bạn có biết khái niệm Booking Bar là gì? Tìm hiểu về nhiệm vụ, yếu tố cần có và mức lương cụ thể của một
                            </p>
                        </div>
                    </div>
                    {/* </Slider> */}
                </div>
            </div>
        </div>
    )
}

export default Posts
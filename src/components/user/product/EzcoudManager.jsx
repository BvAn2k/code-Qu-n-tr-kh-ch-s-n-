import React from 'react'
import imgbg from '../../../assets/ungdung.png';

const Page7 = () => {
    return (
        <div className='flex flex-col justify-center items-center'>
            <div className='text-center text-4xl text-blue-800 font-bold mt-10 mb-5'>
                <p>ezCloudhotel Manager - Ứng dụng quản lýdành cho chủ khách sạn</p>
            </div>
            <div className='rounded-full flex h-[5px] w-[80px] bg-blue-500 mb-5'></div>
            <div>
                <p>Công việc bận rộn khiến bạn không thường xuyên có mặt ở khách sạn? Vậy đừng bỏ qua:</p>
            </div>
            <div>
                <p className='text-blue-800 mt-5 mb-5'>ezCloudhotel Manager – Ứng dụng quản lý dành cho chủ khách sạn.</p>
            </div>
            <div>
                <p className='mb-5'>Bạn sẽ không phải lo lắng về khách sạn khi phải đi xa</p>
            </div>
           
            <div className='flex flex-col w-full h-[600px]   bg-center bg-no-repeat' style={{ backgroundImage: `url(${imgbg})`, position: 'relative', borderRadius: '10px' }} >
                <div className='h-[33%]  flex flex-row items-center justify-center mt-[70px]' >
                    <div className='w-[50%] h-full  flex flex-row ml-[200px]'>
                        <div className='w-[250px]'>
                            <p className='text-blue-800 font-bold text-right text-2xl'>Thao tác đặt phòng nhanh chóng</p>
                        </div>
                        <div className='w-[80px] h-[80px]' >
                            <img src="https://ezcloud.vn/wp-content/uploads/2023/04/ezcloudhotel_icon_04.png" alt="" />
                        </div>
                    </div>
                    <div className='w-[50%] h-full  flex flex-row ml-[200px]'>
                        <div className='w-[80px] h-[80px]' >
                            <img src="https://ezcloud.vn/wp-content/uploads/2023/04/ezcloudhotel_icon_07.png" alt="" />
                        </div>
                        <div className='w-[300px]'>
                            <p className='text-blue-800 font-bold text-left text-2xl'>Nhận thông báo từ khách sạn tức thời</p>
                        </div>
                    </div>
                </div>

                <div className=' h-[33%] flex flex-row items-center justify-center' >
                    <div className='w-50% h-full  flex flex-row ml-[180px]'>
                        <div className='w-[200px]'>
                            <p className='text-blue-800 font-bold text-right text-2xl'>Theo dõi báo cáo mọi lúc mọi nơi</p>
                        </div>
                        <div className='w-[80px] h-[80px]' >
                            <img src="https://ezcloud.vn/wp-content/uploads/2023/04/ezcloudhotel_icon_05.png" alt="" />
                        </div>
                    </div>
                    <div className='w-[50%] h-full  flex flex-row ml-[600px]'>
                        <div className='w-[90px] h-[90px]' >
                            <img src="https://ezcloud.vn/wp-content/uploads/2023/04/ezcloudhotel_icon_08.png" alt="" />
                        </div>
                        <div className='w-[380px]'>
                            <p className='text-blue-800 font-bold text-left text-2xl'>Thay đổi quyết định bán phòng dễ dàng</p>
                        </div>
                    </div>
                </div>

                <div className='h-[33%]  flex flex-row items-center justify-center mt-[45px]' >
                    <div className='w-[50%] h-full  flex flex-row ml-[80px]'>
                        <div className='w-[300px]' >
                            <p className='text-blue-800 font-bold text-right text-2xl'>Thống kê chi tiết lượng khách lưu trú​</p>
                        </div>
                        <div className='w-[90px] h-[90px]' >
                            <img src="https://ezcloud.vn/wp-content/uploads/2023/04/ezcloudhotel_icon_06.png" alt="" />
                        </div>
                    </div>
                    <div className='w-[50%] h-full  flex flex-row ml-[500px]'>
                        <div className='w-[90px] h-[90px]' >
                            <img src="https://ezcloud.vn/wp-content/uploads/2023/04/ezcloudhotel_icon_09.png" alt="" />
                        </div>
                        <div className='w-[300px]'>
                            <p className='text-blue-800 font-bold text-left text-2xl'>Nền tảng tối ưu quản lý doanh thu</p>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Page7
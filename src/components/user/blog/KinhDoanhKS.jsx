import React from 'react'
import img1 from '../../../assets/blogs_photo_1.png'
import img2 from '../../../assets/blogs_photo_2.jpg'
import img3 from '../../../assets/blogs_photo_3.jpeg'
import img4 from '../../../assets/blogs_photo_4.jpg'
import img5 from '../../../assets/blogs_photo_5.jpg'
import img6 from '../../../assets/blogs_photo_6.png'
import img7 from '../../../assets/blogs_photo_7.jpg'
import img8 from '../../../assets/blogs_photo_8.jpg'

const KinhDoanhKS = () => {
    return (
        <div className='flex justify-center w-full h-[auto] my-5'>
            <div className='w-[78%] h-full flex flex-col'>

                {/* kinh doanh ks */}
                <div className='w-full h-auto flex flex-row'>
                    <div className='w-[61%] h-auto py-5'>
                        <p className='font-bold text-4xl'>Kinh doanh khách sạn</p>
                    </div>
                    <div className='w-[42%] h-auto flex flex-row justify-between py-5'>
                        <p className='flex items-center font-semibold text-md'>Marketing khách sạn</p>
                        <p className='flex items-center font-semibold text-md'>Nghiệp vụ khách sạn</p>
                        <p className='flex items-center font-semibold text-md'>Quản lý khách sạn</p>
                    </div>
                </div>

                {/* list components  */}
                <div className='w-full h-auto flex flex-row gap-6'>
                    {/* cột 1 */}
                    <div className='flex-1 flex-col w-[30%]'>
                        <img className='w-full h-[200px] object-cover rounded-lg' src={img1} alt="image1" />
                        <p className='text-xl font-semibold pt-2 pb-5 leading-[1.2]'>Google Travel là gì? Cách để khách sạn hiển thị tốt nhất</p>
                        <hr/>
                        <div className='flex flex-row h-auto my-2'>
                            <img className='w-[25%] h-[62px] object-cover rounded-lg' src={img2} alt="image2" />
                            <div className='w-[75%] flex flex-col pl-3 justify-between'>
                            <p className='leading-[1.3]'>Hospitality là gì? – Tất cả những điều bạn cần biết về ngành hospitality</p>
                            <p className='text-xs font-light text-gray-400'>20/07/2023</p>
                            </div>
                        </div>
                        <hr/>
                        <div className='flex flex-row h-auto my-2'>
                            <img className='w-[25%] h-[62px] object-cover rounded-lg' src={img3} alt="image2" />
                            <div className='w-[75%] flex flex-col pl-3 justify-between'>
                            <p className='leading-[1.3]'>Cách tính Food cost trong kinh doanh khách sạn</p>
                            <p className='text-xs font-light text-gray-400'>18/07/2023</p>
                            </div>
                        </div>
                        <hr/>
                        <div className='flex flex-row h-auto my-2'>
                            <img className='w-[25%] h-[62px] object-cover rounded-lg' src={img4} alt="image2" />
                            <div className='w-[75%] flex flex-col pl-3 justify-between'>
                            <p className='leading-[1.3]'>9 kinh nghiệm kinh doanh nhà nghỉ hiệu quả</p>
                            <p className='text-xs font-light text-gray-400'>14/07/2023</p>
                            </div>
                        </div>
                        <hr/>
                        <div className='flex flex-row h-auto my-2'>
                            <img className='w-[25%] h-[62px] object-cover rounded-lg' src={img5} alt="image2" />
                            <div className='w-[75%] flex flex-col pl-3 justify-between'>
                            <p className='leading-[1.3]'>5 cách đơn giản giúp khách sạn giảm phụ thuộc vào các kênh OTA</p>
                            <p className='text-xs font-light text-gray-400'>11/07/2023</p>
                            </div>
                        </div>
                        <hr/>
                        <div className='flex flex-row h-auto my-2'>
                            <img className='w-[25%] h-[62px] object-cover rounded-lg' src={img6} alt="image2" />
                            <div className='w-[75%] flex flex-col pl-3 justify-between'>
                            <p className='leading-[1.3]'>Kinh doanh khách sạn: 5 sai lầm khi bán phòng trên các kênh OTA</p>
                            <p className='text-xs font-light text-gray-400'>11/07/2023</p>
                            </div>
                        </div>
                        <hr/>
                    </div>
                    {/* cột 2 */}
                    <div className='flex-1 flex-col w-[30%]'>
                        <img className='w-full h-[200px] object-cover rounded-lg' src={img7} alt="image1" />
                        <p className='text-xl font-semibold pt-2 pb-5 leading-[1.2]'>Hệ thống quản lý tài sản “ALL IN ONE” với giải pháp “BEST OF BREED”</p>
                        <hr/>
                        <div className='flex flex-row h-auto my-2'>
                            <img className='w-[25%] h-[62px] object-cover rounded-lg' src={img2} alt="image2" />
                            <div className='w-[75%] flex flex-col pl-3 justify-between'>
                            <p className='leading-[1.3]'>Những tình huống phàn nàn của khách trong khách sạn</p>
                            <p className='text-xs font-light text-gray-400'>20/07/2023</p>
                            </div>
                        </div>
                        <hr/>
                        <div className='flex flex-row h-auto my-2'>
                            <img className='w-[25%] h-[62px] object-cover rounded-lg' src={img3} alt="image2" />
                            <div className='w-[75%] flex flex-col pl-3 justify-between'>
                            <p className='leading-[1.3]'>Quản trị khách sạn: Chi tiết về tiềm năng vị trí và ngành học</p>
                            <p className='text-xs font-light text-gray-400'>18/07/2023</p>
                            </div>
                        </div>
                        <hr/>
                        <div className='flex flex-row h-auto my-2'>
                            <img className='w-[25%] h-[62px] object-cover rounded-lg' src={img4} alt="image2" />
                            <div className='w-[75%] flex flex-col pl-3 justify-between'>
                            <p className='leading-[1.3]'>Duty Manager là gì? Những điều bạn cần phải biết về Duty Manager</p>
                            <p className='text-xs font-light text-gray-400'>14/07/2023</p>
                            </div>
                        </div>
                        <hr/>
                        <div className='flex flex-row h-auto my-2'>
                            <img className='w-[25%] h-[62px] object-cover rounded-lg' src={img5} alt="image2" />
                            <div className='w-[75%] flex flex-col pl-3 justify-between'>
                            <p className='leading-[1.3]'>Bản mô tả công việc quản lý nhà hàng đầy đủ nhất</p>
                            <p className='text-xs font-light text-gray-400'>11/07/2023</p>
                            </div>
                        </div>
                        <hr/>
                        <div className='flex flex-row h-auto my-2'>
                            <img className='w-[25%] h-[62px] object-cover rounded-lg' src={img6} alt="image2" />
                            <div className='w-[75%] flex flex-col pl-3 justify-between'>
                            <p className='leading-[1.3]'>General Manager là gì? Nhiệm vụ của một General Manager trong khách sạn</p>
                            <p className='text-xs font-light text-gray-400'>11/07/2023</p>
                            </div>
                        </div>
                        <hr/>
                    </div>
                    {/* cột 3 */}
                    <div className='flex-1 flex-col w-[30%]'>
                        <img className='w-full h-[200px] object-cover rounded-lg' src={img8} alt="image1" />
                        <p className='text-xl font-semibold pt-2 pb-5 leading-[1.2]'>Tâm lý khách du lịch 5+ quốc gia đặc trưng, chi tiết nhất</p>
                        <hr/>
                        <div className='flex flex-row h-auto my-2'>
                            <img className='w-[25%] h-[62px] object-cover rounded-lg' src={img2} alt="image2" />
                            <div className='w-[75%] flex flex-col pl-3 justify-between'>
                            <p className='leading-[1.3]'>Nhân viên lễ tân: Hướng dẫn giải quyết 7 tình huống khó xử</p>
                            <p className='text-xs font-light text-gray-400'>20/07/2023</p>
                            </div>
                        </div>
                        <hr/>
                        <div className='flex flex-row h-auto my-2'>
                            <img className='w-[25%] h-[62px] object-cover rounded-lg' src={img3} alt="image2" />
                            <div className='w-[75%] flex flex-col pl-3 justify-between'>
                            <p className='leading-[1.3]'>Cross-selling – Thủ thuật bán hàng siêu lợi nhuận</p>
                            <p className='text-xs font-light text-gray-400'>18/07/2023</p>
                            </div>
                        </div>
                        <hr/>
                        <div className='flex flex-row h-auto my-2'>
                            <img className='w-[25%] h-[62px] object-cover rounded-lg' src={img4} alt="image2" />
                            <div className='w-[75%] flex flex-col pl-3 justify-between'>
                            <p className='leading-[1.3]'>8+ nguyên tắc thiết kế quầy pha chế không thể bỏ qua 2023</p>
                            <p className='text-xs font-light text-gray-400'>14/07/2023</p>
                            </div>
                        </div>
                        <hr/>
                        <div className='flex flex-row h-auto my-2'>
                            <img className='w-[25%] h-[62px] object-cover rounded-lg' src={img5} alt="image2" />
                            <div className='w-[75%] flex flex-col pl-3 justify-between'>
                            <p className='leading-[1.3]'>Một số nguyên tắc nhân viên khách sạn cần có khi làm việc</p>
                            <p className='text-xs font-light text-gray-400'>11/07/2023</p>
                            </div>
                        </div>
                        <hr/>
                        <div className='flex flex-row h-auto my-2'>
                            <img className='w-[25%] h-[62px] object-cover rounded-lg' src={img6} alt="image2" />
                            <div className='w-[75%] flex flex-col pl-3 justify-between'>
                            <p className='leading-[1.3]'>4 nguyên tắc cơ bản nhất của một nhân viên khách sạn</p>
                            <p className='text-xs font-light text-gray-400'>11/07/2023</p>
                            </div>
                        </div>
                        <hr/>
                    </div>

                </div>
            </div>


        </div>
    )
}

export default KinhDoanhKS
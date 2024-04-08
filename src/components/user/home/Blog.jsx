import React from 'react'
import img from '../../../assets/blogs_photo_1.png';
import img2 from '../../../assets/blogs_photo_2.jpg';
import img3 from '../../../assets/blogs_photo_3.jpeg';
import img4 from '../../../assets/blogs_photo_4.jpg';
// Mr. Sinh

const Blog = () => {
  return (
    <div className='flex justify-center w-full'> 

    <div className='h-auto flex flex-col justify-center items-center my-auto w-[60%]'>

      {/* Tiêu đề */}
      <div className='flex w-full justify-center text-4xl font-bold text-blue-800 p-8'>
        Blog
      </div>
      <div className='flex bg-[#2A85FF] w-[5%] h-[4px] rounded-full'></div>

      {/* Grid  */}
      <div className="grid grid-cols-4 gap-1 h-auto py-6">
        <div className="p-4 flex flex-col mx-auto">
          <div className='w-full h-[55%] flex items-center mb-auto'>
            <img src={img} alt="ezcloud_photo" className="object-cover w-full h-full rounded-xl" />
          </div>
          <div className='w-full h-[40%] flex flex-col items-center'>
            <p className='flex text-md font-bold text-blue-800'>
              Google Travel là gì? Cách để khách sạn hiển thị tốt nhất
            </p>
            <p className='flex text-md font-normal'>
              Google Travel là gì? Kênh marketing tiềm năng cho dịch vụ lưu trú toàn...
            </p>
          </div>
        </div>
        <div className="  p-3 flex flex-col mx-auto">
          <div className='w-full h-[55%] flex items-center mb-auto'>
            <img src={img2} alt="ezcloud_photo" className="object-cover w-full h-full rounded-xl" />
          </div>
          <div className='w-full h-[40%] flex flex-col items-center'>
            <p className='flex text-md font-bold text-blue-800'>
            Hospitality là gì? – Tất cả những điều bạn cần biết về ngành hospitality
            </p>
            <p className='flex text-md font-normal'>
            Hospitality là một trong những ngành phát triển năng động nhất trên thế giới...
            </p>
          </div>
        </div>
        <div className="  p-3 flex flex-col mx-auto">
          <div className='w-full h-[55%] flex items-center mb-auto'>
            <img src={img3} alt="ezcloud_photo" className="object-cover w-full h-full rounded-xl" />
          </div>
          <div className='w-full h-[40%] flex flex-col items-center'>
            <p className='flex text-md font-bold text-blue-800'>
            Cách tính Food cost trong kinh doanh khách sạn
            </p>
            <p className='flex text-md font-normal'>
            Food Cost là gì? Cách tính Food cost và định giá món ăn trong...
            </p>
          </div>
        </div>
        <div className="  p-3 flex flex-col mx-auto">
          <div className='w-full h-[55%] flex items-center mb-auto'>
            <img src={img4} alt="ezcloud_photo" className="object-cover w-full h-full rounded-xl" />
          </div>
          <div className='w-full h-[40%] flex flex-col items-center'>
            <p className='flex text-md font-bold text-blue-800'>
              9 kinh nghiệm kinh doanh nhà nghỉ hiệu quả
            </p>
            <p className='flex text-md font-normal'>
            9 tuyệt chiêu kinh doanh nhà nghỉ siêu lợi nhuận mang về cho các...
            </p>
          </div>
        </div>
        <div className="  p-3 flex flex-col mx-auto">
          <div className='w-full h-[55%] flex items-center mb-auto'>
            <img src={img} alt="ezcloud_photo" className="object-cover w-full h-full rounded-xl" />
          </div>
          <div className='w-full h-[40%] flex flex-col items-center'>
            <p className='flex text-md font-bold text-blue-800'>
              Google Travel là gì? Cách để khách sạn hiển thị tốt nhất
            </p>
            <p className='flex text-md font-normal'>
              Google Travel là gì? Kênh marketing tiềm năng cho dịch vụ lưu trú toàn...
            </p>
          </div>
        </div>
        <div className="  p-3 flex flex-col mx-auto">
          <div className='w-full h-[55%] flex items-center mb-auto'>
            <img src={img} alt="ezcloud_photo" className="object-cover w-full h-full rounded-xl" />
          </div>
          <div className='w-full h-[40%] flex flex-col items-center'>
            <p className='flex text-md font-bold text-blue-800'>
              Google Travel là gì? Cách để khách sạn hiển thị tốt nhất
            </p>
            <p className='flex text-md font-normal'>
              Google Travel là gì? Kênh marketing tiềm năng cho dịch vụ lưu trú toàn...
            </p>
          </div>
        </div>
        <div className="  p-3 flex flex-col mx-auto">
          <div className='w-full h-[55%] flex items-center mb-auto'>
            <img src={img} alt="ezcloud_photo" className="object-cover w-full h-full rounded-xl" />
          </div>
          <div className='w-full h-[40%] flex flex-col items-center'>
            <p className='flex text-md font-bold text-blue-800'>
              Google Travel là gì? Cách để khách sạn hiển thị tốt nhất
            </p>
            <p className='flex text-md font-normal'>
              Google Travel là gì? Kênh marketing tiềm năng cho dịch vụ lưu trú toàn...
            </p>
          </div>
        </div>
        <div className="  p-3 flex flex-col mx-auto">
          <div className='w-full h-[55%] flex items-center mb-auto'>
            <img src={img} alt="ezcloud_photo" className="object-cover w-full h-full rounded-xl" />
          </div>
          <div className='w-full h-[40%] flex flex-col items-center'>
            <p className='flex text-md font-bold text-blue-800'>
              Google Travel là gì? Cách để khách sạn hiển thị tốt nhất
            </p>
            <p className='flex text-md font-normal'>
              Google Travel là gì? Kênh marketing tiềm năng cho dịch vụ lưu trú toàn...
            </p>
          </div>
        </div>

        {/* Add more grid items */}
      </div>
    </div>
    </div>

  )
}

export default Blog
// Mr. Sinh

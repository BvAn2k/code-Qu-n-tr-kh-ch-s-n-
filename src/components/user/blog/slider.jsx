import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Scrollbar from './scollBar';

function MyComponent() {

  
    return (
      <div className='flex justify-center w-full'> 
  <div className='h-auto flex flex-col justify-center items-center my-auto w-[60%]'>
  

  <div className="w-full grid grid-cols-1 gap-1 h-auto py-6 flex flex-row ">
  
    <Scrollbar>
    <div className="p-3 flex flex-col mx-auto">
        <div className='w-full h-[65%] flex items-center mb-auto'>
          <img src="" alt="ezcloud_photo" className="object-cover w-full h-full rounded-xl" />
        </div>
        <div className='w-full h-[30%]'>
          <p className='flex text-md text-center font-bold text-blue-700'>
            [VTV1] ezCloud đồng hành cùng khách sạn trong hành trình chuyển đổi số
          </p>
        </div>
      </div>
      <div className="p-3 flex flex-col mx-auto">
        <div className='w-full h-[65%] flex items-center mb-auto'>
          <img src="" alt="ezcloud_photo" className="object-cover w-full h-full rounded-xl" />
        </div>
        <div className='w-full h-[30%]'>
          <p className='flex text-md text-center font-bold text-blue-700'>
            [ictvietnam.vn] Cơ sở du lịch tìm cách để không bị “đô hộ” số
          </p>
        </div>
      </div>
      <div className="p-3 flex flex-col mx-auto">
        <div className='w-full h-[65%] flex items-center mb-auto'>
          <img src="" alt="ezcloud_photo" className="object-cover w-full h-full rounded-xl" />
        </div>
        <div className='w-full h-[30%]'>
          <p className='flex text-md text-center font-bold text-blue-700'>
            [Vietnamnet] Nền tảng Việt hỗ trợ khách sạn vừa và nhỏ chuyển đổi số
          </p>
        </div>
      </div>
      <div className="p-3 flex flex-col mx-auto">
        <div className='w-full h-[65%] flex items-center mb-auto'>
          <img src="" alt="ezcloud_photo" className="object-cover w-full h-full rounded-xl" />
        </div>
        <div className='w-full h-[30%]'>
          <p className='flex text-md text-center font-bold text-blue-700'>
            [ictvietnam.vn] Nền tảng quản trị và kinh doanh du lịch Việt mở rộng thị trường nước ngoài
          </p>
        </div>
      </div>
      <div className="p-3 flex flex-col mx-auto">
        <div className='w-full h-[65%] flex items-center mb-auto'>
          <img src=""alt="ezcloud_photo" className="object-cover w-full h-full rounded-xl" />
        </div>
        <div className='w-full h-[30%]'>
          <p className='flex text-md text-center font-bold text-blue-700'>
            [VTV1] ezCloud đồng hành cùng khách sạn trong hành trình chuyển đổi số
          </p>
        </div>
      </div>
      <div className="p-3 flex flex-col mx-auto">
        <div className='w-full h-[65%] flex items-center mb-auto'>
          <img src="" alt="ezcloud_photo" className="object-cover w-full h-full rounded-xl" />
        </div>
        <div className='w-full h-[30%]'>
          <p className='flex text-md text-center font-bold text-blue-700'>
            [ictvietnam.vn] Cơ sở du lịch tìm cách để không bị “đô hộ” số
          </p>
        </div>
      </div>
      <div className="p-3 flex flex-col mx-auto">
        <div className='w-full h-[65%] flex items-center mb-auto'>
          <img src="" alt="ezcloud_photo" className="object-cover w-full h-full rounded-xl" />
        </div>
        <div className='w-full h-[30%]'>
          <p className='flex text-md text-center font-bold text-blue-700'>
            [Vietnamnet] Nền tảng Việt hỗ trợ khách sạn vừa và nhỏ chuyển đổi số
          </p>
        </div>
      </div>
      <div className="p-3 flex flex-col mx-auto">
        <div className='w-full h-[65%] flex items-center mb-auto'>
          <img src="" alt="ezcloud_photo" className="object-cover w-full h-full rounded-xl" />
        </div>
        <div className='w-full h-[30%]'>
          <p className='flex text-md text-center font-bold text-blue-700'>
            [ictvietnam.vn] Nền tảng quản trị và kinh doanh du lịch Việt mở rộng thị trường nước ngoài
          </p>
        </div>
      </div>
    </Scrollbar>
  </div>
  

  </div>
      </div>
  );
}

export default MyComponent;
import React from 'react';
import Slider from 'react-slick';
import img from '../../../assets/news_photo_1.jpeg';

const BangTin = () => {
  
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: true,
        responsive: [
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 2,
            },
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
            },
          },
        ],
        
      };
      
    
      return (
        <div className='flex justify-center w-full'> 
    <div className='h-auto flex flex-col justify-center items-center my-auto w-full'>
    
    
    
    {/* grid */}
    <div className="w-full grid grid-cols-1 gap-1 h-auto py-6 flex flex-row ">
      <Slider {...settings}>
        <div className="p-3 flex flex-col mx-auto">
          <div className='w-full h-[65%] flex items-center mb-auto'>
        
            <img src={'https://ezcloud.vn/wp-content/uploads/2019/08/ebook-toi-uu-hoa-website-khach-san-2-270x400.jpg'} alt="ezcloud_photo" className="object-cover w-full h-full rounded-xl" />
          </div>
          <div className='w-full h-[30%]'>
            <p className='flex text-md text-center font-bold'>
              Hướng dẫn toàn tập:Tối ưu hóa website Khách sạn.
            </p>
          </div>
        </div>
        <div className="p-3 flex flex-col mx-auto">
          <div className='w-full h-[65%] flex items-center mb-auto'>
            <img src={'https://ezcloud.vn/wp-content/uploads/2019/08/bìa_ebook-270x400.png'} alt="ezcloud_photo" className="object-cover w-full h-full rounded-xl" />
          </div>
          <div className='w-full h-[30%]'>
            <p className='flex text-md text-center font-bold'>
             Bí quyết tăng trưởng"Thần Tốc"Doanh thu khách sạn 4.0
            </p>
          </div>
        </div>
        <div className="p-3 flex flex-col mx-auto">
          <div className='w-full h-[65%] flex items-center mb-auto'>
            <img src={'https://ezcloud.vn/wp-content/uploads/2019/09/Screenshot_5-1-270x400.jpg'} alt="ezcloud_photo" className="object-cover w-full h-full rounded-xl" />
          </div>
          <div className='w-full h-[30%]'>
            <p className='flex text-md text-center font-bold'>
             Giải pháp kinh doanh khách sạn mùa thấp điểm 
            </p>
          </div>
        </div>
        <div className="p-3 flex flex-col mx-auto">
          <div className='w-full h-[65%] flex items-center mb-auto'>
            <img src={'https://ezcloud.vn/wp-content/uploads/2019/07/9-xu-huong-moi-nhat-trong-kinh-doanh-khach-san-1-270x400.jpg'} alt="ezcloud_photo" className="object-cover w-full h-full rounded-xl" />
          </div>
          <div className='w-full h-[30%]'>
            <p className='flex text-md text-center font-bold'>
              9 xu hướng kinh doanh khách sạn mùa thấp điểm 
            </p>
          </div>
        </div>
        <div className="p-3 flex flex-col mx-auto">
          <div className='w-full h-[65%] flex items-center mb-auto'>
            <img src={'https://ezcloud.vn/wp-content/uploads/2021/04/bao-cao-du-lich-270x400.jpg'} alt="ezcloud_photo" className="object-cover w-full h-full rounded-xl" />
          </div>
          <div className='w-full h-[30%]'>
            <p className='flex text-md text-center font-bold'>
              Báo cáo tình hình du lịch năm 2020
            </p>
          </div>
        </div>
        <div className="p-3 flex flex-col mx-auto">
          <div className='w-full h-[65%] flex items-center mb-auto'>
            <img src={'https://ezcloud.vn/wp-content/uploads/2023/02/anh-bia-huong-dan-chuyen-doi-so-270x400.webp'} alt="ezcloud_photo" className="object-cover w-full h-full rounded-xl" />
          </div>
          <div className='w-full h-[30%]'>
            <p className='flex text-md text-center font-bold'>
              Hướng dẫn chuyển đổi số trong ngành du lịch
            </p>
          </div>
        </div>
        </Slider>
    </div>
    
    
    
   
    
    </div>
        </div>
        
      )
    }
export default BangTin;

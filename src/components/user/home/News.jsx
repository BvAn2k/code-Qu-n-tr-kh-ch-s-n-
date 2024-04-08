import React from 'react'
import img from '../../../assets/news_photo_1.jpeg';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


//mr. Sinh
const News = () => {
  // const CustomPrevArrow = () => {
  //   return (
  //     <button
  //       className="slick-prev bg-black text-white"
  //     >
  //       Prev
  //     </button>
  //   );
  // };

  // const CustomNextArrow = () => {
  //   return (
  //     <button
  //       className="slick-next bg-black text-white"
  //     >
  //       Next
  //     </button>
  //   );
  // };
  const settings = {
    dots: false,
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
    // prevArrow: <CustomPrevArrow />,
    // nextArrow: <CustomNextArrow />,
  };
  

  return (
    <div className='flex justify-center w-full'> 
<div className='h-auto flex flex-col justify-center items-center my-auto w-[60%]'>

{/* Tieu de */}
<div className='flex w-full justify-center text-4xl font-bold text-blue-800 p-8'>
  Báo chí nói về ezCloud
</div>
<div className='flex bg-[#2A85FF] w-[5%] h-[4px] rounded-full'></div>

{/* grid */}
<div className="w-full grid grid-cols-1 gap-1 h-auto py-6 flex flex-row ">
  <Slider {...settings}>
    <div className="p-3 flex flex-col mx-auto">
      <div className='w-full h-[65%] flex items-center mb-auto'>
        <img src={img} alt="ezcloud_photo" className="object-cover w-full h-full rounded-xl" />
      </div>
      <div className='w-full h-[30%]'>
        <p className='flex text-md text-center font-bold text-blue-700'>
          [VTV1] ezCloud đồng hành cùng khách sạn trong hành trình chuyển đổi số
        </p>
      </div>
    </div>
    <div className="p-3 flex flex-col mx-auto">
      <div className='w-full h-[65%] flex items-center mb-auto'>
        <img src={img} alt="ezcloud_photo" className="object-cover w-full h-full rounded-xl" />
      </div>
      <div className='w-full h-[30%]'>
        <p className='flex text-md text-center font-bold text-blue-700'>
          [ictvietnam.vn] Cơ sở du lịch tìm cách để không bị “đô hộ” số
        </p>
      </div>
    </div>
    <div className="p-3 flex flex-col mx-auto">
      <div className='w-full h-[65%] flex items-center mb-auto'>
        <img src={img} alt="ezcloud_photo" className="object-cover w-full h-full rounded-xl" />
      </div>
      <div className='w-full h-[30%]'>
        <p className='flex text-md text-center font-bold text-blue-700'>
          [Vietnamnet] Nền tảng Việt hỗ trợ khách sạn vừa và nhỏ chuyển đổi số
        </p>
      </div>
    </div>
    <div className="p-3 flex flex-col mx-auto">
      <div className='w-full h-[65%] flex items-center mb-auto'>
        <img src={img} alt="ezcloud_photo" className="object-cover w-full h-full rounded-xl" />
      </div>
      <div className='w-full h-[30%]'>
        <p className='flex text-md text-center font-bold text-blue-700'>
          [ictvietnam.vn] Nền tảng quản trị và kinh doanh du lịch Việt mở rộng thị trường nước ngoài
        </p>
      </div>
    </div>
    <div className="p-3 flex flex-col mx-auto">
      <div className='w-full h-[65%] flex items-center mb-auto'>
        <img src={img} alt="ezcloud_photo" className="object-cover w-full h-full rounded-xl" />
      </div>
      <div className='w-full h-[30%]'>
        <p className='flex text-md text-center font-bold text-blue-700'>
          [VTV1] ezCloud đồng hành cùng khách sạn trong hành trình chuyển đổi số
        </p>
      </div>
    </div>
    <div className="p-3 flex flex-col mx-auto">
      <div className='w-full h-[65%] flex items-center mb-auto'>
        <img src={img} alt="ezcloud_photo" className="object-cover w-full h-full rounded-xl" />
      </div>
      <div className='w-full h-[30%]'>
        <p className='flex text-md text-center font-bold text-blue-700'>
          [ictvietnam.vn] Cơ sở du lịch tìm cách để không bị “đô hộ” số
        </p>
      </div>
    </div>
    <div className="p-3 flex flex-col mx-auto">
      <div className='w-full h-[65%] flex items-center mb-auto'>
        <img src={img} alt="ezcloud_photo" className="object-cover w-full h-full rounded-xl" />
      </div>
      <div className='w-full h-[30%]'>
        <p className='flex text-md text-center font-bold text-blue-700'>
          [Vietnamnet] Nền tảng Việt hỗ trợ khách sạn vừa và nhỏ chuyển đổi số
        </p>
      </div>
    </div>
    <div className="p-3 flex flex-col mx-auto">
      <div className='w-full h-[65%] flex items-center mb-auto'>
        <img src={img} alt="ezcloud_photo" className="object-cover w-full h-full rounded-xl" />
      </div>
      <div className='w-full h-[30%]'>
        <p className='flex text-md text-center font-bold text-blue-700'>
          [ictvietnam.vn] Nền tảng quản trị và kinh doanh du lịch Việt mở rộng thị trường nước ngoài
        </p>
      </div>
    </div>
  </Slider>
</div>



{/* <div className='flex flex-row w-full h-[auto] justify-center py-8'>

  <div className='flex flex-col w-[22%] mx-auto'>
    <div className='w-full h-[70%] flex items-center mb-auto'>
      <img src={img} alt="ezcloud_photo" className="object-cover w-full h-full rounded-xl" />
    </div>
    <div className='w-full h-[25%] flex items-center'>
      <p className='flex text-center text-md font-bold text-blue-700'>
        [VTV1] ezCloud đồng hành cùng khách sạn trong hành trình chuyển đổi số
      </p>
    </div>
  </div>

  <div className='flex flex-col w-[22%] mx-auto'>
    <div className='w-full h-[70%] flex items-center mb-auto'>
      <img src={img} alt="ezcloud_photo" className="object-cover w-full h-full rounded-xl" />
    </div>
    <div className='w-full h-[25%] flex items-center'>
      <p className='flex text-center text-md font-bold text-blue-700'>
        [ictvietnam.vn] Cơ sở du lịch tìm cách để không bị “đô hộ” số
      </p>
    </div>
  </div>

  <div className='flex flex-col w-[22%] mx-auto'>
    <div className='w-full h-[70%] flex items-center mb-auto'>
      <img src={img} alt="ezcloud_photo" className="object-cover w-full h-full rounded-xl" />
    </div>
    <div className='w-full h-[30%] flex items-center'>
      <p className='flex text-center text-md font-bold text-blue-700'>
        [Vietnamnet] Nền tảng Việt hỗ trợ khách sạn vừa và nhỏ chuyển đổi số
      </p>
    </div>
  </div>
  
  <div className='flex flex-col w-[22%] mx-auto'>
    <div className='w-full h-[70%] flex items-center mb-auto'>
      <img src={img} alt="ezcloud_photo" className="object-cover w-full h-full rounded-xl" />
    </div>
    <div className='w-full h-[30%] flex items-center'>
      <p className='flex text-center text-md font-bold text-blue-700'>
        [ictvietnam.vn] Nền tảng quản trị và kinh doanh du lịch Việt mở rộng thị trường nước ngoài
      </p>
    </div>
  </div>

</div> */}


</div>
    </div>
    
  )
}

export default News
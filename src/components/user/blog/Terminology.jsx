import React from 'react';
import imgbg1 from '../../../assets/bg1.png';
import imgbg2 from '../../../assets/bg2.png';
import imgbg3 from '../../../assets/bg3.png';
import imgbg4 from '../../../assets/bg4.png';
import imgbg5 from '../../../assets/bg5.png';
import imgbg6 from '../../../assets/bg6.png';
import imgbg7 from '../../../assets/bg7.png';

const Terminology = () => {
  return (
    <div className='flex flex-col justify-center items-center w-full'>
      <div className='flex flex-row mt-10 w-[80%]'>
        <div className='w-[50%] h-[450px] mr-4 bg-contain bg-no-repeat' style={{ backgroundImage: `url(${imgbg3})`, position: 'relative', borderRadius: '10px' }}>
          <div className='text-white  bg-blue-600 m-1' style={{ position: 'absolute', bottom: '80px', left: '20px', borderRadius: '20px' }}>
            <p className='m-1 mr-2 ml-2' >Blog Old</p>
          </div>
          <div className='text-white font-bold  ' style={{ position: 'absolute', bottom: '50px', left: '20px', borderRadius: '10px' }}>
            <p>TOP 15+ phần mềm quản lý nhà nghỉ tăng doanh thu hiệu quả</p>
          </div>
        </div>
        <div className='w-[50%] flex flex-col'>
          <div className='h-[202px] w-full mb-4' style={{ backgroundImage: `url(${imgbg1})`, borderRadius: '10px', position: 'relative' }}>
            <div className='text-white  bg-blue-600 m-1' style={{ position: 'absolute', bottom: '40px', left: '20px', borderRadius: '20px' }}>
              <p className='m-1 mr-2 ml-2' >Thuật ngữ khách sạn</p>
            </div>
            <div className='text-white font-bold  ' style={{ position: 'absolute', bottom: '10px', left: '20px', borderRadius: '10px' }}>
              <p>Chi phí biến đổi là gì? Chiến lược và mẹo quản lý hiệu quả</p>
            </div>
          </div>
          <div className='h-[202px] w-full' style={{ backgroundImage: `url(${imgbg2})`, borderRadius: '10px', position: 'relative' }}>
            <div className='text-white  bg-blue-600 m-1' style={{ position: 'absolute', bottom: '40px', left: '20px', borderRadius: '20px' }}>
              <p className='m-1 mr-2 ml-2' >Sales & Marketing</p>
            </div>
            <div className='text-white font-bold  ' style={{ position: 'absolute', bottom: '10px', left: '20px', borderRadius: '10px' }}>
              <p>8 xu hướng ngành khách sạn năm 2024 và mẹo dẫn đầu ngành</p>
            </div>
          </div>
        </div>
      </div>
      <div className='flex flex-row  w-[80%]'>
        <div className='w-[25%] h-[200px] mr-4 bg-contain bg-no-repeat' style={{ backgroundImage: `url(${imgbg4})`, position: 'relative', borderRadius: '10px' }}>
          <div className='text-white  bg-blue-600 m-1' style={{ position: 'absolute', bottom: '50px', left: '20px', borderRadius: '20px' }}>
            <p className='m-1 mr-2 ml-2' >Thuật ngữ nhà hàng</p>
          </div>
          <div className='text-white font-bold  ' style={{ position: 'absolute', bottom: '8px', left: '20px', borderRadius: '10px' }}>
            <p>Syrup là gì? Nguyên liệu phổ biến trong pha chế đồ uống</p>
          </div>
        </div>
        <div className='w-[25%] h-[200px] mr-4 bg-contain bg-no-repeat' style={{ backgroundImage: `url(${imgbg7})`, position: 'relative', borderRadius: '10px' }}>
          <div className='text-white  bg-blue-600 m-1' style={{ position: 'absolute', bottom: '50px', left: '20px', borderRadius: '20px' }}>
            <p className='m-1 mr-2 ml-2' >Blog Old</p>
          </div>
          <div className='text-white font-bold  ' style={{ position: 'absolute', bottom: '8px', left: '20px', borderRadius: '10px' }}>
            <p>TOP 15+ phần mềm quản lý nhà nghỉ tăng doanh thu hiệu quả</p>
          </div>
        </div>
        <div className='w-[25%] h-[200px] mr-4 bg-contain bg-no-repeat' style={{ backgroundImage: `url(${imgbg4})`, position: 'relative', borderRadius: '10px' }}>
          <div className='text-white  bg-blue-600 m-1' style={{ position: 'absolute', bottom: '50px', left: '20px', borderRadius: '20px' }}>
            <p className='m-1 mr-2 ml-2' >Blog Old</p>
          </div>
          <div className='text-white font-bold  ' style={{ position: 'absolute', bottom: '8px', left: '20px', borderRadius: '10px' }}>
            <p>TOP 15+ phần mềm quản lý nhà nghỉ tăng doanh thu hiệu quả</p>
          </div>
        </div>
        <div className='w-[25%] h-[200px] mr-4 bg-contain bg-no-repeat' style={{ backgroundImage: `url(${imgbg7})`, position: 'relative', borderRadius: '10px' }}>
          <div className='text-white  bg-blue-600 m-1' style={{ position: 'absolute', bottom: '50px', left: '20px', borderRadius: '20px' }}>
            <p className='m-1 mr-2 ml-2' >Blog Old</p>
          </div>
          <div className='text-white font-bold  ' style={{ position: 'absolute', bottom: '8px', left: '20px', borderRadius: '10px' }}>
            <p>TOP 15+ phần mềm quản lý nhà nghỉ tăng doanh thu hiệu quả</p>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Terminology;
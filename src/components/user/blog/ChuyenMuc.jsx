import React from 'react';
import BangTin from './BangTin';
import TuVan from './TuVan';

const News = () => {};
const ChuyenMuc = () => {
  return (
    <div className="flex w-full mt-[60px] bg-blue-50 justify-center">
     <div className="  w-[80%] mt-5 mb-5 flex flex-row">
          <div className=" w-[60%] flex flex-col ">
            <div className=" w-[90%] flex flex-col text-3xl font-bold m-5">
              Chuyên Mục
            </div>
            <div className="flex flex-row ">
                <BangTin/>
            </div>
           
        </div>
        <div className="w-[35%] flex flex-col text-2xl font-bold shadow-2xl shadow-black-500 rounded-xl bg-white ml-20">
            <TuVan/>
          </div>
        </div>
        </div>

 
  );
}

export default ChuyenMuc;

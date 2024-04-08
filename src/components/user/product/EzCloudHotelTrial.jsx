import React from 'react'
import { FaHome } from 'react-icons/fa'
import { FaAngleRight } from 'react-icons/fa'


const EzCloudHotelTrial = () => {
  return (
    <div className='w-full h-auto flex flex-col'>
      {/* Phần 1 */}
      <div className='w-full h-auto flex justify-center my-3 py-20 bg-[#DEEDFA] pl-1'>
        <div className='w-[80%] h-auto flex flex-row'>
          <div className='w-[42%] flex flex-col'>
            <div className='w-[55%] flex flex-row h-auto items-center gap-3'>
              <FaHome size={16} className='text-blue-500 ' />
              <FaAngleRight size={14} className='mt-1 text-sm' />
              <p className='text-blue-500 text-sm'> Sản phẩm </p>
              <FaAngleRight size={14} className='mt-1 text-sm' />
              <p className='text-sm font-bold'> ezCloudHotel </p>
            </div>
            <p className='w-full text-4xl font-bold text-[#114A9F] py-3 leading-[1.5]'>
              ezCloudhotel - Phần mềm quản lý khách sạn vừa và nhỏ hiệu quả
            </p>
            <p className='w-[80%] text-lg text-justify py-2 leading-[1.3]'>
              Giải pháp quản trị và vận hành khách sạn vừa và nhỏ hiệu quả, tiết kiệm chi phí được tích hợp trên một thiết bị
            </p>
            <button className="w-[40%] bg-blue-600 text-white font-bold py-3 px-5 rounded-full my-2">
              Đăng ký dùng thử
            </button>
          </div>
          <div className='w-[58%]'>
            <video className="w-full object-cover" controls>
              <source src="https://rr5---sn-npoe7ndl.googlevideo.com/videoplayback?expire=1702626929&ei=EbJ7Ze_MLMW2zN0PiIKboAc&ip=191.96.67.215&id=o-AF7gso4dAGZ0qvcEhX1zjVUOHvrM7ZmvMgFPR-KyTPMp&itag=18&source=youtube&requiressl=yes&xpc=EgVo2aDSNQ%3D%3D&spc=UWF9f4b2NGzNOIVuFV99amud5GG1fq4&vprv=1&svpuc=1&mime=video%2Fmp4&gir=yes&clen=5796404&ratebypass=yes&dur=142.013&lmt=1701508716372137&fexp=24007246&c=ANDROID&txp=5538434&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cxpc%2Cspc%2Cvprv%2Csvpuc%2Cmime%2Cgir%2Cclen%2Cratebypass%2Cdur%2Clmt&sig=AJfQdSswRgIhAJyYwsjCR0EAIJ_ytlptGeenFlWIkOmicXGun3wsUk1XAiEA5lfFBhLwV7Kamx5yklrBourswplO3cNCWxBBsC3J1Ek%3D&title=ezCloudhotel%20-%20Ph%E1%BA%A7n%20m%E1%BB%81m%20qu%E1%BA%A3n%20l%C3%BD%20kh%C3%A1ch%20s%E1%BA%A1n%20v%E1%BB%ABa%20v%C3%A0%20nh%E1%BB%8F&redirect_counter=1&cm2rm=sn-q4fesy76&req_id=7d23c911e286a3ee&cms_redirect=yes&cmsv=e&mh=_x&mip=27.72.144.245&mm=34&mn=sn-npoe7ndl&ms=ltu&mt=1702605174&mv=m&mvi=5&pl=24&lsparams=mh,mip,mm,mn,ms,mv,mvi,pl&lsig=AAO5W4owRgIhANuDg8N83BIKwAA9x3rcFuHU0pXZL455Cwsp2oT_adXPAiEAnWT2gWYAJhiZJ8xhG-putjWWDYiUhEcawcVhsh6ZZbk%3D"
                type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>
      {/* Phần 2 */}
      <div className='w-full h-auto flex flex-row justify-center gap-10 py-5'>
        <div className='w-[18%] flex flex-col items-center'>
          <p className='text-[#114A9F] text-xl'>3000+</p>
          <p className='text-[#114A9F] text-xl'>Khách hàng</p>
          <img className='w-[100px] h-[100px] p-3' src="https://ezcloud.vn/wp-content/uploads/2023/06/customer-feedback.png" alt="khachhang" />
        </div>
        <div className='w-[18%] flex flex-col items-center'>
          <p className='text-[#114A9F] text-xl'>Tiết kiệm</p>
          <p className='text-[#114A9F] text-xl'>50% chi phí</p>
          <img className='w-[100px] h-[100px] p-3' src="https://ezcloud.vn/wp-content/uploads/2023/06/save-time.png" alt="thoigian" />
        </div>
        <div className='w-[18%] flex flex-col items-center'>
          <p className='text-[#114A9F] text-xl'>Kết nối</p>
          <p className='text-[#114A9F] text-xl'>200+ kênh OTAs</p>
          <img className='w-[100px] h-[100px] p-3' src="https://ezcloud.vn/wp-content/uploads/2023/06/global-network.png" alt="ketnoi" />
        </div>
        <div className='w-[18%] flex flex-col items-center'>
          <p className='text-[#114A9F] text-xl'>Kết nối</p>
          <p className='text-[#114A9F] text-xl'>đa thiết bị ngoại vi</p>
          <img className='w-[100px] h-[100px] p-3' src="https://ezcloud.vn/wp-content/uploads/2023/06/technology-connect.png" alt="congnghe" />
        </div>
      </div>
    </div>


  )
}

export default EzCloudHotelTrial
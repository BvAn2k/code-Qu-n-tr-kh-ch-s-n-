import React from "react";
// import { FaFlag } from "react-icons/fa";
// import { GiUnitedStates } from "react-icons/gi";
import { FaFlag } from 'react-icons/fa';
import { AiOutlineFlag } from 'react-icons/ai';
import iconUsa from '../../assets/ic_usa.png';
import iconVn from '../../assets/ic_vietnam.png';
import { useNavigate } from "react-router-dom";
const RegistHeader = () => {
  const navigate = useNavigate();
  function gotoLogin(){
    navigate("/login");
  }
  function gotoRegistTrial(){
    navigate("/regist-trial");
  }
  return (
    <div className="flex flex-col">
      <div className="flex flex-row font-bold">
        <img src={iconUsa} className="w-[25px] h-[25px]" alt="icon-usa"/> {/* American flag */}
        <p>English</p>
        <img src={iconVn} className="w-[25px] h-[25px]" alt="icon-vn" /> {/* Vietnamese flag */}
        <p>Tiếng Việt</p>
      </div>

      <div className="flex flex-row">
        <p onClick={()=>gotoLogin()} className="font-bold">Đăng nhập</p>
        <div onClick={()=>gotoRegistTrial()} className="ml-4 bg-blue-600 px-2 py-1 font-bold rounded-2xl text-white flex justify-center items-center">
            <p className="text-center">Dùng thử miễn phí</p>
        </div>
      </div>
    </div>
  );
};

export default RegistHeader;

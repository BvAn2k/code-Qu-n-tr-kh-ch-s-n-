import React, { useState } from "react";
import { FaUser } from "react-icons/fa";
import { FaHome } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import { FiKey } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
const SiderBar = (props) => {
  const navigate = useNavigate();
  const tab = props.menu;
  const styleMenu1 = tab === "tab1" ? "bg-[#E9E9E9]" : "bg-[#FFFFFF]";
  const styleMenu2 = tab === "tab2" ? "bg-[#E9E9E9]" : "bg-[#FFFFFF]";
  const styleMenu3 = tab === "tab3" ? "bg-[#E9E9E9]" : "bg-[#FFFFFF]";
  const styleMenu4 = tab === "tab4" ? "bg-[#E9E9E9]" : "bg-[#FFFFFF]";

  // const width_expanded = "w-full";
  // const width_collapsed = "w-[50px]";
  // const onMouseLeave = props.onMouseLeave;
  // const onMouseEnter = props.onMouseEnter;

  const [hoveredVariable, setHoveredVariable] = useState("w-full");

  const [visible, setVisible] = useState(false);

  const handleHover = (variable) => {
    
    setVisible(!visible);

    if(visible === false){
      props.onMouseEnter();
    }else {
      props.onMouseLeave();
    }
  };

  function gotoMyAccount() {
    navigate("/id/myaccount");
  }
  function gotoHome() {
    navigate("/id");
  }
  function gotoSecurity() {
    navigate("/id/security");
  }
  function gotoPassword() {
    navigate("/id/changepassword");
  }
  return (
    <div
      onMouseEnter={() => handleHover("w-full")}
      onMouseLeave={() => handleHover("w-full")}
      className={`${hoveredVariable} h-auto flex flex-col  hover:${hoveredVariable}`}
    >
      <div
        onClick={() => gotoHome()}
        className={` flex items-center cursor-pointer ${hoveredVariable} h-auto flex flex-row mt-5 ${styleMenu1}`}
      >
        <div className="ml-4 w-[30px] flex items-center h-[50px] ">
          <FaHome className="w-[20px] h-[20px]" />
        </div>
        {visible === true ? <div>Home</div> : <p></p>}
      </div>

      <div
        onClick={() => gotoMyAccount()}
        className={`flex items-center cursor-pointer ${hoveredVariable} h-auto flex flex-row ${styleMenu2}`}
      >
        <div className="ml-4 w-[30px] flex items-center h-[50px] ">
          <FaUser className="w-[20px] h-[20px]" />
        </div>
        {visible === true ? <div>Tài Khoản của tôi</div> : <p></p>}

      </div>

      <div
        onClick={() => gotoSecurity()}
        className={` flex items-center cursor-pointer ${hoveredVariable} h-auto flex flex-row ${styleMenu3}`}
      >
        <div className="ml-4 w-[30px] flex items-center h-[50px] ">
          <FaLock className="w-[20px] h-[20px]" />
        </div>
        {visible === true ? <div>Bảo mật 2 lớp</div> : <p></p>}

      </div>

      <div
        onClick={() => gotoPassword()}
        className={`flex items-center cursor-pointer ${hoveredVariable} h-auto flex flex-row ${styleMenu4}`}
      >
        <div className="ml-4 w-[30px] flex items-center h-[50px] ">
          <FiKey className="w-[20px] h-[20px]" />
        </div>
        {visible === true ? <div>Đổi mật khẩu</div> : <p></p>}
      </div>
    </div>
  );
};

export default SiderBar;

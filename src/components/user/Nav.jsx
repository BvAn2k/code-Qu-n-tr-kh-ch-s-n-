import React, { useState } from 'react';

const Nav = ({isMenuOpen,toggleMenu,toggleMenu2, handleMouseEnter }) => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [popupContent, setPopupContent] = useState(null);
  
//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen);
//   };
  
//   const handleMouseEnter = (content) => {
//     setPopupContent(content);
//   };
  
//   const handleMouseLeave = () => {
//     setPopupContent(null);
//   };
  
  return (
    <nav className="ml-5">
      <ul className="flex items-center justify-between px-4 py-2">
        <li
          className={`relative ${isMenuOpen ? 'hover:bg-gray-600' : ''}`}
        
        >
          <a href="/" className="text-black font-bold">Trang chủ</a>
         
        </li>
        <li
          className={`ml-5 relative ${isMenuOpen ? 'hover:bg-gray-600' : ''}`}
          onMouseEnter={toggleMenu}
          //onMouseLeave={toggleMenu}
        >
          <a href="/" className="text-black font-bold">Giải pháp</a>
         
        </li>
        <li
          className={`ml-5 relative ${isMenuOpen ? 'hover:bg-gray-600' : ''}`}
         
        >
          <a href="/" className="text-black font-bold">Bảng giá</a>
         
        </li>
        <li
          className={`ml-5 relative ${isMenuOpen ? 'hover:bg-gray-600' : ''}`}
        
        >
          <a href="/connection" className="text-black font-bold">Kết nối</a>
         
        </li>
        <li
          className={`ml-5 relative ${isMenuOpen ? 'hover:bg-gray-600' : ''}`}
         
        >
          <a href="/blogs" className="text-black font-bold">Blogs</a>
         
        </li>
        <li
          className={`ml-5 relative ${isMenuOpen ? 'hover:bg-gray-600' : ''}`}
          onMouseEnter={toggleMenu2}
         // onMouseLeave={toggleMenu2}
        >
          <a href="/" className="text-black font-bold">Công ty</a>
         
        </li>
        {/* Add more menu items here */}
      </ul>
    
    </nav>
  );
};

export default Nav;
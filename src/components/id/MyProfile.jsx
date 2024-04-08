import React from "react";

const MyProfile = () => {
  return (
    <div className="flex w-full h-full p-4 justify-center items-center bg-gray-200 ">
      <div className=" rounded-xl w-[50%] h-auto mb-5 shadow-lg bg-white ">
        <div>
          <div className="ml-10 mt-2">
            <p className="font-bold text-3xl ">Thông tin cá nhân</p>
          </div>
          <div className="flex flex-row">
            <div className="w-[30%] ml-10 mt-5">
              <img
                className="w-[150px] h-[150px]"
                src="https://cdn.ezfolio.net/Q5Fp"
                alt=""
              />
            </div>
            <div className="w-[70%]">
              <div className="mt-5">
                <p>Cá nhân hóa thông tin cá nhân bạn với ảnh đại diện.</p>
              </div>
              <div>
                <p>
                  Ảnh đại diện của bạn sẽ xuất hiện trong tất cả dịch vụ của
                  ezCloud.
                </p>
              </div>
              <div>
                <button
                  className="text-blue-800 border border-black font-bold py-2 px-4 rounded-lg mt-5"
                  type="submit"
                >
                  Thay ảnh đại diện
                </button>
              </div>
            </div>
          </div>
          <div className="flex flex-row">
            <div className="w-[50%] ml-10 mt-10">
              <p>Tài khoản </p>
              <input
                className="w-full h-[35px] appearance-none rounded border border-black text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="example-input"
                type="text"
              />
            </div>
            <div className="w-[50%] ml-10 mt-10 mr-10">
              <p>Email</p>
              <input
                className="w-full h-[35px] appearance-none rounded border border-black text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="example-input"
                type="text"
              />
            </div>
          </div>
          <div className="flex flex-row">
            <div className="w-[50%] ml-10 mt-2">
              <p>Họ và tên </p>
              <input
                className="w-full h-[35px]  appearance-none rounded border border-black text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="example-input"
                type="text"
              />
            </div>
            <div className="w-[50%] ml-10 mt-2 mr-10">
              <p>Số điện thoại</p>
              <input
                className=" w-full h-[35px] appearance-none rounded border border-black text-gray-700 leading-tight focus:outline-none focus:shadow-outline "
                id="example-input"
                type="text"
                placeholder="Số điện thoại"
              />
            </div>
          </div>
          <div className="flex flex-row">
            <div className="w-[50%] ml-10 mt-2">
              <p>Website </p>
              <input
                className="w-full h-[35px] appearance-none rounded border border-black text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="example-input"
                type="text"
              />
            </div>
            <div className="w-[50%] ml-10 mt-2 mr-10">
              <p>Thông tin cá nhân</p>
              <input
                className="w-full h-[35px] appearance-none rounded border border-black text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="example-input"
                type="text"
              />
            </div>
          </div>
          <div className="flex flex-row">
            <div className="w-[50%] ml-10 mt-2">
              <p>Quốc gia </p>
              <input
                className="w-full h-[35px] appearance-none rounded border border-black text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="example-input"
                type="text"
                placeholder="Việt Nam "
              />
            </div>
            <div className="w-[50%] ml-10 mt-2 mr-10">
              <p>Mã bưu điện</p>
              <input
                className="w-full h-[35px] appearance-none rounded border border-black text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="example-input"
                type="text"
              />
            </div>
          </div>
          <div className="flex flex-row">
            <div className="w-[50%] ml-10 mt-2">
              <p>Thành phố</p>
              <input
                className="w-full h-[35px] appearance-none rounded border border-black text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="example-input"
                type="text"
              />
            </div>
            <div className="w-[50%] ml-10 mt-2 mr-10">
              <p>Quận/huyện</p>
              <input
                className="w-full h-[35px] appearance-none rounded border border-black text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="example-input"
                type="text"
              />
            </div>
          </div>
          <div className="mx-10 mt-2 ">
            <p>Địa chỉ</p>
            <input
              className="w-full h-[35px] appearance-none rounded border border-black text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="example-input"
              type="text"
            />
          </div>
          <div>
            <button
              className="text-white bg-blue-950 mr-12 border border-black font-bold py-2 px-4 rounded-md mt-2 mb-2 float-right"
              type="submit"
            >
              Lưu trữ
            </button>
            <button
              className="text-blue-800 border mr-5 border-black font-bold py-2 px-4 rounded-md mt-2 mb-2 float-right"
              type="submit"
            >
              Quay lại
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
